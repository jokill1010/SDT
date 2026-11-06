const crypto = require('crypto');

const reply = (statusCode, body) => ({
    statusCode,
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(body)
});

exports.handler = async (event) => {
    if (event.httpMethod !== 'POST') return reply(405, { error: 'Method not allowed.' });
    if ((event.body || '').length > 5000) return reply(413, { error: 'Request too large.' });

    let data;
    try { data = JSON.parse(event.body) } catch { return reply(400, { error: 'Invalid request.' }) }

    // Hidden "website" field: real people leave it empty, bots fill it in.
    if (data.website) return reply(200, { ok: true });

    const name = String(data.name ?? '').trim();
    const text = String(data.text ?? '').trim();
    const rating = data.rating;
    const token = String(data.token ?? '');

    if (name.length < 2 || name.length > 60) return reply(400, { error: 'Please enter your name (2 to 60 characters).' });
    if (!Number.isInteger(rating) || rating < 1 || rating > 5) return reply(400, { error: 'Please choose a star rating.' });
    if (text.length < 10 || text.length > 1500) return reply(400, { error: 'Please write your review (10 to 1,500 characters).' });
    if (!token) return reply(400, { error: 'Please complete the security check.' });

    const { SUPABASE_URL, SUPABASE_SERVICE_ROLE_KEY, TURNSTILE_SECRET_KEY, IP_SALT } = process.env;
    if (!SUPABASE_URL || !SUPABASE_SERVICE_ROLE_KEY || !TURNSTILE_SECRET_KEY) {
        return reply(500, { error: 'Reviews are not set up yet.' });
    }

    const ip = String(event.headers['x-nf-client-connection-ip'] || event.headers['x-forwarded-for'] || '').split(',')[0].trim();

    // 1. Verify the Turnstile token with Cloudflare
    let human = false;
    try {
        const form = new URLSearchParams({ secret: TURNSTILE_SECRET_KEY, response: token });
        if (ip) form.append('remoteip', ip);
        const r = await fetch('https://challenges.cloudflare.com/turnstile/v0/siteverify', { method: 'POST', body: form });
        human = (await r.json()).success === true;
    } catch { human = false }
    if (!human) return reply(400, { error: 'Security check failed. Please try again.' });

    // 2. Rate limit: at most 3 reviews per hour from the same connection (stored only as a salted hash)
    const ipHash = crypto.createHash('sha256').update(ip + (IP_SALT || '')).digest('hex');
    const headers = { apikey: SUPABASE_SERVICE_ROLE_KEY, 'Content-Type': 'application/json' };
    if (SUPABASE_SERVICE_ROLE_KEY.startsWith('eyJ')) headers.Authorization = `Bearer ${SUPABASE_SERVICE_ROLE_KEY}`; // old-style keys only
    try {
        const since = encodeURIComponent(new Date(Date.now() - 3600 * 1000).toISOString());
        const check = await fetch(`${SUPABASE_URL}/rest/v1/reviews?select=id&ip_hash=eq.${ipHash}&created_at=gte.${since}`, { headers });
        if (!check.ok) throw new Error('rate check failed: ' + check.status + ' ' + await check.text());
        if ((await check.json()).length >= 3) return reply(429, { error: 'Too many reviews from your connection. Please try again later.' });

        // 3. Save as pending (not public until you approve it)
        const save = await fetch(`${SUPABASE_URL}/rest/v1/reviews`, {
            method: 'POST',
            headers: { ...headers, Prefer: 'return=minimal' },
            body: JSON.stringify({ display_name: name, rating, review_text: text, status: 'pending', ip_hash: ipHash })
        });
        if (!save.ok) throw new Error('save failed: ' + save.status + ' ' + await save.text());
    } catch (err) {
        console.error('submit-review error:', err.message); //visible only in Netlify's function logs
        return reply(500, { error: 'Could not save your review. Please try again later.' });
    }
    return reply(200, { ok: true });
};
