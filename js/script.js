/* ============================================================
   SCRIPT.JS — Arraihan Attamimi Portfolio
   Semua konten dari config.js
   ============================================================ */

/* ─── PRELOADER ─── */
const _t0 = Date.now(); let _pd = false;
(() => { const m = ['Initializing', 'Loading assets', 'Rendering', 'Almost ready']; let i = 0, el = document.getElementById('pre-status-txt'); if (!el) return; window._pt = setInterval(() => { i = (i + 1) % m.length; el.textContent = m[i]; }, 700); })();
function hidePreloader() { if (_pd) return; _pd = true; if (window._pt) clearInterval(window._pt); const p = document.getElementById('preloader'); if (!p) return; p.style.opacity = '0'; setTimeout(() => { p.style.display = 'none'; if (typeof showMusicPopup === 'function') showMusicPopup(); }, 700); }
window.addEventListener('load', () => setTimeout(hidePreloader, Math.max(0, 2400 - (Date.now() - _t0))));
setTimeout(hidePreloader, 4500);

/* ─── THEME ─── */
let _dark = localStorage.getItem('theme') !== 'light';
function applyTheme(d) {
  _dark = d;
  document.body.classList.toggle('light', !d);
  const ic = document.getElementById('drawer-theme-icon'), lb = document.getElementById('drawer-theme-label');
  if (ic) ic.textContent = d ? '🌙' : '☀️'; if (lb) lb.textContent = d ? 'Dark Mode' : 'Light Mode';
  localStorage.setItem('theme', d ? 'dark' : 'light');
}
applyTheme(_dark);
document.getElementById('theme-toggle-desk')?.addEventListener('click', () => applyTheme(!_dark));
document.getElementById('theme-toggle-mob')?.addEventListener('click', () => applyTheme(!_dark));

/* ─── DRAWER ─── */
const hamBtn = document.getElementById('ham-btn'), drawer = document.getElementById('mobile-menu'), dOv = document.getElementById('drawer-overlay');
function openD() { drawer.classList.add('open'); dOv.classList.add('open'); hamBtn.classList.add('open'); document.body.style.overflow = 'hidden'; }
function closeD() { drawer.classList.remove('open'); dOv.classList.remove('open'); hamBtn.classList.remove('open'); document.body.style.overflow = ''; }
hamBtn?.addEventListener('click', () => drawer.classList.contains('open') ? closeD() : openD());
dOv?.addEventListener('click', closeD);
document.querySelectorAll('#mobile-menu .nav-link').forEach(l => l.addEventListener('click', closeD));

/* ─── SMOOTH SCROLL ─── */
document.addEventListener('click', e => {
  const a = e.target.closest('a[href^="#"]'); if (!a) return;
  const t = document.querySelector(a.getAttribute('href'));
  if (t) { e.preventDefault(); window.scrollTo({ top: t.getBoundingClientRect().top + window.pageYOffset - 78, behavior: 'smooth' }); }
});

/* ─── REVEAL ─── */
const revObs = new IntersectionObserver(es => { es.forEach(e => { if (e.isIntersecting) { e.target.classList.add('active'); revObs.unobserve(e.target); } }); }, { threshold: 0.08 });
function observeAll() { document.querySelectorAll('.reveal,.reveal-left,.reveal-right').forEach(el => { if (!el.classList.contains('active')) revObs.observe(el); }); }
observeAll();

/* ─── ACTIVE NAV ─── */
function updateNav() {
  const ids = ['hero', 'about', 'skills', 'experience', 'education', 'projects', 'contact'];
  const secs = ids.map(id => document.getElementById(id)).filter(Boolean);
  const links = document.querySelectorAll('.nav-link');
  const sy = window.pageYOffset, navH = 90;
  const atBot = (window.innerHeight + sy) >= document.body.scrollHeight - 10;
  let cur = 'hero';
  if (atBot) cur = 'contact';
  else secs.forEach(s => { if (sy >= s.getBoundingClientRect().top + sy - navH - 40) cur = s.id; });
  links.forEach(l => l.classList.toggle('active', l.getAttribute('href') === '#' + cur));
}
window.addEventListener('scroll', updateNav, { passive: true });
setTimeout(updateNav, 400);

