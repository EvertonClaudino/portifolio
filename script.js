/* ════════════════════════════════════════════════════
   script.js — Language toggle, nav, skills, animations
   ════════════════════════════════════════════════════ */

(function () {
  'use strict';

  // ─── Language Toggle ───────────────────────────────
  let currentLang = 'pt';
  const langBtn = document.getElementById('lang-toggle');

  function setLanguage(lang) {
    currentLang = lang;
    // Update all [data-pt] / [data-en] elements
    document.querySelectorAll('[data-pt]').forEach(el => {
      const content = el.getAttribute(`data-${lang}`);
      if (content !== null) {
        // If element has child HTML stored in data attrs, use innerHTML
        if (content.includes('<')) {
          el.innerHTML = content;
        } else {
          el.textContent = content;
        }
      }
    });

    // Update lang toggle button display
    const spans = langBtn.querySelectorAll('span');
    spans.forEach(s => s.classList.remove('lang-active'));
    if (lang === 'pt') {
      spans[0].classList.add('lang-active');
    } else {
      spans[1].classList.add('lang-active');
    }

    // Update skill detail if visible
    const activeSkill = document.querySelector('.skill-card.active');
    if (activeSkill) {
      showSkillDetail(activeSkill);
    }

    document.documentElement.lang = lang === 'pt' ? 'pt-BR' : 'en';
  }

  langBtn.addEventListener('click', () => {
    setLanguage(currentLang === 'pt' ? 'en' : 'pt');
  });

  // ─── Hamburger Menu ────────────────────────────────
  const hamburger = document.getElementById('hamburger');
  const navLinks = document.getElementById('nav-links');

  hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('open');
    navLinks.classList.toggle('open');
  });

  // Close menu on link click
  navLinks.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => {
      hamburger.classList.remove('open');
      navLinks.classList.remove('open');
    });
  });

  // ─── Active Nav Link on Scroll ─────────────────────
  const sections = document.querySelectorAll('.section');
  const navAnchors = navLinks.querySelectorAll('a');

  function updateActiveNav() {
    let current = '';
    sections.forEach(sec => {
      const top = sec.offsetTop - 120;
      if (window.scrollY >= top) {
        current = sec.getAttribute('id');
      }
    });
    navAnchors.forEach(a => {
      a.classList.remove('active');
      if (a.getAttribute('href') === `#${current}`) {
        a.classList.add('active');
      }
    });
  }

  // ─── Intersection Observer for Section Fade-in ─────
  const observer = new IntersectionObserver(
    entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
        }
      });
    },
    { threshold: 0.12 }
  );

  sections.forEach(sec => observer.observe(sec));

  // ─── Skills Interaction ────────────────────────────
  const skillCards = document.querySelectorAll('.skill-card');
  const skillDetail = document.getElementById('skill-detail');

  function showSkillDetail(card) {
    const name = card.getAttribute('data-name');
    const desc = card.getAttribute(`data-desc-${currentLang}`);
    document.getElementById('skill-detail-name').textContent = name;
    document.getElementById('skill-detail-desc').textContent = desc;
    skillDetail.classList.add('show');
  }

  skillCards.forEach(card => {
    card.addEventListener('click', () => {
      skillCards.forEach(c => c.classList.remove('active'));
      card.classList.add('active');
      showSkillDetail(card);
    });

    card.addEventListener('mouseenter', () => {
      showSkillDetail(card);
    });
  });

  // ─── Contact Form (prevent default) ────────────────
  const form = document.getElementById('contact-form');
  form.addEventListener('submit', e => {
    e.preventDefault();
    const btn = form.querySelector('.form-submit');
    const originalText = btn.textContent;
    btn.textContent = currentLang === 'pt' ? 'Enviado ✓' : 'Sent ✓';
    btn.style.background = 'var(--accent-cyan)';
    btn.style.color = 'var(--bg-dark)';
    setTimeout(() => {
      btn.textContent = originalText;
      btn.style.background = '';
      btn.style.color = '';
      form.reset();
    }, 2000);
  });

  // ─── Scroll listener ──────────────────────────────
  window.addEventListener('scroll', updateActiveNav, { passive: true });
  updateActiveNav();
})();
