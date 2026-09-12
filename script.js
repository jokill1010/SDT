const WA = '2347037402240';
const waOpen = (text = 'Hello Sunny Dynamic Tech, I would like to make an enquiry.') => window.open(`https://wa.me/${WA}?text=${encodeURIComponent(text)}`, '_blank', 'noopener');

// Mobile navigation + active section
const nav = document.getElementById('navMenu'), menuBtn = document.getElementById('menuBtn');
menuBtn.addEventListener('click', () => { const open = nav.classList.toggle('open'); menuBtn.setAttribute('aria-expanded', open); menuBtn.innerHTML = open ? '<i class="fa-solid fa-xmark"></i>' : '<i class="fa-solid fa-bars"></i>' });
document.querySelectorAll('#navMenu a').forEach(a => a.addEventListener('click', () => { nav.classList.remove('open'); menuBtn.setAttribute('aria-expanded', 'false'); menuBtn.innerHTML = '<i class="fa-solid fa-bars"></i>' }));
const navbar = document.getElementById('navbar'), backTop = document.getElementById('backTop');
window.addEventListener('scroll', () => { navbar.classList.toggle('scrolled', scrollY > 40); backTop.classList.toggle('show', scrollY > 650) });
backTop.onclick = () => scrollTo({ top: 0, behavior: 'smooth' });

// Reveal animations
const observer = new IntersectionObserver(entries => entries.forEach(e => { if (e.isIntersecting) e.target.classList.add('show') }), { threshold: .12 });
document.querySelectorAll('.reveal').forEach(el => observer.observe(el));

// Hero video rotation
const videos = [...document.querySelectorAll('.hero-video')]; let videoIndex = 0;
setInterval(() => { if (videos.length < 2) return; videos[videoIndex].classList.remove('active'); videoIndex = (videoIndex + 1) % videos.length; videos[videoIndex].classList.add('active') }, 6500);