/* ─── NAVBAR HIDE MOBILE ─── */
let _lsy = 0; const _nb = document.getElementById('navbar');
window.addEventListener('scroll', () => { const c = window.pageYOffset; if (window.innerWidth <= 768) _nb.classList.toggle('nav-hidden', c > _lsy && c > 80); else _nb.classList.remove('nav-hidden'); _lsy = c; }, { passive: true });

/* ─── SNAKE BG ─── */
(() => {
  const sc = document.getElementById('snake-canvas'); if (!sc) return;
  const ctx = sc.getContext('2d'), SZ = 20; let W, H, cols, rows;
  const rz = () => { W = sc.width = sc.parentElement?.offsetWidth || window.innerWidth; H = sc.height = sc.parentElement?.offsetHeight || window.innerHeight; cols = Math.floor(W / SZ); rows = Math.floor(H / SZ); };
  rz(); window.addEventListener('resize', rz, { passive: true });
  const mk = () => { const cx = Math.floor(cols / 2), cy = Math.floor(rows / 2); return [{ x: cx, y: cy }, { x: cx - 1, y: cy }, { x: cx - 2, y: cy }]; };
  let snake = mk(), dx = 1, dy = 0, food = { x: Math.floor(Math.random() * cols), y: Math.floor(Math.random() * rows) }, gw = 0;
  const step = () => {
    if (Math.random() < .05) { const d = [[1, 0], [-1, 0], [0, 1], [0, -1]].filter(([nx, ny]) => !(nx === -dx && ny === -dy));[dx, dy] = d[Math.floor(Math.random() * d.length)]; }
    const nx = ((snake[0].x + dx) + cols) % cols, ny = ((snake[0].y + dy) + rows) % rows;
    if (snake.some(s => s.x === nx && s.y === ny)) { snake = mk(); dx = 1; dy = 0; gw = 0; return; }
    snake.unshift({ x: nx, y: ny });
    if (nx === food.x && ny === food.y) { gw += 4; food = { x: Math.floor(Math.random() * cols), y: Math.floor(Math.random() * rows) }; }
    if (gw > 0) gw--; else snake.pop();
  };
  const draw = () => {
    ctx.clearRect(0, 0, W, H);
    ctx.shadowColor = '#3b82f6'; ctx.shadowBlur = 8; ctx.fillStyle = '#3b82f6';
    ctx.fillRect(food.x * SZ + SZ * .3, food.y * SZ + SZ * .3, SZ * .4, SZ * .4); ctx.shadowBlur = 0;
    snake.forEach((s, i) => { const r = 1 - i / snake.length; ctx.globalAlpha = r * .55; ctx.fillStyle = i === 0 ? '#3b82f6' : `rgba(139,92,246,${.3 + r * .5})`; ctx.beginPath(); ctx.roundRect(s.x * SZ + 2, s.y * SZ + 2, SZ - 4, SZ - 4, 3); ctx.fill(); });
    ctx.globalAlpha = 1;
  };
  let lt = 0;
  (function loop(ts) { if (ts - lt >= 160) { step(); draw(); lt = ts; } requestAnimationFrame(loop); })(0);
})();

/* ─── FX CANVAS ─── */
const fxC = document.getElementById('fx-canvas'), fxX = fxC?.getContext('2d'); let fxW, fxH, fxFW = [];
const fxRz = () => { if (!fxC) return; fxW = fxC.width = window.innerWidth; fxH = fxC.height = window.innerHeight; }; fxRz(); window.addEventListener('resize', fxRz, { passive: true });
(function fxLoop() { if (!fxX) return; fxX.clearRect(0, 0, fxW, fxH); fxFW = fxFW.filter(f => { f.x += f.vx; f.y += f.vy; f.a -= f.d; if (f.a <= 0) return false; fxX.globalAlpha = f.a; fxX.beginPath(); fxX.arc(f.x, f.y, f.r, 0, Math.PI * 2); fxX.fillStyle = f.c; fxX.fill(); return true; }); fxX.globalAlpha = 1; requestAnimationFrame(fxLoop); })();

