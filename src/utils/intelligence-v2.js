/* ═══════════════════════════════════════════════
   BROCE™ Intelligence Layer v2
   ═══════════════════════════════════════════════
   Functional intelligence that adapts to the 
   user — not just decoration.

   1. Adaptive Time-of-Day Theming
   2. Scroll-Spy Active Section Tracking
   3. Command Palette (Cmd+K / Ctrl+K)
   4. Text Decode Effect (terminal-style reveal)
   5. Smart Prefetch (hover-to-preload)
   ═══════════════════════════════════════════════ */

import { setTheme, getTheme } from './theme.js';

/* ═══════════════════════════════════════════════
   1. ADAPTIVE TIME-OF-DAY THEMING
   ═══════════════════════════════════════════════
   If the user hasn't manually toggled, the site
   adapts: light (07–19h), dark (19–07h).
   Manual toggle always overrides.
   ═══════════════════════════════════════════════ */

const MANUAL_KEY = 'broce-theme';  // same as theme.js

export function initAdaptiveTheme() {
    // Only auto-switch if user hasn't manually chosen
    if (localStorage.getItem(MANUAL_KEY)) return;

    const hour = new Date().getHours();
    const isDay = hour >= 7 && hour < 19;
    const ideal = isDay ? 'light' : 'dark';

    if (getTheme() !== ideal) {
        setTheme(ideal);
        // Remove the storage so it stays adaptive
        localStorage.removeItem(MANUAL_KEY);
    }

    // Schedule next check (every 15 min)
    setInterval(() => {
        if (localStorage.getItem(MANUAL_KEY)) return;
        const h = new Date().getHours();
        const target = (h >= 7 && h < 19) ? 'light' : 'dark';
        if (getTheme() !== target) {
            setTheme(target);
            localStorage.removeItem(MANUAL_KEY);
        }
    }, 15 * 60 * 1000);
}


/* ═══════════════════════════════════════════════
   2. SCROLL-SPY — Active Section Highlight
   ═══════════════════════════════════════════════
   On the main page, tracks which section is in 
   view and highlights the corresponding nav link.
   Uses a thin accent-colored dot under the 
   active link.
   ═══════════════════════════════════════════════ */

let spyCleanup = null;

export function initScrollSpy() {
    // Clean up any previous instance
    if (spyCleanup) spyCleanup();

    const nav = document.getElementById('siteNav');
    if (!nav) return;

    const links = nav.querySelectorAll('a[href^="#"]');
    if (!links.length) return;

    // Map section ids to nav links
    const sectionMap = [];
    links.forEach(link => {
        const id = link.getAttribute('href')?.replace('#', '');
        if (!id) return;
        const section = document.getElementById(id);
        if (section) {
            sectionMap.push({ id, link, section });
        }
    });

    if (!sectionMap.length) return;

    // Create the spy indicator dot
    let indicator = document.querySelector('.spy-indicator');
    if (!indicator) {
        indicator = document.createElement('span');
        indicator.className = 'spy-indicator';
        indicator.setAttribute('aria-hidden', 'true');
        nav.appendChild(indicator);
    }

    let activeLink = null;
    let ticking = false;

    const updateSpy = () => {
        // Account for sticky header height when determining active section
        const headerOffset = parseInt(getComputedStyle(document.documentElement).getPropertyValue('--header-height')) || 72;
        const scrollY = window.scrollY + headerOffset + 40;
        let current = null;

        for (const item of sectionMap) {
            if (item.section.offsetTop <= scrollY) {
                current = item;
            }
        }

        if (current && current.link !== activeLink) {
            // Remove old
            if (activeLink) activeLink.classList.remove('spy-active');

            // Set new
            activeLink = current.link;
            activeLink.classList.add('spy-active');

            // Position indicator under the active link
            const linkRect = activeLink.getBoundingClientRect();
            const navRect = nav.getBoundingClientRect();
            indicator.style.opacity = '1';
            indicator.style.left = (linkRect.left - navRect.left + linkRect.width / 2) + 'px';
        }

        if (!current && activeLink) {
            activeLink.classList.remove('spy-active');
            activeLink = null;
            indicator.style.opacity = '0';
        }

        ticking = false;
    };

    const onScroll = () => {
        if (!ticking) {
            requestAnimationFrame(updateSpy);
            ticking = true;
        }
    };

    window.addEventListener('scroll', onScroll, { passive: true });
    updateSpy();

    spyCleanup = () => {
        window.removeEventListener('scroll', onScroll);
        if (indicator) indicator.remove();
        if (activeLink) activeLink.classList.remove('spy-active');
        spyCleanup = null;
    };
}

