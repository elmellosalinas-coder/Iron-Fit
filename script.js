document.addEventListener('DOMContentLoaded', () => {
    const productsGrid = document.getElementById('productsGrid');

    // PRODUCTOS WAYUU
    const nuevosProductos = [
        {
            nombre: "Mochila Wayuu Sol",
            desc: "Tejida a mano por artesanas Wayuu del Cabo de la Vela. Colores del amanecer guajiro.",
            precio: "129.99",
            badge: "nuevo",
            img: "https://images.unsplash.com/photo-1548036328-c9fa89d128fa?q=80&w=300&h=300&fit=crop"
        },
        {
            nombre: "Chinchorro Premium",
            desc: "Hamaca tradicional Wayuu de algodón natural, perfecta para descanso y decoración.",
            precio: "185.00",
            badge: "premium",
            img: "https://images.unsplash.com/photo-1501854140801-50d01698950b?q=80&w=300&h=300&fit=crop"
        },
        {
            nombre: "Mochila Arcoíris",
            desc: "Diseño multicolor inspirado en los tejidos ancestrales del pueblo Wayuu.",
            precio: "95.00",
            badge: "oferta",
            img: "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?q=80&w=300&h=300&fit=crop"
        },
        {
            nombre: "Wayuu Mini Bag",
            desc: "Bolso pequeño artesanal ideal para festival y uso diario. 100% hecho a mano.",
            precio: "55.00",
            badge: "nuevo",
            img: "https://images.unsplash.com/photo-1590874103328-eac38a683ce7?q=80&w=300&h=300&fit=crop"
        },
        {
            nombre: "Chinchorro Doble",
            desc: "Hamaca doble para dos personas. Tejida en algodón resistente con flecos decorativos.",
            precio: "260.00",
            badge: "premium",
            img: "https://images.unsplash.com/photo-1523987355523-c7b5b0dd90a7?q=80&w=300&h=300&fit=crop"
        },
        {
            nombre: "Mochila Tribal",
            desc: "Patrón tribal exclusivo tejido por la maestra artesana Epiayu de la Alta Guajira.",
            precio: "145.00",
            badge: "premium",
            img: "https://images.unsplash.com/photo-1547949003-9792a18a2601?q=80&w=300&h=300&fit=crop"
        },
        {
            nombre: "Bolso Redondo",
            desc: "Diseño circular único, acabado en macramé Wayuu con asas de cuero natural.",
            precio: "79.00",
            badge: "oferta",
            img: "https://images.unsplash.com/photo-1584917865442-de89df76afd3?q=80&w=300&h=300&fit=crop"
        },
        {
            nombre: "Kit Wayuu Viajero",
            desc: "Set de mochila mediana + bolso pequeño + pulsera. El regalo perfecto.",
            precio: "199.00",
            badge: "oferta",
            img: "https://images.unsplash.com/photo-1491553895911-0055eca6402d?q=80&w=300&h=300&fit=crop"
        },
        {
            nombre: "Chinchorro Bebe",
            desc: "Hamaca suave y segura para bebés, tejida con hilos especiales sin tóxicos.",
            precio: "89.00",
            badge: "nuevo",
            img: "https://images.unsplash.com/photo-1515488042361-ee00e0ddd4e4?q=80&w=300&h=300&fit=crop"
        },
        {
            nombre: "Mochila Noche",
            desc: "Diseño oscuro con detalles en hilo dorado. Exclusiva colección nocturna Wayuu.",
            precio: "159.00",
            badge: "premium",
            img: "https://images.unsplash.com/photo-1548036328-c9fa89d128fa?q=80&w=300&h=300&fit=crop"
        },
        {
            nombre: "Mochila Tejida Luna",
            desc: "Tejida a mano por artesanas Wayuu del norte de la Guajira.",
            precio: "149.99",
            badge: "premium",
            img: "https://images.unsplash.com/photo-1548036328-c9fa89d128fa?q=80&w=300&h=300&fit=crop"
        },
        {
            nombre: "Joyería Wayuu Colección",
            desc: "Aretes, pulseras y collares en cuentas de vidrio Wayuu. Set de 5 piezas.",
            precio: "65.00",
            badge: "nuevo",
            img: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?q=80&w=300&h=300&fit=crop"
        },
        {
            nombre: "Chinchorro Familiar XL",
            desc: "Para 3 personas, algodón extragrueso con refuerzo en los extremos.",
            precio: "320.00",
            badge: "premium",
            img: "https://images.unsplash.com/photo-1523987355523-c7b5b0dd90a7?q=80&w=300&h=300&fit=crop"
        },
        {
            nombre: "Mini Wayuu Bag Festival",
            desc: "Bolsito compacto para festivales y uso diario. Hecho a mano.",
            precio: "69.99",
            badge: "nuevo",
            img: "https://images.unsplash.com/photo-1590874103328-eac38a683ce7?q=80&w=300&h=300&fit=crop"
        },
        {
            nombre: "Mochila Noche Dorada",
            desc: "Edición nocturna en hilo oscuro con detalles dorados. Solo 20 uds.",
            precio: "159.00",
            badge: "oferta",
            img: "https://images.unsplash.com/photo-1501854140801-50d01698950b?q=80&w=300&h=300&fit=crop"
        },
        {
            nombre: "Mochila Guajira Silk",
            desc: "Edición especial en hilos de seda artesanal. Brillo natural único.",
            precio: "210.00",
            badge: "premium",
            img: "https://images.unsplash.com/photo-1548036328-c9fa89d128fa?q=80&w=300&h=300&fit=crop"
        },
        {
            nombre: "Mochila Guajira Silk",
            desc: "Edición especial en hilos de seda artesanal. Brillo natural único.",
            precio: "210.00",
            badge: "premium",
            img: "https://images.unsplash.com/photo-1548036328-c9fa89d128fa?q=80&w=300&h=300&fit=crop"
        },
        {
            nombre: "Mochila Guajira Silk",
            desc: "Edición especial en hilos de seda artesanal. Brillo natural único.",
            precio: "210.00",
            badge: "premium",
            img: "https://images.unsplash.com/photo-1548036328-c9fa89d128fa?q=80&w=300&h=300&fit=crop"
        },
        {
            nombre: "Mochila Guajira Silk",
            desc: "Edición especial en hilos de seda artesanal. Brillo natural único.",
            precio: "210.00",
            badge: "premium",
            img: "https://images.unsplash.com/photo-1548036328-c9fa89d128fa?q=80&w=300&h=300&fit=crop"
        },
        {
            nombre: "Mochila Guajira Silk",
            desc: "Edición especial en hilos de seda artesanal. Brillo natural único.",
            precio: "210.00",
            badge: "premium",
            img: "https://images.unsplash.com/photo-1548036328-c9fa89d128fa?q=80&w=300&h=300&fit=crop"
        },
        {
            nombre: "Mochila Guajira Silk",
            desc: "Edición especial en hilos de seda artesanal. Brillo natural único.",
            precio: "210.00",
            badge: "premium",
            img: "https://images.unsplash.com/photo-1548036328-c9fa89d128fa?q=80&w=300&h=300&fit=crop"
        },
        {
            nombre: "Mochila Guajira Silk",
            desc: "Edición especial en hilos de seda artesanal. Brillo natural único.",
            precio: "210.00",
            badge: "premium",
            img: "https://images.unsplash.com/photo-1548036328-c9fa89d128fa?q=80&w=300&h=300&fit=crop"
        },
        {
            nombre: "Mochila Guajira Silk",
            desc: "Edición especial en hilos de seda artesanal. Brillo natural único.",
            precio: "210.00",
            badge: "premium",
            img: "https://images.unsplash.com/photo-1548036328-c9fa89d128fa?q=80&w=300&h=300&fit=crop"
        },
        {
            nombre: "Mochila Guajira Silk",
            desc: "Edición especial en hilos de seda artesanal. Brillo natural único.",
            precio: "210.00",
            badge: "premium",
            img: "https://images.unsplash.com/photo-1548036328-c9fa89d128fa?q=80&w=300&h=300&fit=crop"
        },
        {
            nombre: "Mochila Guajira Silk",
            desc: "Edición especial en hilos de seda artesanal. Brillo natural único.",
            precio: "210.00",
            badge: "premium",
            img: "https://images.unsplash.com/photo-1548036328-c9fa89d128fa?q=80&w=300&h=300&fit=crop"
        },
        
        {
            nombre: "Chinchorro Galaxia",
            desc: "Tejido en tonos azules y plateados representando el cielo nocturno del desierto.",
            precio: "295.00",
            badge: "nuevo",
            img: "https://images.unsplash.com/photo-1501854140801-50d01698950b?q=80&w=300&h=300&fit=crop"
        },
        {
            nombre: "Bolso Wayuu Mini-Lux",
            desc: "Versión de lujo con terminaciones en hilos de plata.",
            precio: "115.00",
            badge: "nuevo",
            img: "https://images.unsplash.com/photo-1590874103328-eac38a683ce7?q=80&w=300&h=300&fit=crop"
        },
        {
            nombre: "Mochila Ancestral Roja",
            desc: "Tejido con tintes naturales de semillas y raíces.",
            precio: "135.00",
            badge: "premium",
            img: "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?q=80&w=300&h=300&fit=crop"
        },
        {
            nombre: "Kit Playa Wayuu",
            desc: "Incluye sombrero de palma de iraca y mochila playera.",
            precio: "175.00",
            badge: "oferta",
            img: "https://images.unsplash.com/photo-1584917865442-de89df76afd3?q=80&w=300&h=300&fit=crop"
        }
    ];

    let productsShown = 0;
    const initialItems = 4; // Carga inicial de 4 productos
    let isLoading = false;

    function renderizarProductos(loadRest = false) {
        const loader = document.getElementById('loader');
        const showMoreBtn = document.getElementById('showMoreBtn');
        const endOfProducts = document.getElementById('endOfProducts');

        if (!productsGrid || isLoading || productsShown >= nuevosProductos.length) return;
        isLoading = true;
        
        if (loader) loader.classList.remove('hidden-info');
        if (showMoreBtn) showMoreBtn.classList.add('hidden-info');

        // Si loadRest es true, cargamos todo lo que falta. Si no, cargamos solo los primeros 4.
        const batchSize = loadRest ? (nuevosProductos.length - productsShown) : initialItems;
        const nextBatch = nuevosProductos.slice(productsShown, productsShown + batchSize);

        nextBatch.forEach((prod, i) => {
            const card = document.createElement('div');
            card.className = 'product-card';
            card.style.animationDelay = ((productsShown + i) * 60) + 'ms';
            card.innerHTML = `
                <div class="product-badge badge-${prod.badge}">${prod.badge}</div>
                <div class="product-img-container">
                    <img src="${prod.img}" alt="${prod.nombre}" loading="lazy" decoding="async" width="300" height="300">
                    <div class="img-glass-shine"></div>
                </div>
                <h3>${prod.nombre}</h3>
                <p class="small-desc">${prod.desc}</p>
                <div class="quantity-selector">
                    <label>cantidad:</label>
                    <input type="number" value="1" min="1" max="99">
                </div>
                <div class="product-footer">
                    <span class="price">$${prod.precio}</span>
                    <button class="add-to-cart">añadir</button>
                </div>
            `;
            productsGrid.appendChild(card);
        });

        setTimeout(() => {
            productsShown += nextBatch.length;
            if (loader) loader.classList.add('hidden-info');

            if (productsShown >= nuevosProductos.length) {
                if (showMoreBtn) showMoreBtn.classList.add('hidden-info');
                if (endOfProducts) endOfProducts.classList.remove('hidden-info');
            } else {
                if (showMoreBtn) showMoreBtn.classList.remove('hidden-info');
                if (endOfProducts) endOfProducts.classList.add('hidden-info');
            }
            isLoading = false;
        }, 800); 
    }

    // Listener para el botón de mostrar más
    const btnMore = document.getElementById('showMoreBtn');
    if (btnMore) {
        btnMore.addEventListener('click', () => renderizarProductos(true));
    }

    // ======================================================
    // STICKERS MEJORADOS: aparecen/desaparecen, giran, flotan
    // ======================================================
    function initFloatingStickers() {
        const container = document.getElementById('stickersContainer');
        if (!container) return;
        container.innerHTML = '';

        const icons = [
            { class: 'icon-cart', icon: 'fa-cart-shopping' },
            { class: 'icon-bag', icon: 'fa-bag-shopping' },
            { class: 'icon-verified', icon: 'fa-circle-check' },
            { class: 'icon-card', icon: 'fa-credit-card' },
            { class: 'icon-tag', icon: 'fa-tag' },
            { class: 'icon-box', icon: 'fa-box' },
            { class: 'icon-truck', icon: 'fa-truck-fast' },
            { class: 'icon-star', icon: 'fa-star' },
            { class: 'icon-coupon', icon: 'fa-ticket' },
            { class: 'icon-wallet', icon: 'fa-wallet' },
            { class: 'icon-heart', icon: 'fa-heart' },
            { class: 'icon-gem', icon: 'fa-gem' }
        ];

        const floatVariants = ['float-v1','float-v2','float-v3','float-v4','float-v5','float-v6'];

        for (let i = 0; i < 65; i++) { // Aumentado el número de formas
            const randomIcon = icons[Math.floor(Math.random() * icons.length)];
            const floatAnim = floatVariants[Math.floor(Math.random() * floatVariants.length)];
            const size = Math.floor(Math.random() * 60) + 90; // Tamaño aumentado: entre 90 y 150px
            const top = Math.random() * 95;
            const left = Math.random() * 95;
            const delay = -(Math.random() * 25); // ya animados al cargar
            const duration = Math.random() * 12 + 10; // Flote más lento y serio (10-22s)
            const fadeDuration = Math.random() * 8 + 7; // Ciclo de aparición de 7 a 15 segundos
            const fadeDelay = -(Math.random() * fadeDuration);
            const speed = (Math.random() * 0.04) - 0.02;
            const spinDuration = Math.random() * 15 + 10; // 10–25s spin
            const spinDir = Math.random() > 0.5 ? 'normal' : 'reverse';

            const sticker = document.createElement('div');
            sticker.className = 'sticker-3d';
            sticker.setAttribute('data-speed', speed.toFixed(3));
            sticker.style.cssText = `
                top: ${top}%;
                left: ${left}%;
                width: ${size}px;
                height: ${size}px;
                animation: stickerFade ${fadeDuration.toFixed(1)}s ${fadeDelay.toFixed(1)}s infinite ease-in-out;
            `;

            sticker.innerHTML = `
                <div class="sticker-icon ${randomIcon.class}" style="
                    animation: ${floatAnim} ${duration.toFixed(1)}s ${delay.toFixed(1)}s infinite ease-in-out,
                               stickerSpin ${spinDuration.toFixed(1)}s ${spinDir} linear infinite;
                ">
                    <i class="fa-solid ${randomIcon.icon}"></i>
                </div>
            `;
            container.appendChild(sticker);
        }
    }

    initFloatingStickers();
    renderizarProductos();
    console.log("Wayuu Store: Stickers y productos cargados.");
});
