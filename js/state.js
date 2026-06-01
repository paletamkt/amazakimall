/* ── STATE MANAGEMENT ── */
const STATE_KEY = 'amazaki_v2';

const State = (() => {
  let _data = {};

  function load() {
    try { _data = JSON.parse(localStorage.getItem(STATE_KEY)) || {}; }
    catch { _data = {}; }
  }

  function save() {
    try { localStorage.setItem(STATE_KEY, JSON.stringify(_data)); }
    catch(e) { console.warn('State save failed:', e); }
  }

  function key(clId, phaseIdx, itemIdx) {
    return `${clId}_${phaseIdx}_${itemIdx}`;
  }

  function isChecked(clId, phaseIdx, itemIdx) {
    return !!_data[key(clId, phaseIdx, itemIdx)];
  }

  function toggle(clId, phaseIdx, itemIdx) {
    const k = key(clId, phaseIdx, itemIdx);
    _data[k] = !_data[k];
    save();
    return _data[k];
  }

  function getChecklistProgress(cl) {
    let total = 0, done = 0;
    cl.phases.forEach((ph, pi) =>
      ph.items.forEach((_, ii) => { total++; if (isChecked(cl.id, pi, ii)) done++; })
    );
    return { total, done, pct: total ? Math.round((done / total) * 100) : 0 };
  }

  function getPhaseProgress(clId, phaseIdx, items) {
    const total = items.length;
    const done = items.filter((_, ii) => isChecked(clId, phaseIdx, ii)).length;
    return { total, done, pct: total ? Math.round((done / total) * 100) : 0 };
  }

  function getScopeProgress(scope) {
    let total = 0, done = 0;
    CHECKLISTS.filter(c => c.scope === scope).forEach(cl => {
      const p = getChecklistProgress(cl);
      total += p.total; done += p.done;
    });
    return { total, done, pct: total ? Math.round((done / total) * 100) : 0 };
  }

  function getGlobalProgress() {
    let total = 0, done = 0;
    CHECKLISTS.forEach(cl => {
      const p = getChecklistProgress(cl);
      total += p.total; done += p.done;
    });
    return { total, done, pct: total ? Math.round((done / total) * 100) : 0 };
  }

  function reset() {
    _data = {};
    save();
  }

  return { load, save, isChecked, toggle, getChecklistProgress, getPhaseProgress, getScopeProgress, getGlobalProgress, reset };
})();
