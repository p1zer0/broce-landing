/* ═══════════════════════════════════════════════
   BROCE™ Intelligence Layer
   ═══════════════════════════════════════════════
   Smart micro-interactions that make the site
   feel alive and responsive:
   1. 3D tilt cards (GPU-accelerated)
   2. Scroll progress indicator
   3. Smart back-to-top button
   4. Keyboard shortcuts
   5. Magnetic cursor effect on CTAs
   6. Stagger-reveal for list items
   ═══════════════════════════════════════════════ */

/* ── 1. 3D Tilt Cards ── */

const TILT_MAX = 8;          // degrees
const TILT_PERSPECTIVE = 800; // px
const TILT_SCALE = 1.03;
const TILT_SPEED = 300;       // ms transition

export function initTiltCards() {
    document.querySelectorAll('[data-tilt]').forEach((card) => {
        card.style.transformStyle = 'preserve-3d';

        card.addEventListener('mousemove', (e) => {
            const rect = card.getBoundingClientRect();
            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;
            const midX = rect.width / 2;
            const midY = rect.height / 2;
            const rotY = ((x - midX) / midX) * TILT_MAX;
            const rotX = ((midY - y) / midY) * TILT_MAX;

            card.style.transition = 'transform 60ms ease-out';
            card.style.transform = `perspective(${TILT_PERSPECTIVE}px) rotateX(${rotX}deg) rotateY(${rotY}deg) scale3d(${TILT_SCALE},${TILT_SCALE},1)`;
        }, { passive: true });

        card.addEventListener('mouseleave', () => {
            card.style.transition = `transform ${TILT_SPEED}ms cubic-bezier(0.16, 1, 0.3, 1)`;
            card.style.transform = 'perspective(800px) rotateX(0) rotateY(0) scale3d(1,1,1)';
        });
    });
}

/* ── 2. Scroll Progress Bar ── */

let progressBar = null;
let progressTicking = false;

export function initScrollProgress() {
    if (progressBar) progressBar.remove();

    progressBar = document.createElement('div');
    progressBar.id = 'scrollProgress';
    progressBar.setAttribute('role', 'progressbar');
    progressBar.setAttribute('aria-label', 'Page scroll progress');
    document.body.appendChild(progressBar);

    const update = () => {
        const scrolled = window.scrollY;
        const total = document.documentElement.scrollHeight - window.innerHeight;
        const pct = total > 0 ? (scrolled / total) * 100 : 0;
        progressBar.style.width = pct + '%';
        progressTicking = false;
    };

    window.addEventListener('scroll', () => {
        if (!progressTicking) {
            requestAnimationFrame(update);
            progressTicking = true;
        }
    }, { passive: true });
    update();
}

/* ── 3. Smart Back-to-Top ── */

let topBtn = null;

export function initBackToTop() {
    if (topBtn) topBtn.remove();

    topBtn = document.createElement('button');
    topBtn.id = 'backToTop';
    topBtn.setAttribute('aria-label', 'Back to top');
    topBtn.innerHTML = `<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><polyline points="18 15 12 9 6 15"/></svg>`;
    document.body.appendChild(topBtn);

    topBtn.addEventListener('click', () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    });

    const toggle = () => {
        topBtn.classList.toggle('is-visible', window.scrollY > 600);
    };

    window.addEventListener('scroll', toggle, { passive: true });
    toggle();
}

/* ── 4. Keyboard Navigation ── */

export function initKeyboardNav() {
    document.addEventListener('keydown', (e) => {
        // Ignore when typing in inputs
        if (['INPUT', 'TEXTAREA', 'SELECT'].includes(e.target.tagName)) return;

        // Page shortcuts (Alt + number)
        if (e.altKey) {
            const routes = { '1': '/', '2': '/technology', '3': '/products', '4': '/about', '5': '/investor' };
            if (routes[e.key]) {
                e.preventDefault();
                window.location.hash = '#' + routes[e.key];
            }
        }

        // Back to top with Home key
        if (e.key === 'Home' && !e.ctrlKey && !e.metaKey) {
            window.scrollTo({ top: 0, behavior: 'smooth' });
        }

        // End of page with End key
        if (e.key === 'End' && !e.ctrlKey && !e.metaKey) {
            window.scrollTo({ top: document.body.scrollHeight, behavior: 'smooth' });
        }
    });
}

/* ── 5. Magnetic Cursor on CTAs ── */

