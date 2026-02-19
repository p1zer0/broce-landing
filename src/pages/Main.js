/* ═══════════════════════════════════════════════
   BROCE™ Main Page
   ═══════════════════════════════════════════════ */

import { i18n, t } from '../i18n.js';
import { renderHeader, initHeader } from '../components/Header.js';
import { initScrollReveal } from '../utils/animations.js';
import { personaData, presetProfiles, zoneWeights } from '../data/personas.js';
import { eur, clamp } from '../utils/format.js';

export function renderMainPage(container) {
  const lang = i18n.currentLang;

  const localizedField = (obj) => {
    if (typeof obj === 'string') return obj;
    return obj[lang] || obj.en || '';
  };

  container.innerHTML = `
    <a href="#top" class="skip-link">Skip to main content</a>

    <div class="ambient" aria-hidden="true">
      <div class="ambient-gradient"></div>
      <div class="ambient-grid"></div>
      <div class="ambient-mat"></div>
      <div class="ambient-noise"></div>
      <div class="ambient-blob blob-a"></div>
      <div class="ambient-blob blob-b"></div>
    </div>

    ${renderHeader()}

    <main>
      <!-- ══ HERO ══ -->
      <section class="section hero" id="top">
        <div class="container hero-grid">
          <div class="hero-copy" data-reveal="up">
            <p class="eyebrow">${t('hero.eyebrow')}</p>
            <h1 data-decode>${t('hero.title')}</h1>
            <p class="lead">${t('hero.lead')}</p>
            <div class="hero-actions">
              <a href="#contact" class="btn btn-primary">${t('hero.cta1')}</a>
              <a href="#simulator" class="btn btn-secondary">${t('hero.cta2')}</a>
            </div>
            <div class="hero-metrics">
              <article>
                <p class="hero-metric-value" data-counter-target="2.6" data-counter-suffix="mm">2.6mm</p>
                <p class="hero-metric-label">${t('hero.metric1.label')}</p>
              </article>
              <article>
                <p class="hero-metric-value" data-counter-target="12" data-counter-suffix="">12</p>
                <p class="hero-metric-label">${t('hero.metric2.label')}</p>
              </article>
              <article>
                <p class="hero-metric-value" data-counter-target="91" data-counter-suffix="%">91%</p>
                <p class="hero-metric-label">${t('hero.metric3.label')}</p>
              </article>
              <article>
                <p class="hero-metric-value" data-counter-target="14" data-counter-suffix="d">14d</p>
                <p class="hero-metric-label">${t('hero.metric4.label')}</p>
              </article>
            </div>
          </div>

          <div class="hero-panel" data-reveal="up">
            <div class="hero-visual">
              <picture>
                <source srcset="/assets/hero-premium.webp" type="image/webp">
                <img src="/assets/hero-premium.jpg"
                  alt="BROCE intelligent protective bodywear in urban movement context"
                  loading="eager" fetchpriority="high" width="800" height="1000">
              </picture>
              <div class="hero-overlay">
                <p>${t('hero.overlay.title')}</p>
                <strong>${t('hero.overlay.status')}</strong>
                <span>${t('hero.overlay.detail')}</span>
              </div>
            </div>
            <article class="decision-card">
              <p class="decision-kicker">${t('hero.decision.kicker')}</p>
              <h3>${t('hero.decision.title')}</h3>
              <ul>
                <li>${t('hero.decision.item1')}</li>
                <li>${t('hero.decision.item2')}</li>
                <li>${t('hero.decision.item3')}</li>
              </ul>
            </article>
          </div>
        </div>
      </section>

      <!-- ══ PROBLEM ══ -->
      <section class="section section-tight" id="problem">
        <div class="container">
          <div class="section-head" data-reveal="up">
            <p class="eyebrow">${t('problem.eyebrow')}</p>
            <h2>${t('problem.title')}</h2>
          </div>
          <div class="problem-grid">
            <article class="problem-card" data-reveal="up">
              <p class="card-kicker">${t('problem.card1.kicker')}</p>
              <h3>${t('problem.card1.title')}</h3>
              <p>${t('problem.card1.text')}</p>
            </article>
            <article class="problem-card" data-reveal="up">
              <p class="card-kicker">${t('problem.card2.kicker')}</p>
              <h3>${t('problem.card2.title')}</h3>
              <p>${t('problem.card2.text')}</p>
            </article>
          </div>
        </div>
      </section>

      <!-- ══ INTELLIGENCE ══ -->
      <section class="section" id="intelligence">
        <div class="container">
          <div class="section-head" data-reveal="up">
            <p class="eyebrow">${t('intel.eyebrow')}</p>
            <h2>${t('intel.title')}</h2>
          </div>
          <div class="intel-grid">
            <article class="persona-console" data-reveal="up">
              <div class="persona-tabs" role="tablist" aria-label="Persona selection">
                ${Object.keys(personaData).map(key => `
                  <button class="persona-tab ${key === 'commuter' ? 'is-active' : ''}" data-persona="${key}">${personaData[key].title}</button>
                `).join('')}
              </div>
              <div class="persona-content">
                <p class="persona-kicker" id="personaKicker">${t('persona.activeProfile')}</p>
                <h3 id="personaTitle">${personaData.commuter.title}</h3>
                <p id="personaSummary">${localizedField(personaData.commuter.summary)}</p>
                <div class="persona-details">
                  <article>
                    <span>${t('persona.primaryRisk')}</span>
                    <strong id="personaRisk">${localizedField(personaData.commuter.risk)}</strong>
                  </article>
                  <article>
                    <span>${t('persona.priorityZones')}</span>
                    <strong id="personaZones">${localizedField(personaData.commuter.zones)}</strong>
                  </article>
                  <article>
                    <span>${t('persona.moduleProfile')}</span>
                    <strong id="personaStack">${localizedField(personaData.commuter.stack)}</strong>
                  </article>
                  <article>
                    <span>${t('persona.recommendedTrack')}</span>
                    <strong id="personaProgram">${personaData.commuter.program}</strong>
                  </article>
                </div>
                <div class="persona-bars">
                  ${['bar1', 'bar2', 'bar3', 'bar4'].map((id, i) => `
                    <article>
                      <div class="bar-head">
                        <span>${t('persona.' + id)}</span>
                        <strong id="${id}Value">${personaData.commuter.bars[i]}%</strong>
                      </div>
                      <div class="bar-track"><span id="${id}Fill" style="width:${personaData.commuter.bars[i]}%;"></span></div>
                    </article>
                  `).join('')}
                </div>
              </div>
            </article>

            <aside class="intel-aside" data-reveal="up">
              <picture>
                <source srcset="/assets/TPMS_technology_xray_iso.webp" type="image/webp">
                <img src="/assets/TPMS_technology_xray_iso.webp"
                  alt="BROCE x-ray inspired anatomy map" loading="lazy" decoding="async" width="600" height="600">
              </picture>
              <div class="aside-copy">
                <p class="card-kicker">${t('intel.aside.kicker')}</p>
                <h3>${t('intel.aside.title')}</h3>
                <p>${t('intel.aside.text')}</p>
              </div>
            </aside>
          </div>
        </div>
      </section>

      <!-- ══ ARCHITECTURE ══ -->
      <section class="section section-tight" id="architecture">
        <div class="container">
          <div class="section-head" data-reveal="up">
            <p class="eyebrow">${t('arch.eyebrow')}</p>
            <h2>${t('arch.title')}</h2>
          </div>
          <div class="architecture-grid">
            <article class="architecture-card" data-reveal="up">
              <span class="arch-index">01</span>
              <h3>${t('arch.card1.title')}</h3>
              <p>${t('arch.card1.text')}</p>
              <picture>
                <source srcset="/assets/TPMS_landing_xray_iso.webp" type="image/webp">
                <img src="/assets/TPMS_landing_xray_iso.webp" alt="Adaptive lattice core" loading="lazy" decoding="async" width="600" height="400">
              </picture>
            </article>
            <article class="architecture-card" data-reveal="up">
              <span class="arch-index">02</span>
              <h3>${t('arch.card2.title')}</h3>
              <p>${t('arch.card2.text')}</p>
              <picture>
                <source srcset="/assets/tech-custom-scan.webp" type="image/webp">
                <img src="/assets/tech-custom-scan.webp" alt="Anatomy-aware mapping" loading="lazy" decoding="async" width="600" height="400">
              </picture>
            </article>
            <article class="architecture-card" data-reveal="up">
              <span class="arch-index">03</span>
              <h3>${t('arch.card3.title')}</h3>
              <p>${t('arch.card3.text')}</p>
              <picture>
                <source srcset="/assets/tech-pad-crosssection.webp" type="image/webp">
                <img src="/assets/tech-pad-crosssection.webp" alt="Premium garment integration" loading="lazy" decoding="async" width="600" height="400">
              </picture>
            </article>
          </div>
          <div class="arch-zones-strip" data-reveal="up">
            <h3 class="arch-zones-title">Protection Zones</h3>
            <div class="arch-zones-grid">
              <div class="arch-zone-card">
                <img src="/assets/zone-shoulder.jpg" alt="Shoulder protection zone" loading="lazy" decoding="async">
                <div class="arch-zone-info">
                  <strong>Shoulder</strong>
                  <span>≤ 2.8mm profile</span>
                </div>
              </div>
              <div class="arch-zone-card">
                <img src="/assets/zone-elbow.jpg" alt="Elbow protection zone" loading="lazy" decoding="async">
                <div class="arch-zone-info">
                  <strong>Elbow</strong>
                  <span>≤ 2.6mm profile</span>
                </div>
              </div>
              <div class="arch-zone-card">
                <img src="/assets/zone-hip.jpg" alt="Hip protection zone" loading="lazy" decoding="async">
                <div class="arch-zone-info">
                  <strong>Hip</strong>
                  <span>≤ 3.2mm profile</span>
                </div>
              </div>
              <div class="arch-zone-card">
                <img src="/assets/zone-knee.jpg" alt="Knee protection zone" loading="lazy" decoding="async">
                <div class="arch-zone-info">
                  <strong>Knee</strong>
                  <span>≤ 2.9mm profile</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <!-- ══ GALLERY ══ -->
      <section class="section" id="gallery">
        <div class="container">
          <div class="section-head" data-reveal="up">
            <p class="eyebrow">${t('gallery.eyebrow')}</p>
            <h2>${t('gallery.title')}</h2>
            <p>${t('gallery.subtitle')}</p>
          </div>
          <div class="gallery-filters" data-reveal="up">
            <button class="gallery-filter is-active" data-filter="all">${t('gallery.cat.all')}</button>
            <button class="gallery-filter" data-filter="garment">${t('gallery.cat.garment')}</button>
            <button class="gallery-filter" data-filter="detail">${t('gallery.cat.detail')}</button>
            <button class="gallery-filter" data-filter="pads">${t('gallery.cat.pads')}</button>
            <button class="gallery-filter" data-filter="tech">${t('gallery.cat.tech')}</button>
          </div>
          <div class="gallery-masonry" data-reveal="up">
            <!-- Garment shots -->
            <figure class="gallery-item gallery-item--tall" data-cat="garment">
              <img src="/assets/gallery-minimal-front.jpg" alt="BROCE minimal front view" loading="lazy" decoding="async">
              <figcaption>Minimal Silhouette — Front</figcaption>
            </figure>
            <figure class="gallery-item" data-cat="detail">
              <img src="/assets/gallery-shoulder-detail.jpg" alt="BROCE shoulder protection detail" loading="lazy" decoding="async">
              <figcaption>Shoulder Zone — Anatomical Stitching</figcaption>
            </figure>
            <figure class="gallery-item" data-cat="garment">
              <img src="/assets/gallery-movement.jpg" alt="BROCE navy in motion" loading="lazy" decoding="async">
              <figcaption>Dynamic Movement — Navy</figcaption>
            </figure>
            <figure class="gallery-item gallery-item--tall" data-cat="garment">
              <img src="/assets/gallery-flow-front.jpg" alt="BROCE flow front view" loading="lazy" decoding="async">
              <figcaption>Flow Series — Front</figcaption>
            </figure>
            <figure class="gallery-item" data-cat="detail">
              <img src="/assets/gallery-hip-detail.jpg" alt="BROCE hip pad detail" loading="lazy" decoding="async">
              <figcaption>Hip Zone — Seamless Integration</figcaption>
            </figure>
            <figure class="gallery-item" data-cat="garment">
              <img src="/assets/gallery-cream-side.jpg" alt="BROCE cream side view" loading="lazy" decoding="async">
              <figcaption>Cream Edition — Side Profile</figcaption>
            </figure>
            <figure class="gallery-item gallery-item--wide" data-cat="garment">
              <img src="/assets/gallery-family.jpg" alt="BROCE full family shot" loading="lazy" decoding="async">
              <figcaption>The BROCE Family — Every Body, Every Tone</figcaption>
            </figure>
            <figure class="gallery-item" data-cat="pads">
              <img src="/assets/gallery-foosh-pad.jpg" alt="BROCE FOOSH wrist pad" loading="lazy" decoding="async">
              <figcaption>FOOSH Pad — Wrist Protection</figcaption>
            </figure>
            <figure class="gallery-item" data-cat="detail">
              <img src="/assets/gallery-knee-detail.jpg" alt="BROCE knee zone detail" loading="lazy" decoding="async">
              <figcaption>Knee Zone — Articulated Guard</figcaption>
            </figure>
            <figure class="gallery-item" data-cat="garment">
              <img src="/assets/gallery-proto-front.jpg" alt="BROCE prototype front" loading="lazy" decoding="async">
              <figcaption>Prototype Alpha — Dark Edition</figcaption>
            </figure>
            <figure class="gallery-item" data-cat="garment">
              <img src="/assets/gallery-navy-side.jpg" alt="BROCE navy side" loading="lazy" decoding="async">
              <figcaption>Navy Edition — Side Profile</figcaption>
            </figure>
            <figure class="gallery-item" data-cat="detail">
              <img src="/assets/gallery-foosh-detail.jpg" alt="BROCE FOOSH detail close-up" loading="lazy" decoding="async">
              <figcaption>FOOSH Detail — Lattice Window</figcaption>
            </figure>
            <figure class="gallery-item" data-cat="garment">
              <img src="/assets/gallery-flow-back.jpg" alt="BROCE flow back" loading="lazy" decoding="async">
              <figcaption>Flow Series — Back</figcaption>
            </figure>
            <figure class="gallery-item" data-cat="garment">
              <img src="/assets/gallery-minimal-back.jpg" alt="BROCE minimal back" loading="lazy" decoding="async">
              <figcaption>Minimal Silhouette — Back</figcaption>
            </figure>
            <figure class="gallery-item" data-cat="pads">
              <img src="/assets/pad-shoulder.jpg" alt="BROCE shoulder pad" loading="lazy" decoding="async">
              <figcaption>Shoulder Pad — Isolated</figcaption>
            </figure>
            <figure class="gallery-item" data-cat="pads">
              <img src="/assets/pad-elbow.jpg" alt="BROCE elbow pad" loading="lazy" decoding="async">
              <figcaption>Elbow Pad — Anatomical Form</figcaption>
            </figure>
            <figure class="gallery-item" data-cat="pads">
              <img src="/assets/pad-knee.jpg" alt="BROCE knee pad" loading="lazy" decoding="async">
              <figcaption>Knee Pad — Articulated Shell</figcaption>
            </figure>
            <figure class="gallery-item" data-cat="pads">
              <img src="/assets/pad-hip.jpg" alt="BROCE hip pad" loading="lazy" decoding="async">
              <figcaption>Hip Pad — Contour Geometry</figcaption>
            </figure>
            <figure class="gallery-item" data-cat="tech">
              <img src="/assets/tech-gradient-density.jpg" alt="BROCE gradient density technology" loading="lazy" decoding="async">
              <figcaption>Gradient Density — Variable Stiffness</figcaption>
            </figure>
            <figure class="gallery-item" data-cat="tech">
              <img src="/assets/tech-pad-texture.jpg" alt="BROCE pad texture detail" loading="lazy" decoding="async">
              <figcaption>Surface Texture — Refined Lattice</figcaption>
            </figure>
            <figure class="gallery-item" data-cat="tech">
              <img src="/assets/tech-tissue-layers.jpg" alt="BROCE tissue layer visualization" loading="lazy" decoding="async">
              <figcaption>Tissue Layers — Multi-Stack Architecture</figcaption>
            </figure>
            <figure class="gallery-item" data-cat="tech">
              <img src="/assets/tech-knee-anatomy.jpg" alt="BROCE knee bone anatomical detail" loading="lazy" decoding="async">
              <figcaption>Anatomical Mapping — Knee Bone Structure</figcaption>
            </figure>
            <figure class="gallery-item" data-cat="garment">
              <img src="/assets/gallery-white-final.jpg" alt="BROCE white final front" loading="lazy" decoding="async">
              <figcaption>White Edition — Final Front</figcaption>
            </figure>
            <figure class="gallery-item" data-cat="garment">
              <img src="/assets/gallery-flow-side.jpg" alt="BROCE flow side" loading="lazy" decoding="async">
              <figcaption>Flow Series — Side</figcaption>
            </figure>
          </div>
        </div>
      </section>

      <!-- ══ GALLERY LIGHTBOX ══ -->
      <div class="gallery-lightbox" id="galleryLightbox" aria-hidden="true">
        <button class="lightbox-close" aria-label="Close">✕</button>
        <button class="lightbox-prev" aria-label="Previous">‹</button>
        <button class="lightbox-next" aria-label="Next">›</button>
        <div class="lightbox-content">
          <img id="lightboxImg" src="" alt="">
          <p class="lightbox-caption" id="lightboxCaption"></p>
        </div>
      </div>

      <!-- ══ SIMULATOR ══ -->
      <section class="section section-muted" id="simulator">
        <div class="container">
          <div class="section-head" data-reveal="up">
            <p class="eyebrow">${t('sim.eyebrow')}</p>
            <h2>${t('sim.title')}</h2>
          </div>
          <div class="sim-card" data-reveal="up">
            <div class="sim-inputs">
              <label for="exposureInput">${t('sim.exposure')} <output id="exposureValue">8h</output></label>
              <input id="exposureInput" type="range" min="1" max="40" step="1" value="8">
              <label for="riskInput">${t('sim.risk')} <output id="riskValue">3 / 5</output></label>
              <input id="riskInput" type="range" min="1" max="5" step="1" value="3">
              <label for="adoptionInput">${t('sim.adoption')} <output id="adoptionValue">76%</output></label>
              <input id="adoptionInput" type="range" min="40" max="98" step="1" value="76">
            </div>
            <div class="sim-results">
              <article><p>${t('sim.reduction')}</p><strong id="simReduction">52%</strong></article>
              <article><p>${t('sim.value')}</p><strong id="simValue">EUR 4,180</strong></article>
              <article><p>${t('sim.payback')}</p><strong id="simPayback">8 ${t('unit.months')}</strong></article>
              <article><p>${t('sim.tier')}</p><strong id="simTier">Pro Pilot</strong></article>
            </div>
          </div>
        </div>
      </section>

      <!-- ══ DECISION DESK ══ -->
      <section class="section section-tight" id="decision">
        <div class="container">
          <div class="section-head" data-reveal="up">
            <p class="eyebrow">${t('desk.eyebrow')}</p>
            <h2>${t('desk.title')}</h2>
            <p>${t('desk.subtitle')}</p>
          </div>
          <div class="desk-grid" data-reveal="up">
            <article class="desk-controls">
              <label for="objectiveInput">${t('desk.objective')} <output id="objectiveValue">${t('desk.obj.balanced')}</output></label>
              <select id="objectiveInput">
                <option value="balanced" selected>${t('desk.obj.balanced')}</option>
                <option value="reduction">${t('desk.obj.reduction')}</option>
                <option value="adoption">${t('desk.obj.adoption')}</option>
                <option value="velocity">${t('desk.obj.velocity')}</option>
              </select>
              <label for="cohortInput">${t('desk.cohort')} <output id="cohortValue">120 ${t('unit.participants')}</output></label>
              <input id="cohortInput" type="range" min="40" max="500" step="10" value="120">
              <label for="budgetInput">${t('desk.budget')} <output id="budgetValue">EUR 260k</output></label>
              <input id="budgetInput" type="range" min="80" max="900" step="10" value="260">
              <label for="complianceInput">${t('desk.compliance')} <output id="complianceValue">3 / 5</output></label>
              <input id="complianceInput" type="range" min="1" max="5" step="1" value="3">
            </article>
            <article class="desk-results">
              <div class="desk-top">
                <div class="score-ring" id="deskScoreRing" style="--score:74;">
                  <span id="deskReadiness">74</span>
                  <small>${t('desk.readiness')}</small>
                </div>
                <div class="desk-kpis">
                  <article><p>${t('desk.lane')}</p><strong id="deskLane">Pro Pilot</strong></article>
                  <article><p>${t('desk.riskDrop')}</p><strong id="deskRiskDrop">58%</strong></article>
                  <article><p>${t('desk.annualValue')}</p><strong id="deskValue">EUR 84,000</strong></article>
                  <article><p>${t('desk.payback')}</p><strong id="deskPayback">9 ${t('unit.months')}</strong></article>
                  <article><p>${t('desk.budgetFit')}</p><strong id="deskBudgetFit">101%</strong></article>
                  <article><p>${t('desk.horizon')}</p><strong id="deskHorizon">11 ${t('unit.weeks')}</strong></article>
                </div>
              </div>
              <div class="desk-memo">
                <p class="card-kicker">${t('desk.memo')}</p>
                <ul class="memo-list">
                  <li id="deskMemo1"></li>
                  <li id="deskMemo2"></li>
                  <li id="deskMemo3"></li>
                </ul>
              </div>
            </article>
          </div>
        </div>
      </section>

      <!-- ══ INSIGHTS ══ -->
      <section class="section section-muted" id="insights">
        <div class="container">
          <div class="section-head" data-reveal="up">
            <p class="eyebrow">${t('insights.eyebrow')}</p>
            <h2>${t('insights.title')}</h2>
            <p>${t('insights.subtitle')}</p>
          </div>
          <div class="insights-grid">
            <article class="scenario-panel" data-reveal="up">
              <p class="card-kicker">${t('insights.scenario')}</p>
              <div class="preset-grid" role="group" aria-label="Scenario presets">
                ${Object.keys(presetProfiles).map(key => `
                  <button class="preset-btn ${key === 'urban' ? 'is-active' : ''}" data-preset="${key}">${t('insights.preset.' + key)}</button>
                `).join('')}
              </div>
              <p class="preset-note" id="presetNote"></p>
            </article>
            <article class="briefing-panel" data-reveal="up">
              <p class="card-kicker">${t('insights.brief')}</p>
              <h3 id="briefHeadline"></h3>
              <p id="briefText"></p>
              <div class="brief-signals">
                <article><p>${t('insights.capital')}</p><strong id="briefSignalA"></strong></article>
                <article><p>${t('insights.readiness')}</p><strong id="briefSignalB"></strong></article>
                <article><p>${t('insights.execution')}</p><strong id="briefSignalC"></strong></article>
              </div>
            </article>
            <article class="zone-panel" data-reveal="up">
              <p class="card-kicker">${t('insights.zones')}</p>
              ${[1, 2, 3].map(i => `
                <div class="zone-item">
                  <div class="zone-head">
                    <span id="zone${i}Name"></span>
                    <strong id="zone${i}Value"></strong>
                  </div>
                  <div class="bar-track"><span id="zone${i}Fill" style="width:0%;"></span></div>
                </div>
              `).join('')}
              <ul class="memo-list memo-compact">
                <li id="zoneMemo1"></li>
                <li id="zoneMemo2"></li>
                <li id="zoneMemo3"></li>
              </ul>
            </article>
          </div>
        </div>
      </section>

      <!-- ══ ROLLOUT ══ -->
      <section class="section" id="rollout">
        <div class="container">
          <div class="section-head" data-reveal="up">
            <p class="eyebrow">${t('rollout.eyebrow')}</p>
            <h2>${t('rollout.title')}</h2>
          </div>
          <ol class="rollout-grid">
            ${[1, 2, 3, 4].map(i => `
              <li class="rollout-card" data-reveal="up">
                <span>${i}</span>
                <h3>${t('rollout.step' + i)}</h3>
                <p>${t('rollout.step' + i + '.text')}</p>
              </li>
            `).join('')}
          </ol>
          <div class="rollout-banner" data-reveal="up">
            <img src="/assets/gallery-family-v3.jpg" alt="BROCE — designed for every body" loading="lazy" decoding="async">
            <div class="rollout-banner-overlay">
              <p>Designed for Every Body</p>
              <span>From active professionals to longevity cohorts — BROCE adapts to every persona.</span>
            </div>
          </div>
          <div class="governance-grid">
            ${[1, 2, 3].map(i => `
              <article class="gov-card" data-reveal="up">
                <p class="card-kicker">${t('rollout.gov' + i + '.kicker')}</p>
                <h3>${t('rollout.gov' + i + '.title')}</h3>
                <p>${t('rollout.gov' + i + '.text')}</p>
              </article>
            `).join('')}
          </div>
        </div>
      </section>

      <!-- ══ FAQ ══ -->
      <section class="section section-tight" id="faq">
        <div class="container">
          <div class="section-head" data-reveal="up">
            <p class="eyebrow">${t('faq.eyebrow')}</p>
            <h2>${t('faq.title')}</h2>
          </div>
          <div class="faq-list" data-reveal="up">
            ${[1, 2, 3, 4].map(i => `
              <details>
                <summary>${t('faq.q' + i)}</summary>
                <p>${t('faq.a' + i)}</p>
              </details>
            `).join('')}
          </div>
        </div>
      </section>

      <!-- ══ CONTACT ══ -->
      <section class="section" id="contact">
        <div class="container">
          <div class="cta-panel" data-reveal="up">
            <p class="eyebrow">${t('cta.eyebrow')}</p>
            <h2>${t('cta.title')}</h2>
            <p>${t('cta.text')}</p>
            <div class="cta-actions">
              <a href="mailto:hello@broce.eu" class="btn btn-primary">${t('cta.email')}</a>
              <a data-route="/investor" class="btn btn-secondary">${t('cta.investor')}</a>
            </div>
            <div class="trust-chips">
              <span>${t('cta.chip1')}</span>
              <span>${t('cta.chip2')}</span>
              <span>${t('cta.chip3')}</span>
            </div>
          </div>
        </div>
      </section>
    </main>

    <footer class="site-footer">
      <div class="container footer-grid">
        <div>
          <a data-route="/" class="brand footer-brand">BROCE<span class="brand-mark">&trade;</span></a>
          <p>${t('footer.tagline')}</p>
        </div>
        <div class="footer-links">
          <a data-route="/technology">${t('footer.technology')}</a>
          <a data-route="/products">${t('footer.products')}</a>
          <a data-route="/about">${t('footer.about')}</a>
          <a data-route="/investor">${t('page.investor')}</a>
          <a href="mailto:hello@broce.eu">${t('footer.contact')}</a>
        </div>
        <p class="footer-copy">${t('footer.copy')}</p>
      </div>
    </footer>
  `;

  // Initialize all interactive systems
  initHeader(() => renderMainPage(container));
  initScrollReveal();
  initGallery();
  initPersonaEngine();
  initSimulator();
  initDecisionDesk();
  initInsights();
}

