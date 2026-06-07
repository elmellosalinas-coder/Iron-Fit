document.addEventListener('DOMContentLoaded', () => {
    const productsGrid = document.getElementById('productsGrid');

    // 1. LISTA DE PRODUCTOS (Aquí es donde agregas más)
    const nuevosProductos = [
        {
            nombre: "Smart Hoodie X",
            desc: "Sudadera con sensores de postura y tejido auto-secante de última generación.",
            precio: "129.99",
            badge: "nuevo",
            img: "https://images.unsplash.com/photo-1556821840-3a63f95609a7?q=80&w=300&h=300&fit=crop"
        },
        {
            nombre: "Iron Shorts 2.0",
            desc: "Pantalones cortos de compresión con bolsillos hápitcos para dispositivos.",
            precio: "55.00",
            badge: "oferta",
            img: "https://images.unsplash.com/photo-1491553895911-0055eca6402d?q=80&w=300&h=300&fit=crop"
        },
        {
            nombre: "Glove Tech Pro",
            desc: "Guantes con grip magnético y medidor de fuerza de agarre inalámbrico.",
            precio: "89.00",
            badge: "premium",
            img: "https://images.unsplash.com/photo-1583483423502-c5139fa15ad3?q=80&w=300&h=300&fit=crop"
        },
        {
            nombre: "Glove Tech Pro",
            desc: "Guantes con grip magnético y medidor de fuerza de agarre inalámbrico.",
            precio: "89.00",
            badge: "premium",
            img: "https://images.unsplash.com/photo-1583483423502-c5139fa15ad3?q=80&w=300&h=300&fit=crop"
        },
        {
            nombre: "Glove Tech Pro",
            desc: "Guantes con grip magnético y medidor de fuerza de agarre inalámbrico.",
            precio: "89.00",
            badge: "premium",
            img: "https://images.unsplash.com/photo-1583483423502-c5139fa15ad3?q=80&w=300&h=300&fit=crop"
        },
        {
            nombre: "Glove Tech Pro",
            desc: "Guantes con grip magnético y medidor de fuerza de agarre inalámbrico.",
            precio: "89.00",
            badge: "premium",
            img: "https://images.unsplash.com/photo-1583483423502-c5139fa15ad3?q=80&w=300&h=300&fit=crop"
        },
        {
            nombre: "Glove Tech Pro",
            desc: "Guantes con grip magnético y medidor de fuerza de agarre inalámbrico.",
            precio: "89.00",
            badge: "premium",
            img: "https://images.unsplash.com/photo-1583483423502-c5139fa15ad3?q=80&w=300&h=300&fit=crop"
        },
         {
            nombre: "Glove Tech PEro",
            desc: "Guantes con grip magnético y medidor de fuerza de agarre inalámbrico.",
            precio: "89.00",
            badge: "premium",
            img: "https://images.unsplash.com/photo-1583483423502-c5139fa15ad3?q=80&w=300&h=300&fit=crop"
        },
         {
            nombre: "Glove GTech Pro",
            desc: "Guantes con grip magnético y medidor de fuerza de agarre inalámbrico.",
            precio: "89.00",
            badge: "premium",
            img: "https://images.unsplash.com/photo-1583483423502-c5139fa15ad3?q=80&w=300&h=300&fit=crop"
        },
         {
            nombre: "GloKve Tech Pro",
            desc: "Guantes con grip magnético y medidor de fuerza de agarre inalámbrico.",
            precio: "89.00",
            badge: "premium",
            img: "https://images.unsplash.com/photo-1583483423502-c5139fa15ad3?q=80&w=300&h=300&fit=crop"
        },
         {
            nombre: "Glove TeFch Pro",
            desc: "Guantes con grip magnético y medidor de fuerza de agarre inalámbrico.",
            precio: "89.00",
            badge: "premium",
            img: "https://images.unsplash.com/photo-1583483423502-c5139fa15ad3?q=80&w=300&h=300&fit=crop"
        },
         {
            nombre: "Glove TeFch Pro",
            desc: "Guantes con grip magnético y medidor de fuerza de agarre inalámbrico.",
            precio: "89.00",
            badge: "premium",
            img: "https://images.unsplash.com/photo-1583483423502-c5139fa15ad3?q=80&w=300&h=300&fit=crop"
        },
         {
            nombre: "Glove TFech Pro",
            desc: "Guantes con grip magnético y medidor de fuerza de agarre inalámbrico.",
            precio: "89.00",
            badge: "premium",
            img: "https://images.unsplash.com/photo-1583483423502-c5139fa15ad3?q=80&w=300&h=300&fit=crop"
        },
         {
            nombre: "Glove TeSch Pro",
            desc: "Guantes con grip magnético y medidor de fuerza de agarre inalámbrico.",
            precio: "89.00",
            badge: "premium",
            img: "https://images.unsplash.com/photo-1583483423502-c5139fa15ad3?q=80&w=300&h=300&fit=crop"
        },
         {
            nombre: "Glove TJech Pro",
            desc: "Guantes con grip magnético y medidor de fuerza de agarre inalámbrico.",
            precio: "89.00",
            badge: "premium",
            img: "https://images.unsplash.com/photo-1583483423502-c5139fa15ad3?q=80&w=300&h=300&fit=crop"
        },
         {
            nombre: "Glove TecPh Pro",
            desc: "Guantes con grip magnético y medidor de fuerza de agarre inalámbrico.",
            precio: "89.00",
            badge: "premium",
            img: "https://images.unsplash.com/photo-1583483423502-c5139fa15ad3?q=80&w=300&h=300&fit=crop"
        }
        // Puedes seguir copiando y pegando bloques aquí abajo...
    ];

    // 2. FUNCIÓN PARA AGREGAR CADA PRODUCTO
    function renderizarProductos() {
        if (!productsGrid) return;

        nuevosProductos.forEach(prod => {
            const card = document.createElement('div');
            card.className = 'product-card';
            
            card.innerHTML = `
                <div class="product-badge">${prod.badge}</div>
                <div class="product-img-container">
                    <img src="${prod.img}" alt="${prod.nombre}" loading="lazy" decoding="async" width="300" height="300">
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
    }

    // 3. GENERADOR DE 40 STICKERS CON DIRECCIONES ALEATORIAS
    function initFloatingStickers() {
        const container = document.getElementById('stickersContainer');
        if (!container) return;

        // Limpiamos el contenedor para evitar duplicados si se llama varias veces
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
            { class: 'icon-wallet', icon: 'fa-wallet' }
        ];

        const directions = ['dir-v1', 'dir-v2', 'dir-v3', 'dir-v4'];

        for (let i = 0; i < 40; i++) {
            const sticker = document.createElement('div');
            sticker.className = 'sticker-3d';
            
            const randomIcon = icons[Math.floor(Math.random() * icons.length)];
            const randomDir = directions[Math.floor(Math.random() * directions.length)];
            const size = Math.floor(Math.random() * 25) + 40; // Tamaños entre 40px y 65px
            const top = Math.random() * 100;
            const left = Math.random() * 100;
            const delay = Math.random() * -20; // Empezar ya animados
            const duration = Math.random() * 8 + 10; // Entre 10s y 18s
            const speed = (Math.random() * 0.03) - 0.015; // Velocidad de paralaje

            sticker.setAttribute('data-speed', speed.toFixed(3));
            sticker.style.top = `${top}%`;
            sticker.style.left = `${left}%`;
            sticker.style.width = `${size}px`;
            sticker.style.height = `${size}px`;
            sticker.style.animationDelay = `${delay}s`;
            sticker.style.animationDuration = `${duration}s`;

            sticker.innerHTML = `
                <div class="sticker-icon ${randomIcon.class} ${randomDir}">
                    <i class="fa-solid ${randomIcon.icon}"></i>
                </div>
            `;
            container.appendChild(sticker);
        }
    }

    initFloatingStickers();

    // Ejecutamos la carga de productos
    // Usamos un pequeño delay para asegurar que el grid esté listo
    setTimeout(renderizarProductos, 100);

    console.log("Iron Fit: Productos dinámicos cargados correctamente.");
});
