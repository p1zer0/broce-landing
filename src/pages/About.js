/* ═══════════════════════════════════════════════
   BROCE™ About Page
   ═══════════════════════════════════════════════ */

import { t } from '../i18n.js';
import { renderPageShell } from '../components/PageShell.js';

export function renderAboutPage(container) {
  const content = `
    <section class="section page-hero-section" id="top">
      <div class="container" style="text-align:center; max-width:820px;">
        <p class="eyebrow" data-reveal="up">${t('about.hero.eyebrow')}</p>
        <h1 data-reveal="up" data-decode>${t('about.hero.title')}</h1>
        <p class="lead" data-reveal="up">${t('about.hero.subtitle')}</p>
      </div>
    </section>

    <!-- Mission -->
    <section class="section">
      <div class="container">
        <div class="highlight-split highlight-reverse" data-reveal="up">
          <div class="highlight-visual">
            <picture>
              <source srcset="/assets/lifestyle-movement-manifesto.webp" type="image/webp">
              <img src="/assets/lifestyle-movement-manifesto.jpg" alt="BROCE team at work" loading="lazy" width="800" height="600">
            </picture>
          </div>
          <div class="highlight-content">
            <h2>${t('about.mission.title')}</h2>
            <p>${t('about.mission.text1')}</p>
            <p>${t('about.mission.text2')}</p>
          </div>
        </div>
      </div>
    </section>

    <!-- Values -->
    <section class="section section-muted">
      <div class="container">
        <div class="section-head" data-reveal="up">
          <h2>${t('about.values.title')}</h2>
        </div>
        <div class="values-grid" data-stagger>
          <article class="value-card" data-tilt data-stagger-item>
            <div class="value-icon">
              <svg viewBox="0 0 24 24"><circle cx="12" cy="12" r="10" stroke="currentColor" stroke-width="1.5" fill="none"/><path d="M8 14s1.5 2 4 2 4-2 4-2" stroke="currentColor" stroke-width="1.5" fill="none"/><line x1="9" y1="9" x2="9.01" y2="9" stroke="currentColor" stroke-width="2"/><line x1="15" y1="9" x2="15.01" y2="9" stroke="currentColor" stroke-width="2"/></svg>
            </div>
            <h3>${t('about.value1.title')}</h3>
            <p>${t('about.value1.text')}</p>
          </article>
          <article class="value-card" data-tilt data-stagger-item>
            <div class="value-icon">
              <svg viewBox="0 0 24 24"><path d="M12 2L2 7l10 5 10-5-10-5z" stroke="currentColor" stroke-width="1.5" fill="none"/><path d="M2 17l10 5 10-5M2 12l10 5 10-5" stroke="currentColor" stroke-width="1.5" fill="none"/></svg>
            </div>
            <h3>${t('about.value2.title')}</h3>
            <p>${t('about.value2.text')}</p>
          </article>
          <article class="value-card" data-tilt data-stagger-item>
            <div class="value-icon">
              <svg viewBox="0 0 24 24"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" stroke="currentColor" stroke-width="1.5" fill="none"/></svg>
            </div>
            <h3>${t('about.value3.title')}</h3>
            <p>${t('about.value3.text')}</p>
          </article>
          <article class="value-card" data-tilt data-stagger-item>
            <div class="value-icon">
              <svg viewBox="0 0 24 24"><circle cx="12" cy="12" r="5" stroke="currentColor" stroke-width="1.5" fill="none"/><line x1="12" y1="1" x2="12" y2="3" stroke="currentColor" stroke-width="1.5"/><line x1="12" y1="21" x2="12" y2="23" stroke="currentColor" stroke-width="1.5"/><line x1="4.22" y1="4.22" x2="5.64" y2="5.64" stroke="currentColor" stroke-width="1.5"/><line x1="18.36" y1="18.36" x2="19.78" y2="19.78" stroke="currentColor" stroke-width="1.5"/></svg>
            </div>
            <h3>${t('about.value4.title')}</h3>
            <p>${t('about.value4.text')}</p>
          </article>
        </div>
      </div>
    </section>

    <!-- Timeline -->
    <section class="section">
      <div class="container" style="max-width:800px;">
        <div class="section-head" data-reveal="up">
          <h2>${t('about.timeline.title')}</h2>
        </div>
        <div class="timeline" data-reveal="up">
          ${[
      { year: '2023', event: t('about.tl1.event'), desc: t('about.tl1.desc') },
      { year: '2024', event: t('about.tl2.event'), desc: t('about.tl2.desc') },
      { year: '2025', event: t('about.tl3.event'), desc: t('about.tl3.desc') },
      { year: '2026', event: t('about.tl4.event'), desc: t('about.tl4.desc') }
    ].map(item => `
            <div class="timeline-item">
              <span class="timeline-year">${item.year}</span>
              <h3 class="timeline-event">${item.event}</h3>
              <p class="timeline-desc">${item.desc}</p>
            </div>
          `).join('')}
        </div>
      </div>
    </section>

    <!-- CTA -->
    <section class="section">
      <div class="container">
        <div class="cta-panel" data-reveal="up">
          <p class="eyebrow">${t('about.cta.eyebrow')}</p>
          <h2>${t('about.cta.title')}</h2>
          <p>${t('about.cta.text')}</p>
          <div class="cta-actions">
            <a href="mailto:hello@broce.eu" class="btn btn-primary">${t('about.cta.btn')}</a>
            <a data-route="/investor" class="btn btn-secondary">${t('about.cta.btn2')}</a>
          </div>
        </div>
      </div>
    </section>
  `;

  renderPageShell(container, { title: t('page.about'), content });
}
