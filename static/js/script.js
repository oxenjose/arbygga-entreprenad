document.addEventListener("DOMContentLoaded", function() {
    
    // 1. ANIMACIÓN DE APARICIÓN AL HACER SCROLL (Fade-in)
    const observerOptions = {
        root: null,
        rootMargin: '0px',
        threshold: 0.15 // Se activa cuando el 15% del elemento es visible
    };

    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('is-visible');
                observer.unobserve(entry.target); // Deja de observar una vez animado
            }
        });
    }, observerOptions);

    const animatedElements = document.querySelectorAll('.animate-on-scroll');
    animatedElements.forEach(el => observer.observe(el));


    // 2. EFECTO TILT 3D PARA LAS TARJETAS DE SERVICIOS (Måleri, Golv, Snickeri)
    const tiltCards = document.querySelectorAll('.tilt-card');

    tiltCards.forEach(card => {
        card.addEventListener('mousemove', handleTilt);
        card.addEventListener('mouseleave', resetTilt);
    });

    function handleTilt(e) {
        const card = e.currentTarget;
        const cardRect = card.getBoundingClientRect();
        
        // Calcula la posición del ratón relativa a la tarjeta
        const cardWidth = cardRect.width;
        const cardHeight = cardRect.height;
        const mouseX = e.clientX - cardRect.left;
        const mouseY = e.clientY - cardRect.top;

        // Convierte a un rango de -0.5 a 0.5
        const xPct = (mouseX / cardWidth) - 0.5;
        const yPct = (mouseY / cardHeight) - 0.5;

        // Inclinación máxima de 15 grados
        const tiltX = yPct * 15;
        const tiltY = xPct * -15;

        card.style.transform = `perspective(1000px) rotateX(${tiltX}deg) rotateY(${tiltY}deg) scale3d(1.02, 1.02, 1.02)`;
    }

    function resetTilt(e) {
        const card = e.currentTarget;
        card.style.transform = `perspective(1000px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)`;
    }

});