/* ─── RIPPLE ─── */
document.addEventListener('click', e => { const d = document.createElement('div'); d.className = 'ripple-dot'; d.style.left = e.clientX + 'px'; d.style.top = e.clientY + 'px'; document.body.appendChild(d); setTimeout(() => d.remove(), 650); });


/* ════════════════════════════════════════════
   RENDER DARI CONFIG.JS
   ════════════════════════════════════════════ */

/* ── HERO ── */
(function renderHero() {
  if (!window.CONFIG_PROFIL) return;
  const p = CONFIG_PROFIL;
  const $ = id => document.getElementById(id);
  if ($('hero-nama')) $('hero-nama').textContent = p.nama;
  if ($('hero-tagline')) $('hero-tagline').textContent = p.tagline;
  if ($('nav-nama')) $('nav-nama').textContent = p.nama.split(' ')[0];
  if (p.foto_hero) { ['hero-foto', 'nav-foto', 'about-foto'].forEach(id => { const el = $(id); if (el) el.src = p.foto_hero; }); const pr = document.querySelector('.pre-ring img'); if (pr) pr.src = p.foto_hero; }
  // Social
  const ICONS = {
    facebook: `<svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/></svg>`,
    whatsapp: `<svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M20.52 3.48A11.946 11.946 0 0012 0C5.373 0 0 5.373 0 12c0 2.109.554 4.082 1.516 5.844L0 24l6.408-1.513A11.954 11.954 0 0012 24c6.627 0 12-5.373 12-12 0-3.195-1.25-6.186-3.48-8.52zm-2.27 13.49c-.193.54-1.129 1.027-1.588 1.086-.425.053-.956.074-2.414-.68-3.284-1.454-5.406-5.107-5.556-5.354-.15-.248-1.268-1.842-1.268-3.515 0-1.673.879-2.494 1.19-2.833.31-.339.677-.423.902-.423.226 0 .447.003.642.007.21.005.492-.08.77.588.277.668.944 2.315 1.028 2.488.083.174.138.38.003.614-.135.233-.203.38-.405.59-.202.21-.426.468-.608.63-.202.181-.417.381-.298.646.119.264.527 1.072 1.13 1.736.78.842 1.446 1.126 1.667 1.255.22.129.347.108.475-.065.128-.174.548-.64.693-.857.145-.218.294-.18.507-.107.212.073 1.336.63 1.562.743.226.114.377.17.433.266.057.096.057.554-.136 1.093z"/></svg>`,
    instagram: `<svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M7 2C4.243 2 2 4.243 2 7v10c0 2.757 2.243 5 5 5h10c2.757 0 5-2.243 5-5V7c0-2.757-2.243-5-5-5H7zm0 2h10c1.654 0 3 1.346 3 3v10c0 1.654-1.346 3-3 3H7c-1.654 0-3-1.346-3-3V7c0-1.654 1.346-3 3-3zm5 3a5 5 0 100 10 5 5 0 000-10zm0 2a3 3 0 110 6 3 3 0 010-6zm4.5-.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0z"/></svg>`,
    tiktok: `<svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M19.59 6.69a4.83 4.83 0 01-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 01-2.88 2.5 2.89 2.89 0 01-2.89-2.89 2.89 2.89 0 012.89-2.89c.28 0 .54.04.79.1V9.01a6.34 6.34 0 00-.79-.05 6.34 6.34 0 00-6.34 6.34 6.34 6.34 0 006.34 6.34 6.34 6.34 0 006.33-6.34V9.41a8.19 8.19 0 004.77 1.52V7.49a4.85 4.85 0 01-1-.8z"/></svg>`,
    twitter: `<svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-4.714-6.231-5.401 6.231H2.748l7.73-8.835L1.254 2.25H8.08l4.253 5.622zm-1.161 17.52h1.833L7.084 4.126H5.117z"/></svg>`,
  };
  const LABELS = { facebook: 'Facebook', whatsapp: 'WhatsApp', instagram: 'Instagram', tiktok: 'TikTok', twitter: 'X' };
  const CLS = { facebook: '', whatsapp: 'social-btn--wa', instagram: 'social-btn--ig', tiktok: 'social-btn--tt', twitter: 'social-btn--x' };
  const row = $('social-row');
  if (row && p.sosial) { row.innerHTML = Object.entries(p.sosial).map(([k, u]) => `<a href="${u}" target="_blank" rel="noopener" class="social-btn ${CLS[k] || ''}" title="${LABELS[k] || k}">${ICONS[k] || ''}<span>${LABELS[k] || k}</span></a>`).join(''); }
})();

