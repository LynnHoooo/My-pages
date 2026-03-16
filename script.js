document.addEventListener('DOMContentLoaded', () => {
    const navItems = document.querySelectorAll('.nav-item');
    const sections = document.querySelectorAll('.page-section');
    const goToPortfolioBtn = document.getElementById('goToPortfolio');

    // Navigation logic for Single Page App feel
    function navigateTo(targetId) {
        // Update nav active state
        navItems.forEach(item => {
            if (item.getAttribute('data-target') === targetId) {
                item.classList.add('active');
            } else {
                item.classList.remove('active');
            }
        });

        // Update section visibility with animation
        sections.forEach(section => {
            if (section.id === targetId) {
                section.classList.add('active');
                // Restart animation
                section.style.animation = 'none';
                section.offsetHeight; /* trigger reflow */
                section.style.animation = null; 
            } else {
                section.classList.remove('active');
            }
        });

        // Update URL hash without jumping
        if(history.pushState) {
            history.pushState(null, null, '#' + targetId);
        } else {
            window.location.hash = targetId;
        }
        window.scrollTo({ top: 0, behavior: 'smooth' });
    }

    // Handle nav clicks
    navItems.forEach(item => {
        item.addEventListener('click', (e) => {
            e.preventDefault();
            const targetId = item.getAttribute('data-target');
            navigateTo(targetId);
        });
    });

    // Handle "View Portfolio" button from Home
    if (goToPortfolioBtn) {
        goToPortfolioBtn.addEventListener('click', () => {
            navigateTo('portfolio');
        });
    }

    // Check URL hash on initial load to route correctly
    const initialHash = window.location.hash.substring(1);
    const validTargets = ['home', 'portfolio', 'experience'];
    if (initialHash && validTargets.includes(initialHash)) {
        navigateTo(initialHash);
    }
    
    // Smooth reveal effect for glass cards on scroll (optional enhancement)
    const observerOptions = {
        threshold: 0.1,
        rootMargin: "0px 0px -50px 0px"
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    const cards = document.querySelectorAll('.glass-card');
    cards.forEach((card, index) => {
        card.style.opacity = '0';
        card.style.transform = 'translateY(20px)';
        card.style.transition = `opacity 0.6s ease ${index * 0.1}s, transform 0.6s ease ${index * 0.1}s, background 0.3s, box-shadow 0.3s`;
        observer.observe(card);
    });
});
