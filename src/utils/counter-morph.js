/* ═══════════════════════════════════════════════
   BROCE™ Counter Morph — Slot-Machine Digits
   ═══════════════════════════════════════════════
   Each digit rolls independently through random 
   numbers before settling on its target.
   Like a departure board or mechanical counter.
   ═══════════════════════════════════════════════ */

const MORPH_DURATION = 1200;    // ms total
const EASE = (t) => 1 - Math.pow(1 - t, 3); // ease-out cubic

/**
 * Initialize morphing counters.
 * Finds all [data-counter-target] elements.
 * Replaces the default counter animation.
 */
export function initMorphCounters() {
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (!entry.isIntersecting) return;
            morphElement(entry.target);
            observer.unobserve(entry.target);
        });
    }, { threshold: 0.3 });

    document.querySelectorAll('[data-counter-target]').forEach(el => {
        // Mark as pending
        el.dataset.morphState = 'pending';
        observer.observe(el);
    });
}

function morphElement(el) {
    if (el.dataset.morphState === 'done') return;
    el.dataset.morphState = 'running';

    const target = parseFloat(el.dataset.counterTarget);
    const suffix = el.dataset.counterSuffix || '';
    const isDecimal = String(target).includes('.');
    const decimals = isDecimal ? String(target).split('.')[1].length : 0;

    const startTime = performance.now();

    const tick = (now) => {
        const elapsed = now - startTime;
        const progress = Math.min(elapsed / MORPH_DURATION, 1);
        const eased = EASE(progress);

        if (progress < 1) {
            // During animation: show morphing digits
            const current = eased * target;

            if (progress < 0.7) {
                // Scramble phase — show rolling random digits
                const display = scrambleNumber(target, current, progress, decimals);
                el.textContent = display + suffix;
            } else {
                // Settle phase — converge to actual value
                const display = isDecimal
                    ? current.toFixed(decimals)
                    : Math.round(current).toString();
                el.textContent = display + suffix;
            }

            requestAnimationFrame(tick);
        } else {
            // Final value
            const display = isDecimal
                ? target.toFixed(decimals)
                : target.toString();
            el.textContent = display + suffix;
            el.dataset.morphState = 'done';
        }
    };

    requestAnimationFrame(tick);
}

/**
 * Generate a scrambled number string.
 * Each digit independently cycles through random values,
 * settling left-to-right as progress advances.
 */
function scrambleNumber(target, current, progress, decimals) {
    const targetStr = decimals > 0
        ? target.toFixed(decimals)
        : Math.round(target).toString();

    const digits = targetStr.split('');
    const totalDigits = digits.filter(d => d !== '.').length;

    return digits.map((char, i) => {
        if (char === '.') return '.';

        // Count how many non-dot digits are before this position
        const digitIndex = digits.slice(0, i).filter(d => d !== '.').length;

        // Each digit settles at a staggered time
        const settlePoint = 0.3 + (digitIndex / totalDigits) * 0.5;

        if (progress > settlePoint) {
            return char; // Settled — show real digit
        }

        // Still scrambling — random digit
        return Math.floor(Math.random() * 10).toString();
    }).join('');
}
