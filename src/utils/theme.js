/* ═══════════════════════════════════════════════
   BROCE™ Theme Manager
   ═══════════════════════════════════════════════
   Auto-detects system preference, remembers
   user choice in localStorage, provides toggle.
   ═══════════════════════════════════════════════ */

const STORAGE_KEY = 'broce-theme';
const DARK = 'dark';
const LIGHT = 'light';

let currentTheme = null;

/**
 * Initialize theme on boot.
 * Priority: localStorage > system preference > dark (default)
 */
export function initTheme() {
    const saved = localStorage.getItem(STORAGE_KEY);
    if (saved === LIGHT || saved === DARK) {
        currentTheme = saved;
    } else {
        // System preference
        currentTheme = window.matchMedia('(prefers-color-scheme: light)').matches ? LIGHT : DARK;
    }
    applyTheme(currentTheme);

    // Listen for system changes (only if no manual override)
    window.matchMedia('(prefers-color-scheme: light)').addEventListener('change', (e) => {
        if (!localStorage.getItem(STORAGE_KEY)) {
            setTheme(e.matches ? LIGHT : DARK);
        }
    });
}

/**
 * Toggle between dark and light.
 */
export function toggleTheme() {
    const next = currentTheme === DARK ? LIGHT : DARK;
    setTheme(next);
}

/**
 * Set a specific theme.
 * @param {string} theme — 'dark' | 'light'
 */
export function setTheme(theme) {
    currentTheme = theme;
    localStorage.setItem(STORAGE_KEY, theme);
    applyTheme(theme);
}

/**
 * Get current theme.
 * @returns {string}
 */
export function getTheme() {
    return currentTheme;
}

/**
 * Apply theme to DOM.
 */
function applyTheme(theme) {
    document.documentElement.setAttribute('data-theme', theme);

    // Update meta theme-color for mobile browsers
    let meta = document.querySelector('meta[name="theme-color"]');
    if (!meta) {
        meta = document.createElement('meta');
        meta.name = 'theme-color';
        document.head.appendChild(meta);
    }
    meta.content = theme === DARK ? '#0C1926' : '#F8F5F0';
}