/* ── ABOUT ── */
(function renderAbout() {
  if (!window.CONFIG_ABOUT) return;
  const a = CONFIG_ABOUT, $ = id => document.getElementById(id);
  if ($('about-eyebrow')) $('about-eyebrow').textContent = a.eyebrow || '';
  if ($('about-headline')) $('about-headline').innerHTML = a.headline || '';
  if ($('about-nama-foto')) $('about-nama-foto').textContent = a.nama_foto || '';
  if ($('about-role-foto')) $('about-role-foto').textContent = a.role_foto || '';
  if (a.foto && $('about-foto')) $('about-foto').src = a.foto;
  const tags = $('about-tags');
  if (tags && a.tags) tags.innerHTML = a.tags.map(t => `<span class="tag-chip">${t}</span>`).join('');
  const body = $('about-body');
  if (body) {
    let h = '';
    (a.paragraphs || []).forEach(p => { h += `<p>${p}</p>`; });
    if (a.focus && a.focus.length) h += `<div class="focus-grid">${a.focus.map(f => `<div class="focus-item"><span class="focus-icon">${f.icon}</span><div class="focus-title">${f.title}</div></div>`).join('')}</div>`;
    (a.paragraphs2 || []).forEach(p => { h += `<p>${p}</p>`; });
    if (a.closing_line1) h += `<div class="about-closing-card"><p>${a.closing_line1}</p>${a.closing_line2 ? `<p class="hl-gradient" style="font-weight:600;margin-top:6px">${a.closing_line2}</p>` : ''}</div>`;
    body.innerHTML = h;
  }
})();

/* ── SKILLS ── */
(function renderSkills() {
  if (!window.CONFIG_SKILLS) return;
  const grid = document.getElementById('skills-grid'); if (!grid) return;
  const SVGVID = `<svg width="38" height="38" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><path d="M15 10l4.553-2.277A1 1 0 0121 8.683V15.317a1 1 0 01-1.447.894L15 14M4 8a2 2 0 012-2h9a2 2 0 012 2v8a2 2 0 01-2 2H6a2 2 0 01-2-2V8z"/></svg>`;
  const SVGDES = `<svg width="38" height="38" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><path d="M12 19l7-7 3 3-7 7-3-3z"/><path d="M18 13l-1.5-7.5L2 2l3.5 14.5L13 18l5-5z"/><circle cx="11" cy="11" r="2"/></svg>`;
  grid.innerHTML = CONFIG_SKILLS.map((s, i) => `
    <div class="skill-card reveal d${i + 1}" data-idx="${i}">
      <div class="skill-glow"></div>
      <div class="skill-icon-wrap"><div class="skill-icon">${s.icon === 'video' ? SVGVID : SVGDES}</div></div>
      <div class="skill-info">
        <div class="skill-name">${s.nama}</div>
        <div class="skill-desc">${s.desc}</div>
        <div class="skill-cta">Lihat karya <svg width="12" height="12" viewBox="0 0 16 16" fill="currentColor"><path d="M6 3l5 5-5 5"/></svg></div>
      </div>
      <div class="skill-badge">Click</div>
    </div>`).join('');
  observeAll();
  grid.querySelectorAll('.skill-card').forEach(card => {
    card.addEventListener('click', () => openSkillPanel(CONFIG_SKILLS[+card.dataset.idx]));
  });
})();

