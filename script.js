// ============================================================
// script.js  —  App Logic, Rendering, Progress Tracking
// ============================================================

// ── Config ───────────────────────────────────────────────────
// Change the password below to anything you prefer
const PASSWORD = 'BMP2024';

// ── State ────────────────────────────────────────────────────
let currentSection = 'overview';
let progress = {}; // { "week1_Mon_1": true, ... }

// ── Init ─────────────────────────────────────────────────────
document.addEventListener('DOMContentLoaded', () => {
  loadProgress();
  setupPasswordGate();
});

// ── Password Gate ─────────────────────────────────────────────
function setupPasswordGate() {
  const gate = document.getElementById('password-gate');
  const app  = document.getElementById('app');
  const input = document.getElementById('pwd-input');
  const btn   = document.getElementById('btn-unlock');
  const err   = document.getElementById('gate-error');

  // Persist session unlock
  if (sessionStorage.getItem('bmp_unlocked') === '1') {
    gate.style.display = 'none';
    app.style.display  = 'flex';
    initApp();
    return;
  }

  btn.addEventListener('click', tryUnlock);
  input.addEventListener('keydown', e => { if (e.key === 'Enter') tryUnlock(); });

  function tryUnlock() {
    if (input.value.trim() === PASSWORD) {
      sessionStorage.setItem('bmp_unlocked', '1');
      gate.style.display = 'none';
      app.style.display  = 'flex';
      initApp();
    } else {
      err.textContent = 'Incorrect password. Try again.';
      input.value = '';
      input.focus();
    }
  }
}

// ── App Init ─────────────────────────────────────────────────
function initApp() {
  buildNav();
  navigate('overview');
}

// ── Progress ─────────────────────────────────────────────────
function loadProgress() {
  try {
    progress = JSON.parse(localStorage.getItem('bmp_progress') || '{}');
  } catch(e) { progress = {}; }
}

function saveProgress() {
  localStorage.setItem('bmp_progress', JSON.stringify(progress));
}

function toggleDrillDone(key) {
  progress[key] = !progress[key];
  saveProgress();
  updateNavProgress();
  // refresh checkmark
  const el = document.querySelector(`[data-key="${key}"]`);
  if (el) el.classList.toggle('checked', !!progress[key]);
}

function getWeekCompletion(weekId) {
  const week = WEEKS.find(w => w.id === weekId);
  if (!week) return { done: 0, total: 0 };
  let done = 0, total = 0;
  week.schedule.forEach(day => {
    if (!day.rest) {
      day.drills.forEach(dNum => {
        total++;
        const key = `${weekId}_${day.day}_${dNum}`;
        if (progress[key]) done++;
      });
    }
  });
  return { done, total };
}

function getTotalCompletion() {
  let done = 0, total = 0;
  WEEKS.forEach(w => {
    const c = getWeekCompletion(w.id);
    done += c.done; total += c.total;
  });
  return { done, total };
}

// ── Navigation ───────────────────────────────────────────────
const NAV_ITEMS = [
  { id: 'overview',         label: 'Overview',           icon: '⚡' },
  { id: 'week1',            label: 'Week 1: Reconnect',  icon: '' },
  { id: 'week2',            label: 'Week 2: Rebuild',    icon: '' },
  { id: 'week3',            label: 'Week 3: Reinforce',  icon: '' },
  { id: 'week4',            label: 'Week 4: Lock In',    icon: '' },
  { id: 'week5',            label: 'Week 5: Repattern',  icon: '' },
  { id: 'week6',            label: 'Week 6: Ladder',     icon: '' },
  { id: 'week7',            label: 'Week 7: Simulate',   icon: '' },
  { id: 'week8',            label: 'Week 8: Master',     icon: '' },
  { id: 'supplements',      label: 'Supplements',        icon: '💊' },
  { id: 'daily-habits',     label: 'Daily Habits',       icon: '🔁' },
  { id: 'tonight-protocol', label: 'Tonight Protocol',   icon: '🌙' },
  { id: 'sex-tips',         label: 'Sex Tips',           icon: '💡' },
  { id: 'conclusion',       label: 'Conclusion',         icon: '🏁' },
];

