/* ═══════════════════════════════════════════════
   BROCE™ Products Page
   ═══════════════════════════════════════════════ */

import { t } from '../i18n.js';
import { renderPageShell } from '../components/PageShell.js';

const products = [
  {
    id: 'nano-banana',
    category: 'baselayer',
    badge: 'Flagship',
    image: '/assets/product-charcoal-premium.webp',
    fallback: '/assets/product-charcoal-premium.jpg',
    name: { en: 'Nano Banana Pro', de: 'Nano Banana Pro' },
    desc: { en: 'Full-body intelligent protection baselayer with TPMS lattice pads in all 5 zones. Second-skin compression fit.', de: 'Ganzkörper-Schutzbaselayer mit TPMS-Gitterstruktur-Pads in allen 5 Zonen. Hautenges Kompressionsdesign.' },
    price: '€389',
    status: 'pilot'
  },
  {
    id: 'nano-cream',
    category: 'baselayer',
    badge: '',
    image: '/assets/product-cream-premium.webp',
    fallback: '/assets/product-cream-premium.jpg',
    name: { en: 'Nano Banana Lite', de: 'Nano Banana Lite' },
    desc: { en: 'Lightweight 3-zone protection for everyday urban movement. Wrist, knee, and hip coverage with breathable mesh.', de: 'Leichter 3-Zonen-Schutz für urbane Alltagsbewegung. Handgelenk-, Knie- und Hüftschutz mit atmungsaktivem Mesh.' },
    price: '€269',
    status: 'pilot'
  },
  {
    id: 'quilted-jacket',
    category: 'outerwear',
    badge: 'New',
    image: '/assets/product-quilted-jacket-inside.webp',
    fallback: '/assets/product-quilted-jacket-inside.jpg',
    name: { en: 'BROCE Shield Jacket', de: 'BROCE Shield Jacke' },
    desc: { en: 'Urban outerwear with integrated shoulder and elbow TPMS modules. Water-repellent quilted shell with premium lining.', de: 'Urbane Oberbekleidung mit integrierten Schulter- und Ellbogen-TPMS-Modulen. Wasserabweisende Steppjacke.' },
    price: '€549',
    status: 'development'
  },
  {
    id: 'halo-beanie',
    category: 'headwear',
    badge: '',
    image: '/assets/product-halo-beanie-finetuned.webp',
    fallback: '/assets/product-halo-beanie-finetuned.jpg',
    name: { en: 'HALO Beanie', de: 'HALO Beanie' },
    desc: { en: 'Discreet head protection in a premium knit beanie. Concealed TPMS lattice panels over temple and occipital bone.', de: 'Diskreter Kopfschutz in einer Premium-Strickmütze. Verborgene TPMS-Gitterpaneele über Schläfe und Hinterhaupt.' },
    price: '€149',
    status: 'development'
  },
  {
    id: 'halo-helmet',
    category: 'headwear',
    badge: 'Concept',
    image: '/assets/product-halo-helmet.webp',
    fallback: '/assets/product-halo-helmet.jpg',
    name: { en: 'HALO Helmet', de: 'HALO Helm' },
    desc: { en: 'Full-coverage urban helmet with personalized TPMS lattice inner. 3D-scanned for individual skull geometry.', de: 'Vollabdeckender Urban-Helm mit personalisierter TPMS-Gitterstruktur. 3D-gescannt für individuelle Schädelgeometrie.' },
    price: '€229',
    status: 'concept'
  },
  {
    id: 'senior-casual',
    category: 'speciality',
    badge: '',
    image: '/assets/product-senior-casual.webp',
    fallback: '/assets/product-senior-casual.jpg',
    name: { en: 'BROCE Longevity', de: 'BROCE Longevity' },
    desc: { en: 'Discreet hip and wrist protection designed for active seniors. Premium casual aesthetic with invisible lattice cores.', de: 'Diskreter Hüft- und Handgelenkschutz für aktive Senioren. Premium-Casualdesign mit unsichtbaren Gitterkern-Pads.' },
    price: '€319',
    status: 'pilot'
  }
];