function openSkillPanel(skill) {
  const panel = document.getElementById('skill-panel');
  const title = document.getElementById('skill-panel-title');
  const gg = document.getElementById('skill-gallery-grid');
  if (!panel || !skill) return;
  title.textContent = skill.gallery_title || skill.nama;
  const items = skill.items || [];
  if (!items.length) {
    gg.innerHTML = `<div class="gallery-empty"><div class="gallery-empty-icon">✨</div><div class="gallery-empty-title">Segera hadir!</div><div class="gallery-empty-sub">Tambahkan path file karya di <code>config.js</code> bagian <code>CONFIG_SKILLS</code>, lalu hapus komentar (<code>/* */</code>)-nya.</div></div>`;
  } else {
    gg.innerHTML = items.map((item, i) => {
      if (item.type === 'video') {
        return `<div class="gallery-card" data-type="video" data-src="${item.src || ''}">
          <div class="gallery-thumb-wrap">${item.thumb ? `<img src="${item.thumb}" alt="${item.label || ''}" loading="lazy">` : '<div class="gallery-thumb-ph">🎬</div>'}
          <div class="gallery-overlay"><svg width="28" height="28" viewBox="0 0 24 24" fill="white"><path d="M8 5v14l11-7z"/></svg></div></div>
          <div class="gallery-label">${item.label || 'Video ' + (i + 1)}</div></div>`;
      }
      return `<div class="gallery-card" data-type="image" data-src="${item.src || ''}">
        <div class="gallery-thumb-wrap">${item.src ? `<img src="${item.src}" alt="${item.label || ''}" loading="lazy">` : '<div class="gallery-thumb-ph">🖼️</div>'}
        <div class="gallery-overlay"><svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="white" stroke-width="2"><circle cx="11" cy="11" r="8"/><path d="M21 21l-4.35-4.35M11 8v6M8 11h6"/></svg></div></div>
        <div class="gallery-label">${item.label || 'Design ' + (i + 1)}</div></div>`;
    }).join('');
    gg.querySelectorAll('.gallery-card').forEach(gc => {
      gc.addEventListener('click', () => {
        const type = gc.dataset.type, src = gc.dataset.src; if (!src) return;
        if (type === 'image') { openLightbox(src); } else { openVideoModal(src); }
      });
    });
  }
  panel.style.display = 'block';
  setTimeout(() => panel.scrollIntoView({ behavior: 'smooth', block: 'start' }), 50);
}
document.getElementById('close-skill-panel')?.addEventListener('click', () => { document.getElementById('skill-panel').style.display = 'none'; });

/* ── ORGANISASI & PRESTASI ── */
function buildOrgGrid(items, id) {
  const el = document.getElementById(id); if (!el) return;
  if (!items || !items.length) { el.innerHTML = '<p style="color:var(--muted);font-size:.85rem">Belum ada data.</p>'; return; }
  el.innerHTML = items.map((o, i) => `<div class="org-card reveal d${(i % 4) + 1}"><div class="org-icon">${o.icon || '🏛️'}</div><div class="org-nama">${o.nama}</div><div class="org-peran">${o.peran}</div><div class="org-tahun">${o.tahun}</div><div class="org-desc">${o.desc}</div></div>`).join('');
  observeAll();
}
function buildPrestasi() {
  const el = document.getElementById('prestasi-list'); if (!el) return;
  if (!window.PRESTASI_LIST || !PRESTASI_LIST.length) { el.innerHTML = '<p style="color:var(--muted)">Belum ada data.</p>'; return; }
  el.innerHTML = PRESTASI_LIST.map((p, i) => `<div class="prestasi-item reveal" style="transition-delay:${i * .05}s"><div class="prestasi-icon">${p.icon || '🏅'}</div><div class="prestasi-info"><div class="prestasi-judul">${p.judul}</div><div class="prestasi-meta"><span class="prestasi-tahun">${p.tahun}</span><span>${p.inst}</span></div></div></div>`).join('');
  observeAll();
}
if (window.ORG_UTAMA) buildOrgGrid(ORG_UTAMA, 'org-utama-grid');
if (window.ORG_LAIN) buildOrgGrid(ORG_LAIN, 'org-lain-grid');
buildPrestasi();

