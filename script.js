document.addEventListener('DOMContentLoaded', function(){
    const hamburger = document.getElementById('hamburger');
    const barra = document.querySelector('.barra-menu');

    if(!hamburger || !barra) return;

    hamburger.addEventListener('click', function(){
        const expanded = this.getAttribute('aria-expanded') === 'true';
        this.setAttribute('aria-expanded', String(!expanded));
        barra.classList.toggle('open');
    });

    // ejemplo: acción del botón comprar
    const comprar = document.getElementById('comprarBtn');
    if(comprar){
        comprar.addEventListener('click', function(){
            window.alert('Gracias por tu interés — acción de compra de ejemplo.');
        });
    }
});