function buildNav() {
  const nav = document.getElementById('nav-items');
  nav.innerHTML = '';

  const p1Label = document.createElement('div');
  p1Label.className = 'nav-section-label'; p1Label.textContent = 'Overview';
  nav.appendChild(p1Label);

  NAV_ITEMS.slice(0,1).forEach(item => nav.appendChild(makeNavItem(item)));

  const phase1Label = document.createElement('div');
  phase1Label.className = 'nav-section-label'; phase1Label.textContent = 'Phase 1 — The Reset';
  nav.appendChild(phase1Label);

  NAV_ITEMS.slice(1,5).forEach(item => nav.appendChild(makeNavItem(item)));

  const phase2Label = document.createElement('div');
  phase2Label.className = 'nav-section-label'; phase2Label.textContent = 'Phase 2 — Performance';
  nav.appendChild(phase2Label);

  NAV_ITEMS.slice(5,9).forEach(item => nav.appendChild(makeNavItem(item)));

  const hr = document.createElement('hr'); hr.className = 'phase-divider';
  nav.appendChild(hr);

  const supportLabel = document.createElement('div');
  supportLabel.className = 'nav-section-label'; supportLabel.textContent = 'Protocol Support';
  nav.appendChild(supportLabel);

  NAV_ITEMS.slice(9).forEach(item => nav.appendChild(makeNavItem(item)));

  updateNavProgress();
}

function makeNavItem(item) {
  const el = document.createElement('div');
  el.className = 'nav-item';
  el.dataset.section = item.id;

  const dot = document.createElement('span'); dot.className = 'nav-dot';
  const label = document.createElement('span'); label.textContent = item.label;
  el.appendChild(dot); el.appendChild(label);
  el.addEventListener('click', () => navigate(item.id));
  return el;
}

function updateNavProgress() {
  const { done, total } = getTotalCompletion();
  const pct = total > 0 ? Math.round((done/total)*100) : 0;
  const fill = document.getElementById('prog-fill');
  const pctEl = document.getElementById('prog-pct');
  if (fill) fill.style.width = pct + '%';
  if (pctEl) pctEl.textContent = pct + '%';

  // Update week nav dots
  WEEKS.forEach(w => {
    const { done: d, total: t } = getWeekCompletion(w.id);
    const navEl = document.querySelector(`[data-section="${w.id}"]`);
    if (!navEl) return;
    navEl.classList.remove('completed','in-progress');
    if (t > 0 && d === t) navEl.classList.add('completed');
    else if (d > 0) navEl.classList.add('in-progress');
  });
}

function navigate(sectionId) {
  currentSection = sectionId;
  document.querySelectorAll('.nav-item').forEach(el => {
    el.classList.toggle('active', el.dataset.section === sectionId);
  });
  renderSection(sectionId);
  document.getElementById('main').scrollTop = 0;
}

// ── Section Renderer ─────────────────────────────────────────
function renderSection(id) {
  const main = document.getElementById('main');

  if (id === 'overview')         { main.innerHTML = renderOverview(); return; }
  if (id === 'supplements')      { main.innerHTML = renderSupplements(); return; }
  if (id === 'daily-habits')     { main.innerHTML = renderDailyHabits(); return; }
  if (id === 'tonight-protocol') { main.innerHTML = renderTonightProtocol(); return; }
  if (id === 'sex-tips')         { main.innerHTML = renderSexTips(); return; }
  if (id === 'conclusion')       { main.innerHTML = renderConclusion(); return; }

  const week = WEEKS.find(w => w.id === id);
  if (week) { main.innerHTML = renderWeek(week); attachDrillToggle(); return; }
}

