const whatsappNumber = "234803833532"; // CHANGE THIS TO YOUR NUMBER

// Mobile menu
const menuBtn = document.getElementById('menu-btn');
const navMenu = document.getElementById('nav-menu');
menuBtn.addEventListener('click', () => {
    navMenu.style.display = navMenu.style.display === 'flex' ? 'none' : 'flex';
});

// Smooth scroll
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({ behavior: 'smooth' });
        if (window.innerWidth < 900) navMenu.style.display = 'none';
    });
});

// Main Quote Popup
const quoteBtn = document.getElementById('quoteBtn');
const popup = document.getElementById('popup');
const closeBtn = document.getElementById('closeBtn');
quoteBtn.onclick = () => popup.style.display = 'flex';
closeBtn.onclick = () => popup.style.display = 'none';

// Contact -> WhatsApp
document.getElementById('contactForm').addEventListener('submit', (e) => {
    e.preventDefault();
    const name = document.getElementById('name').value;
    const phone = document.getElementById('phone').value;
    const message = document.getElementById('message').value;
    const whatsappMsg = `Hello Sunny Dynamic Tech!%0AName: ${name}%0APhone: ${phone}%0ARequest: ${message}`;
    window.open(`https://wa.me/${whatsappNumber}?text=${whatsappMsg}`, '_blank');
});

