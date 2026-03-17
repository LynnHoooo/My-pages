document.addEventListener("DOMContentLoaded", () => {
    const sections = Array.from(document.querySelectorAll("main section[id]"));
    const navLinks = Array.from(document.querySelectorAll(".nav-link"));
    const revealItems = document.querySelectorAll("[data-reveal]");

    const setActiveLink = (id) => {
        navLinks.forEach((link) => {
            const isActive = link.getAttribute("href") === `#${id}`;
            link.classList.toggle("active", isActive);
        });
    };

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

    const hash = window.location.hash.replace("#", "");
    if (hash) {
        setActiveLink(hash);
        return;
    }

    if (sections.length > 0) {
        setActiveLink(sections[0].id);
    }
});