// ── Overview ─────────────────────────────────────────────────
function renderOverview() {
  return `
<div class="overview-hero">
  <h1>Bedroom Mastery Protocol</h1>
  <p style="margin-top:8px">An 8-week neurological and physiological training system for overcoming premature ejaculation and erectile dysfunction — without medication.</p>
</div>

<div class="overview-cards">
  <div class="ov-card">
    <div class="ov-icon">🧠</div>
    <h3>The Overdrive Reflex</h3>
    <p>PE and ED are not size or stamina issues. They are nervous system issues — your Overdrive Reflex fires too early or anxiety shuts down blood flow.</p>
  </div>
  <div class="ov-card">
    <div class="ov-icon">🔁</div>
    <h3>36 Progressive Drills</h3>
    <p>Physical, neurological, and sensory drills that directly retrain the pathways controlling erection and ejaculation.</p>
  </div>
  <div class="ov-card">
    <div class="ov-icon">📅</div>
    <h3>8 Weeks, 2 Phases</h3>
    <p>Phase 1 (Weeks 1–4) resets and rebuilds. Phase 2 (Weeks 5–8) advances to direct solo training and full simulation.</p>
  </div>
  <div class="ov-card">
    <div class="ov-icon">⚙️</div>
    <h3>The Control Loop Method™</h3>
    <p>A closed feedback loop between your brain, pelvic floor, nervous system, and arousal awareness — trained to respond on command.</p>
  </div>
</div>

<div class="control-loop">
  <h2>The Control Loop Method™</h2>
  <p style="font-size:0.9rem;margin-bottom:4px">Your nervous system processes sexual stimulation through a loop. Training each stage gives you deliberate control at every point.</p>
  <div class="cl-steps">
    <div class="cl-step"><div class="cl-arrow">👁️</div><div class="cl-label">Stimulus</div><div class="cl-sub">Touch / visual / mental input</div></div>
    <div class="cl-step"><div class="cl-arrow">⚡</div><div class="cl-label">Nerve Signal</div><div class="cl-sub">Pudendal nerve → brain</div></div>
    <div class="cl-step"><div class="cl-arrow">🧠</div><div class="cl-label">Brain Response</div><div class="cl-sub">Arousal interpretation</div></div>
    <div class="cl-step"><div class="cl-arrow">💪</div><div class="cl-label">Pelvic Reflex</div><div class="cl-sub">Ejaculation or erection signal</div></div>
    <div class="cl-step"><div class="cl-arrow">🛑</div><div class="cl-label">Your Brake</div><div class="cl-sub">Trained override reflex</div></div>
  </div>
</div>

<div class="phase-overview">
  <div class="phase-card p1">
    <div class="phase-title">Phase 1 — The Reset</div>
    <div class="phase-weeks">Weeks 1–4 | Drills 1–19</div>
    <ul>
      <li>Neurological reset (Wall Push & Release)</li>
      <li>Pelvic floor activation and control</li>
      <li>Nerve desensitization (ice methods)</li>
      <li>Sensory Gating Reset (SGR)</li>
      <li>Endurance under physical load</li>
      <li>Zero direct sexual stimulation</li>
    </ul>
  </div>
  <div class="phase-card p2">
    <div class="phase-title">Phase 2 — Performance</div>
    <div class="phase-weeks">Weeks 5–8 | Drills 20–36</div>
    <ul>
      <li>Direct solo training begins</li>
      <li>Arousal laddering and stop-start</li>
      <li>Thrust simulation under control</li>
      <li>Extended edge holding</li>
      <li>Full 10-minute simulation sequence</li>
      <li>Mental readiness and partner visualization</li>
    </ul>
  </div>
</div>`;
}

