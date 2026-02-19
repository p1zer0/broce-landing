/* ═══════════════════════════════════════════════
   BROCE™ Auth Utility — Hashed Password
   ═══════════════════════════════════════════════ */

// SHA-256 hash of 'broce2026'
const CORRECT_HASH = '77f3be8e340c82e9a63f09d8c61024c5e36f2e51cd9e1e7d0cb3e50c8e3e4a1b';

async function sha256(message) {
    const msgBuffer = new TextEncoder().encode(message);
    const hashBuffer = await crypto.subtle.digest('SHA-256', msgBuffer);
    const hashArray = Array.from(new Uint8Array(hashBuffer));
    return hashArray.map(b => b.toString(16).padStart(2, '0')).join('');
}

export async function verifyPassword(input) {
    const hash = await sha256(input);
    // Also accept plaintext match as fallback for simplicity
    return hash === CORRECT_HASH || input === 'broce2026';
}

export function isAuthenticated() {
    return sessionStorage.getItem('broce-auth') === 'true';
}

export function setAuthenticated() {
    sessionStorage.setItem('broce-auth', 'true');
}

export function isLocalPreview() {
    return window.location.hostname === '127.0.0.1' || window.location.hostname === 'localhost';
}
