/* ── UI HELPERS ── */

const scopeColor = {
  marketing:     'var(--c-red)',
  operacional:   'var(--c-gold)',
  compartilhado: 'var(--c-blue)',
};

const scopeLabel = {
  marketing:     'Marketing / Paleta',
  operacional:   'Operacional / Construtora',
  compartilhado: 'Compartilhado',
};

/* ── TOAST ── */
const Toast = (() => {
  let timer = null;
  const el    = () => document.getElementById('toast');
  const msgEl = () => document.getElementById('toastMsg');

  function show(text, icon = '✓') {
    const t = el(); const m = msgEl();
    if (!t || !m) return;
    m.textContent = text.length > 55 ? text.slice(0, 55) + '…' : text;
    document.getElementById('toastIcon').textContent = icon;
    t.classList.add('show');
    clearTimeout(timer);
    timer = setTimeout(() => t.classList.remove('show'), 2600);
  }

  return { show };
})();

/* ── CONFETTI ── */
function spawnConfetti(x, y) {
  const colors = ['#e63946','#c9a84c','#4a90d9','#2ecc71','#ff6b75'];
  for (let i = 0; i < 8; i++) {
    const dot = document.createElement('div');
    dot.className = 'confetti-dot';
    dot.style.cssText = `
      left: ${x + (Math.random() - 0.5) * 60}px;
      top:  ${y - 10}px;
      background: ${colors[Math.floor(Math.random() * colors.length)]};
      animation-delay: ${Math.random() * 0.15}s;
      animation-duration: ${0.6 + Math.random() * 0.4}s;
    `;
    document.body.appendChild(dot);
    setTimeout(() => dot.remove(), 1200);
  }
}

/* ── PROGRESS UPDATES ── */
function updateGlobalProgress() {
  const p = State.getGlobalProgress();
  const bar = document.getElementById('globalFill');
  const pct = document.getElementById('globalPct');
  if (bar) bar.style.width = p.pct + '%';
  if (pct) pct.textContent  = p.pct + '%';
}

function updateScopeProgress() {
  ['marketing', 'operacional', 'compartilhado'].forEach(scope => {
    const p   = State.getScopeProgress(scope);
    const bar = document.getElementById(`scope-fill-${scope}`);
    const pct = document.getElementById(`scope-pct-${scope}`);
    const cnt = document.getElementById(`scope-cnt-${scope}`);
    if (bar) bar.style.width = p.pct + '%';
    if (pct) pct.textContent  = p.pct + '%';
    if (cnt) cnt.textContent  = `${p.done}/${p.total}`;
  });
}

function updateCardProgress(clId) {
  const cl = CHECKLISTS.find(c => c.id === clId);
  if (!cl) return;
  const p = State.getChecklistProgress(cl);

  const fill = document.getElementById(`card-fill-${clId}`);
  const pct  = document.getElementById(`card-pct-${clId}`);
  const cnt  = document.getElementById(`card-cnt-${clId}`);
  const card = document.getElementById(`cl-card-${clId}`);

  if (fill) fill.style.width = p.pct + '%';
  if (pct)  pct.textContent  = p.pct + '%';
  if (cnt)  cnt.textContent  = `${p.done}/${p.total} itens`;
  if (card) card.classList.toggle('all-done', p.pct === 100);
}

function updateDetailProgress(clId) {
  const cl = CHECKLISTS.find(c => c.id === clId);
  if (!cl) return;
  const p = State.getChecklistProgress(cl);

  const bar   = document.getElementById(`detail-fill-${clId}`);
  const label = document.getElementById(`detail-pct-${clId}`);
  const banner = document.getElementById(`done-banner-${clId}`);

  if (bar)   bar.style.width = p.pct + '%';
  if (label) label.textContent = `${p.done}/${p.total} · ${p.pct}%`;
  if (banner) banner.classList.toggle('show', p.pct === 100);
}

