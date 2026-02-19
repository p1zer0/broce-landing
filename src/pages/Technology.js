/* ═══════════════════════════════════════════════
   BROCE™ Technology Page
   ═══════════════════════════════════════════════ */

import { t } from '../i18n.js';
import { renderPageShell } from '../components/PageShell.js';
import { initScrollReveal } from '../utils/animations.js';

export function renderTechnologyPage(container) {
  const content = `
    <section class="section page-hero-section" id="top">
      <div class="container" style="text-align:center; max-width:820px;">
        <p class="eyebrow" data-reveal="up">${t('tech.hero.eyebrow')}</p>
        <h1 data-reveal="up" data-decode>${t('tech.hero.title')}</h1>
        <p class="lead" data-reveal="up">${t('tech.hero.subtitle')}</p>
      </div>
    </section>

    <!-- Tech Cards Grid -->
    <section class="section section-tight">
      <div class="container">
        <div class="tech-grid" data-stagger>
          <article class="tech-deep-card" data-tilt data-stagger-item>
            <div class="tech-deep-icon">
              <svg viewBox="0 0 24 24"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" stroke="currentColor" stroke-width="1.5" fill="none"/></svg>
            </div>
            <h3>${t('tech.card1.title')}</h3>
            <p>${t('tech.card1.text')}</p>
            <div class="tech-spec-tags">
              <span>STF Polymer</span>
              <span>Rate-Dependent</span>
              <span>CE Certified</span>
            </div>
          </article>

          <article class="tech-deep-card" data-tilt data-stagger-item>
            <div class="tech-deep-icon">
              <svg viewBox="0 0 24 24"><circle cx="12" cy="12" r="10" stroke="currentColor" stroke-width="1.5" fill="none"/><path d="M12 6v6l4 2" stroke="currentColor" stroke-width="1.5" fill="none"/></svg>
            </div>
            <h3>${t('tech.card2.title')}</h3>
            <p>${t('tech.card2.text')}</p>
            <div class="tech-spec-tags">
              <span>3D Scan</span>
              <span>Bone-Mapped</span>
              <span>Custom Fit</span>
            </div>
          </article>

          <article class="tech-deep-card" data-tilt data-stagger-item>
            <div class="tech-deep-icon">
              <svg viewBox="0 0 24 24"><polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2" stroke="currentColor" stroke-width="1.5" fill="none"/></svg>
            </div>
            <h3>${t('tech.card3.title')}</h3>
            <p>${t('tech.card3.text')}</p>
            <div class="tech-spec-tags">
              <span>μs Response</span>
              <span>TPMS Lattice</span>
              <span>AI Optimized</span>
            </div>
          </article>

          <article class="tech-deep-card" data-tilt data-stagger-item>
            <div class="tech-deep-icon">
              <svg viewBox="0 0 24 24"><path d="M20.24 12.24a6 6 0 0 0-8.49-8.49L5 10.5V19h8.5z" stroke="currentColor" stroke-width="1.5" fill="none"/><line x1="16" y1="8" x2="2" y2="22" stroke="currentColor" stroke-width="1.5"/></svg>
            </div>
            <h3>${t('tech.card4.title')}</h3>
            <p>${t('tech.card4.text')}</p>
            <div class="tech-spec-tags">
              <span>Dyneema SL</span>
              <span>Aramid</span>
              <span>Ultralight</span>
            </div>
          </article>

          <article class="tech-deep-card" data-tilt data-stagger-item>
            <div class="tech-deep-icon">
              <svg viewBox="0 0 24 24"><path d="M12 2L2 7l10 5 10-5-10-5z" stroke="currentColor" stroke-width="1.5" fill="none"/><path d="M2 17l10 5 10-5M2 12l10 5 10-5" stroke="currentColor" stroke-width="1.5" fill="none"/></svg>
            </div>
            <h3>${t('tech.card5.title')}</h3>
            <p>${t('tech.card5.text')}</p>
            <div class="tech-spec-tags">
              <span>3-Layer</span>
              <span>Breathable</span>
              <span>Seamless</span>
            </div>
          </article>

          <article class="tech-deep-card" data-tilt data-stagger-item>
            <div class="tech-deep-icon">
              <svg viewBox="0 0 24 24"><circle cx="12" cy="12" r="10" stroke="currentColor" stroke-width="1.5" fill="none"/><path d="M12 2a10 10 0 1 0 10 10H12V2z" stroke="currentColor" stroke-width="1.5" fill="none"/></svg>
            </div>
            <h3>${t('tech.card6.title')}</h3>
            <p>${t('tech.card6.text')}</p>
            <div class="tech-spec-tags">
              <span>PCM Tech</span>
              <span>Vented</span>
              <span>Adaptive</span>
            </div>
          </article>
        </div>
      </div>
    </section>

    <!-- Highlight Section -->
    <section class="section">
      <div class="container">
        <div class="highlight-split" data-reveal="up">
          <div class="highlight-visual">
            <picture>
              <source srcset="/assets/tech-pad-crosssection.webp" type="image/webp">
              <img src="/assets/tech-pad-crosssection.jpg" alt="BROCE protection cross-section" loading="lazy" width="600" height="600">
            </picture>
          </div>
          <div class="highlight-content">
            <h2>${t('tech.highlight.title')}</h2>
            <p>${t('tech.highlight.text')}</p>
            <div class="stat-row">
              <article>
                <p class="stat-value" data-counter-target="97" data-counter-suffix="%">97%</p>
                <p class="stat-label">${t('tech.highlight.stat1')}</p>
              </article>
              <article>
                <p class="stat-value" data-counter-target="2.6" data-counter-suffix="mm">2.6mm</p>
                <p class="stat-label">${t('tech.highlight.stat2')}</p>
              </article>
              <article>
                <p class="stat-value">360°</p>
                <p class="stat-label">${t('tech.highlight.stat3')}</p>
              </article>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- CTA -->
    <section class="section">
      <div class="container">
        <div class="cta-panel" data-reveal="up">
          <p class="eyebrow">${t('tech.cta.eyebrow')}</p>
          <h2>${t('tech.cta.title')}</h2>
          <p>${t('tech.cta.text')}</p>
          <div class="cta-actions">
            <a data-route="/" class="btn btn-primary">${t('tech.cta.btn1')}</a>
            <a href="mailto:hello@broce.eu" class="btn btn-secondary">${t('tech.cta.btn2')}</a>
          </div>
        </div>
      </div>
    </section>
  `;

  renderPageShell(container, { title: t('page.technology'), content });
}
