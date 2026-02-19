/* ═══════════════════════════════════════════════
   BROCE™ Formatting Utilities
   ═══════════════════════════════════════════════ */

export const eur = (n) => new Intl.NumberFormat('en-IE', {
    style: 'currency',
    currency: 'EUR',
    maximumFractionDigits: 0
}).format(n);

export const clamp = (value, min, max) => Math.min(max, Math.max(min, value));