/* ══════════════════════════════════════════════════════
   INTERACTIVE ENGINES
   ══════════════════════════════════════════════════════ */

let activePersona = 'commuter';
let activePreset = 'urban';
let simState = { exposure: 8, risk: 3, adoption: 76, reduction: 52, annualValue: 4180, payback: 8, tier: 'Pro Pilot' };
let deskState = { objective: 'balanced', cohort: 120, budget: 260, compliance: 3, budgetFit: 101, readiness: 74, riskDrop: 58, annualValue: 84000, payback: 9, horizonWeeks: 11, lane: 'Pro Pilot', adoptionBias: 0 };

/* ── rAF throttle helper ── */
function rafThrottle(fn) {
  let pending = false;
  return function () {
    if (pending) return;
    pending = true;
    requestAnimationFrame(() => {
      fn();
      pending = false;
    });
  };
}

function localizedField(obj) {
  if (typeof obj === 'string') return obj;
  return obj[i18n.currentLang] || obj.en || '';
}

/* ── Persona Engine ── */

function initPersonaEngine() {
  const tabs = document.querySelectorAll('.persona-tab');
  tabs.forEach(tab => {
    tab.addEventListener('click', () => renderPersona(tab.dataset.persona));
  });
}

function renderPersona(key) {
  const p = personaData[key];
  if (!p) return;
  activePersona = key;

  const el = (id) => document.getElementById(id);
  el('personaKicker').textContent = t('persona.activeProfile');
  el('personaTitle').textContent = p.title;
  el('personaSummary').textContent = localizedField(p.summary);
  el('personaRisk').textContent = localizedField(p.risk);
  el('personaZones').textContent = localizedField(p.zones);
  el('personaStack').textContent = localizedField(p.stack);
  el('personaProgram').textContent = p.program;

  document.querySelectorAll('.persona-tab').forEach(tab =>
    tab.classList.toggle('is-active', tab.dataset.persona === key)
  );

  p.bars.forEach((val, i) => {
    const n = i + 1;
    el('bar' + n + 'Value').textContent = val + '%';
    el('bar' + n + 'Fill').style.width = val + '%';
  });

  updateInsights();
}

