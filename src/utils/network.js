/* ═══════════════════════════════════════════════
   BROCE™ Network-Aware Quality
   ═══════════════════════════════════════════════
   Detects connection speed and sets a quality 
   tier so the intelligence layer can adapt.
   
   Uses the Network Information API where
   available, falls back to 'fast'.
   ═══════════════════════════════════════════════ */

const TIERS = { FAST: 'fast', MEDIUM: 'medium', SLOW: 'slow' };

let tier = TIERS.FAST;

/**
 * Detect connection quality and set data-connection
 * attribute on <html>.
 */
export function initNetworkDetection() {
    const conn = navigator.connection || navigator.mozConnection || navigator.webkitConnection;

    if (!conn) {
        // API not available — assume fast
        apply(TIERS.FAST);
        return;
    }

    const detect = () => {
        const ect = conn.effectiveType; // '4g', '3g', '2g', 'slow-2g'
        if (ect === '4g') {
            tier = TIERS.FAST;
        } else if (ect === '3g') {
            tier = TIERS.MEDIUM;
        } else {
            tier = TIERS.SLOW;
        }

        // Also check saveData flag
        if (conn.saveData) {
            tier = TIERS.SLOW;
        }

        apply(tier);
    };

    detect();
    conn.addEventListener('change', detect);
}

/**
 * Get current connection tier.
 * @returns {'fast' | 'medium' | 'slow'}
 */
export function getConnectionTier() {
    return tier;
}

function apply(t) {
    document.documentElement.setAttribute('data-connection', t);
}