export function destroyScrollSpy() {
    if (spyCleanup) spyCleanup();
}


/* ═══════════════════════════════════════════════
   3. COMMAND PALETTE  (Cmd+K / Ctrl+K)
   ═══════════════════════════════════════════════
   A minimal search overlay for instant navigation.
   Power-user feature: type to filter, arrow keys 
   to navigate, Enter to go.
   ═══════════════════════════════════════════════ */

const PALETTE_ITEMS = [
    { label: 'Home', path: '#/', keys: 'home, start, hauptseite' },
    { label: 'Technology', path: '#/technology', keys: 'tech, science, technologie, materialien' },
    { label: 'Products', path: '#/products', keys: 'produkte, shop, buy, kaufen' },
    { label: 'About', path: '#/about', keys: 'über uns, mission, team, about' },
    { label: 'Investor Portal', path: '#/investor', keys: 'invest, funding, investor, kapital' },
    { label: 'Problem', path: '#/problem', section: true, keys: 'problem, challenge' },
    { label: 'Intelligence', path: '#/intelligence', section: true, keys: 'intelligence, ai, ki' },
    { label: 'Architecture', path: '#/architecture', section: true, keys: 'architecture, aufbau' },
    { label: 'Simulator', path: '#/simulator', section: true, keys: 'simulator, simulation, test' },
    { label: 'Decision Desk', path: '#/decision', section: true, keys: 'decision, entscheidung' },
    { label: 'FAQ', path: '#/faq', section: true, keys: 'faq, fragen, hilfe, help' },
    { label: 'Contact', path: '#/contact', section: true, keys: 'kontakt, contact, email, mail' },
];

let paletteEl = null;
let paletteActive = false;

function createPalette() {
    if (paletteEl) return;

    paletteEl = document.createElement('div');
    paletteEl.id = 'commandPalette';
    paletteEl.className = 'cmd-palette';
    paletteEl.setAttribute('role', 'dialog');
    paletteEl.setAttribute('aria-label', 'Command palette');

    paletteEl.innerHTML = `
        <div class="cmd-backdrop"></div>
        <div class="cmd-dialog">
            <div class="cmd-input-wrap">
                <span class="cmd-prompt" aria-hidden="true">/</span>
                <input 
                    type="text" 
                    class="cmd-input" 
                    placeholder="Navigate to…"
                    autocomplete="off"
                    spellcheck="false"
                    aria-label="Search navigation"
                />
                <kbd class="cmd-esc">ESC</kbd>
            </div>
            <ul class="cmd-results" role="listbox"></ul>
        </div>
    `;

    document.body.appendChild(paletteEl);

    const input = paletteEl.querySelector('.cmd-input');
    const results = paletteEl.querySelector('.cmd-results');
    const backdrop = paletteEl.querySelector('.cmd-backdrop');
    let selectedIndex = 0;

    // Close on backdrop click
    backdrop.addEventListener('click', closePalette);

    // Filter on input
    input.addEventListener('input', () => {
        const query = input.value.toLowerCase().trim();
        renderResults(query, results);
        selectedIndex = 0;
        updateSelection(results, selectedIndex);
    });

    // Keyboard navigation
    input.addEventListener('keydown', (e) => {
        const items = results.querySelectorAll('.cmd-item');

        if (e.key === 'ArrowDown') {
            e.preventDefault();
            selectedIndex = Math.min(selectedIndex + 1, items.length - 1);
            updateSelection(results, selectedIndex);
        } else if (e.key === 'ArrowUp') {
            e.preventDefault();
            selectedIndex = Math.max(selectedIndex - 1, 0);
            updateSelection(results, selectedIndex);
        } else if (e.key === 'Enter') {
            e.preventDefault();
            const active = results.querySelector('.cmd-item.is-selected');
            if (active) {
                navigateTo(active.dataset.path, active.dataset.section === 'true');
                closePalette();
            }
        } else if (e.key === 'Escape') {
            closePalette();
        }
    });

    // Initial render
    renderResults('', results);
}

function renderResults(query, container) {
    const filtered = PALETTE_ITEMS.filter(item => {
        if (!query) return true;
        return item.label.toLowerCase().includes(query) ||
            item.keys.includes(query);
    });

    container.innerHTML = filtered.map((item, i) => {
        const icon = item.section ? '§' : '→';
        const typeLabel = item.section ? 'section' : 'page';
        return `
            <li class="cmd-item ${i === 0 ? 'is-selected' : ''}" 
                data-path="${item.path}" 
                data-section="${!!item.section}"
                role="option">
                <span class="cmd-icon">${icon}</span>
                <span class="cmd-label">${item.label}</span>
                <span class="cmd-type">${typeLabel}</span>
            </li>
        `;
    }).join('');

    // Click handlers
    container.querySelectorAll('.cmd-item').forEach(el => {
        el.addEventListener('click', () => {
            navigateTo(el.dataset.path, el.dataset.section === 'true');
            closePalette();
        });
    });
}

