/* ── APP CONTROLLER ── */
const App = (() => {
  let currentDetailId = null;

  function buildShell() {
    const totalItems = CHECKLISTS.reduce((s, c) =>
      s + c.phases.reduce((ss, p) => ss + p.items.length, 0), 0);

    document.getElementById('app').innerHTML = `
      <!-- Background blobs -->
      <div class="bg-blob bg-blob-1"></div>
      <div class="bg-blob bg-blob-2"></div>
      <div class="bg-blob bg-blob-3"></div>

      <!-- Header -->
      <header class="header">
        <div class="header-inner">
          <div class="logo">
            <div class="logo-mark">A</div>
            <div class="logo-text">
              <span class="logo-name">Paleta Marketing</span>
              <span class="logo-sub">Contrato Nº 28.2026</span>
            </div>
          </div>
          <div class="header-center">
            <div class="project-name">Centro Comercial Amazaki</div>
            <div class="project-sub">Ativação Estratégica · Aleixo, Manaus</div>
          </div>
          <div class="global-pill">
            <span class="global-pill-label">Progresso geral</span>
            <div class="global-pill-track">
              <div class="global-pill-fill" id="globalFill"></div>
            </div>
            <span class="global-pill-pct" id="globalPct">0%</span>
          </div>
        </div>
      </header>

      <!-- Overview page -->
      <div id="overview-page" class="page active">
        <div class="overview">
          <!-- Hero -->
          <div class="hero anim-fade-up">
            <div class="hero-eyebrow">
              <span class="hero-eyebrow-dot"></span>
              Paleta Marketing · Ativação Estratégica
            </div>
            <h1>14 Checklists da<br><em>Ativação</em> Amazaki</h1>
            <p>Do briefing técnico à abertura do mall — cada atividade mapeada, cada responsabilidade definida, cada entrega rastreada.</p>
            <div class="hero-stats">
              <div class="hero-stat">
                <span class="hero-stat-num" id="stat-checklists">14</span>
                <span class="hero-stat-label">checklists</span>
              </div>
              <div class="hero-stat">
                <span class="hero-stat-num" id="stat-items">${totalItems}</span>
                <span class="hero-stat-label">itens no total</span>
              </div>
              <div class="hero-stat">
                <span class="hero-stat-num">3</span>
                <span class="hero-stat-label">escopos</span>
              </div>
            </div>
          </div>

          <!-- Scope strip -->
          <div class="scope-strip">
            <div class="scope-card anim-fade-up stagger-1">
              <div class="scope-card-top">
                <div class="scope-icon marketing">🎯</div>
                <div>
                  <div class="scope-label">Escopo</div>
                  <div class="scope-name">Marketing · Paleta</div>
                  <div class="scope-label" style="margin-top:2px">Checklists 01–05, 13</div>
                </div>
              </div>
              <div class="scope-track"><div class="scope-fill marketing" id="scope-fill-marketing"></div></div>
              <div class="scope-meta">
                <span id="scope-cnt-marketing">0/0</span>
                <span class="scope-meta-pct" id="scope-pct-marketing">0%</span>
              </div>
            </div>
            <div class="scope-card anim-fade-up stagger-2">
              <div class="scope-card-top">
                <div class="scope-icon operacional">🏗️</div>
                <div>
                  <div class="scope-label">Escopo</div>
                  <div class="scope-name">Operacional · Construtora</div>
                  <div class="scope-label" style="margin-top:2px">Checklists 06–10, 14</div>
                </div>
              </div>
              <div class="scope-track"><div class="scope-fill operacional" id="scope-fill-operacional"></div></div>
              <div class="scope-meta">
                <span id="scope-cnt-operacional">0/0</span>
                <span class="scope-meta-pct" id="scope-pct-operacional">0%</span>
              </div>
            </div>
            <div class="scope-card anim-fade-up stagger-3">
              <div class="scope-card-top">
                <div class="scope-icon compartilhado">🤝</div>
                <div>
                  <div class="scope-label">Escopo</div>
                  <div class="scope-name">Compartilhado · Ambos</div>
                  <div class="scope-label" style="margin-top:2px">Checklists 11–12</div>
                </div>
              </div>
              <div class="scope-track"><div class="scope-fill compartilhado" id="scope-fill-compartilhado"></div></div>
              <div class="scope-meta">
                <span id="scope-cnt-compartilhado">0/0</span>
                <span class="scope-meta-pct" id="scope-pct-compartilhado">0%</span>
              </div>
            </div>
          </div>

          <!-- Grid -->
          <div class="grid-label">Todos os checklists</div>
          <div class="checklist-grid" id="checklistGrid"></div>

          <!-- Legend -->
          <div class="legend anim-fade-up">
            <div class="legend-item">
              <span class="type-badge A">A</span> Atividade — algo a fazer
            </div>
            <div class="legend-item">
              <span class="type-badge E">E</span> Entrega — algo a produzir
            </div>
            <div class="legend-item">
              <span class="legend-dot" style="background:var(--c-red)"></span> Marketing / Paleta
            </div>
            <div class="legend-item">
              <span class="legend-dot" style="background:var(--c-gold)"></span> Operacional / Construtora
            </div>
            <div class="legend-item">
              <span class="legend-dot" style="background:var(--c-blue)"></span> Compartilhado
            </div>
          </div>
        </div>
      </div>

      <!-- Detail pages container -->
      <div id="detail-container"></div>

      <!-- Toast -->
      <div class="toast" id="toast">
        <span class="toast-icon" id="toastIcon">✓</span>
        <span class="toast-text" id="toastMsg"></span>
      </div>
    `;
  }

  function showPage(id) {
    document.querySelectorAll('.page').forEach(p => p.classList.remove('active'));
    const el = document.getElementById(id);
    if (el) el.classList.add('active');
  }

  function openDetail(clId) {
    currentDetailId = clId;
    renderDetail(clId); // build if not already
    showPage(`detail-page-${clId}`);
    window.scrollTo({ top: 0, behavior: 'smooth' });


  }

  function closeDetail() {
    currentDetailId = null;
    showPage('overview-page');
    window.scrollTo({ top: 0, behavior: 'smooth' });

    // update overview cards
    CHECKLISTS.forEach(cl => updateCardProgress(cl.id));
    updateScopeProgress();
    updateGlobalProgress();


  }

  function init() {
    State.load();
    buildShell();
    renderOverview();
    updateGlobalProgress();
  }

  return { init, openDetail, closeDetail };
})();

/* ── BOOT ── */
document.addEventListener('DOMContentLoaded', App.init);