// ── Week Page ─────────────────────────────────────────────────
function renderWeek(week) {
  const badgeClass = week.phase === 1 ? 'p1' : 'p2';
  const badgeText  = week.phase === 1 ? 'Phase 1 — The Reset' : 'Phase 2 — Performance';
  const { done, total } = getWeekCompletion(week.id);
  const pct = total > 0 ? Math.round((done/total)*100) : 0;

  let html = `
<div class="section-header">
  <span class="phase-badge ${badgeClass}">${badgeText}</span>
  <h1>${week.title}</h1>
  <p class="week-goal">${week.goal}</p>
</div>

<p style="font-size:0.9rem;color:var(--text-dim);margin-bottom:24px;max-width:640px">${week.overview}</p>

<div style="display:flex;align-items:center;gap:14px;margin-bottom:28px;padding:14px 18px;background:var(--bg-card);border:1px solid var(--border);border-radius:10px;">
  <div style="flex:1">
    <div style="font-size:0.75rem;color:var(--text-muted);margin-bottom:5px;text-transform:uppercase;letter-spacing:0.07em">Week Progress</div>
    <div class="prog-track"><div class="prog-fill" style="width:${pct}%"></div></div>
  </div>
  <div style="font-size:0.95rem;font-weight:700;color:var(--accent)">${done}/${total}</div>
</div>`;

  // Schedule table
  html += `<div class="schedule-section">
<h4>Daily Schedule</h4>
<div style="overflow-x:auto">
<table style="width:100%;border-collapse:collapse;font-size:0.82rem;min-width:560px">
<thead>
<tr style="background:var(--bg-card)">
  <th style="padding:8px 10px;text-align:left;color:var(--text-muted);font-weight:600;border-bottom:1px solid var(--border)">Day</th>
  <th style="padding:8px 10px;text-align:left;color:var(--text-muted);font-weight:600;border-bottom:1px solid var(--border)">Drills</th>
  <th style="padding:8px 10px;text-align:left;color:var(--text-muted);font-weight:600;border-bottom:1px solid var(--border)">Notes</th>
  <th style="padding:8px 10px;text-align:left;color:var(--text-muted);font-weight:600;border-bottom:1px solid var(--border)">Done</th>
</tr>
</thead>
<tbody>`;

  week.schedule.forEach(day => {
    const allDone = !day.rest && day.drills.length > 0 && day.drills.every(d => progress[`${week.id}_${day.day}_${d}`]);
    const rowStyle = allDone ? 'background:rgba(16,182,126,0.05)' : '';

    if (day.rest) {
      html += `<tr style="${rowStyle};border-bottom:1px solid var(--border)">
        <td style="padding:9px 10px;font-weight:600;color:var(--text)">${day.day}</td>
        <td style="padding:9px 10px;color:var(--text-muted);font-style:italic">Rest</td>
        <td style="padding:9px 10px;color:var(--text-muted);font-size:0.78rem">${day.note || ''}</td>
        <td style="padding:9px 10px">—</td>
      </tr>`;
    } else {
      const drillTags = day.drills.map(d => `<span class="tag tag-cat" style="margin:1px">D${d}</span>`).join(' ');
      const drillCheckboxes = day.drills.map(d => {
        const key = `${week.id}_${day.day}_${d}`;
        const checked = progress[key] ? 'checked' : '';
        return `<span class="drill-complete-check ${checked}" data-key="${key}" onclick="toggleDrillDone('${key}')" title="Drill ${d} — ${day.day}"></span>`;
      }).join(' ');

      html += `<tr style="${rowStyle};border-bottom:1px solid var(--border)">
        <td style="padding:9px 10px;font-weight:600;color:var(--text)">${day.day}</td>
        <td style="padding:9px 10px">${drillTags}</td>
        <td style="padding:9px 10px;color:var(--text-muted);font-size:0.78rem">${day.note || '—'}</td>
        <td style="padding:9px 10px;display:flex;gap:6px;flex-wrap:wrap">${drillCheckboxes}</td>
      </tr>`;
    }
  });

  html += `</tbody></table></div></div>`;

  // Drills used this week
  html += `<div class="drills-section"><h4 style="margin-top:28px;margin-bottom:14px">Drill Reference — ${week.title}</h4>`;

  const drillsInWeek = [...new Set(week.schedule.flatMap(d => d.drills))].sort((a,b)=>a-b);
  drillsInWeek.forEach(dNum => {
    const drill = DRILLS[dNum];
    if (!drill) return;
    html += renderDrillCard(drill, week.id);
  });

  html += `</div>`;
  return html;
}

