/* ═══════════════════════════════════════════════
   BROCE™ Header Component
   ═══════════════════════════════════════════════ */

import { i18n, t } from '../i18n.js';
import { toggleTheme } from '../utils/theme.js';
import { openPalette } from '../utils/intelligence-v2.js';

const themeToggleHTML = `
  <button class="theme-toggle" id="themeToggle" aria-label="Toggle color theme">
    <span class="contrast-icon"></span>
  </button>
`;

export function renderHeader() {
  return `
    <div class="top-note" data-i18n="topNote">${t('topNote')}</div>

    <header class="site-header" id="siteHeader">
      <a href="#top" class="brand" aria-label="BROCE home">
        BROCE<span class="brand-mark">&trade;</span>
      </a>

      <button class="menu-toggle" id="menuToggle" aria-label="Toggle navigation" aria-expanded="false" aria-controls="siteNav">
        <span></span><span></span><span></span>
      </button>

      <nav class="site-nav" id="siteNav">
        <a href="#problem">${t('nav.problem')}</a>
        <a href="#intelligence">${t('nav.intelligence')}</a>
        <a href="#architecture">${t('nav.architecture')}</a>
        <a href="#gallery">${t('nav.gallery')}</a>
        <a href="#simulator">${t('nav.simulator')}</a>
        <a href="#faq">${t('nav.faq')}</a>
        <div class="lang-switch" role="group" aria-label="Language switch">
          <a href="#" class="lang-link ${i18n.currentLang === 'en' ? 'is-active' : ''}" data-lang="en" lang="en">EN</a>
          <a href="#" class="lang-link ${i18n.currentLang === 'de' ? 'is-active' : ''}" data-lang="de" lang="de">DE</a>
        </div>
        <button class="cmd-hint" id="cmdHint" aria-label="Open command palette">
          <kbd>⌘</kbd><kbd>K</kbd>
        </button>
        ${themeToggleHTML}
        <a href="#contact" class="nav-cta">${t('nav.cta')}</a>
      </nav>
    </header>
  `;
}

export function initHeader(onLangChange) {
  const header = document.getElementById('siteHeader');
  const nav = document.getElementById('siteNav');
  const menuToggle = document.getElementById('menuToggle');

  if (!header) return;

  // Scroll state
  const setHeaderState = () => {
    header.classList.toggle('is-scrolled', window.scrollY > 14);
  };
  window.addEventListener('scroll', setHeaderState, { passive: true });
  setHeaderState();

  // Mobile menu
  const closeMenu = () => {
    nav.classList.remove('is-open');
    menuToggle.classList.remove('is-open');
    menuToggle.setAttribute('aria-expanded', 'false');
  };

  menuToggle.addEventListener('click', () => {
    const isOpen = nav.classList.toggle('is-open');
    menuToggle.classList.toggle('is-open', isOpen);
    menuToggle.setAttribute('aria-expanded', isOpen ? 'true' : 'false');
  });

  // Close on nav click
  nav.querySelectorAll('a[href^="#"]').forEach((link) => {
    link.addEventListener('click', closeMenu);
  });

  // Resize handler
  window.addEventListener('resize', () => {
    if (window.innerWidth > 980) closeMenu();
  });

  // Language links
  nav.querySelectorAll('.lang-link').forEach((link) => {
    link.addEventListener('click', (e) => {
      e.preventDefault();
      const lang = link.dataset.lang;
      i18n.setLang(lang);
      nav.querySelectorAll('.lang-link').forEach(l => l.classList.toggle('is-active', l.dataset.lang === lang));
      if (onLangChange) onLangChange(lang);
    });
  });

  // Theme toggle
  const themeBtn = document.getElementById('themeToggle');
  themeBtn?.addEventListener('click', toggleTheme);

  // Cmd+K hint
  const cmdHint = document.getElementById('cmdHint');
  cmdHint?.addEventListener('click', openPalette);
}