// PRODUCTS
// PRODUCTS WITH SHOW MORE + SEARCH
const products = [
    { img: "img/SOLAR.jpeg", name: "Generic 80W Monocrystalline Solar Panel 2UNITS(160 watts)", desc: "High efficiency panel for homes and businesses. 25 year warranty.", price: "₦57,000" },
    { img: "img/itel-inverter.webp", name: "itel Energy 500W Inverter 1kWh LifePo4 Battery All-in-One Solar Power System", desc: "1000Wh LiFePO4 3-Year Warranty, 500W Power Station + Cycles Emergency Power Supply Home Backup Power.", price: "₦370,000" },
    { img: "img/tubular-batt.jpg", name: "Euronet Solar Tubular Battery Gold Series 12v 200AH", desc: "Deep cycle solar battery. Long life and maintenance free.", price: "₦240,000" },
    { img: "img/solar-1.webp", name: "Jinko 450W Monocrystalline Solar Panel - Waterproof", desc: "High Efficiency Solar Panel.", price: "₦80,720" },
    { img: "img/batt-1.jpeg", name: "Solar Volt Tubular Battery 220AH", desc: "Long lasting and low maintenance solar tubular battery.", price: "₦290,000" },
    { img: "img/camera-1.jpg", name: "Hikvision 5mp 3K Outdoor Smart Hybrid Light Audio Camera", desc: "Direct from AEDC. Installation included.", price: "₦29,000" },

    // ADD MORE PRODUCTS HERE
    { img: "img/inverter-deye.png", name: "DEYE 20kw/48v single phase hybrid inverter", desc: "One of the best known hybrid inverter brand.", price: "₦665,000" },
    { img: "img/itel-lith-batt.jpeg", name: "Itel 16kwh 48V Lithium Battery", desc: "Reliable battery brand suitable for large installation.", price: "₦2,369,999" },
    { img: "https://images.unsplash.com/photo-1509391366360-2e959784a276?q=80&w=400", name: "300W Solar Panel", desc: "Perfect for small setups and street lights.", price: "₦110,000" },
    { img: "img/solar-charge-contrller.jpeg", name: "Felicity MPPT Solar Charge Controller", desc: "Felicity MPPT Solar Charge Controller is one of the best charge controller.", price: "₦290,000" },
    { img: "img/solar-panel.avif", name: "2 UNITS of 300W Solar Panel 12V/24V/36v", desc: "300W Solar Panel, perfect for small setups.", price: "₦116,000" },
    { img: "img/felicity-hi.jpg", name: "Felicity Solar 12kVA & 8VA High Voltage and Hybrid Inverter", desc: "best brand hybrid inverter in nigeria.", price: "₦1,100,000" },
    { img: "img/street-light.webp", name: "Led 400W Solar Street Light With Remote Control", desc: "Solar Street Light Light With Motion Sensor", price: "₦35,500" },
    { img: "img/wakatek-sl.jpeg", name: "WAKATEK 100W Solar Street Light (12 lens)", desc: "12 lens solar street light with motion sensor and it's waterproof. 3-years warranty, 18000 lumens.", price: "₦219,000" },
    { img: "img/cleon.jpeg", name: "Cleon Solar Tubular Battery 12V 240AH", desc: "one of the most popular brands of solar batteries in Nigeria", price: "₦376,250" },
    { img: "img/pylon.webp", name: "Pylontech FIDUS PLUS 16kWh Lithium Battery", desc: "Pylontech is one of the world's renowed green company.", price: "₦2,688,000" },
    { img: "img/dli.jpeg", name: "DLI 150W LED Solar Powered Street Lamp", desc: "LED beads-120pcs for high brightness.", price: "₦25,300" },
    { img: "img/felicity-inverter.jpeg", name: "Felicity Solar Hybrid Inverter 75000VA/6000W", desc: "Perfect for high setup and usage.", price: "₦890,000" },
    { img: "img/connector-1.webp", name: "Solar Cable, MC4 connector", desc: "Solar cable for easy connection.", price: "₦10,000" },
    { img: "img/charge-contrller-2.jpg", name: "Techfine 80A 12/24/36/48V MPPT Solar Charge Controller", desc: "Budget Friendly Solar Charge-controller compatible with any inverter.", price: "₦278,700" },
    { img: "img/charge-contrller-3.webp", name: "Solar Charge Controller 12V/24V Auto PWM MPPT", desc: "Budget Friendly Solar Charge-controller compatible with any inverter.", price: "₦7,000" },
    { img: "img/c-lith-batt.webp", name: "CWORTH Energy Solar Lithium Battery 15KW 51.2V", desc: "Suitable for High usage and High battery count.", price: "₦1,900,000" },
    { img: "img/connector-mf.jpg", name: "Generic 50 Pairs MC4 Connectors(Male&Female)", desc: "For easy solar connections from panel to house.", price: "₦25,300" },
    { img: "img/fan-sol.jpg", name: "16 Inches Solar Fan", desc: "Suitable for homes, shops during power outages.", price: "₦85,000" },
    { img: "img/so-iron.jpg", name: "Sonik Inverter Friendly Pressing Iron 250W", desc: "Suitable for homes, shops during power outages.", price: "₦18,000" },
    { img: "img/tvc-solar-cam.webp", name: "T30 Triple Lens Pro Solar Powered CCTV Camera", desc: "Intelligent Solar PTZ Triple Lens Camera", price: "₦98,000" },
    { img: "img/hon-camera.webp", name: "Honeywell HBW4PER2V 4MP Outdoor IP Security Camera", desc: "", price: "₦85,000" },
    { img: "img/4-chan-cam.webp", name: "Hikivision 1080P AHD 4-Channel DVR Set - 2 Outdoor & 2 Indoor", desc: "Suitable for homes, shops for seccurity reasons.", price: "₦150,000" },
    { img: "img/fir-fri-inv.jpg", name: "Firman 200TM Inverter Fridge", desc: "200TM.", price: "₦460,000" },
    { img: "img/lg-inv-fri.jpeg", name: "LG 260 Litres Double Doors Inverter Refrigerator", desc: "260L, non-frost Refrigerator", price: "₦572,000" },
    { img: "img/pv-combiner.jpg", name: "MCB Circuit Breaker Combiner Box (12 ways)", desc: "", price: "₦15,000" },
    { img: "img/pv-combiner-2.jpeg", name: "Solar PV Combiner Box 1-in-1-out with lighting protection", desc: "", price: "₦58,500" },
    { img: "img/cable.jpeg", name: "Solar Copper Wire 4mm", desc: "", price: "₦2,500" },



    // Keep adding as many as you want
];

