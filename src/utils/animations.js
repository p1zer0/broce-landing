/* ═══════════════════════════════════════════════
   BROCE™ Scroll Reveal System
   ═══════════════════════════════════════════════ */

let observer = null;

export function initScrollReveal() {
    if (observer) observer.disconnect();

    observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                entry.target.classList.add('is-visible');
                observer.unobserve(entry.target);
            }
        });
    }, {
        threshold: 0.12,
        rootMargin: '0px 0px -46px 0px'
    });

    document.querySelectorAll('[data-reveal]').forEach((item) => {
        observer.observe(item);
    });

    document.querySelectorAll('[data-stagger-item]').forEach((item) => {
        observer.observe(item);
    });
}