// Product catalogue
const products = [
    { img: 'img/SOLAR.jpeg', name: 'Generic 80W Monocrystalline Solar Panel — 2 Units', desc: 'High-efficiency panel set for small solar systems.', price: '₦57,000', cat: 'solar' },
    { img: 'img/solar-1.webp', name: 'Jinko 450W Monocrystalline Solar Panel', desc: 'High-efficiency solar panel for residential and commercial systems.', price: '₦80,720', cat: 'solar' },
    { img: 'img/solar-panel.avif', name: '300W Solar Panel — 2 Units', desc: 'Suitable for smaller solar and backup setups.', price: '₦116,000', cat: 'solar' },
    { img: 'img/itel-inverter.webp', name: 'itel Energy 500W Inverter + 1kWh LiFePO4', desc: 'Compact all-in-one backup power system.', price: '₦370,000', cat: 'inverter' },
    { img: 'img/inverter-deye.png', name: 'DEYE 20kW / 48V Hybrid Inverter', desc: 'Hybrid inverter for larger installations.', price: '₦665,000', cat: 'inverter' },
    { img: 'img/felicity-inverter.jpeg', name: 'Felicity Solar Hybrid Inverter 75000VA / 6000W', desc: 'Hybrid inverter for higher-demand setups.', price: '₦890,000', cat: 'inverter' },
    { img: 'img/tubular-batt.jpg', name: 'Euronet Solar Tubular Battery 12V 200Ah', desc: 'Deep-cycle battery for solar applications.', price: '₦240,000', cat: 'battery' },
    { img: 'img/batt-1.jpeg', name: 'Solar Volt Tubular Battery 220Ah', desc: 'Long-lasting tubular battery for backup systems.', price: '₦290,000', cat: 'battery' },
    { img: 'img/cleon.jpeg', name: 'Cleon Solar Tubular Battery 12V 240Ah', desc: 'High-capacity tubular solar battery.', price: '₦376,250', cat: 'battery' },
    { img: 'img/itel-lith-batt.jpeg', name: 'Itel 16kWh 48V Lithium Battery', desc: 'Lithium storage for larger energy systems.', price: '₦2,369,999', cat: 'battery' },
    { img: 'img/c-lith-batt.webp', name: 'CWORTH Energy 15kWh 51.2V Lithium Battery', desc: 'High-capacity lithium storage solution.', price: '₦1,900,000', cat: 'battery' },
    { img: 'img/pylon.webp', name: 'Pylontech FIDUS PLUS 16kWh Lithium Battery', desc: 'Large-capacity lithium energy storage.', price: '₦2,688,000', cat: 'battery' },
    { img: 'img/camera-1.jpg', name: 'Hikvision 5MP Outdoor Smart Hybrid Light Camera', desc: 'Outdoor security camera solution.', price: '₦29,000', cat: 'cctv' },
    { img: 'img/tvc-solar-cam.webp', name: 'T30 Triple Lens Solar Powered CCTV Camera', desc: 'Solar-powered intelligent PTZ camera.', price: '₦98,000', cat: 'cctv' },
    { img: 'img/hon-camera.webp', name: 'Honeywell 4MP Outdoor IP Security Camera', desc: 'Outdoor IP surveillance camera.', price: '₦85,000', cat: 'cctv' },
    { img: 'img/4-chan-cam.webp', name: 'Hikvision 1080P 4-Channel DVR Set', desc: '4-camera DVR security set for homes and shops.', price: '₦150,000', cat: 'cctv' },
    { img: 'img/street-light.webp', name: 'LED 400W Solar Street Light', desc: 'Solar street light with motion sensor.', price: '₦35,500', cat: 'solar' },
    { img: 'img/wakatek-sl.jpeg', name: 'WAKATEK 100W Solar Street Light', desc: 'Waterproof street light with motion sensor.', price: '₦219,000', cat: 'solar' },
    { img: 'img/solar-charge-contrller.jpeg', name: 'Felicity MPPT Solar Charge Controller', desc: 'MPPT charge controller for solar systems.', price: '₦290,000', cat: 'accessories' },
    { img: 'img/charge-contrller-2.jpg', name: 'Techfine 80A MPPT Charge Controller', desc: '12/24/36/48V charge controller.', price: '₦278,700', cat: 'accessories' },
    { img: 'img/charge-contrller-3.webp', name: 'Solar Charge Controller 12V/24V PWM/MPPT', desc: 'Budget-friendly charge controller.', price: '₦7,000', cat: 'accessories' },
    { img: 'img/connector-1.webp', name: 'Solar Cable + MC4 Connector', desc: 'Solar cable and connector for PV connections.', price: '₦10,000', cat: 'accessories' },
    { img: 'img/connector-mf.jpg', name: 'MC4 Connector Pairs — 50 Pairs', desc: 'Male and female connectors for solar connections.', price: '₦25,300', cat: 'accessories' },
    { img: 'img/cable.jpeg', name: 'Solar Copper Wire 4mm', desc: 'Copper cable for solar installation work.', price: '₦2,500', cat: 'accessories' },
    { img: 'img/pv-combiner.jpg', name: 'MCB PV Combiner Box — 12 Ways', desc: 'Protection and distribution enclosure.', price: '₦15,000', cat: 'accessories' },
    { img: 'img/pv-combiner-2.jpeg', name: 'Solar PV Combiner Box with Lightning Protection', desc: 'PV combiner and protection solution.', price: '₦58,500', cat: 'accessories' },
    { img: 'img/fan-sol.jpg', name: '16 Inches Solar Fan', desc: 'Solar-friendly fan for homes and shops.', price: '₦85,000', cat: 'solar' },
    { img: 'img/so-iron.jpg', name: 'Sonik Inverter-Friendly Pressing Iron 250W', desc: 'Lower-power appliance for backup systems.', price: '₦18,000', cat: 'accessories' },
    { img: 'img/fir-fri-inv.jpg', name: 'Firman 200TM Inverter Fridge', desc: 'Energy-conscious refrigerator option.', price: '₦460,000', cat: 'accessories' },
    { img: 'img/lg-inv-fri.jpeg', name: 'LG 260L Inverter Refrigerator', desc: '260L non-frost inverter refrigerator.', price: '₦572,000', cat: 'accessories' }
];
let productFilter = 'all', productLimit = 8;
const grid = document.getElementById('productGrid'), search = document.getElementById('productSearch'), more = document.getElementById('showMoreProductsBtn'), empty = document.getElementById('emptyProducts');
function productMatches(p) { const q = search.value.trim().toLowerCase(); return (productFilter === 'all' || p.cat === productFilter) && (!q || `${p.name} ${p.desc}`.toLowerCase().includes(q)) }
function renderProducts() { const list = products.filter(productMatches), visible = list.slice(0, productLimit); grid.innerHTML = visible.map((p, i) => `<article class="product-card reveal show"><div class="product-img"><span class="product-tag">${p.cat}</span><img src="${p.img}" alt="${p.name}" loading="lazy"></div><div class="product-info"><h3>${p.name}</h3><p>${p.desc}</p><div class="product-price">${p.price}</div><button class="ask-btn" data-product="${encodeURIComponent(p.name)}"><i class="fa-brands fa-whatsapp"></i> Ask about this product</button></div></article>`).join(''); empty.hidden = list.length > 0; more.style.display = list.length > productLimit ? 'block' : 'none'; grid.querySelectorAll('.ask-btn').forEach(btn => btn.onclick = () => waOpen(`Hello Sunny Dynamic Tech, I'm interested in this product: ${decodeURIComponent(btn.dataset.product)}. Please confirm current price, availability and delivery/installation options.`)); }
search.addEventListener('input', () => { productLimit = 8; renderProducts() }); document.querySelectorAll('.filter').forEach(btn => btn.addEventListener('click', () => { document.querySelectorAll('.filter').forEach(b => b.classList.remove('active')); btn.classList.add('active'); productFilter = btn.dataset.filter; productLimit = 8; renderProducts() })); more.onclick = () => { productLimit += 8; renderProducts() }; renderProducts();

