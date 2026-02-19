/* ═══════════════════════════════════════════════
   BROCE™ Page Shell
   ═══════════════════════════════════════════════
   Shared layout for all sub-pages (Technology,
   Products, About, Investor). Provides header,
   footer, ambient background, and tailor-mat
   texture on dark theme.
   ═══════════════════════════════════════════════ */

import { i18n, t } from '../i18n.js';
import { initScrollReveal } from '../utils/animations.js';
import { toggleTheme } from '../utils/theme.js';
import { openPalette } from '../utils/intelligence-v2.js';

export function renderPageShell(container, { title, content }) {
  container.innerHTML = `
    <a href="#top" class="skip-link">Skip to main content</a>

    <div class="ambient" aria-hidden="true">
      <div class="ambient-gradient"></div>
      <div class="ambient-grid"></div>
      <div class="ambient-mat"></div>
      <div class="ambient-noise"></div>
    </div>

    <div class="top-note">${t('topNote')}</div>

    <header class="site-header is-scrolled" id="siteHeader">
      <a data-route="/" class="brand" aria-label="BROCE home">
        BROCE<span class="brand-mark">&trade;</span>
      </a>

      <button class="menu-toggle" id="menuToggle" aria-label="Toggle navigation" aria-expanded="false">
        <span></span><span></span><span></span>
      </button>

      <nav class="site-nav" id="siteNav">
        <a data-route="/">Home</a>
        <a data-route="/technology">${t('page.technology')}</a>
        <a data-route="/products">${t('page.products')}</a>
        <a data-route="/about">${t('page.about')}</a>
        <a data-route="/investor">${t('page.investor')}</a>
        <div class="lang-switch" role="group" aria-label="Language switch">
          <a href="#" class="lang-link ${i18n.currentLang === 'en' ? 'is-active' : ''}" data-lang="en">EN</a>
          <a href="#" class="lang-link ${i18n.currentLang === 'de' ? 'is-active' : ''}" data-lang="de">DE</a>
        </div>
        <button class="cmd-hint" id="cmdHint" aria-label="Open command palette">
          <kbd>⌘</kbd><kbd>K</kbd>
        </button>
        <button class="theme-toggle" id="themeToggle" aria-label="Toggle color theme">
          <span class="contrast-icon"></span>
        </button>
      </nav>
    </header>

    <main id="pageContent">
      ${content}
    </main>

    <footer class="site-footer">
      <div class="container footer-grid">
        <div>
          <a data-route="/" class="brand footer-brand">BROCE<span class="brand-mark">&trade;</span></a>
          <p>${t('footer.tagline')}</p>
        </div>
        <div class="footer-links">
          <a data-route="/technology">${t('page.technology')}</a>
          <a data-route="/products">${t('page.products')}</a>
          <a data-route="/about">${t('page.about')}</a>
          <a data-route="/investor">${t('page.investor')}</a>
          <a href="mailto:hello@broce.eu">${t('footer.contact')}</a>
        </div>
        <p class="footer-copy">${t('footer.copy')}</p>
      </div>
    </footer>
  `;

  // Mobile menu
  const nav = document.getElementById('siteNav');
  const menuToggle = document.getElementById('menuToggle');

  menuToggle?.addEventListener('click', () => {
    const isOpen = nav.classList.toggle('is-open');
    menuToggle.classList.toggle('is-open', isOpen);
    menuToggle.setAttribute('aria-expanded', isOpen ? 'true' : 'false');
  });

  nav?.querySelectorAll('a[data-route]').forEach(link => {
    link.addEventListener('click', () => {
      nav.classList.remove('is-open');
      menuToggle.classList.remove('is-open');
    });
  });

  // Language switch
  nav?.querySelectorAll('.lang-link').forEach(link => {
    link.addEventListener('click', (e) => {
      e.preventDefault();
      i18n.setLang(link.dataset.lang);
      // Re-render current page
      const hash = window.location.hash;
      window.location.hash = '';
      requestAnimationFrame(() => { window.location.hash = hash || '#/'; });
    });
  });

  // Theme toggle
  const themeBtn = document.getElementById('themeToggle');
  themeBtn?.addEventListener('click', toggleTheme);

  // Cmd+K hint
  const cmdHint = document.getElementById('cmdHint');
  cmdHint?.addEventListener('click', openPalette);

  // Set page title
  document.title = title + ' | BROCE™';

  initScrollReveal();
}
