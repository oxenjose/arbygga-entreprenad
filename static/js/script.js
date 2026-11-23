document.addEventListener("DOMContentLoaded", function() {
    
    // ==========================================================================
    // 1. HAMBURGERMENY FÖR MOBIL
    // ==========================================================================
    const hamburger = document.getElementById('hamburger');
    const navLinks = document.getElementById('nav-links');

    if (hamburger && navLinks) {
        hamburger.addEventListener('click', function() {
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

        // Stäng menyn automatiskt när man klickar på en länk (endast mobil)
        const navItems = navLinks.querySelectorAll('a');
        navItems.forEach(item => {
            item.addEventListener('click', () => {
                if (navLinks.classList.contains('active')) {
                    navLinks.classList.remove('active');
                    const icon = hamburger.querySelector('i');
                    icon.classList.remove('fa-times');
                    icon.classList.add('fa-bars');
                }
            });
        });
    }

    // ==========================================================================
    // 2. STICKY NAVBAR EFFEKT (Lägger till skugga när man scrollar)
    // ==========================================================================
    const navbar = document.querySelector('.navbar');
    
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
    });

    // ==========================================================================
    // 3. SCROLL-ANIMATIONER (Hallmark style - subtilt och rent)
    // ==========================================================================
    const observerOptions = {
        root: null,
        rootMargin: '0px',
        threshold: 0.15 // Triggar när 15% av elementet syns
    };

    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('is-visible');
                // Slutar observera när animationen har spelats upp
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    const animatedElements = document.querySelectorAll('.animate-on-scroll');
    animatedElements.forEach(el => observer.observe(el));

    // ==========================================================================
    // 4. FORMULÄR-FEEDBACK (Visar att formuläret skickas)
    // ==========================================================================
    const contactForm = document.querySelector('.contact-form-dark form');
    
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            const submitBtn = this.querySelector('.btn-submit-dark');
            
            // Vi förhindrar inte default här eftersom Flask behöver ta emot datan,
            // men vi ändrar knappens utseende för att visa att något händer.
            if (submitBtn) {
                submitBtn.innerHTML = 'Skickar...';
                submitBtn.style.opacity = '0.7';
                submitBtn.style.cursor = 'not-allowed';
            }
        });
    }
});