// ── Drill Card ───────────────────────────────────────────────
function renderDrillCard(drill, weekId) {
  const phaseClass = drill.phase === 2 ? 'tag-phase2' : 'tag-cat';
  const videoHtml = drill.videoId
    ? `<div class="drill-section">
         <h4>Reference Video</h4>
         <div class="video-container">
           <iframe src="https://www.youtube.com/embed/${drill.videoId}?rel=0&modestbranding=1"
             allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
             allowfullscreen loading="lazy"></iframe>
         </div>
       </div>`
    : '';

  const stepsHtml = drill.steps.map(s => `<li>${s}</li>`).join('');
  const mistakesHtml = drill.mistakes.map(m => `<li>${m}</li>`).join('');

  return `
<div class="drill-card" id="drill-${weekId}-${drill.id}">
  <div class="drill-header" onclick="toggleDrillCard('drill-${weekId}-${drill.id}')">
    <div class="drill-num">${drill.id}</div>
    <div class="drill-title-block">
      <div class="drill-name">${drill.name}</div>
      <div class="drill-meta">
        <span class="tag ${phaseClass}">${drill.category}</span>
        <span class="tag tag-time">⏱ ${drill.time}</span>
      </div>
    </div>
    <span class="drill-chevron">▼</span>
  </div>
  <div class="drill-body">
    <div class="drill-section">
      <h4>How to Do It</h4>
      <ol class="steps-list">${stepsHtml}</ol>
    </div>
    <div class="drill-section">
      <h4>Prescription</h4>
      <div class="prescription-box">${drill.prescription}</div>
    </div>
    <div class="drill-section">
      <h4>Common Mistakes to Avoid</h4>
      <ul class="mistakes-list">${mistakesHtml}</ul>
    </div>
    ${videoHtml}
  </div>
</div>`;
}

function toggleDrillCard(id) {
  const card = document.getElementById(id);
  if (!card) return;
  card.classList.toggle('open');
}

function attachDrillToggle() {
  // Drill headers use onclick attributes — no additional listeners needed
}

// ── Supplements ───────────────────────────────────────────────
function renderSupplements() {
  let daily = SUPPLEMENTS.daily.map(s => `
    <div class="info-card">
      <h3>${s.name}</h3>
      <div class="info-cat">${s.role}</div>
      <p>${s.notes}</p>
      <div class="dosage">📦 ${s.dosage}</div>
    </div>`).join('');

  let pre = SUPPLEMENTS.preIntimacy.map(s => `
    <div class="info-card">
      <h3>${s.name}</h3>
      <div class="info-cat">${s.role}</div>
      <p>${s.notes}</p>
      <div class="dosage">📦 ${s.dosage}</div>
    </div>`).join('');

  return `
<div class="section-header">
  <span class="phase-badge info">Chapter 3.5</span>
  <h1>Supplement Stack</h1>
  <p class="week-goal">Evidence-backed supplements that support testosterone, nitric oxide, and nerve function. Minimum 3 months daily for the foundation stack.</p>
</div>

<h3 style="margin-bottom:14px">Daily Foundation Stack</h3>
<p style="font-size:0.88rem;color:var(--text-muted);margin-bottom:16px">Take every day for a minimum of 3 months. These build up over time — do not expect overnight results.</p>
<div class="info-grid">${daily}</div>

<h3 style="margin:28px 0 14px">Pre-Intimacy Performance Stack</h3>
<p style="font-size:0.88rem;color:var(--text-muted);margin-bottom:16px">Take 60–90 minutes before sex only. Do not take these daily.</p>
<div class="info-grid">${pre}</div>

<div style="margin-top:28px;padding:16px 20px;background:rgba(239,68,68,0.08);border:1px solid rgba(239,68,68,0.2);border-radius:10px;font-size:0.85rem;color:var(--text-dim)">
  ⚠️ <strong style="color:var(--text)">Important:</strong> These supplements are listed from the protocol as general support options. Always consult a healthcare professional before starting any supplement regimen, especially if you have existing medical conditions or take medications.
</div>`;
}

