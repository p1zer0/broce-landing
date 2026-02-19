/* ═══════════════════════════════════════════════
   BROCE™ Gate Component
   ═══════════════════════════════════════════════ */

import { i18n, t } from '../i18n.js';
import { verifyPassword, setAuthenticated } from '../utils/auth.js';

export function renderGate(container, onUnlock) {
    container.innerHTML = `
    <div class="gate-wrapper">
      <div class="gate-bg-mesh" aria-hidden="true"></div>
      <div class="gate-bg-grid" aria-hidden="true"></div>
      <div class="gate-noise" aria-hidden="true"></div>
      <div class="gate-particles" aria-hidden="true">
        ${Array.from({ length: 8 }, () => '<div class="gate-particle"></div>').join('')}
      </div>
      <div class="gate-flash" id="gateFlash"></div>

      <div class="gate" id="gate" role="main">
        <h1 class="gate-logo">BROCE<span></span></h1>
        <p class="gate-tagline" id="gateTagline">${t('gate.tagline')}</p>

        <div class="gate-lang" role="group" aria-label="Language switch">
          <button class="gate-lang-btn ${i18n.currentLang === 'en' ? 'active' : ''}" type="button" data-lang="en" aria-label="English">EN</button>
          <button class="gate-lang-btn ${i18n.currentLang === 'de' ? 'active' : ''}" type="button" data-lang="de" aria-label="Deutsch">DE</button>
        </div>

        <form class="gate-form" id="gateForm" autocomplete="off" novalidate>
          <label class="gate-label" id="gateLabel" for="gatePassword">${t('gate.label')}</label>
          <div class="gate-input-wrap">
            <input class="gate-input" id="gatePassword" type="password"
              placeholder="${t('gate.placeholder')}" autofocus
              autocomplete="current-password" aria-describedby="gateMessage">
            <button class="gate-submit" type="submit" id="gateSubmitBtn" aria-label="Unlock">
              <svg viewBox="0 0 24 24">
                <line x1="5" y1="12" x2="19" y2="12" />
                <polyline points="12 5 19 12 12 19" />
              </svg>
            </button>
          </div>
          <div class="gate-message" id="gateMessage" role="status" aria-live="polite"></div>
        </form>

        <p class="gate-hint" id="gateHint">${t('gate.hint')}</p>
      </div>

      <footer class="gate-footer">
        ${t('gate.footer').replace('BROCE™', '<a href="https://broce.eu">BROCE™</a>')}
      </footer>
    </div>
  `;

    // Elements
    const form = document.getElementById('gateForm');
    const input = document.getElementById('gatePassword');
    const msg = document.getElementById('gateMessage');
    const gate = document.getElementById('gate');
    const gateFlash = document.getElementById('gateFlash');
    const langButtons = container.querySelectorAll('.gate-lang-btn');

    // Language switch
    const applyLanguage = () => {
        document.getElementById('gateLabel').textContent = t('gate.label');
        input.placeholder = t('gate.placeholder');
        document.getElementById('gateHint').textContent = t('gate.hint');
        document.getElementById('gateTagline').textContent = t('gate.tagline');
        document.documentElement.lang = i18n.currentLang;
        langButtons.forEach((btn) => {
            btn.classList.toggle('active', btn.dataset.lang === i18n.currentLang);
        });
    };

    langButtons.forEach((btn) => {
        btn.addEventListener('click', () => {
            i18n.setLang(btn.dataset.lang);
            applyLanguage();
        });
    });

    // Submit handler
    form.addEventListener('submit', async (e) => {
        e.preventDefault();
        const val = input.value.trim();

        if (!val) {
            msg.textContent = t('gate.enterCode');
            msg.className = 'gate-message error';
            shakeInput();
            return;
        }

        const valid = await verifyPassword(val);

        if (valid) {
            msg.textContent = t('gate.granted');
            msg.className = 'gate-message success';
            input.disabled = true;
            document.getElementById('gateSubmitBtn').disabled = true;
            setAuthenticated();

            gateFlash.classList.add('active');
            gate.classList.add('unlocking');

            setTimeout(() => {
                onUnlock();
            }, 700);
        } else {
            msg.textContent = t('gate.invalid');
            msg.className = 'gate-message error';
            shakeInput();
            input.value = '';
            input.focus();
        }
    });

    function shakeInput() {
        input.style.animation = 'none';
        input.offsetHeight; // reflow
        input.style.animation = 'shake 0.5s ease';
    }
}
