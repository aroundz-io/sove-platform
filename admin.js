/* ============================================
   SOVE Admin Console — Interactions
   ============================================ */

(function () {
  'use strict';

  const $ = (s, root = document) => root.querySelector(s);
  const $$ = (s, root = document) => Array.from(root.querySelectorAll(s));

  const TAB_TITLES = {
    overview: { title: 'Overview', meta: '실시간 KPI · GIWA Sepolia' },
    assets: { title: 'Asset Management', meta: '자산 등록 · 감정 · 수탁 · 도장 발급' },
    users: { title: 'Users', meta: 'KYC · Tier · GIWA ID · Blacklist' },
    tx: { title: 'Transactions', meta: '실시간 거래 모니터링 · 이상 거래 탐지' },
    token: { title: 'Token Dashboard', meta: '$SOVE 유통량 · Mint · Burn · 담보율' },
    governance: { title: 'Governance', meta: '제안 · 투표 · DAO 전환' },
    security: { title: 'Security', meta: 'Multi-Sig · Timelock · 감사 현황' },
    reports: { title: 'Reports', meta: '자동 생성 보고서 · Daily / Weekly / Monthly / Quarterly' }
  };

  const navItems = $$('.admin-nav-item[data-tab]');
  const panels = $$('.admin-panel');
  const titleEl = $('#tabTitle');
  const metaEl = $('#tabMeta');

  function switchTab(tab) {
    navItems.forEach(b => b.classList.toggle('active', b.dataset.tab === tab));
    panels.forEach(p => p.classList.toggle('active', p.id === 'panel-' + tab));
    const info = TAB_TITLES[tab];
    if (info && titleEl && metaEl) {
      titleEl.textContent = info.title;
      metaEl.textContent = info.meta;
    }
    // Update URL hash without scroll
    if (location.hash !== '#' + tab) {
      history.replaceState(null, '', '#' + tab);
    }
    // Scroll body to top on tab change
    const body = $('.admin-body');
    if (body) body.scrollIntoView({ behavior: 'smooth', block: 'start' });
  }

  navItems.forEach(b => {
    b.addEventListener('click', () => switchTab(b.dataset.tab));
  });

  // Boot tab from hash
  const initial = (location.hash || '').replace('#', '');
  if (initial && TAB_TITLES[initial]) switchTab(initial);

  // Adchip toggles inside same group (visual feedback only)
  $$('.adsec-tools, .ad-card-h').forEach(group => {
    const chips = group.querySelectorAll('.adchip');
    chips.forEach(c => c.addEventListener('click', () => {
      if (c.disabled) return;
      // toggle within siblings
      const siblings = c.parentElement.querySelectorAll('.adchip');
      siblings.forEach(s => s.classList.remove('active'));
      c.classList.add('active');
    }));
  });

  // Live KPI flicker
  const kpiValues = $$('.kc-value, .dc-value, .activity-time');
  if (kpiValues.length && !window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
    setInterval(() => {
      const el = kpiValues[Math.floor(Math.random() * kpiValues.length)];
      if (!el) return;
      el.style.transition = 'opacity 0.35s ease';
      el.style.opacity = '0.4';
      setTimeout(() => { el.style.opacity = '1'; }, 360);
    }, 2400);
  }

  // Live tx row highlight
  setInterval(() => {
    const rows = $$('#panel-tx .adtable tbody tr');
    if (!rows.length) return;
    const r = rows[Math.floor(Math.random() * rows.length)];
    r.style.transition = 'background 0.5s ease';
    r.style.background = 'rgba(255, 61, 61, 0.06)';
    setTimeout(() => { r.style.background = ''; }, 500);
  }, 2000);

  // Search input — visual only
  const search = $('.admin-search input');
  if (search) {
    search.addEventListener('keydown', (e) => {
      if (e.key === 'Enter') {
        const q = search.value.trim();
        if (q) {
          // Visual feedback
          search.style.borderColor = 'var(--acc)';
          setTimeout(() => { search.style.borderColor = ''; }, 600);
        }
      }
    });
  }
})();
