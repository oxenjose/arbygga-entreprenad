document.addEventListener("DOMContentLoaded", function() {
    
    // 1. HAMBURGERMENY FÖR MOBIL
    const hamburger = document.getElementById('hamburger');
    const navLinks = document.getElementById('nav-links');

    if (hamburger && navLinks) {
        hamburger.addEventListener('click', function() {
            // Växlar klassen "active" för att visa/dölja menyn
            navLinks.classList.toggle('active');
            
            // Byter ikon från hamburgare till kryss (X)
            const icon = hamburger.querySelector('i');
            if (navLinks.classList.contains('active')) {
                icon.classList.remove('fa-bars');
                icon.classList.add('fa-times');
            } else {
                icon.classList.remove('fa-times');
                icon.classList.add('fa-bars');
            }
        });
    }

    // 2. ANIMATIONER VID SCROLL
    const observerOptions = {
        root: null,
        rootMargin: '0px',
        threshold: 0.15
    };

    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('is-visible');
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    const animatedElements = document.querySelectorAll('.animate-on-scroll');
    animatedElements.forEach(el => observer.observe(el));

    // 3. 3D TILT-EFFEKT PÅ TJÄNSTEKORT
    const tiltCards = document.querySelectorAll('.tilt-card');

    tiltCards.forEach(card => {
        card.addEventListener('mousemove', handleTilt);
        card.addEventListener('mouseleave', resetTilt);
    });

    function handleTilt(e) {
        const card = e.currentTarget;
        const cardRect = card.getBoundingClientRect();
        
        const cardWidth = cardRect.width;
        const cardHeight = cardRect.height;
        const mouseX = e.clientX - cardRect.left;
        const mouseY = e.clientY - cardRect.top;

        const xPct = (mouseX / cardWidth) - 0.5;
        const yPct = (mouseY / cardHeight) - 0.5;

        const tiltX = yPct * 15;
        const tiltY = xPct * -15;

        card.style.transform = `perspective(1000px) rotateX(${tiltX}deg) rotateY(${tiltY}deg) scale3d(1.02, 1.02, 1.02)`;
    }

    function resetTilt(e) {
        const card = e.currentTarget;
        card.style.transform = `perspective(1000px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)`;
    }
});