const productGrid = document.getElementById('productGrid');
const showMoreProductsBtn = document.getElementById('showMoreProductsBtn');
const productSearch = document.getElementById('productSearch');
const productPopup = document.getElementById('productPopup');
const productCloseBtn = document.getElementById('productCloseBtn');
const productNameTitle = document.getElementById('productNameTitle');

let productsToShow = 6; // Show 6 first
let selectedProduct = "";
let filteredProducts = [...products]; // Copy of products for searching

function renderProducts() {
    productGrid.innerHTML = '';
    const productsToRender = filteredProducts.slice(0, productsToShow);

    productsToRender.forEach(product => {
        productGrid.innerHTML += `
      <div class="product-card">
        <img src="${product.img}" alt="${product.name}">
        <div class="product-info">
          <h3>${product.name}</h3>
          <p>${product.desc}</p>
          <div class="product-price">${product.price}</div>
          <button class="ask-btn" onclick="openProductPopup('${product.name}', '${product.price}')">
            <i class="fa-brands fa-whatsapp"></i> Ask About Product
          </button>
        </div>
      </div>
    `;
    });

    // Hide button if all products are shown
    if (productsToShow >= filteredProducts.length) {
        showMoreProductsBtn.style.display = 'none';
    } else {
        showMoreProductsBtn.style.display = 'block';
    }
}

function openProductPopup(name, price) {
    selectedProduct = `${name} - ${price}`;
    productNameTitle.innerText = `Product: ${selectedProduct}`;
    productPopup.style.display = 'flex';
}

productCloseBtn.onclick = () => productPopup.style.display = 'none';

// SHOW MORE BUTTON
showMoreProductsBtn.addEventListener('click', () => {
    productsToShow += 6;
    renderProducts();
});

// SEARCH FUNCTION
productSearch.addEventListener('keyup', () => {
    const searchTerm = productSearch.value.toLowerCase();
    filteredProducts = products.filter(product =>
        product.name.toLowerCase().includes(searchTerm) ||
        product.desc.toLowerCase().includes(searchTerm)
    );
    productsToShow = 6; // Reset to show first 6 of search results
    renderProducts();
});

// Send Product Inquiry to WhatsApp
document.getElementById('productForm').addEventListener('submit', (e) => {
    e.preventDefault();
    const pName = document.getElementById('pName').value;
    const pPhone = document.getElementById('pPhone').value;
    const whatsappMsg = `Hello Sunny Dynamic Tech!%0A%0AI'm interested in: ${selectedProduct}%0A%0AName: ${pName}%0APhone: ${pPhone}`;
    window.open(`https://wa.me/${whatsappNumber}?text=${whatsappMsg}`, '_blank');
    productPopup.style.display = 'none';
    document.getElementById('productForm').reset();
});

renderProducts();

// GALLERY + LIGHTBOX WITH NEXT/PREV - IMAGES + VIDEOS
const galleryGrid = document.getElementById('galleryGrid');
const showMoreBtn = document.getElementById('showMoreBtn');
const lightbox = document.getElementById('lightbox');

let imagesToShow = 6;
let currentMediaIndex = 0;

