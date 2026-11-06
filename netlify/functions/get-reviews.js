exports.handler = async () => {
    const { SUPABASE_URL, SUPABASE_SERVICE_ROLE_KEY } = process.env;
    if (!SUPABASE_URL || !SUPABASE_SERVICE_ROLE_KEY) {
        return { statusCode: 200, headers: { 'Content-Type': 'application/json' }, body: '[]' };
    }
    const headers = { apikey: SUPABASE_SERVICE_ROLE_KEY };
    if (SUPABASE_SERVICE_ROLE_KEY.startsWith('eyJ')) headers.Authorization = `Bearer ${SUPABASE_SERVICE_ROLE_KEY}`; // old-style keys only
    try {
        const r = await fetch(
            `${SUPABASE_URL}/rest/v1/reviews?select=display_name,rating,review_text,created_at&status=eq.approved&order=created_at.desc&limit=200`,
            { headers }
        );
        if (!r.ok) throw new Error('read failed');
        const rows = await r.json();
        const list = rows.map(x => ({ name: x.display_name, rating: x.rating, text: x.review_text, date: x.created_at }));
        return { statusCode: 200, headers: { 'Content-Type': 'application/json', 'Cache-Control': 'public, max-age=60' }, body: JSON.stringify(list) };
    } catch {
        return { statusCode: 200, headers: { 'Content-Type': 'application/json' }, body: '[]' };
    }
};