/* ── EXPERIENCE TABS ── */
document.querySelector('.exp-tabs')?.addEventListener('click', e => {
  const tab = e.target.closest('.exp-tab'); if (!tab) return;
  const t = tab.dataset.tab;
  document.querySelectorAll('.exp-tab').forEach(x => x.classList.remove('active'));
  tab.classList.add('active');
  document.querySelectorAll('.exp-panel').forEach(p => { p.style.display = p.id === 'tab-' + t ? 'block' : 'none'; });
  observeAll();
});

/* ── PENDIDIKAN ── */
(function buildEdu() {
  const el = document.getElementById('edu-timeline'); if (!el) return;
  if (typeof PENDIDIKAN === 'undefined' || !PENDIDIKAN.length) { el.innerHTML = '<p style="color:var(--muted)">Data tidak ditemukan di config.js bagian PENDIDIKAN.</p>'; return; }
  el.innerHTML = PENDIDIKAN.map((e, i) => {
    const link = e.link || `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(e.nama)}`;
    return `<a href="${link}" target="_blank" rel="noopener" class="edu-item" style="animation-delay:${i * .1}s;text-decoration:none;display:block;">
      <div class="edu-card">
        <div class="edu-icon">${e.icon || '📚'}</div>
        <div class="edu-info">
          <div class="edu-jenjang">${e.jenjang}</div>
          <div class="edu-nama">${e.nama}</div>
          <div style="font-size: 0.75rem; color: var(--blue-light); margin-top: 6px;">📍 Buka di Maps</div>
        </div>
      </div>
    </a>`;
  }).join('');
})();

/* ── JASA ── */
(function renderJasa() {
  if (!window.CONFIG_JASA) return;
  const j = CONFIG_JASA, sg = document.getElementById('services-grid'), cc = document.getElementById('contact-cta');
  if (sg && j.services) sg.innerHTML = j.services.map(s => `<div class="service-card"><div class="service-icon">${s.icon}</div><div class="service-name">${s.nama}</div><div class="service-desc">${s.desc}</div></div>`).join('');
  if (cc) cc.innerHTML = `<p class="cta-text">${j.cta_text || ''}</p><a href="${j.whatsapp || '#'}" target="_blank" rel="noopener" class="cta-btn"><svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><path d="M20.52 3.48A11.946 11.946 0 0012 0C5.373 0 0 5.373 0 12c0 2.109.554 4.082 1.516 5.844L0 24l6.408-1.513A11.954 11.954 0 0012 24c6.627 0 12-5.373 12-12 0-3.195-1.25-6.186-3.48-8.52z"/></svg>${j.cta_label || 'Chat via WhatsApp'}</a>`;
})();

/* ─── LIGHTBOX IMAGE ─── */
function openLightbox(src) {
  const m = document.getElementById('image-modal'), img = document.getElementById('modal-img');
  if (!m || !img) return; img.src = src; m.style.display = 'flex';
}
// spa-pameran.js pakai openImageModal — alias ke openLightbox
window.openImageModal = openLightbox;

document.getElementById('image-modal')?.addEventListener('click', function (e) {
  if (e.target === this || e.target.classList.contains('lightbox-close') || e.target.closest('.lightbox-close')) {
    this.style.display = 'none'; document.getElementById('modal-img').src = '';
  }
});

