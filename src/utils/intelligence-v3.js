/* ═══════════════════════════════════════════════
   BROCE™ Intelligence Layer v3
   ═══════════════════════════════════════════════
   Advanced contextual features:
   1. Session Memory  — resume where you left off
   2. Idle Detection  — dim/wake the UI
   3. Exit-Intent     — subtle CTA nudge
   ═══════════════════════════════════════════════ */


/* ═══════════════════════════════════════════════
   1. SESSION MEMORY — Resume Experience
   ═══════════════════════════════════════════════
   On return visits, restores:
   • Last visited page
   • Scroll position (debounced save)
   • Session timestamp
   
   Data stored in localStorage under
   'broce-session' as JSON.
   ═══════════════════════════════════════════════ */

const SESSION_KEY = 'broce-session';
const SCROLL_DEBOUNCE = 800; // ms

let scrollTimer = null;

function getSession() {
    try {
        return JSON.parse(localStorage.getItem(SESSION_KEY)) || {};
    } catch { return {}; }
}

function saveSession(patch) {
    const session = { ...getSession(), ...patch, ts: Date.now() };
    localStorage.setItem(SESSION_KEY, JSON.stringify(session));
}

/**
 * Initialize session memory — saves current route
 * and scroll position on scroll. Call once at boot.
 */
export function initSessionMemory() {
    // Save scroll position (debounced)
    const onScroll = () => {
        clearTimeout(scrollTimer);
        scrollTimer = setTimeout(() => {
            saveSession({ scrollY: Math.round(window.scrollY) });
        }, SCROLL_DEBOUNCE);
    };

    window.addEventListener('scroll', onScroll, { passive: true });
}

/**
 * Called after each route change to save the path.
 */
export function saveSessionRoute(path) {
    saveSession({ route: path });
}

/**
 * Returns the stored session if it's recent (< 30min).
 * Used by the router to optionally restore position.
 */
export function getResumeSession() {
    const session = getSession();
    if (!session.ts) return null;

    const age = Date.now() - session.ts;
    const THIRTY_MIN = 30 * 60 * 1000;

    if (age > THIRTY_MIN) return null;

    return session;
}


/* ═══════════════════════════════════════════════
   2. IDLE DETECTION — Dim & Wake
   ═══════════════════════════════════════════════
   After 30s of no interaction, the UI dims 
   subtly. First movement brightens it back.
   Creates a "breathing" quality, like the 
   site is alive and waiting.
   ═══════════════════════════════════════════════ */

const IDLE_TIMEOUT = 30_000; // ms
let idleTimer = null;
let isIdle = false;

export function initIdleDetection() {
    // Skip if reduced motion
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;

    const events = ['mousemove', 'mousedown', 'keydown', 'touchstart', 'scroll', 'wheel'];

    const wake = () => {
        if (isIdle) {
            isIdle = false;
            document.documentElement.classList.remove('is-idle');
        }
        resetIdleTimer();
    };

    const goIdle = () => {
        isIdle = true;
        document.documentElement.classList.add('is-idle');
    };

    const resetIdleTimer = () => {
        clearTimeout(idleTimer);
        idleTimer = setTimeout(goIdle, IDLE_TIMEOUT);
    };

    events.forEach(evt => {
        window.addEventListener(evt, wake, { passive: true });
    });

    resetIdleTimer();
}


/* ═══════════════════════════════════════════════
   3. EXIT-INTENT — Subtle CTA Nudge
   ═══════════════════════════════════════════════
   When the mouse moves toward the top of the 
   viewport (common exit pattern), we briefly 
   pulse the main CTA button. No popup. No 
   modal. Just a subtle "hey, don't forget."
   
   Only fires once per session.
   ═══════════════════════════════════════════════ */

const EXIT_KEY = 'broce-exit-nudge';
let exitFired = false;

export function initExitIntent() {
    // Skip on touch devices or if already fired this session
    if ('ontouchstart' in window) return;
    if (sessionStorage.getItem(EXIT_KEY)) return;

    const handler = (e) => {
        if (exitFired) return;

        // Mouse leaving viewport at top
        if (e.clientY <= 5 && e.movementY < -2) {
            exitFired = true;
            sessionStorage.setItem(EXIT_KEY, '1');
            window.removeEventListener('mousemove', handler);

            // Find the primary CTA and pulse it
            const cta = document.querySelector('.hero-cta-primary, .btn-primary, [data-route="/"].hero-cta');
            if (!cta) return;

            cta.classList.add('exit-pulse');
            setTimeout(() => cta.classList.remove('exit-pulse'), 2000);

            // Also pulse the top-note if visible
            const topNote = document.querySelector('.top-note');
            if (topNote) {
                topNote.classList.add('exit-pulse');
                setTimeout(() => topNote.classList.remove('exit-pulse'), 2000);
            }
        }
    };

    // Only start listening after user has been on page for 5 seconds
    setTimeout(() => {
        window.addEventListener('mousemove', handler, { passive: true });
    }, 5000);
}