function updateSelection(container, index) {
    container.querySelectorAll('.cmd-item').forEach((el, i) => {
        el.classList.toggle('is-selected', i === index);
        if (i === index) el.scrollIntoView({ block: 'nearest' });
    });
}

function navigateTo(path, isSection) {
    if (isSection) {
        // It's a section on the main page — go to home first
        window.location.hash = '#/';
        requestAnimationFrame(() => {
            setTimeout(() => {
                const id = path.replace('#/', '').replace('#', '');
                const el = document.getElementById(id);
                if (el) el.scrollIntoView({ behavior: 'smooth' });
            }, 200);
        });
    } else {
        window.location.hash = path;
    }
}

export function openPalette() {
    createPalette();
    paletteEl.classList.add('is-open');
    paletteActive = true;
    const input = paletteEl.querySelector('.cmd-input');
    input.value = '';
    renderResults('', paletteEl.querySelector('.cmd-results'));

    requestAnimationFrame(() => input.focus());
}

export function closePalette() {
    if (paletteEl) {
        paletteEl.classList.remove('is-open');
        paletteActive = false;
    }
}

export function initCommandPalette() {
    document.addEventListener('keydown', (e) => {
        // Cmd+K or Ctrl+K
        if ((e.metaKey || e.ctrlKey) && e.key === 'k') {
            e.preventDefault();
            if (paletteActive) {
                closePalette();
            } else {
                openPalette();
            }
        }

        // Escape to close
        if (e.key === 'Escape' && paletteActive) {
            closePalette();
        }
    });
}


/* ═══════════════════════════════════════════════
   4. TEXT DECODE EFFECT
   ═══════════════════════════════════════════════
   Headlines "decode" character by character, 
   like a terminal or cipher. Each char cycles 
   through random glyphs before settling.
   
   Speed adapts to visit tier: power users 
   get faster decode.
   
   Usage: add data-decode to any element.
   ═══════════════════════════════════════════════ */

const DECODE_CHARS = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789@#$%&';

function getDecodeParams() {
    const tier = getVisitTier();
    if (tier === 'power') return { speed: 18, stagger: 1, cycles: 2 };
    if (tier === 'returning') return { speed: 25, stagger: 1, cycles: 3 };
    return { speed: 30, stagger: 2, cycles: 4 }; // first visit
}

export function initTextDecode() {
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (!entry.isIntersecting) return;
            decodeElement(entry.target);
            observer.unobserve(entry.target);
        });
    }, { threshold: 0.3 });

    document.querySelectorAll('[data-decode]').forEach(el => {
        // Store original text
        el.dataset.decodeOriginal = el.textContent;
        el.style.visibility = 'visible';
        observer.observe(el);
    });
}

function decodeElement(el) {
    const original = el.dataset.decodeOriginal || el.textContent;
    const chars = original.split('');
    const state = chars.map(() => ({ frame: 0, settled: false }));
    const params = getDecodeParams();
    let globalFrame = 0;

    const interval = setInterval(() => {
        let allSettled = true;

        const display = chars.map((char, i) => {
            if (char === ' ' || char === '\n') return char;

            const s = state[i];
            const startFrame = i * params.stagger;

            if (globalFrame < startFrame) {
                allSettled = false;
                return '\u00A0';
            }

            const elapsed = globalFrame - startFrame;

            if (elapsed >= params.cycles) {
                s.settled = true;
                return char;
            }

            allSettled = false;
            return DECODE_CHARS[Math.floor(Math.random() * DECODE_CHARS.length)];
        }).join('');

        el.textContent = display;

        if (allSettled) {
            clearInterval(interval);
            el.textContent = original;
        }

        globalFrame++;
    }, params.speed);
}


/* ═══════════════════════════════════════════════
   5. SMART PREFETCH
   ═══════════════════════════════════════════════ */

const prefetchedRoutes = new Set();

export function initSmartPrefetch() {
    const handleHover = (el) => {
        const route = el.dataset.route || el.getAttribute('href')?.replace('#', '');
        if (!route) return;

        let timer = null;

        el.addEventListener('mouseenter', () => {
            timer = setTimeout(() => {
                prefetchedRoutes.add(route);
            }, 80);
        });

        el.addEventListener('mouseleave', () => {
            clearTimeout(timer);
        });
    };

    document.querySelectorAll('[data-route], .site-nav a[href^="#/"]').forEach(handleHover);
}