const categories = [
  { key: 'all', label: { en: 'All', de: 'Alle' } },
  { key: 'baselayer', label: { en: 'Baselayer', de: 'Baselayer' } },
  { key: 'outerwear', label: { en: 'Outerwear', de: 'Oberbekleidung' } },
  { key: 'headwear', label: { en: 'Headwear', de: 'Kopfbedeckung' } },
  { key: 'speciality', label: { en: 'Speciality', de: 'Spezial' } }
];

export function renderProductsPage(container) {
  const lang = (obj) => (typeof obj === 'string' ? obj : obj[localStorage.getItem('broce-lang') || 'en'] || obj.en);

  const statusLabel = (s) => {
    const map = { pilot: { en: 'Pilot Ready', de: 'Pilot Ready' }, development: { en: 'In Development', de: 'In Entwicklung' }, concept: { en: 'Concept', de: 'Konzept' } };
    return lang(map[s] || map.pilot);
  };

  const content = `
    <section class="section page-hero-section" id="top">
      <div class="container" style="text-align:center; max-width:820px;">
        <p class="eyebrow" data-reveal="up">${t('products.hero.eyebrow')}</p>
        <h1 data-reveal="up" data-decode>${t('products.hero.title')}</h1>
        <p class="lead" data-reveal="up">${t('products.hero.subtitle')}</p>
      </div>
    </section>

    <!-- Filters -->
    <section class="section section-tight" style="padding-top:0;">
      <div class="container">
        <div class="product-filters" id="productFilters">
          ${categories.map(c => `
            <button class="filter-chip ${c.key === 'all' ? 'is-active' : ''}" data-filter="${c.key}">${lang(c.label)}</button>
          `).join('')}
        </div>

        <div class="product-grid-page" id="productGrid" data-stagger>
          ${products.map(p => `
            <article class="product-card-page" data-category="${p.category}" data-tilt data-stagger-item>
              <div class="product-image-page">
                <picture>
                  <source srcset="${p.image}" type="image/webp">
                  <img src="${p.fallback}" alt="${lang(p.name)}" loading="lazy" width="600" height="750">
                </picture>
                ${p.badge ? `<span class="product-badge-page">${p.badge}</span>` : ''}
                <span class="product-status-page status-${p.status}">${statusLabel(p.status)}</span>
              </div>
              <div class="product-info-page">
                <p class="card-kicker">${lang(categories.find(c => c.key === p.category)?.label || { en: p.category })}</p>
                <h3>${lang(p.name)}</h3>
                <p>${lang(p.desc)}</p>
                <div class="product-footer-page">
                  <span class="product-price-page">${p.price}</span>
                  <button class="btn btn-secondary btn-sm">${t('products.details')}</button>
                </div>
              </div>
            </article>
          `).join('')}
        </div>
      </div>
    </section>

    <!-- Custom Fit CTA -->
    <section class="section">
      <div class="container">
        <div class="cta-panel" data-reveal="up">
          <p class="eyebrow">${t('products.cta.eyebrow')}</p>
          <h2>${t('products.cta.title')}</h2>
          <p>${t('products.cta.text')}</p>
          <div class="cta-actions">
            <a href="mailto:hello@broce.eu" class="btn btn-primary">${t('products.cta.btn')}</a>
          </div>
        </div>
      </div>
    </section>
  `;

  renderPageShell(container, { title: t('page.products'), content });
  initProductFilters();
}

function initProductFilters() {
  const filterBtns = document.querySelectorAll('#productFilters .filter-chip');
  const cards = document.querySelectorAll('#productGrid .product-card-page');

  filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      filterBtns.forEach(b => b.classList.remove('is-active'));
      btn.classList.add('is-active');

      const filter = btn.dataset.filter;
      cards.forEach(card => {
        const match = filter === 'all' || card.dataset.category === filter;
        card.style.display = match ? '' : 'none';
        if (match) {
          card.style.animation = 'none';
          card.offsetHeight;
          card.style.animation = 'reveal-up 0.4s var(--ease-out-expo) forwards';
        }
      });
    });
  });
}