function updatePhaseProgress(clId, phaseIdx) {
  const cl = CHECKLISTS.find(c => c.id === clId);
  if (!cl) return;
  const ph = cl.phases[phaseIdx];
  const p  = State.getPhaseProgress(clId, phaseIdx, ph.items);

  const bar   = document.getElementById(`phase-fill-${clId}-${phaseIdx}`);
  const label = document.getElementById(`phase-lbl-${clId}-${phaseIdx}`);

  if (bar)   bar.style.width = p.pct + '%';
  if (label) label.textContent = `${p.done}/${p.total}`;
}

/* ── RENDER OVERVIEW ── */
function renderOverview() {
  // stats
  const totalItems = CHECKLISTS.reduce((s, c) => s + c.phases.reduce((ss, p) => ss + p.items.length, 0), 0);
  document.getElementById('stat-checklists').textContent = '14';
  document.getElementById('stat-items').textContent      = totalItems;

  // scope cards
  ['marketing', 'operacional', 'compartilhado'].forEach(scope => {
    const p   = State.getScopeProgress(scope);
    const bar = document.getElementById(`scope-fill-${scope}`);
    const pct = document.getElementById(`scope-pct-${scope}`);
    const cnt = document.getElementById(`scope-cnt-${scope}`);
    if (bar) bar.style.width = p.pct + '%';
    if (pct) pct.textContent  = p.pct + '%';
    if (cnt) cnt.textContent  = `${p.done}/${p.total}`;
  });

  // grid
  const grid = document.getElementById('checklistGrid');
  grid.innerHTML = '';

  CHECKLISTS.forEach((cl, idx) => {
    const p = State.getChecklistProgress(cl);
    const card = document.createElement('div');
    card.className = `cl-card ${cl.scope} anim-fade-up stagger-${Math.min(idx + 1, 14)}`;
    card.id = `cl-card-${cl.id}`;
    if (p.pct === 100) card.classList.add('all-done');

    card.innerHTML = `
      <div class="cl-done-badge">✓ Concluído</div>
      <div class="cl-num">
        <span class="cl-num-dot ${cl.scope}"></span>
        CHECKLIST ${cl.num}
      </div>
      <div class="cl-title">${cl.title}</div>
      <div class="cl-footer">
        <span class="cl-count" id="card-cnt-${cl.id}">${p.done}/${p.total} itens</span>
        <span class="cl-pct"   id="card-pct-${cl.id}">${p.pct}%</span>
      </div>
      <div class="cl-track">
        <div class="cl-fill" id="card-fill-${cl.id}" style="width:${p.pct}%"></div>
      </div>
      <span class="cl-arrow">→</span>
    `;
    card.addEventListener('click', () => App.openDetail(cl.id));
    grid.appendChild(card);
  });

  updateGlobalProgress();
}