// MIX IMAGES AND VIDEOS HERE
const allMedia = [
    { type: 'image', src: 'gallery/contact.jpg', thumb: 'gallery/contact.jpg' },
    { type: 'video', src: 'gallery/video1.mp4', thumb: 'gallery/thumb1.jpg' },
    { type: 'image', src: 'gallery/img2.jpg', thumb: 'gallery/img2.jpg' },
    { type: 'image', src: 'gallery/img3.jpg', thumb: 'gallery/img3.jpg' },
    { type: 'image', src: 'gallery/img4.jpg', thumb: 'gallery/img4.jpg' },
    { type: 'video', src: 'gallery/video2.mp4', thumb: 'gallery/thumb2.jpg' },
    { type: 'image', src: 'gallery/img5.jpg', thumb: 'gallery/img5.jpg' },
    { type: 'image', src: 'gallery/img6.jpg', thumb: 'gallery/img6.jpg' },
    { type: 'image', src: 'gallery/img7.jpg', thumb: 'gallery/img7.jpg' },
    { type: 'image', src: 'gallery/img8.jpg', thumb: 'gallery/img8.jpg' },
    { type: 'image', src: 'gallery/img9.jpg', thumb: 'gallery/img9.jpg' },
    { type: 'image', src: 'gallery/img10.jpg', thumb: 'gallery/img10.jpg' },
    { type: 'image', src: 'gallery/img11.jpg', thumb: 'gallery/img11.jpg' },
    { type: 'image', src: 'gallery/img12.jpg', thumb: 'gallery/img12.jpg' },
];
const totalMedia = allMedia.length;

function renderGallery() {
    galleryGrid.innerHTML = '';
    allMedia.slice(0, imagesToShow).forEach((item, index) => {
        const mediaItem = document.createElement('div');
        mediaItem.classList.add('gallery-item');

        if (item.type === 'image') {
            mediaItem.innerHTML = `<img src="${item.thumb}" loading="lazy" alt="Gallery Image">`;
        } else {
            mediaItem.innerHTML = `
        <img src="${item.thumb}" loading="lazy" alt="Gallery Video">
        <div class="play-icon"><i class="fa fa-play"></i></div>
      `;
        }

        // Click to open in lightbox
        mediaItem.addEventListener('click', () => {
            currentMediaIndex = index;
            openLightbox(currentMediaIndex);
        });

        galleryGrid.appendChild(mediaItem);
    });

    if (imagesToShow >= totalMedia) showMoreBtn.style.display = 'none';
}

function openLightbox(index) {
    const item = allMedia[index];
    lightbox.style.display = 'flex';

    let mediaHTML = '';
    if (item.type === 'image') {
        mediaHTML = `<img id="lightboxMedia" src="${item.src}" alt="Expanded view">`;
    } else {
        mediaHTML = `<video id="lightboxMedia" src="${item.src}" controls autoplay></video>`;
    }

    lightbox.innerHTML = `
    <span id="lightboxClose">&times;</span>
    <button class="lightbox-arrow left" id="prevMedia"><i class="fa fa-chevron-left"></i></button>
    ${mediaHTML}
    <button class="lightbox-arrow right" id="nextMedia"><i class="fa fa-chevron-right"></i></button>
  `;

    // Close events
    document.getElementById('lightboxClose').onclick = closeLightbox;
    lightbox.onclick = (e) => { if (e.target == lightbox) closeLightbox(); };

    // Arrow events
    document.getElementById('prevMedia').onclick = (e) => {
        e.stopPropagation();
        currentMediaIndex = (currentMediaIndex - 1 + totalMedia) % totalMedia;
        openLightbox(currentMediaIndex);
    }
    document.getElementById('nextMedia').onclick = (e) => {
        e.stopPropagation();
        currentMediaIndex = (currentMediaIndex + 1) % totalMedia;
        openLightbox(currentMediaIndex);
    }

    // Keyboard arrows
    document.onkeydown = (e) => {
        if (lightbox.style.display === 'flex') {
            if (e.key === 'ArrowLeft') document.getElementById('prevMedia').click();
            if (e.key === 'ArrowRight') document.getElementById('nextMedia').click();
            if (e.key === 'Escape') closeLightbox();
        }
    }
}

function closeLightbox() {
    lightbox.style.display = 'none';
    document.onkeydown = null; // remove keyboard listener
}

showMoreBtn.addEventListener('click', () => { imagesToShow += 6; renderGallery(); });
renderGallery();

