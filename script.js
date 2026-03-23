document.addEventListener("DOMContentLoaded", () => {
    const sections = Array.from(document.querySelectorAll("main section[id]"));
    const navLinks = Array.from(document.querySelectorAll(".nav-link"));
    const revealItems = Array.from(document.querySelectorAll("[data-reveal]"));
    const spotlightCards = Array.from(document.querySelectorAll(".project-feature, .project-card, .detail-card, .timeline-item, .metric-card"));
    const cloudPanels = Array.from(document.querySelectorAll(".about-cloud-panel"));

    const setActiveLink = (id) => {
        navLinks.forEach((link) => {
            const isActive = link.getAttribute("href") === `#${id}`;
            link.classList.toggle("active", isActive);
        });
    };

    const updateScrollProgress = () => {
        const scrollTop = window.scrollY;
        const scrollHeight = document.documentElement.scrollHeight - window.innerHeight;
        const progress = scrollHeight > 0 ? scrollTop / scrollHeight : 0;

        document.documentElement.style.setProperty("--scroll-progress", `${progress}`);
    };

    revealItems.forEach((item, index) => {
        item.style.setProperty("--reveal-delay", `${Math.min(index * 0.04, 0.32)}s`);
    });

    const sectionObserver = new IntersectionObserver(
        (entries) => {
            const visibleEntries = entries
                .filter((entry) => entry.isIntersecting)
                .sort((a, b) => b.intersectionRatio - a.intersectionRatio);

            if (visibleEntries.length > 0) {
                setActiveLink(visibleEntries[0].target.id);
            }
        },
        {
            rootMargin: "-35% 0px -45% 0px",
            threshold: [0.2, 0.4, 0.6]
        }
    );

    sections.forEach((section) => sectionObserver.observe(section));

    const revealObserver = new IntersectionObserver(
        (entries, observer) => {
            entries.forEach((entry) => {
                if (!entry.isIntersecting) {
                    return;
                }

                entry.target.classList.add("visible");
                observer.unobserve(entry.target);
            });
        },
        {
            threshold: 0.15,
            rootMargin: "0px 0px -40px 0px"
        }
    );

    revealItems.forEach((item) => revealObserver.observe(item));

    spotlightCards.forEach((card) => {
        card.addEventListener("pointermove", (event) => {
            const rect = card.getBoundingClientRect();
            const x = ((event.clientX - rect.left) / rect.width) * 100;
            const y = ((event.clientY - rect.top) / rect.height) * 100;

            card.style.setProperty("--spot-x", `${x}%`);
            card.style.setProperty("--spot-y", `${y}%`);
        });
    });

    cloudPanels.forEach((panel) => {
        const words = Array.from(panel.querySelectorAll(".cloud-word"));

        panel.addEventListener("pointermove", (event) => {
            const rect = panel.getBoundingClientRect();
            const offsetX = (event.clientX - rect.left - rect.width / 2) / rect.width;
            const offsetY = (event.clientY - rect.top - rect.height / 2) / rect.height;

            words.forEach((word, index) => {
                const depth = (index % 4) + 1;
                word.style.setProperty("--shift-x", `${offsetX * depth * 6}px`);
                word.style.setProperty("--shift-y", `${offsetY * depth * 6}px`);
            });
        });

        panel.addEventListener("pointerleave", () => {
            words.forEach((word) => {
                word.style.setProperty("--shift-x", "0px");
                word.style.setProperty("--shift-y", "0px");
            });
        });
    });

    updateScrollProgress();
    window.addEventListener("scroll", updateScrollProgress, { passive: true });

    const hash = window.location.hash.replace("#", "");
    if (hash) {
        setActiveLink(hash);
        return;
    }

    if (sections.length > 0) {
        setActiveLink(sections[0].id);
    }
});
