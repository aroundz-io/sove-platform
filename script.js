// ============================================
// SOVE Platform — GIWA Tone Interactions
// Minimal · Restrained
// ============================================

(function () {
  'use strict';

  const $ = (s, root = document) => root.querySelector(s);
  const $$ = (s, root = document) => Array.from(root.querySelectorAll(s));
  const lerp = (a, b, t) => a + (b - a) * t;
  const clamp = (v, min, max) => Math.max(min, Math.min(max, v));
  const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  const finePointer = window.matchMedia('(pointer: fine)').matches;

  // ===================================================
  // 1) Nav active section tracking
  // ===================================================
  const navLinks = $$('.nav-links a');
  const sectionIds = navLinks
    .map(a => a.getAttribute('href'))
    .filter(h => h && h.startsWith('#'))
    .map(h => h.substring(1));
  const sectionEls = sectionIds.map(id => document.getElementById(id)).filter(Boolean);

  function updateActiveNav() {
    const y = window.scrollY + 120;
    let activeId = sectionIds[0];
    for (const el of sectionEls) {
      if (el && el.offsetTop <= y) activeId = el.id;
    }
    navLinks.forEach(a => {
      const href = a.getAttribute('href') || '';
      a.classList.toggle('active', href === '#' + activeId);
    });
  }

  // ===================================================
  // 2) Scroll progress + nav scrolled state
  // ===================================================
  const progressBar = $('#scrollProgress');
  const navEl = $('#nav');
  function onScroll() {
    const top = window.scrollY;
    const max = document.documentElement.scrollHeight - window.innerHeight;
    const pct = max > 0 ? (top / max) * 100 : 0;
    if (progressBar) progressBar.style.width = pct + '%';
    if (navEl) navEl.classList.toggle('scrolled', top > 20);
    updateActiveNav();
  }
  window.addEventListener('scroll', onScroll, { passive: true });
  onScroll();

  // ===================================================
  // 3) Cursor glow — subtle white aura
  // ===================================================
  const cursorGlow = $('#cursorGlow');
  if (cursorGlow && finePointer && !reducedMotion) {
    let mx = window.innerWidth / 2;
    let my = window.innerHeight / 2;
    let cx = mx;
    let cy = my;
    let active = false;

    window.addEventListener('pointermove', (e) => {
      mx = e.clientX;
      my = e.clientY;
      if (!active) {
        cursorGlow.classList.add('active');
        active = true;
      }
    }, { passive: true });

    window.addEventListener('pointerleave', () => {
      cursorGlow.classList.remove('active');
      active = false;
    });

    function tick() {
      cx = lerp(cx, mx, 0.10);
      cy = lerp(cy, my, 0.10);
      cursorGlow.style.transform = `translate(${cx}px, ${cy}px) translate(-50%, -50%)`;
      requestAnimationFrame(tick);
    }
    tick();
  }

  // ===================================================
  // 4) Mobile menu
  // ===================================================
  const burger = $('#navBurger');
  const navLinksEl = $('.nav-links');
  if (burger && navLinksEl) {
    burger.addEventListener('click', () => {
      navLinksEl.classList.toggle('open');
      burger.classList.toggle('active');
    });
    navLinksEl.addEventListener('click', (e) => {
      if (e.target.tagName === 'A') {
        navLinksEl.classList.remove('open');
        burger.classList.remove('active');
      }
    });
  }

  // ===================================================
  // 5) Module tabs
  // ===================================================
  const mtabs = $$('.mtab');
  const mpanels = $$('.module-panel');
  mtabs.forEach((tab) => {
    tab.addEventListener('click', () => {
      const target = tab.dataset.tab;
      mtabs.forEach((t) => t.classList.remove('active'));
      mpanels.forEach((p) => p.classList.remove('active'));
      tab.classList.add('active');
      const panel = document.getElementById(target);
      if (panel) panel.classList.add('active');
    });
  });

  // ===================================================
  // 6) Smooth anchor scroll
  // ===================================================
  $$('a[href^="#"]').forEach((a) => {
    a.addEventListener('click', (e) => {
      const id = a.getAttribute('href');
      if (id.length <= 1) return;
      const target = document.querySelector(id);
      if (!target) return;
      e.preventDefault();
      const top = target.getBoundingClientRect().top + window.scrollY - 68;
      window.scrollTo({ top, behavior: reducedMotion ? 'auto' : 'smooth' });
    });
  });

  // ===================================================
  // 7) Reveal on scroll (subtle stagger)
  // ===================================================
  const revealSelector = [
    '.principle', '.aud-row', '.token-card', '.sec-card',
    '.tl-item', '.stat', '.uc', '.tier', '.lp', '.ops',
    '.trans-item', '.kv', '.bl', '.alloc-row', '.ml-row',
    '.tech-layer', '.contracts-table tr', '.kpi-table tr',
    '.df-item', '.dt', '.dc-step'
  ].join(',');

  $$(revealSelector).forEach((el, i) => {
    el.classList.add('reveal');
    el.style.transitionDelay = Math.min(i * 14, 200) + 'ms';
  });

  const io = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('in-view');
          io.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.08, rootMargin: '0px 0px -40px 0px' }
  );
  $$('.reveal').forEach((el) => io.observe(el));

  // ===================================================
  // 8) Hero stats — staggered slide-in (no count-up,
  //    values are already final like "$500M")
  // ===================================================
  if (!reducedMotion) {
    const heroStats = $$('.hero-stats .stat');
    heroStats.forEach((s, i) => {
      s.style.opacity = '0';
      s.style.transform = 'translateY(16px)';
      s.style.transition = `opacity 0.7s var(--ease-soft) ${0.9 + i * 0.08}s, transform 0.7s var(--ease-soft) ${0.9 + i * 0.08}s`;
    });
    requestAnimationFrame(() => {
      heroStats.forEach((s) => {
        s.style.opacity = '1';
        s.style.transform = 'translateY(0)';
      });
    });
  }

  // ===================================================
  // 9) Hero text — fade in sequence
  // ===================================================
  if (!reducedMotion) {
    const ease = 'cubic-bezier(0.16, 1, 0.3, 1)';
    const seq = [
      { el: $('.hero-tag'),   d: 0.10, dy: 12 },
      { el: $('.hero-title'), d: 0.20, dy: 24 },
      { el: $('.hero-sub'),   d: 0.45, dy: 16 },
      { el: $('.hero-cta'),   d: 0.65, dy: 16 }
    ];
    seq.forEach(({ el, d, dy }) => {
      if (!el) return;
      el.style.opacity = '0';
      el.style.transform = `translateY(${dy}px)`;
      el.style.transition = `opacity 1s ${ease} ${d}s, transform 1s ${ease} ${d}s`;
      requestAnimationFrame(() => {
        el.style.opacity = '1';
        el.style.transform = 'translateY(0)';
      });
    });
  }

  // ===================================================
  // 10) Allocation bar — fill on view
  // ===================================================
  const allocBars = $$('.alloc-bar > span');
  allocBars.forEach((b) => {
    const target = b.style.width || '0%';
    b.dataset.target = target;
    b.style.width = '0%';
  });
  if (allocBars.length) {
    const allocIO = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            allocBars.forEach((b, i) => {
              setTimeout(() => { b.style.width = b.dataset.target; }, i * 140);
            });
            allocIO.disconnect();
          }
        });
      },
      { threshold: 0.4 }
    );
    allocIO.observe(allocBars[0]);
  }

  // ===================================================
  // 11) Subtle KPI flicker (one cell at a time)
  // ===================================================
  if (!reducedMotion) {
    const dashCells = $$('.dc-value');
    if (dashCells.length) {
      setInterval(() => {
        const cell = dashCells[Math.floor(Math.random() * dashCells.length)];
        cell.style.transition = 'opacity 0.3s var(--ease)';
        cell.style.opacity = '0.5';
        setTimeout(() => { cell.style.opacity = '1'; }, 280);
      }, 2400);
    }
  }

  // ===================================================
  // 12) Orderbook subtle highlight
  // ===================================================
  if (!reducedMotion) {
    const obRows = $$('.ob-row');
    if (obRows.length) {
      setInterval(() => {
        const r = obRows[Math.floor(Math.random() * obRows.length)];
        r.style.transition = 'background 0.5s var(--ease)';
        r.style.background = 'rgba(255,255,255,0.04)';
        setTimeout(() => { r.style.background = ''; }, 500);
      }, 2000);
    }
  }

  // ===================================================
  // 13) Card hover — mouse position tracking for radial glow
  // ===================================================
  if (!reducedMotion && finePointer) {
    const glowCards = $$('.principle, .token-card, .sec-card, .dt, .stack-mod');
    glowCards.forEach((card) => {
      card.addEventListener('pointermove', (e) => {
        const rect = card.getBoundingClientRect();
        const x = ((e.clientX - rect.left) / rect.width) * 100;
        const y = ((e.clientY - rect.top) / rect.height) * 100;
        card.style.setProperty('--mx', x + '%');
        card.style.setProperty('--my', y + '%');
      });
    });
  }

  // ===================================================
  // 14) Hero phone card — subtle parallax tilt
  // ===================================================
  if (!reducedMotion && finePointer) {
    const heroCard = $('.hero-card');
    const heroRight = $('.hero-right');
    if (heroCard && heroRight) {
      heroRight.addEventListener('pointermove', (e) => {
        const rect = heroRight.getBoundingClientRect();
        const cx = rect.left + rect.width / 2;
        const cy = rect.top + rect.height / 2;
        const dx = (e.clientX - cx) / rect.width;
        const dy = (e.clientY - cy) / rect.height;
        heroCard.style.animation = 'none';
        heroCard.style.transform = `rotateY(${-8 + dx * 6}deg) rotateX(${4 - dy * 6}deg) translateY(${dy * -10}px)`;
      });
      heroRight.addEventListener('pointerleave', () => {
        heroCard.style.animation = '';
        heroCard.style.transform = '';
      });
    }
  }

  // ===================================================
  // 15) Mobile nav styles
  // ===================================================
  const style = document.createElement('style');
  style.textContent = `
    .nav-links.open {
      display: flex !important;
      position: absolute;
      top: 68px;
      left: 0; right: 0;
      flex-direction: column;
      align-items: stretch;
      gap: 0;
      background: rgba(10, 10, 12, 0.98);
      padding: 8px 24px 16px;
      border-bottom: 1px solid var(--line);
      backdrop-filter: saturate(160%) blur(24px);
    }
    .nav-links.open a {
      padding: 14px 8px;
      border-bottom: 1px solid var(--line);
    }
    .nav-links.open a:last-child { border-bottom: none; }
    .nav-burger.active span:nth-child(1) { transform: translateY(6px) rotate(45deg); }
    .nav-burger.active span:nth-child(2) { opacity: 0; }
    .nav-burger.active span:nth-child(3) { transform: translateY(-6px) rotate(-45deg); }
  `;
  document.head.appendChild(style);

})();