export function isRoutePrefetched(path) {
    if (prefetchedRoutes.has(path)) {
        prefetchedRoutes.delete(path);
        return true;
    }
    return false;
}


/* ═══════════════════════════════════════════════
   6. PROGRESSIVE DISCLOSURE — Visit-Aware UX
   ═══════════════════════════════════════════════
   Tracks visits in localStorage. Returns a tier
   that other features use to adjust intensity:
   
   first    → full animations, slow decode
   returning → faster, subtler
   power    → minimal, instant
   ═══════════════════════════════════════════════ */

const VISIT_KEY = 'broce-visits';

export function initProgressiveDisclosure() {
    const visits = parseInt(localStorage.getItem(VISIT_KEY) || '0', 10) + 1;
    localStorage.setItem(VISIT_KEY, visits.toString());

    const tier = visits === 1 ? 'first' : visits <= 3 ? 'returning' : 'power';
    document.documentElement.setAttribute('data-visit', tier);
}

export function getVisitTier() {
    return document.documentElement.getAttribute('data-visit') || 'first';
}


/* ═══════════════════════════════════════════════
   7. PARALLAX DEPTH LAYERS
   ═══════════════════════════════════════════════
   Ambient background layers move at different
   parallax rates on scroll, creating subtle 
   depth. GPU-accelerated via translateY.
   ═══════════════════════════════════════════════ */

let parallaxCleanup = null;

export function initParallaxDepth() {
    if (parallaxCleanup) parallaxCleanup();

    // Skip if CSS scroll-driven animations handle this
    if (CSS.supports && CSS.supports('animation-timeline', 'scroll()')) return;

    // Skip on mobile / reduced motion
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
    if (window.innerWidth < 768) return;

    const layers = [
        { selector: '.ambient-gradient', rate: 0.05 },
        { selector: '.ambient-grid', rate: 0.15 },
        { selector: '.ambient-blob', rate: 0.30 },
    ];

    const elements = layers.map(l => ({
        els: document.querySelectorAll(l.selector),
        rate: l.rate,
    })).filter(l => l.els.length > 0);

    if (!elements.length) return;

    let ticking = false;

    const update = () => {
        const scrollY = window.scrollY;
        elements.forEach(({ els, rate }) => {
            const y = -(scrollY * rate);
            els.forEach(el => {
                el.style.transform = `translateY(${y}px)`;
            });
        });
        ticking = false;
    };

    const onScroll = () => {
        if (!ticking) {
            requestAnimationFrame(update);
            ticking = true;
        }
    };

    window.addEventListener('scroll', onScroll, { passive: true });
    update();

    parallaxCleanup = () => {
        window.removeEventListener('scroll', onScroll);
        elements.forEach(({ els }) => {
            els.forEach(el => { el.style.transform = ''; });
        });
        parallaxCleanup = null;
    };
}

export function destroyParallaxDepth() {
    if (parallaxCleanup) parallaxCleanup();
}


/* ═══════════════════════════════════════════════
   8. SECTION WIPES — Scroll Boundary Effect
   ═══════════════════════════════════════════════
   A subtle accent-colored gradient line sweeps 
   horizontally when a new section enters the 
   viewport. Brief and elegant.
   ═══════════════════════════════════════════════ */

export function initSectionWipes() {
    // Skip on reduced motion or slow connection
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;

    const sections = document.querySelectorAll('.section');
    if (!sections.length) return;

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting && entry.intersectionRatio > 0.08) {
                const el = entry.target;
                if (el.dataset.wiped) return; // Only once
                el.dataset.wiped = 'true';
                el.classList.add('wipe-entering');
                // Remove class after animation
                setTimeout(() => {
                    el.classList.remove('wipe-entering');
                }, 800);
            }
        });
    }, {
        threshold: [0, 0.08, 0.3],
        rootMargin: '-10% 0px',
    });

    sections.forEach(section => observer.observe(section));
}


/* ═══════════════════════════════════════════════
   MASTER INIT
   ═══════════════════════════════════════════════ */

import { initMorphCounters } from './counter-morph.js';

export function initIntelligenceV2() {
    initProgressiveDisclosure();
    initAdaptiveTheme();
    initCommandPalette();
}

export function initPageIntelligenceV2() {
    initTextDecode();
    initSmartPrefetch();
    initMorphCounters();
    initSectionWipes();
    initParallaxDepth();
}