export function initMagneticButtons() {
    document.querySelectorAll('.btn-primary, .nav-cta, [data-magnetic]').forEach((btn) => {
        btn.addEventListener('mousemove', (e) => {
            const rect = btn.getBoundingClientRect();
            const x = e.clientX - rect.left - rect.width / 2;
            const y = e.clientY - rect.top - rect.height / 2;
            btn.style.transform = `translate(${x * 0.2}px, ${y * 0.2}px)`;
        });

        btn.addEventListener('mouseleave', () => {
            btn.style.transition = 'transform 400ms cubic-bezier(0.16, 1, 0.3, 1)';
            btn.style.transform = 'translate(0, 0)';
            setTimeout(() => { btn.style.transition = ''; }, 400);
        });
    });
}

/* ── 6. Stagger Reveal (grids / lists) ── */

export function initStaggerReveal() {
    const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
            if (!entry.isIntersecting) return;
            const container = entry.target;
            const items = container.querySelectorAll('[data-stagger-item]');
            items.forEach((item, i) => {
                item.style.transitionDelay = `${i * 80}ms`;
                item.classList.add('stagger-visible');
            });
            observer.unobserve(container);
        });
    }, { threshold: 0.1 });

    document.querySelectorAll('[data-stagger]').forEach((el) => {
        observer.observe(el);
    });
}

/* ── 7. Smart Cursor Glow ── */

let cursorGlow = null;
let glowX = 0, glowY = 0;
let glowRaf = null;
let glowVisible = false;

export function initCursorGlow() {
    if (window.matchMedia('(hover: none)').matches) return; // no touch

    cursorGlow = document.createElement('div');
    cursorGlow.id = 'cursorGlow';
    document.body.appendChild(cursorGlow);

    // Use transform instead of left/top for GPU compositing
    const updateGlowPosition = () => {
        cursorGlow.style.transform = `translate(${glowX - 250}px, ${glowY - 250}px)`;
        glowRaf = null;
    };

    document.addEventListener('mousemove', (e) => {
        glowX = e.clientX;
        glowY = e.clientY;
        if (!glowVisible) {
            cursorGlow.style.opacity = '1';
            glowVisible = true;
        }
        // Throttle to next frame — avoids redundant style writes
        if (!glowRaf) {
            glowRaf = requestAnimationFrame(updateGlowPosition);
        }
    }, { passive: true });

    document.addEventListener('mouseleave', () => {
        cursorGlow.style.opacity = '0';
        glowVisible = false;
    });
}

/* ── 8. Route-Aware SEO (Dynamic Meta) ── */

const META_MAP = {
    '/': {
        title: 'BROCE™ — Protection Intelligence Platform',
        description: 'From protection product to protection intelligence. BROCE combines anatomy-aware risk modelling with adaptive material systems.',
    },
    '/technology': {
        title: 'Technology | BROCE™',
        description: 'The science of invisible protection. Revolutionary materials and engineering that redefine what protective clothing can be.',
    },
    '/products': {
        title: 'Products | BROCE™',
        description: 'Invisible protection, visible style. Discover our range of protective clothing for every situation.',
    },
    '/about': {
        title: 'About | BROCE™',
        description: 'Protection, built for the future. Our mission to make protective clothing invisible — so you can live without limits.',
    },
    '/investor': {
        title: 'Investor Portal | BROCE™',
        description: 'Building the Precision Bodywear category. BROCE defines a new market at the intersection of material science, biomechanics, and fashion engineering.',
    },
};

export function updateRouteMeta(path) {
    const meta = META_MAP[path] || META_MAP['/'];
    document.title = meta.title;

    let descTag = document.querySelector('meta[name="description"]');
    if (!descTag) {
        descTag = document.createElement('meta');
        descTag.name = 'description';
        document.head.appendChild(descTag);
    }
    descTag.content = meta.description;

    // OG tags
    setOGTag('og:title', meta.title);
    setOGTag('og:description', meta.description);
    setOGTag('og:url', window.location.href);
}

function setOGTag(property, content) {
    let tag = document.querySelector(`meta[property="${property}"]`);
    if (!tag) {
        tag = document.createElement('meta');
        tag.setAttribute('property', property);
        document.head.appendChild(tag);
    }
    tag.content = content;
}

/* ── Master Init ── */

export function initIntelligence() {
    initScrollProgress();
    initBackToTop();
    initKeyboardNav();
    initCursorGlow();
}

export function initPageIntelligence() {
    initTiltCards();
    initMagneticButtons();
    initStaggerReveal();
}
