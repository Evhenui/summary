/* ==========================================================================
   MAIN.JS — Site logic
   Depends on i18n.js (must be loaded before this file)
   Sections: 1. Constants | 2. Theme | 3. Language | 4. Init
            5. Scroll reveal | 6. Parallax orbs
   ========================================================================== */


/* ==========================================================================
   1. CONSTANTS
   ========================================================================== */

const DEFAULT_LANG = 'en';
const DEFAULT_THEME = 'dark';
const STORAGE_KEYS = { lang: 'lang', theme: 'theme' };


/* ==========================================================================
   2. THEME
   ========================================================================== */

function applyTheme(theme) {
  if (theme === 'light') {
    document.documentElement.setAttribute('data-theme', 'light');
  } else {
    document.documentElement.removeAttribute('data-theme');
  }
  localStorage.setItem(STORAGE_KEYS.theme, theme);
}

function toggleTheme() {
  const current = localStorage.getItem(STORAGE_KEYS.theme) || DEFAULT_THEME;
  applyTheme(current === 'dark' ? 'light' : 'dark');
}


/* ==========================================================================
   3. LANGUAGE
   ========================================================================== */

function applyLang(lang) {
  // <html lang="..."> — uk is the ISO code for Ukrainian
  document.documentElement.lang = lang === 'ua' ? 'uk' : 'en';

  // Page title
  if (pageTitles[lang]) document.title = pageTitles[lang];

  // All elements with data-i18n
  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.getAttribute('data-i18n');
    if (i18n[lang] && i18n[lang][key]) {
      el.textContent = i18n[lang][key];
    }
  });

  // Lang button shows the OTHER language (what you'll switch TO)
  const label = document.getElementById('langLabel');
  if (label) label.textContent = lang === 'en' ? 'UA' : 'EN';

  localStorage.setItem(STORAGE_KEYS.lang, lang);
}

function toggleLang() {
  const current = localStorage.getItem(STORAGE_KEYS.lang) || DEFAULT_LANG;
  applyLang(current === 'en' ? 'ua' : 'en');
}


/* ==========================================================================
   4. INIT
   ========================================================================== */

function init() {
  // Restore from localStorage or fall back to defaults
  const savedLang = localStorage.getItem(STORAGE_KEYS.lang) || DEFAULT_LANG;
  const savedTheme = localStorage.getItem(STORAGE_KEYS.theme) || DEFAULT_THEME;
  applyLang(savedLang);
  applyTheme(savedTheme);

  // Bind toggles
  const themeBtn = document.getElementById('themeToggle');
  const langBtn = document.getElementById('langToggle');
  if (themeBtn) themeBtn.addEventListener('click', toggleTheme);
  if (langBtn) langBtn.addEventListener('click', toggleLang);

  // Reveal-on-scroll + parallax
  initScrollReveal();
  initParallax();
}


/* ==========================================================================
   5. SCROLL REVEAL
   ========================================================================== */

function initScrollReveal() {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) entry.target.classList.add('visible');
    });
  }, { threshold: 0.1, rootMargin: '0px 0px -50px 0px' });

  document.querySelectorAll('.reveal').forEach((el, i) => {
    el.style.transitionDelay = `${(i % 4) * 0.08}s`;
    observer.observe(el);
  });
}


/* ==========================================================================
   6. PARALLAX ORBS (subtle mouse-driven movement)
   ========================================================================== */

function initParallax() {
  const orb1 = document.querySelector('.orb-1');
  const orb2 = document.querySelector('.orb-2');
  if (!orb1 || !orb2) return;

  document.addEventListener('mousemove', (e) => {
    const x = (e.clientX / window.innerWidth - 0.5) * 20;
    const y = (e.clientY / window.innerHeight - 0.5) * 20;
    orb1.style.transform = `translate(${x}px, ${y}px)`;
    orb2.style.transform = `translate(${-x}px, ${-y}px)`;
  });
}


/* ==========================================================================
   START
   ========================================================================== */

init();