/* ── Simulator ── */

function initSimulator() {
  const throttledUpdate = rafThrottle(updateSimulator);
  const inputs = ['exposureInput', 'riskInput', 'adoptionInput'];
  inputs.forEach(id => {
    const el = document.getElementById(id);
    if (el) el.addEventListener('input', throttledUpdate);
  });
}

function updateSimulator() {
  const exposure = parseInt(document.getElementById('exposureInput').value, 10);
  const risk = parseInt(document.getElementById('riskInput').value, 10);
  const adoption = parseInt(document.getElementById('adoptionInput').value, 10);

  const reduction = Math.min(84, Math.round(12 + exposure * 1.3 + risk * 8 + adoption * 0.28));
  const annualValue = Math.round((exposure * risk * 130 + 1700) * (reduction / 100));
  const payback = Math.max(2, Math.round(20 - reduction / 6 - adoption / 18 + risk / 2));

  let tier = 'Core Pilot';
  if (reduction >= 46) tier = 'Pro Pilot';
  if (reduction >= 66 && adoption >= 78) tier = 'Enterprise Pilot';

  document.getElementById('exposureValue').textContent = exposure + 'h';
  document.getElementById('riskValue').textContent = risk + ' / 5';
  document.getElementById('adoptionValue').textContent = adoption + '%';
  document.getElementById('simReduction').textContent = reduction + '%';
  document.getElementById('simValue').textContent = eur(annualValue);
  document.getElementById('simPayback').textContent = payback + ' ' + t('unit.months');
  document.getElementById('simTier').textContent = tier;

  simState = { exposure, risk, adoption, reduction, annualValue, payback, tier };
  updateInsights();
}