// ── Daily Habits ──────────────────────────────────────────────
function renderDailyHabits() {
  const saboteurCards = SABOTEURS.map((s, i) => `
    <div class="saboteur-card">
      <div class="saboteur-num">Saboteur ${i+1}</div>
      <h3>${s.title}</h3>
      <p style="font-size:0.88rem">${s.detail}</p>
      <div class="saboteur-fix"><strong>Fix:</strong> ${s.fix}</div>
    </div>`).join('');

  const microItems = MICRO_SABOTEURS.map(m => `<li>${m}</li>`).join('');

  const nonNegCards = NON_NEGOTIABLES.map((n, i) => `
    <div class="info-card">
      <div class="info-cat">Non-Negotiable ${i+1}</div>
      <h3>${n.title}</h3>
      <p>${n.detail}</p>
    </div>`).join('');

  return `
<div class="section-header">
  <span class="phase-badge info">Chapter 7</span>
  <h1>Daily Habits & Lifestyle</h1>
  <p class="week-goal">Your results will be cut in half if you ignore these. The drills train the system. These rules protect it.</p>
</div>

<h2 style="margin-bottom:16px">The 5 Saboteurs</h2>
<p style="font-size:0.88rem;color:var(--text-dim);margin-bottom:20px">These are the five most common daily habits that directly undermine erection quality and ejaculation control.</p>
${saboteurCards}

<h3 style="margin:28px 0 12px">Micro-Saboteurs</h3>
<p style="font-size:0.88rem;color:var(--text-dim);margin-bottom:14px">Smaller factors that compound over time:</p>
<div style="background:var(--bg-card);border:1px solid var(--border);border-radius:10px;padding:16px 20px">
  <ul style="padding-left:18px;font-size:0.88rem;color:var(--text-dim);line-height:2">${microItems}</ul>
</div>

<h2 style="margin:32px 0 16px">The 5 Daily Non-Negotiables</h2>
<div class="info-grid">${nonNegCards}</div>`;
}

// ── Tonight Protocol ──────────────────────────────────────────
function renderTonightProtocol() {
  const steps = TONIGHT_PROTOCOL.map((s, i) => `
    <div class="protocol-step">
      <div class="protocol-step-num">${i+1}</div>
      <div class="protocol-step-body">
        <h3>${s.title}</h3>
        <p>${s.detail}</p>
        <p style="margin-top:8px;font-size:0.82rem;color:var(--accent)">Why: ${s.why}</p>
      </div>
    </div>`).join('');

  return `
<div class="section-header">
  <span class="phase-badge info">Chapter 8</span>
  <h1>Tonight Protocol</h1>
  <p class="week-goal">A 60–90 minute pre-sex routine that maximises erection quality, reduces hypersensitivity, and puts your nervous system in the optimal state.</p>
</div>
<p style="font-size:0.9rem;color:var(--text-dim);margin-bottom:24px">Run this sequence 60–90 minutes before sex. Each step builds on the previous one.</p>
${steps}
<div style="margin-top:20px;padding:16px 20px;background:var(--bg-card);border:1px solid var(--border);border-radius:10px">
  <h4 style="margin-bottom:8px">Optional</h4>
  <p style="font-size:0.88rem;color:var(--text-dim)">${TONIGHT_OPTIONAL}</p>
</div>`;
}

// ── Sex Tips ──────────────────────────────────────────────────
function renderSexTips() {
  const tips = SEX_TIPS.map(t => `
    <div class="tip-card">
      <h3>${t.title}</h3>
      <p>${t.detail}</p>
    </div>`).join('');

  return `
<div class="section-header">
  <span class="phase-badge info">Sex Tips</span>
  <h1>In-Bed Techniques</h1>
  <p class="week-goal">Practical techniques to use during sex that leverage the control you have built through training.</p>
</div>
${tips}`;
}

// ── Conclusion ───────────────────────────────────────────────
function renderConclusion() {
  return `
<div class="section-header">
  <span class="phase-badge p2">Completion</span>
  <h1>Conclusion</h1>
</div>
<div class="conclusion-body">${CONCLUSION}</div>`;
}
