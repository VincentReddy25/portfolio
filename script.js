/* ========================================
   1. INITIALIZE PORTFOLIO
======================================== */

document.addEventListener("DOMContentLoaded", () => {
    initializeIcons();
    initializeMobileMenu();
    initializeHeader();
    initializeScrollReveal();
    initializeFooterYear();
});


/* ========================================
   2. INITIALIZE LUCIDE ICONS
======================================== */

function initializeIcons() {
    if (window.lucide) {
        window.lucide.createIcons();
    }
}


/* ========================================
   3. MOBILE NAVIGATION MENU
======================================== */

function initializeMobileMenu() {
    const menuToggle = document.querySelector(".menu-toggle");
    const navMenu = document.querySelector(".nav-menu");
    const navLinks = document.querySelectorAll(".nav-link");

    if (!menuToggle || !navMenu) {
        return;
    }

    function openMenu() {
        navMenu.classList.add("is-open");
        menuToggle.setAttribute("aria-expanded", "true");
        menuToggle.setAttribute("aria-label", "Close navigation menu");

        const icon = menuToggle.querySelector("svg");

        if (icon) {
            icon.replaceWith(createMenuIcon("x"));
        }
    }

    function closeMenu() {
        navMenu.classList.remove("is-open");
        menuToggle.setAttribute("aria-expanded", "false");
        menuToggle.setAttribute("aria-label", "Open navigation menu");

        const icon = menuToggle.querySelector("svg");

        if (icon) {
            icon.replaceWith(createMenuIcon("menu"));
        }
    }

    function createMenuIcon(iconName) {
        const icon = document.createElementNS(
            "http://www.w3.org/2000/svg",
            "svg"
        );

        icon.setAttribute("width", "24");
        icon.setAttribute("height", "24");
        icon.setAttribute("viewBox", "0 0 24 24");
        icon.setAttribute("fill", "none");
        icon.setAttribute("stroke", "currentColor");
        icon.setAttribute("stroke-width", "2");
        icon.setAttribute("stroke-linecap", "round");
        icon.setAttribute("stroke-linejoin", "round");
        icon.setAttribute("aria-hidden", "true");

        if (iconName === "x") {
            const firstLine = document.createElementNS(
                "http://www.w3.org/2000/svg",
                "path"
            );

            firstLine.setAttribute("d", "M18 6 6 18");

            const secondLine = document.createElementNS(
                "http://www.w3.org/2000/svg",
                "path"
            );

            secondLine.setAttribute("d", "m6 6 12 12");

            icon.append(firstLine, secondLine);
        } else {
            const path = document.createElementNS(
                "http://www.w3.org/2000/svg",
                "path"
            );

            path.setAttribute("d", "M4 6h16M4 12h16M4 18h16");

            icon.appendChild(path);
        }

        return icon;
    }

    menuToggle.addEventListener("click", () => {
        const isOpen =
            menuToggle.getAttribute("aria-expanded") === "true";

        if (isOpen) {
            closeMenu();
        } else {
            openMenu();
        }
    });

    // Close the menu after selecting a navigation link.
    navLinks.forEach((link) => {
        link.addEventListener("click", closeMenu);
    });

    // Close the menu when clicking outside it.
    document.addEventListener("click", (event) => {
        const isOpen =
            menuToggle.getAttribute("aria-expanded") === "true";

        if (
            isOpen &&
            !navMenu.contains(event.target) &&
            !menuToggle.contains(event.target)
        ) {
            closeMenu();
        }
    });

    // Close the menu with the Escape key.
    document.addEventListener("keydown", (event) => {
        if (event.key === "Escape") {
            closeMenu();
            menuToggle.focus();
        }
    });

    // Close the mobile menu when returning to desktop layout.
    window.addEventListener("resize", () => {
        if (window.innerWidth > 700) {
            closeMenu();
        }
    });
}


/* ========================================
   4. HEADER SCROLL EFFECT
======================================== */

function initializeHeader() {
    const header = document.querySelector(".site-header");

    if (!header) {
        return;
    }

    function updateHeader() {
        if (window.scrollY > 20) {
            header.classList.add("scrolled");
        } else {
            header.classList.remove("scrolled");
        }
    }

    updateHeader();

    window.addEventListener("scroll", updateHeader, {
        passive: true
    });
}


/* ========================================
   5. SCROLL REVEAL ANIMATIONS
======================================== */

function initializeScrollReveal() {
    const revealElements = document.querySelectorAll(".reveal");

    if (revealElements.length === 0) {
        return;
    }

    // Respect the user's reduced-motion preference.
    const prefersReducedMotion = window.matchMedia(
        "(prefers-reduced-motion: reduce)"
    ).matches;

    if (
        prefersReducedMotion ||
        !("IntersectionObserver" in window)
    ) {
        revealElements.forEach((element) => {
            element.classList.add("is-visible");
        });

        return;
    }

    const observer = new IntersectionObserver(
        (entries, currentObserver) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    entry.target.classList.add("is-visible");

                    currentObserver.unobserve(entry.target);
                }
            });
        },
        {
            threshold: 0.12,
            rootMargin: "0px 0px -40px 0px"
        }
    );

    revealElements.forEach((element) => {
        observer.observe(element);
    });
}


/* ========================================
   6. DYNAMIC FOOTER YEAR
======================================== */

function initializeFooterYear() {
    const yearElement = document.getElementById("year");

    if (yearElement) {
        yearElement.textContent = new Date().getFullYear();
    }
}