/* ── RENDER DETAIL ── */
function renderDetail(clId) {
  const cl = CHECKLISTS.find(c => c.id === clId);
  if (!cl) return;

  const container = document.getElementById('detail-container');
  if (document.getElementById(`detail-page-${clId}`)) return; // already built

  const p = State.getChecklistProgress(cl);
  const totalItems = cl.phases.reduce((s, ph) => s + ph.items.length, 0);

  const page = document.createElement('div');
  page.id = `detail-page-${clId}`;
  page.className = 'page';

  const dot = `background:${scopeColor[cl.scope]}`;

  page.innerHTML = `
    <div class="detail-sticky">
      <div class="detail-sticky-inner">
        <button class="back-btn" id="back-btn-${clId}">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
            <path d="M19 12H5M12 19l-7-7 7-7"/>
          </svg>
          Visão geral
        </button>
        <div class="detail-head-row">
          <div>
            <div class="detail-eyebrow">CHECKLIST ${cl.num} · ${totalItems} ITENS</div>
            <div class="detail-title">${cl.title}</div>
            <div class="detail-badges">
              <span class="badge"><span class="badge-dot" style="${dot}"></span>${scopeLabel[cl.scope]}</span>
              <span class="badge">${cl.responsible}</span>
            </div>
          </div>
          <div class="detail-progress-wrap">
            <div class="detail-progress-label">
              <span>Progresso</span>
              <span id="detail-pct-${cl.id}">${p.done}/${p.total} · ${p.pct}%</span>
            </div>
            <div class="detail-progress-track">
              <div class="detail-progress-fill ${cl.scope}" id="detail-fill-${cl.id}" style="width:${p.pct}%"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="detail-content">
      <div class="done-banner ${p.pct === 100 ? 'show' : ''}" id="done-banner-${cl.id}">
        <div class="done-banner-icon">🎉</div>
        <h3>Checklist concluído!</h3>
        <p>Todos os ${totalItems} itens foram completados.</p>
      </div>
      <div id="detail-phases-${cl.id}"></div>
    </div>
  `;

  container.appendChild(page);

  // back button
  page.querySelector(`#back-btn-${clId}`).addEventListener('click', () => App.closeDetail());

  // render phases
  renderPhases(cl);
}

function renderPhases(cl) {
  const container = document.getElementById(`detail-phases-${cl.id}`);
  if (!container) return;
  container.innerHTML = '';

  cl.phases.forEach((phase, phaseIdx) => {
    const phP = State.getPhaseProgress(cl.id, phaseIdx, phase.items);
    const dot = `background:${scopeColor[cl.scope]}`;

    const section = document.createElement('div');
    section.className = 'phase-section';

    section.innerHTML = `
      <div class="phase-header">
        <span class="phase-dot" style="${dot}"></span>
        <span class="phase-name">${phase.label}</span>
        <div class="phase-mini-progress">
          <div class="phase-mini-track">
            <div class="phase-mini-fill ${cl.scope}" id="phase-fill-${cl.id}-${phaseIdx}" style="width:${phP.pct}%"></div>
          </div>
          <span class="phase-mini-label" id="phase-lbl-${cl.id}-${phaseIdx}">${phP.done}/${phP.total}</span>
        </div>
      </div>
    `;

    // items
    phase.items.forEach((item, itemIdx) => {
      const checked = State.isChecked(cl.id, phaseIdx, itemIdx);
      const delay   = itemIdx * 30;

      const row = document.createElement('div');
      row.className = `item-row${checked ? ' completed' : ''} item-anim`;
      row.id = `item-${cl.id}-${phaseIdx}-${itemIdx}`;
      row.style.animationDelay = delay + 'ms';
      row.setAttribute('role', 'checkbox');
      row.setAttribute('aria-checked', String(checked));
      row.setAttribute('tabindex', '0');

      row.innerHTML = `
        <div class="item-cb">
          <span class="cb-check">✓</span>
          <span class="cb-empty"></span>
        </div>
        <div class="item-text">${item.text}</div>
        <span class="item-type ${item.type}">${item.type}</span>
      `;

      const handleToggle = (e) => {
        const nowChecked = State.toggle(cl.id, phaseIdx, itemIdx);
        row.classList.toggle('completed', nowChecked);
        row.setAttribute('aria-checked', String(nowChecked));

        if (nowChecked) {
          const rect = row.getBoundingClientRect();
          spawnConfetti(rect.left + rect.width / 2, rect.top + rect.height / 2);
          Toast.show(item.text);
        }

        updatePhaseProgress(cl.id, phaseIdx);
        updateDetailProgress(cl.id);
        updateCardProgress(cl.id);
        updateScopeProgress();
        updateGlobalProgress();
      };

      row.addEventListener('click', handleToggle);
      row.addEventListener('keydown', (e) => { if (e.key === ' ' || e.key === 'Enter') { e.preventDefault(); handleToggle(e); }});

      section.appendChild(row);
    });

    container.appendChild(section);
  });
}