/* ── Decision Desk ── */

function initDecisionDesk() {
  const throttledUpdate = rafThrottle(updateDecisionDesk);
  const inputs = ['objectiveInput', 'cohortInput', 'budgetInput', 'complianceInput'];
  inputs.forEach(id => {
    const el = document.getElementById(id);
    if (el) {
      el.addEventListener('input', throttledUpdate);
      el.addEventListener('change', throttledUpdate);
    }
  });

  const presetButtons = document.querySelectorAll('.preset-btn');
  presetButtons.forEach(btn => {
    btn.addEventListener('click', () => applyPreset(btn.dataset.preset));
  });

  applyPreset(activePreset);
}

function updateDecisionDesk() {
  const objective = document.getElementById('objectiveInput').value;
  const cohort = parseInt(document.getElementById('cohortInput').value, 10);
  const budget = parseInt(document.getElementById('budgetInput').value, 10);
  const compliance = parseInt(document.getElementById('complianceInput').value, 10);

  const objectiveBias = { balanced: 0, reduction: 8, adoption: 4, velocity: -3 }[objective] || 0;
  const speedBias = { balanced: 0, reduction: -2, adoption: -1, velocity: 7 }[objective] || 0;
  const adoptionBias = { balanced: 0, reduction: -1, adoption: 8, velocity: 4 }[objective] || 0;

  const budgetNeed = cohort * (1.05 + compliance * 0.17) + 72;
  const budgetFit = clamp(Math.round((budget / budgetNeed) * 100), 46, 165);
  const readiness = clamp(Math.round(58 + budgetFit * 0.19 + objectiveBias + adoptionBias * 0.7 - compliance * 2.4), 41, 97);
  const riskDrop = clamp(Math.round(31 + compliance * 6 + budgetFit * 0.17 + objectiveBias - speedBias * 0.8), 24, 88);
  const annualValue = Math.round(cohort * (540 + compliance * 90) * (riskDrop / 100) * (0.82 + budgetFit / 210));
  const payback = clamp(Math.round(22 - riskDrop / 5 - budgetFit / 22 + compliance * 1.2 - speedBias * 0.7), 3, 24);
  const horizonWeeks = clamp(Math.round(16 - speedBias * 0.9 - budgetFit / 35 + compliance * 1.1), 6, 24);

  let lane = 'Core Pilot';
  if (readiness >= 74 && budgetFit >= 88) lane = 'Pro Pilot';
  if (readiness >= 84 && budgetFit >= 102 && riskDrop >= 58) lane = 'Enterprise Pilot';

  const objLabels = {
    balanced: t('desk.obj.balanced'),
    reduction: t('desk.obj.reduction'),
    adoption: t('desk.obj.adoption'),
    velocity: t('desk.obj.velocity')
  };

  document.getElementById('objectiveValue').textContent = objLabels[objective];
  document.getElementById('cohortValue').textContent = cohort + ' ' + t('unit.participants');
  document.getElementById('budgetValue').textContent = 'EUR ' + budget + 'k';
  document.getElementById('complianceValue').textContent = compliance + ' / 5';
  document.getElementById('deskScoreRing').style.setProperty('--score', readiness);
  document.getElementById('deskReadiness').textContent = String(readiness);
  document.getElementById('deskLane').textContent = lane;
  document.getElementById('deskRiskDrop').textContent = riskDrop + '%';
  document.getElementById('deskValue').textContent = eur(annualValue);
  document.getElementById('deskPayback').textContent = payback + ' ' + t('unit.months');
  document.getElementById('deskBudgetFit').textContent = budgetFit + '%';
  document.getElementById('deskHorizon').textContent = horizonWeeks + ' ' + t('unit.weeks');

  deskState = { objective, cohort, budget, compliance, budgetFit, readiness, riskDrop, annualValue, payback, horizonWeeks, lane, adoptionBias };

  const laneFocus = lane === 'Enterprise Pilot'
    ? t('desk.memo.enterprise')
    : lane === 'Pro Pilot'
      ? t('desk.memo.pro')
      : t('desk.memo.core');

  const adoptionLine = adoptionBias >= 6
    ? t('desk.memo.adoption.high')
    : t('desk.memo.adoption.low');

  document.getElementById('deskMemo1').textContent = t('desk.memo.horizon') + ': ' + horizonWeeks + ' ' + t('unit.weeks') + ' — ' + lane + '.';
  document.getElementById('deskMemo2').textContent = t('desk.memo.forecast') + ': ' + eur(annualValue) + ' — ' + riskDrop + '% ' + t('desk.memo.reduction') + '.';
  document.getElementById('deskMemo3').textContent = laneFocus + ' ' + adoptionLine;

  updateInsights();
}