// TESTIMONIALS SLIDER WITH PHOTOS
const testimonials = [
    { img: "https://randomuser.me/api/portraits/women/44.jpg", text: "Sunny Dynamic Tech installed solar for my shop. 6 months now, no NEPA bill. Professional and clean work!", name: "Amina Bello", role: "Business Owner, Gombe", stars: 5 },
    { img: "https://randomuser.me/api/portraits/men/32.jpg", text: "They wired my entire duplex and installed CCTV. Response time is fast and pricing is fair. Highly recommend!", name: "Engr. Musa", role: "Home Owner", stars: 5 },
    { img: "https://randomuser.me/api/portraits/women/68.jpg", text: "Got my prepaid meter installed in 2 hours. No more estimated billing. These guys know their job.", name: "Sarah Yusuf", role: "Teacher", stars: 5 },
    { img: "https://randomuser.me/api/portraits/men/75.jpg", text: "Best DStv installation team in town. Signal is perfect even during rain. Thank you Sunny Dynamic!", name: "Comrade Danladi", role: "Civil Servant", stars: 5 }
];

const testimonialWrapper = document.getElementById('testimonialWrapper');
const testimonialDots = document.getElementById('testimonialDots');
const prevTestimonial = document.getElementById('prevTestimonial');
const nextTestimonial = document.getElementById('nextTestimonial');
let currentTestimonial = 0;

function renderTestimonials() {
    testimonialWrapper.innerHTML = '';
    testimonialDots.innerHTML = '';
    testimonials.forEach((t, i) => {
        let starsHTML = '';
        for (let s = 0; s < t.stars; s++) starsHTML += '<i class="fa fa-star"></i>';
        testimonialWrapper.innerHTML += `
      <div class="testimonial-card">
        <img src="${t.img}" alt="${t.name}" class="testimonial-img">
        <i class="fa fa-quote-left quote"></i>
        <p>"${t.text}"</p>
        <h4>${t.name}</h4>
        <span>${t.role}</span>
        <div class="stars">${starsHTML}</div>
      </div>
    `;
        testimonialDots.innerHTML += `<span class="testimonial-dot ${i === 0 ? 'active' : ''}" data-index="${i}"></span>`;
    });
}

function showTestimonial(index) {
    currentTestimonial = index;
    testimonialWrapper.style.transform = `translateX(-${index * 100}%)`;
    document.querySelectorAll('.testimonial-dot').forEach((dot, i) => { dot.classList.toggle('active', i === index); });
}

prevTestimonial.onclick = () => { currentTestimonial = (currentTestimonial - 1 + testimonials.length) % testimonials.length; showTestimonial(currentTestimonial); }
nextTestimonial.onclick = () => { currentTestimonial = (currentTestimonial + 1) % testimonials.length; showTestimonial(currentTestimonial); }
testimonialDots.addEventListener('click', (e) => { if (e.target.classList.contains('testimonial-dot')) { showTestimonial(parseInt(e.target.dataset.index)); } });

setInterval(() => { currentTestimonial = (currentTestimonial + 1) % testimonials.length; showTestimonial(currentTestimonial); }, 5000);
renderTestimonials();

// Animate cards on scroll
const cards = document.querySelectorAll('.card');
const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => { if (entry.isIntersecting) entry.target.classList.add('show'); });
}, { threshold: 0.2 });
cards.forEach(card => observer.observe(card));

// HERO VIDEO SLIDESHOW
const heroVideos = document.querySelectorAll('.hero-video');
let currentVideo = 0;

function showNextVideo() {
    heroVideos[currentVideo].classList.remove('active');
    currentVideo = (currentVideo + 1) % heroVideos.length;
    heroVideos[currentVideo].classList.add('active');

    // restart video from beginning
    heroVideos[currentVideo].currentTime = 0;
    heroVideos[currentVideo].play();
}

// Change video every 8 seconds
setInterval(showNextVideo, 8000);

// Make sure first video plays
heroVideos[0].play();