// Solar estimator
const appliances = [['fridge', 'Refrigerator', 180, 'fa-snowflake'], ['tv', 'TV', 100, 'fa-tv'], ['fan', 'Fan', 75, 'fa-fan'], ['lights', 'Lights', 40, 'fa-lightbulb'], ['decoder', 'Decoder', 25, 'fa-satellite-dish'], ['laptop', 'Laptop', 65, 'fa-laptop'], ['router', 'Wi-Fi Router', 15, 'fa-wifi'], ['iron', 'Pressing Iron', 1000, 'fa-shirt'], ['kettle', 'Electric Kettle', 1500, 'fa-mug-hot'], ['pump', 'Water Pump', 750, 'fa-faucet'], ['washing', 'Washing Machine', 500, 'fa-soap'], ['ac', 'Air Conditioner', 1200, 'fa-snowflake']];
const applianceGrid = document.getElementById('applianceGrid'); let loads = {};
applianceGrid.innerHTML = appliances.map(a => `<label class="appliance" data-id="${a[0]}"><div class="appliance-top"><i class="fa-solid ${a[3]}"></i><input type="number" min="1" max="10" value="1" aria-label="Quantity of ${a[1]}"></div><b>${a[1]}</b><small>Approx. ${a[2]}W each</small></label>`).join('');
function updateCalc() { let total = 0, count = 0; applianceGrid.querySelectorAll('.appliance').forEach(el => { const id = el.dataset.id, qty = Number(el.querySelector('input').value) || 1; if (loads[id]) { total += loads[id] * qty; count += qty; el.classList.add('selected') } else el.classList.remove('selected') }); document.getElementById('calcStatus').textContent = `${count} appliance${count === 1 ? '' : 's'}`; document.getElementById('loadResult').textContent = `${total.toLocaleString()} W`; const inv = total ? `${Math.ceil(total * 1.35 / 500) * 0.5}kVA+` : '—'; const batt = total ? `${Math.max(1, Math.ceil(total * 3 / 1000))}kWh+` : '—'; const panels = total ? `${Math.max(1, Math.ceil(total / 450))} × 450W+` : '—'; document.getElementById('inverterResult').textContent = inv; document.getElementById('batteryResult').textContent = batt; document.getElementById('panelResult').textContent = panels; return { total, count, inv, batt, panels } }
applianceGrid.addEventListener('click', e => { const card = e.target.closest('.appliance'); if (!card) return; if (e.target.tagName === 'INPUT') { loads[card.dataset.id] = Number(card.querySelector('input').value) || 1 } else { if (loads[card.dataset.id]) delete loads[card.dataset.id]; else loads[card.dataset.id] = 1 } updateCalc() });
applianceGrid.addEventListener('input', e => { if (e.target.tagName === 'INPUT') { const card = e.target.closest('.appliance'); if (card.classList.contains('selected')) loads[card.dataset.id] = Number(e.target.value) || 1; updateCalc() } });
document.getElementById('calcQuoteBtn').onclick = () => { const r = updateCalc(); document.getElementById('qService').value = 'Solar / Inverter'; document.getElementById('qMessage').value = `Solar planning estimate: approx. ${r.total}W load. Suggested inverter: ${r.inv}; battery: ${r.batt}; panels: ${r.panels}. Please assess and provide an exact quotation.`; document.getElementById('quote').scrollIntoView({ behavior: 'smooth' }); };

