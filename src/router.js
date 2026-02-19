/* ═══════════════════════════════════════════════
   BROCE™ Client-Side Router v3
   ═══════════════════════════════════════════════
   Lightweight hash-based SPA router with 
   intelligent transitions.

   Features:
   • Route registration & wildcard fallback
   • Navigation guards (beforeEach)
   • After-each hooks (for analytics, SEO, etc.)
   • View Transitions API (native) + FLIP fallback
   • Prefetch-aware: instant transition if hovered
   • Skeleton loading placeholder
   • Auto-active-link tracking
   • data-route click delegation
   ═══════════════════════════════════════════════ */

import { isRoutePrefetched } from './utils/intelligence-v2.js';

const routes = new Map();
let currentRoute = null;
let mountEl = null;
let beforeEachFn = null;
let afterEachFn = null;
let isTransitioning = false;

/* ── Timing (fallback only) ── */
const FADE_OUT = 140;
const PREFETCH_FADE = 40;

/* ── View Transitions API support ── */
const supportsViewTransitions = typeof document.startViewTransition === 'function';

/* ── Public API ── */

export function createRouter(mount) {
    mountEl = mount;

    window.addEventListener('hashchange', () => resolve());
    document.addEventListener('click', (e) => {
        const anchor = e.target.closest('a[data-route]');
        if (!anchor) return;
        e.preventDefault();
        navigate(anchor.dataset.route);
    });

    return { route, navigate, resolve, guard, afterEach };
}

function route(path, handler) {
    routes.set(path, handler);
}

export function navigate(path) {
    window.location.hash = '#' + path;
}

function guard(fn) {
    beforeEachFn = fn;
}

function afterEach(fn) {
    afterEachFn = fn;
}

/**
 * Resolve the current hash to a route handler.
 * Uses the View Transitions API when available,
 * falls back to manual FLIP transitions.
 */
async function resolve() {
    if (isTransitioning) return;

    const hash = window.location.hash.slice(1) || '/';
    const path = hash.startsWith('/') ? hash : '/' + hash;

    if (beforeEachFn && beforeEachFn(path, currentRoute) === false) {
        return;
    }

    const handler = routes.get(path) || routes.get('*');
    if (!handler) return;

    const prev = currentRoute;
    currentRoute = path;
    isTransitioning = true;

    updateActiveLinks(path);

    const swap = async () => {
        await handler(mountEl);
        window.scrollTo({ top: 0, behavior: 'instant' });
    };

    const finish = () => {
        isTransitioning = false;
        if (afterEachFn) afterEachFn(path, prev);
    };

    // First load — no transition needed
    if (prev === null) {
        await swap();
        finish();
        return;
    }

    // === VIEW TRANSITIONS API (native) ===
    if (supportsViewTransitions) {
        const transition = document.startViewTransition(async () => {
            await swap();
        });
        transition.finished.then(finish).catch(finish);
        return;
    }

    // === FALLBACK: Manual FLIP ===
    const isPrefetched = isRoutePrefetched(path);
    const exitDuration = isPrefetched ? PREFETCH_FADE : FADE_OUT;

    mountEl.classList.add('page-exit');

    setTimeout(async () => {
        await swap();
        mountEl.classList.remove('page-exit');
        mountEl.classList.add('page-enter');

        requestAnimationFrame(() => {
            requestAnimationFrame(() => {
                mountEl.classList.remove('page-enter');
                finish();
            });
        });
    }, exitDuration);
}

/* ── Internal helpers ── */

function updateActiveLinks(path) {
    document.querySelectorAll('[data-route]').forEach((el) => {
        el.classList.toggle('is-active', el.dataset.route === path);
    });
}