/* ─── VIDEO MODAL ─── */
function openVideoModal(src) {
  const m = document.getElementById('video-modal'), v = document.getElementById('modal-video');
  if (!m || !v) return; v.src = src; m.style.display = 'flex'; v.play?.().catch(() => { });
}
document.getElementById('video-close')?.addEventListener('click', () => {
  const m = document.getElementById('video-modal'), v = document.getElementById('modal-video');
  m.style.display = 'none'; v.pause(); v.src = '';
});
document.getElementById('video-modal')?.addEventListener('click', function (e) {
  if (e.target === this) { this.style.display = 'none'; const v = document.getElementById('modal-video'); v.pause(); v.src = ''; }
});

/* ─── ESC KEY ─── */
document.addEventListener('keydown', e => {
  if (e.key !== 'Escape') return;
  const im = document.getElementById('image-modal'), vm = document.getElementById('video-modal'), sp = document.getElementById('skill-panel');
  if (im) im.style.display = 'none';
  if (vm) { vm.style.display = 'none'; const v = document.getElementById('modal-video'); v.pause(); v.src = ''; }
  if (sp) sp.style.display = 'none';
});

/* ─── MUSIC PLAYER ─── */
const bgMusic = document.getElementById('bg-music');
const musicPopup = document.getElementById('music-popup');
const btnYes = document.getElementById('music-btn-yes');
const btnNo = document.getElementById('music-btn-no');
const musicDesk = document.getElementById('music-toggle-desk');
const musicMob = document.getElementById('music-toggle-mob');

let isMusicPlaying = false;

function showMusicPopup() {
  if (musicPopup) {
    musicPopup.classList.remove('hidden');
    requestAnimationFrame(() => {
      requestAnimationFrame(() => {
        musicPopup.classList.add('show-popup');
      });
    });
  }
}

function hideMusicPopup() {
  if (musicPopup) {
    musicPopup.classList.remove('show-popup');
    setTimeout(() => {
      musicPopup.classList.add('hidden');
    }, 400); // match transition duration
  }
  if (musicDesk) musicDesk.style.display = 'flex';
  if (musicMob) musicMob.style.display = 'flex';
}

function toggleMusic() {
  if (!bgMusic) return;
  if (isMusicPlaying) {
    bgMusic.pause();
    isMusicPlaying = false;
    updateMusicBtns(false);
  } else {
    bgMusic.play().then(() => {
      isMusicPlaying = true;
      updateMusicBtns(true);
    }).catch(e => {
      console.log('Autoplay prevented or music file missing:', e);
      alert('Maaf, file audio tidak ditemukan. Silakan tambahkan file "music.mp3" ke dalam folder "audio/".');
    });
  }
}

function updateMusicBtns(playing) {
  const icon = playing ? '⏸️' : '🎵';
  if (musicDesk) { musicDesk.innerHTML = icon; musicDesk.classList.toggle('playing', playing); }
  if (musicMob) { musicMob.innerHTML = icon; musicMob.classList.toggle('playing', playing); }
}

if (btnYes) btnYes.addEventListener('click', () => { hideMusicPopup(); toggleMusic(); });
if (btnNo) btnNo.addEventListener('click', () => { hideMusicPopup(); });
if (musicDesk) musicDesk.addEventListener('click', toggleMusic);
if (musicMob) musicMob.addEventListener('click', toggleMusic);

if (bgMusic) {
  bgMusic.addEventListener('ended', () => { isMusicPlaying = false; updateMusicBtns(false); });
}

console.log('%c✨ Arraihan Attamimi Portfolio', 'color:#3b82f6;font-size:16px;font-weight:bold');
console.log('%cPengangguran Namun Sibuk 😄', 'color:#8b5cf6;font-size:12px');
console.log('%cTertarik dengan web ini? website by: instagram - @mhmyl_', 'color:#E6E6E6;font-size:6px');