/* ── Insights ── */

function initInsights() {
  // Already initialized via applyPreset in initDecisionDesk
}

function updateInsights() {
  const objective = deskState.objective;
  const lane = deskState.lane;
  const reduction = simState.reduction;
  const readiness = deskState.readiness;
  const budgetFit = deskState.budgetFit;
  const payback = deskState.payback;
  const horizon = deskState.horizonWeeks;
  const cohort = deskState.cohort;

  let headline = t('insights.headline.balanced');
  if (lane === 'Enterprise Pilot' && readiness >= 86) headline = t('insights.headline.enterprise');
  else if (lane === 'Pro Pilot' && budgetFit >= 100) headline = t('insights.headline.pro');
  else if (objective === 'velocity') headline = t('insights.headline.velocity');

  const objectiveText = {
    balanced: t('insights.obj.balanced'),
    reduction: t('insights.obj.reduction'),
    adoption: t('insights.obj.adoption'),
    velocity: t('insights.obj.velocity')
  }[objective] || t('insights.obj.balanced');

  const el = (id) => document.getElementById(id);
  if (!el('briefHeadline')) return;

  el('briefHeadline').textContent = headline;
  el('briefText').textContent = `${cohort} ${t('unit.participants')} — BROCE: ${reduction}% ${t('desk.memo.reduction')}, ${budgetFit}% ${t('desk.budgetFit')}, ${objectiveText}.`;
  el('briefSignalA').textContent = `${t('desk.payback')} ${payback} ${t('unit.months')} | ${eur(deskState.annualValue)}`;
  el('briefSignalB').textContent = `${t('desk.readiness')} ${readiness} / 100 | ${lane}`;
  el('briefSignalC').textContent = `Wave-1: ${horizon} ${t('unit.weeks')} | ${simState.tier}`;

  // Zone map
  const baseMap = zoneWeights[activePersona] || zoneWeights.commuter;
  const zoneEntries = Object.entries(baseMap).map(([name, base]) => {
    let objectiveBoost = 0;
    if (objective === 'reduction' && (name === 'Hip' || name === 'Shoulder')) objectiveBoost += 4;
    if (objective === 'adoption' && (name === 'Wrist' || name === 'Elbow')) objectiveBoost += 4;
    if (objective === 'velocity' && (name === 'Elbow' || name === 'Shoulder')) objectiveBoost += 3;
    const value = clamp(Math.round(base + simState.risk * 2.3 + reduction * 0.14 + objectiveBoost + (deskState.compliance - 3) * 1.6), 55, 98);
    return { name, value };
  }).sort((a, b) => b.value - a.value);

  const top = zoneEntries.slice(0, 3);
  for (let i = 0; i < 3; i++) {
    el('zone' + (i + 1) + 'Name').textContent = top[i].name;
    el('zone' + (i + 1) + 'Value').textContent = top[i].value + '%';
    el('zone' + (i + 1) + 'Fill').style.width = top[i].value + '%';
  }

  el('zoneMemo1').textContent = `Wave-1: ${top[0].name} + ${top[1].name} — ${t('insights.zone.highconf')}.`;
  el('zoneMemo2').textContent = `${t('insights.zone.guardrail')}: ${t('desk.budgetFit')} > 95% (${cohort} ${t('unit.participants')}).`;
  el('zoneMemo3').textContent = `${t('insights.zone.governance')}: ${t('desk.readiness')} > ${Math.max(68, readiness - 4)}.`;

  const preset = presetProfiles[activePreset];
  if (preset && el('presetNote')) {
    el('presetNote').textContent = localizedField(preset.note);
  }
}

