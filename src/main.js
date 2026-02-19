/* ═══════════════════════════════════════════════
   BROCE™ Application Entry Point
   ═══════════════════════════════════════════════
   Boots the SPA: theme init → auth check → 
   Gate or Router → Intelligence layers.

   v3: Route-level code splitting via dynamic 
   import(). Sub-pages load on demand.
   ═══════════════════════════════════════════════ */

// Styles (imported in order)
import './styles/tokens.css';
import './styles/base.css';
import './styles/layout.css';
import './styles/components.css';
import './styles/gate.css';
import './styles/pages.css';
import './styles/themes.css';
import './styles/intelligence.css';
import './styles/intelligence-v2.css';

// Modules
import { i18n } from './i18n.js';
import { isAuthenticated, isLocalPreview } from './utils/auth.js';
import { renderGate } from './components/Gate.js';
import { createRouter } from './router.js';
import { initIntelligence, initPageIntelligence, updateRouteMeta } from './utils/intelligence.js';
import { initIntelligenceV2, initPageIntelligenceV2, initScrollSpy, destroyScrollSpy, destroyParallaxDepth } from './utils/intelligence-v2.js';
import { initConstellation, destroyConstellation } from './utils/constellation.js';
import { initTheme } from './utils/theme.js';
import { initNetworkDetection, getConnectionTier } from './utils/network.js';
import { initSessionMemory, saveSessionRoute, initIdleDetection, initExitIntent } from './utils/intelligence-v3.js';

// Critical-path page (always loaded)
import { renderMainPage } from './pages/Main.js';

/* ── Lazy loaders for sub-pages ── */

const SKELETON = `
  <div class="route-skeleton">
    <div class="skeleton-bar skeleton-bar--hero"></div>
    <div class="skeleton-bar skeleton-bar--sub"></div>
    <div class="skeleton-bar skeleton-bar--body"></div>
    <div class="skeleton-bar skeleton-bar--body"></div>
    <div class="skeleton-bar skeleton-bar--wide"></div>
  </div>
`;

/**
 * Create a lazy route handler. Shows a skeleton
 * while the chunk loads, then renders the page.
 */
function lazy(loader, exportName) {
  // Cache the loaded module once resolved
  let cached = null;

  return async (el) => {
    if (cached) {
      cached(el);
      return;
    }

    // Show skeleton while loading
    el.innerHTML = SKELETON;

    try {
      const mod = await loader();
      cached = mod[exportName];
      cached(el);
    } catch (err) {
      console.error('[BROCE] Route chunk failed:', err);
      el.innerHTML = '<p style="padding:120px 48px;opacity:.5">Failed to load page. Please refresh.</p>';
    }
  };
}

const lazyTechnology = lazy(() => import('./pages/Technology.js'), 'renderTechnologyPage');
const lazyProducts = lazy(() => import('./pages/Products.js'), 'renderProductsPage');
const lazyAbout = lazy(() => import('./pages/About.js'), 'renderAboutPage');
const lazyInvestor = lazy(() => import('./pages/Investor.js'), 'renderInvestorPage');

/* ── Mount Point ── */

const app = document.getElementById('app');

function boot() {
  // Initialize theme and network detection before anything renders
  initTheme();
  initNetworkDetection();
  initSessionMemory();

  document.documentElement.lang = i18n.currentLang;

  if (isAuthenticated() || isLocalPreview()) {
    startRouter();
  } else {
    showGate();
  }
}

function showGate() {
  renderGate(app, () => {
    setTimeout(() => {
      startRouter();
      window.scrollTo(0, 0);
    }, 100);
  });
}

function startRouter() {
  const router = createRouter(app);

  // Global intelligence v1 (scroll progress, back-to-top, keyboard nav, cursor glow)
  initIntelligence();

  // Global intelligence v2 (adaptive theme, command palette)
  initIntelligenceV2();

  // Global intelligence v3 (idle detection, exit intent)
  initIdleDetection();
  initExitIntent();

  // After-each hook: run per-page intelligence after every transition
  router.afterEach((path) => {
    updateRouteMeta(path);
    saveSessionRoute(path);
    requestAnimationFrame(() => {
      // Per-page v1 effects
      initPageIntelligence();

      // Per-page v2 effects (text decode, smart prefetch)
      initPageIntelligenceV2();

      // Home-only features
      const ambient = document.querySelector('.ambient');
      const connTier = getConnectionTier();
      if (path === '/') {
        // Scroll-spy only on main page (section-based nav)
        initScrollSpy();
        // Constellation particles on home (skip on slow/medium connections)
        if (ambient && connTier === 'fast') initConstellation(ambient);
      } else {
        destroyScrollSpy();
        destroyParallaxDepth();
        destroyConstellation();
      }
    });
  });

  // Main page — eagerly loaded (critical path)
  router.route('/', (el) => renderMainPage(el));

  // Sub-pages — lazy loaded (code-split chunks)
  router.route('/technology', (el) => lazyTechnology(el));
  router.route('/products', (el) => lazyProducts(el));
  router.route('/about', (el) => lazyAbout(el));
  router.route('/investor', (el) => lazyInvestor(el));

  // Catch-all → home
  router.route('*', (el) => renderMainPage(el));

  // Resolve the current hash (or default to /)
  router.resolve();
}

/* ── Initialize ── */
boot();