// Gallery
const media = [
    { type: 'image', src: 'gallery/contact.jpg', thumb: 'gallery/contact.jpg', label: 'Field work' },
    { type: 'video', src: 'gallery/video1.mp4', thumb: 'gallery/thumb1.jpg', label: 'Project video' },
    { type: 'image', src: 'gallery/img2.jpg', thumb: 'gallery/img2.jpg', label: 'Installation' },
    { type: 'image', src: 'gallery/img3.jpg', thumb: 'gallery/img3.jpg', label: 'Installation' },
    { type: 'image', src: 'gallery/img4.jpg', thumb: 'gallery/img4.jpg', label: 'Installation' },
    { type: 'video', src: 'gallery/video2.mp4', thumb: 'gallery/thumb2.jpg', label: 'Project video' },
    { type: 'image', src: 'gallery/img5.jpg', thumb: 'gallery/img5.jpg', label: 'Installation' },
    { type: 'image', src: 'gallery/img6.jpg', thumb: 'gallery/img6.jpg', label: 'Installation' },
    { type: 'image', src: 'gallery/img7.jpg', thumb: 'gallery/img7.jpg', label: 'Installation' },
    { type: 'image', src: 'gallery/img8.jpg', thumb: 'gallery/img8.jpg', label: 'Installation' },
    { type: 'image', src: 'gallery/img9.jpg', thumb: 'gallery/img9.jpg', label: 'Installation' },
    { type: 'image', src: 'gallery/img10.jpg', thumb: 'gallery/img10.jpg', label: 'Installation' },
    { type: 'image', src: 'gallery/img11.jpg', thumb: 'gallery/img11.jpg', label: 'Installation' },
    { type: 'image', src: 'gallery/img12.jpg', thumb: 'gallery/img12.jpg', label: 'Installation' }];
let mediaLimit = 8, currentMedia = 0; const gallery = document.getElementById('galleryGrid'), showMore = document.getElementById('showMoreBtn'), modal = document.getElementById('mediaModal'), modalContent = document.getElementById('modalContent');
function renderGallery() { gallery.innerHTML = media.slice(0, mediaLimit).map((m, i) => `<div class="gallery-item" data-i="${i}"><img src="${m.thumb}" alt="${m.label}" loading="lazy">${m.type === 'video' ? '<span class="play"><i class="fa-solid fa-play"></i></span>' : ''}<span class="gallery-overlay">${m.label} <i class="fa-solid fa-expand"></i></span></div>`).join(''); showMore.style.display = mediaLimit < media.length ? 'block' : 'none'; gallery.querySelectorAll('.gallery-item').forEach(el => el.onclick = () => openMedia(Number(el.dataset.i))) }
function openMedia(i) { currentMedia = i; const m = media[i]; modal.classList.add('open'); modal.setAttribute('aria-hidden', 'false'); modalContent.innerHTML = m.type === 'image' ? `<img src="${m.src}" alt="${m.label}">` : `<video src="${m.src}" controls autoplay playsinline></video>` } function closeMedia() { modal.classList.remove('open'); modal.setAttribute('aria-hidden', 'true'); modalContent.innerHTML = '' }
document.getElementById('modalClose').onclick = closeMedia; document.getElementById('prevMedia').onclick = () => openMedia((currentMedia - 1 + media.length) % media.length); document.getElementById('nextMedia').onclick = () => openMedia((currentMedia + 1) % media.length); modal.onclick = e => { if (e.target === modal) closeMedia() }; document.addEventListener('keydown', e => { if (!modal.classList.contains('open')) return; if (e.key === 'Escape') closeMedia(); if (e.key === 'ArrowLeft') openMedia((currentMedia - 1 + media.length) % media.length); if (e.key === 'ArrowRight') openMedia((currentMedia + 1) % media.length) }); showMore.onclick = () => { mediaLimit += 6; renderGallery() }; renderGallery();

// Quote form -> WhatsApp + optional email draft
const quoteForm = document.getElementById('quoteForm'); quoteForm.addEventListener('submit', e => { e.preventDefault(); const data = { name: qName.value.trim(), phone: qPhone.value.trim(), location: qLocation.value.trim(), service: qService.value, message: qMessage.value.trim() }; const text = `Hello Sunny Dynamic Tech!\n\nNEW PROJECT ENQUIRY\nName: ${data.name}\nPhone/WhatsApp: ${data.phone}\nLocation: ${data.location}\nService: ${data.service}\nProject: ${data.message}`; if (document.getElementById('qEmailCopy').checked) { const subject = encodeURIComponent(`Sunny Dynamic Tech enquiry — ${data.service}`); const body = encodeURIComponent(text); window.open(`mailto:sunnydynamic100@gmail.com?subject=${subject}&body=${body}`, '_blank') } waOpen(text); if (window.gtag) gtag('event', 'generate_lead', { event_category: 'quote', event_label: data.service }); });

// Track key conversion actions
['.floating-whatsapp', '.nav-cta', '.btn-gold'].forEach(sel => document.querySelectorAll(sel).forEach(el => el.addEventListener('click', () => window.gtag && gtag('event', 'cta_click', { event_label: el.textContent.trim().slice(0, 40) }))));