/* ── Gallery Engine ── */

function initGallery() {
  // Filter buttons
  const filters = document.querySelectorAll('.gallery-filter');
  const items = document.querySelectorAll('.gallery-item');

  filters.forEach(btn => {
    btn.addEventListener('click', () => {
      const filter = btn.dataset.filter;
      filters.forEach(b => b.classList.toggle('is-active', b === btn));

      items.forEach((item, i) => {
        const cat = item.dataset.cat;
        const show = filter === 'all' || cat === filter;
        item.style.transitionDelay = show ? `${i * 30}ms` : '0ms';
        item.classList.toggle('gallery-hidden', !show);
      });
    });
  });

  // Lightbox
  const lightbox = document.getElementById('galleryLightbox');
  const lightboxImg = document.getElementById('lightboxImg');
  const lightboxCaption = document.getElementById('lightboxCaption');
  let currentIndex = 0;
  let visibleItems = [];

  function getVisibleItems() {
    return [...document.querySelectorAll('.gallery-item:not(.gallery-hidden)')];
  }

  function openLightbox(index) {
    visibleItems = getVisibleItems();
    currentIndex = index;
    const item = visibleItems[currentIndex];
    if (!item) return;
    const img = item.querySelector('img');
    const caption = item.querySelector('figcaption');
    lightboxImg.src = img.src;
    lightboxImg.alt = img.alt;
    lightboxCaption.textContent = caption ? caption.textContent : '';
    lightbox.classList.add('is-open');
    lightbox.setAttribute('aria-hidden', 'false');
    document.body.style.overflow = 'hidden';
  }

  function closeLightbox() {
    lightbox.classList.remove('is-open');
    lightbox.setAttribute('aria-hidden', 'true');
    document.body.style.overflow = '';
  }

  function navigateLightbox(dir) {
    visibleItems = getVisibleItems();
    currentIndex = (currentIndex + dir + visibleItems.length) % visibleItems.length;
    const item = visibleItems[currentIndex];
    if (!item) return;
    const img = item.querySelector('img');
    const caption = item.querySelector('figcaption');
    lightboxImg.style.opacity = '0';
    setTimeout(() => {
      lightboxImg.src = img.src;
      lightboxImg.alt = img.alt;
      lightboxCaption.textContent = caption ? caption.textContent : '';
      lightboxImg.style.opacity = '1';
    }, 150);
  }

  // Click on gallery items
  items.forEach((item, i) => {
    item.addEventListener('click', () => {
      const visible = getVisibleItems();
      const idx = visible.indexOf(item);
      openLightbox(idx >= 0 ? idx : 0);
    });
  });

  // Lightbox controls
  if (lightbox) {
    lightbox.querySelector('.lightbox-close').addEventListener('click', closeLightbox);
    lightbox.querySelector('.lightbox-prev').addEventListener('click', () => navigateLightbox(-1));
    lightbox.querySelector('.lightbox-next').addEventListener('click', () => navigateLightbox(1));
    lightbox.addEventListener('click', (e) => {
      if (e.target === lightbox) closeLightbox();
    });
    document.addEventListener('keydown', (e) => {
      if (!lightbox.classList.contains('is-open')) return;
      if (e.key === 'Escape') closeLightbox();
      if (e.key === 'ArrowLeft') navigateLightbox(-1);
      if (e.key === 'ArrowRight') navigateLightbox(1);
    });
  }
}

function applyPreset(key) {
  const preset = presetProfiles[key];
  if (!preset) return;
  activePreset = key;

  document.getElementById('exposureInput').value = String(preset.exposure);
  document.getElementById('riskInput').value = String(preset.risk);
  document.getElementById('adoptionInput').value = String(preset.adoption);
  document.getElementById('objectiveInput').value = preset.objective;
  document.getElementById('cohortInput').value = String(preset.cohort);
  document.getElementById('budgetInput').value = String(preset.budget);
  document.getElementById('complianceInput').value = String(preset.compliance);

  document.querySelectorAll('.preset-btn').forEach(btn => {
    btn.classList.toggle('is-active', btn.dataset.preset === key);
  });

  renderPersona(preset.persona);
  updateSimulator();
  updateDecisionDesk();
  updateInsights();
}
