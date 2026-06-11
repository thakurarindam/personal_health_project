# Bedroom Mastery Protocol — Interactive Web App

An 8-week interactive training program built from the Bedroom Mastery Protocol PDF. Tracks daily drill completion, embeds reference videos, and covers all chapters of the protocol in a clean, private, password-protected interface.

---

## Access

**Live app (GitHub Pages):**
`https://thakurarindam.github.io/personal_health_project/`

**Local:** open `index.html` in any browser.

**Password:** `BMP2024`
To change it, open `script.js` and edit line 5:
```js
const PASSWORD = 'BMP2024'; // ← change this
```

---

## Features

- Password gate on load (session-persisted — enter once per browser session)
- Sidebar navigation across all 14 sections
- Overall progress bar + per-week completion tracking
- Drill cards with step-by-step instructions, prescriptions, and mistakes to avoid
- YouTube reference videos embedded for applicable physical drills
- Progress saved automatically via `localStorage` — persists across sessions
- Weekly schedule tables with per-drill completion checkboxes
- Supplements, Daily Habits, Tonight Protocol, Sex Tips, and Conclusion sections

---

## Program Structure

| Section | Content |
|---|---|
| Overview | Introduction, Control Loop Method™, Phase breakdown |
| Week 1 — Reconnect | Drills 1–8: Neurological reset, pelvic floor activation |
| Week 2 — Rebuild | Drills 9–12: Nerve release, coordination |
| Week 3 — Reinforce | Drills 16–17: Sensory Gating Reset, endurance |
| Week 4 — Lock In | Drills 18–19: Full Phase 1 integration |
| Week 5 — Repattern | Drills 20–24: Direct solo training begins |
| Week 6 — Ladder | Drill 25, 27: Arousal laddering, stop-start |
| Week 7 — Simulate | Drills 28–32: Movement + stimulation control |
| Week 8 — Master | Drills 33–36: Full simulation, peak override |
| Supplements | Daily foundation stack + pre-intimacy stack |
| Daily Habits | 5 Saboteurs + 5 Non-Negotiables (Chapter 7) |
| Tonight Protocol | 60–90 min pre-sex routine (Chapter 8) |
| Sex Tips | In-bed techniques |
| Conclusion | Maintenance plan |

---

## Files

```
index.html       — App shell, password gate, sidebar, content area
style.css        — Dark theme, all layout and component styles
data.js          — All drill data, weekly schedules, supplement and lifestyle content
script.js        — App logic: rendering, navigation, progress tracking
```

---

## Pushing Updates

After editing any file locally, run in PowerShell from the project folder:

```powershell
cd "D:\Claude\Personal Health"
git add .
git commit -m "Your update message"
git push
```

---

## Privacy

This app runs entirely in the browser — no data is sent anywhere. Progress is stored only in your browser's `localStorage`. The password is a basic deterrent; do not rely on it for strong security.

---

*Built from the Bedroom Mastery Protocol V4 — 147 pages, 36 drills, 8 weeks.*
