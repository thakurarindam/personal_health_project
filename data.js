// ============================================================
// data.js  —  All content from the Bedroom Mastery Protocol
// ============================================================

// ── All Drills ──────────────────────────────────────────────
const DRILLS = {
  1: {
    id: 1, name: "Wall Push & Release",
    category: "Neurological Reset", time: "2–3 min", phase: 1,
    steps: [
      "Stand about 1 foot from a wall, palms flat on the wall at chest height.",
      "Push into the wall with full-body tension for 10 seconds — engage everything.",
      "Exhale and fully release all tension from head to toe.",
      "Shake out your body gently, then rest for 20 seconds.",
      "Repeat for 4 rounds total."
    ],
    prescription: "4 rounds (10s push → 20s release). Once per day.",
    mistakes: [
      "Holding your breath during the push",
      "Staying stiff after the release — truly let go",
      "Clenching the pelvic floor too hard (engage the whole body, not just one area)"
    ],
    videoId: null
  },
  2: {
    id: 2, name: "Deep Pelvic Floor Reset",
    category: "Pelvic Control", time: "7 min", phase: 1,
    steps: [
      "Lie on your back with knees bent. Place a small rolled towel under your lower back.",
      "Squeeze your glutes FIRST, then engage your pelvic floor (imagine stopping the flow of urine).",
      "Hold for 3 seconds.",
      "Release slowly — fully relax.",
      "Rest 5–10 seconds between reps."
    ],
    prescription: "3 sets × 10 reps. 30–60 seconds rest between sets.",
    mistakes: [
      "Firing the pelvic floor before the glutes",
      "Using your abs or thighs instead — isolate only pelvic floor and glutes",
      "Rushing through reps"
    ],
    videoId: "MJ7EfGu03-0"
  },
  3: {
    id: 3, name: "Perineal Desensitization (Ice Method)",
    category: "Arousal Tolerance", time: "6 min", phase: 1,
    steps: [
      "Sit comfortably in a chair or on a bed.",
      "Wrap a small ice cube in a thin cloth.",
      "Press and slowly glide the wrapped ice along your inner thighs and perineum (the area between testicles and anus).",
      "Avoid direct genital contact — stay at the boundaries.",
      "Keep your breathing steady throughout."
    ],
    prescription: "3 rounds × 30 seconds. 30 seconds rest between each. Once daily.",
    mistakes: [
      "Touching the penis or scrotum directly",
      "Doing this drill while already aroused",
      "Applying too much pressure — keep it light"
    ],
    videoId: null
  },
  4: {
    id: 4, name: "Glute Bridge Pulse Hold",
    category: "Pelvic Control", time: "6–8 min", phase: 1,
    steps: [
      "Lie on your back, knees bent, feet flat on the floor.",
      "Lift your hips toward the ceiling until your body forms a straight line from shoulders to knees.",
      "Perform 10 small pulse bounces — moving 1–2 inches up and down.",
      "After 10 pulses, hold the bridge position for 5 seconds.",
      "Lower your hips slowly and rest for 30 seconds."
    ],
    prescription: "3 rounds (10 pulses + 5s hold). 30–60 seconds rest between rounds.",
    mistakes: [
      "Arching your lower back instead of engaging glutes",
      "Rushing the pulses — keep them small and controlled",
      "Holding your breath"
    ],
    videoId: "ppXwUYvVrDw"
  },
  5: {
    id: 5, name: "Calm Erection Visualization",
    category: "Arousal Awareness", time: "6–8 min", phase: 1,
    steps: [
      "Sit or lie in a calm, private space with eyes closed.",
      "Imagine a calm sexual scenario — gentle touch, slow buildup, no rush or pressure.",
      "Focus on the feeling of getting aroused without any expectation of climax.",
      "Keep your breathing slow and steady throughout.",
      "If arousal builds too quickly, mentally pause the scenario and breathe until it settles."
    ],
    prescription: "5–8 minutes daily. Best done before bed.",
    mistakes: [
      "Using pornographic or very explicit imagery",
      "Forcing arousal — let it arise naturally",
      "Holding body tension — stay completely relaxed"
    ],
    videoId: null
  },
  6: {
    id: 6, name: "Pelvic Clock",
    category: "Pelvic Control / Mobility", time: "5 min", phase: 1,
    steps: [
      "Lie on your back with knees bent.",
      "Imagine your pelvis is a clock face — 12 o'clock is toward your belly button, 6 is toward your tailbone.",
      "Slowly tilt toward 12 (tailbone drops down), then toward 6 (pubic bone tips up), then to 3 (right hip), then to 9 (left hip).",
      "Complete 3 full slow circles clockwise.",
      "Then complete 3 full slow circles counter-clockwise."
    ],
    prescription: "3 slow circles each direction. Daily (best used as a warm-up).",
    mistakes: [
      "Using your legs or abs to drive the movement — use only the pelvis",
      "Rushing — keep each circle slow and deliberate",
      "Tilting the whole body instead of just the pelvis"
    ],
    videoId: "Ie9MNEKXfTI"
  },
  7: {
    id: 7, name: "Penile Root Tapping",
    category: "Arousal Awareness / Nerve Desensitization", time: "3–4 min", phase: 1,
    steps: [
      "Sit or lie fully relaxed with no stimulation.",
      "Use two fingers to gently tap around the base of the penis (not the head or shaft).",
      "Maintain a steady rhythm of approximately one tap per second.",
      "After 60 seconds, rest fully.",
      "Repeat for 3 rounds total."
    ],
    prescription: "3 rounds × 60 seconds. Once daily, preferably before bed.",
    mistakes: [
      "Touching the glans (head) — only tap the base/root",
      "Allowing yourself to become aroused during the drill",
      "Tapping too fast or too hard — gentle and rhythmic"
    ],
    videoId: null
  },
  8: {
    id: 8, name: "Toe Curl + Glute Activation",
    category: "Pelvic Control / Reflex Sync", time: "4–5 min", phase: 1,
    steps: [
      "Sit upright in a chair with feet flat on the floor.",
      "Curl your toes downward, gripping the floor with your feet.",
      "Simultaneously squeeze your glutes firmly.",
      "Hold the contraction for 5 seconds.",
      "Release everything and rest for 10 seconds."
    ],
    prescription: "3 sets × 10 reps. Daily or alternate days.",
    mistakes: [
      "Using your thighs instead of glutes — keep thighs relaxed",
      "Holding your breath",
      "Rushing through reps — feel each contraction fully"
    ],
    videoId: "cyX16-9t9Kg"
  },
  9: {
    id: 9, name: "Dynamic Bridge March",
    category: "Pelvic Control + Coordination", time: "5–6 min", phase: 1,
    steps: [
      "Lie on your back, knees bent, feet flat on the floor.",
      "Lift hips into a bridge (straight line from shoulders to knees).",
      "While holding the bridge, lift your right knee slowly toward your chest.",
      "Lower it back and lift the left knee — alternate in a slow marching motion.",
      "Keep hips level and stable throughout."
    ],
    prescription: "2 sets × 10 reps per leg. 60 seconds rest between sets. 3–4x per week.",
    mistakes: [
      "Letting hips sag or shift side-to-side",
      "Using speed instead of control",
      "Holding your breath"
    ],
    videoId: "M8LAwv4Od2I"
  },
  10: {
    id: 10, name: "Tennis Ball Nerve Sit",
    category: "Nerve Release & Repatterning", time: "3–5 min", phase: 1,
    steps: [
      "Sit on a firm chair without cushioning.",
      "Place a tennis ball directly under your perineum (between testicles and anus).",
      "Gently shift your weight side-to-side and front-to-back in slow, small motions.",
      "Focus on completely relaxing your pelvic floor — do not clench.",
      "Breathe naturally throughout."
    ],
    prescription: "1 round × 3–5 minutes. Daily or every alternate day.",
    mistakes: [
      "Using a hard ball or sitting with your full weight (use partial weight)",
      "Tensing pelvic muscles or holding your breath",
      "Doing this while aroused"
    ],
    videoId: "KN-TnwZlxoA"
  },
  11: {
    id: 11, name: "Prone Inner Thigh Slide",
    category: "Nerve Mobility + Adductor Release", time: "5–6 min", phase: 1,
    steps: [
      "Lie face down on a mat with both legs straight.",
      "Slowly slide one leg outward to the side (like a half-split).",
      "Hold the stretch at the end range for 3–5 seconds.",
      "Bring the leg back in slowly.",
      "Alternate to the other leg."
    ],
    prescription: "2 sets × 8 reps per leg. Rest 30–45 seconds between sets. 3–4x per week.",
    mistakes: [
      "Using speed or jerky movements",
      "Twisting your hips off the ground",
      "Stretching too far — keep it comfortable"
    ],
    videoId: "rwY1cN8CAd4"
  },
  12: {
    id: 12, name: "Reverse Hip Lift + Squeeze",
    category: "Posterior Chain Activation", time: "4–5 min", phase: 1,
    steps: [
      "Lie face down on a mat.",
      "Place a soft ball or cushion between your ankles.",
      "Squeeze the ball with your ankles and simultaneously lift both legs approximately 3 inches off the ground (keep hips flat on the mat).",
      "Hold the position for 4–5 seconds.",
      "Lower slowly and rest for 10 seconds."
    ],
    prescription: "3 sets × 8–10 reps. Rest 30–45 seconds. 3–4x per week.",
    mistakes: [
      "Lifting your hips off the floor — only legs move",
      "Using back muscles to lift — use glutes and hamstrings",
      "Rushing"
    ],
    videoId: "04MWeGb2fAQ"
  },
  16: {
    id: 16, name: "Wall-Sit with Pelvic Pulses",
    category: "Endurance + Reflex Braking", time: "5–6 min", phase: 1,
    steps: [
      "Stand with your back against a wall.",
      "Slide down into a wall-sit position: knees at 90 degrees, thighs parallel to the floor.",
      "While holding the wall-sit, lightly thrust/pulse your pelvis forward 1–2 inches, 10 times slowly.",
      "Then hold the wall-sit position for 15–20 seconds without pulsing.",
      "Come up slowly, rest, then repeat."
    ],
    prescription: "3 rounds (10 pelvic pulses + 15–20s hold). 60–90 seconds rest. 3–4x per week.",
    mistakes: [
      "Using your upper body or quad strength to cheat the position",
      "Arching your lower back — keep spine neutral",
      "Holding your breath"
    ],
    videoId: "JaZNYM3zAP0"
  },
  17: {
    id: 17, name: "Sensory Gating Reset (SGR)",
    category: "Sensory Rewiring", time: "5–10 min", phase: 1,
    steps: [
      "Wrap an ice pack in cloth (cold but not painfully so).",
      "Sit upright in a chair.",
      "Place the wrapped ice at the base of the penis and perineum.",
      "Contract your pelvic floor muscles (as if stopping urination) for 2 seconds.",
      "Release completely. Repeat for 10 slow, controlled contractions while the ice is applied.",
      "Remove the ice and sit quietly for 30–60 seconds, focusing on your body's calm response."
    ],
    prescription: "10 pelvic contractions per session. 3 complete rounds. 4–5x per week.",
    mistakes: [
      "Ice that causes sharp pain — it should be cold, not painful",
      "Rushing through contractions",
      "Holding your breath"
    ],
    videoId: "n6z88aU1dMw"
  },
  18: {
    id: 18, name: "Glute Bridge Hold + March",
    category: "Coordination + Endurance", time: "5–6 min", phase: 1,
    steps: [
      "Lie on your back, knees bent, feet hip-width apart.",
      "Lift hips into a bridge position.",
      "While holding the bridge, begin marching: lift right knee toward chest, lower, then lift left knee.",
      "Complete 10 marches (5 per leg) while keeping hips stable.",
      "After 10 marches, hold the bridge for 15 seconds before lowering."
    ],
    prescription: "2 sets (10 marches + 15s hold). 60 seconds rest between sets. 3–4x per week.",
    mistakes: [
      "Letting hips sag or shift during the marching",
      "Using speed instead of control",
      "Holding your breath"
    ],
    videoId: "M8LAwv4Od2I"
  },
  19: {
    id: 19, name: "Wall-Sit March (Advanced)",
    category: "Reflex Control + Movement Pressure", time: "4–6 min", phase: 1,
    steps: [
      "Slide into a wall-sit position: knees at 90 degrees, back flat against wall.",
      "While holding the position, lift one heel off the ground, then the other — a slow march.",
      "Keep both thighs level and parallel to the floor.",
      "Complete 10 slow marches (5 per side).",
      "Then hold the wall-sit for 15–20 seconds before coming up slowly."
    ],
    prescription: "3 rounds (10 marches + 20s hold). 60–90 seconds rest. 3–4x per week.",
    mistakes: [
      "Pushing off the wall for support",
      "Losing spine posture — keep back flat",
      "Going too fast — slow and controlled"
    ],
    videoId: "JaZNYM3zAP0"
  },
  20: {
    id: 20, name: "Sensate Mapping",
    category: "Touch Desensitization + Brain-Body Rewiring", time: "5–10 min", phase: 2,
    steps: [
      "BEGINNER (Days 1–2): Sit or lie comfortably. Use clean, dry fingertips to lightly stroke the shaft — not the glans.",
      "Use slow, feather-light touch with no stroking rhythm. Focus on your breathing.",
      "Stop if arousal exceeds ~60%. Aim to stay soft or semi-hard for 3–5 minutes.",
      "PROGRESSIVE (Days 3–5): Introduce light touch to the glans and underside.",
      "Apply cold touch (ice-wrapped cloth) for 10 seconds, then return to normal touch. Alternate zones: shaft → base → glans.",
      "Throughout: observe your sensations, don't react to them. No fantasy or rhythm."
    ],
    prescription: "1 session daily. Start at 5 min → increase to 8–10 min. Stop immediately if too aroused.",
    mistakes: [
      "Fast or repetitive stroking motions",
      "Stimulating to climax",
      "Letting fantasy or mental imagery slip in"
    ],
    videoId: null
  },
  21: {
    id: 21, name: "Controlled Grip Repatterning",
    category: "Reflex Reset / Grip Sensitivity Control", time: "3–5 min", phase: 2,
    steps: [
      "Form a loose grip around the shaft — just enough to feel contact.",
      "Hold completely still — no stroking.",
      "Stay soft or semi-hard throughout.",
      "After 30 seconds, gently relax your grip for 10 seconds.",
      "Lightly reapply the grip and repeat the hold-release rhythm 4–5 times."
    ],
    prescription: "2 rounds of 5 hold-release cycles. Daily or every alternate day.",
    mistakes: [
      "Gripping too tightly",
      "Introducing repetitive stroking motions",
      "Doing this while highly aroused"
    ],
    videoId: null
  },
  22: {
    id: 22, name: "Base Pressure Hold",
    category: "Penile Nerve Dulling + Blood Flow Control", time: "2–4 min", phase: 2,
    steps: [
      "Sit or lie comfortably with a semi-erect penis.",
      "Use your thumb and index finger to gently press the base of the shaft (just above the testicles).",
      "Apply light pressure — not tight enough to cut circulation.",
      "Hold for 30 seconds.",
      "Release for 10 seconds. Repeat 3–5 rounds."
    ],
    prescription: "3 rounds × 30s hold + 10s rest. Every alternate day.",
    mistakes: [
      "Gripping too tightly",
      "Using this when fully erect — semi-erect only",
      "Using this as an in-bed 'trick' — it's a training drill only"
    ],
    videoId: null
  },
  23: {
    id: 23, name: "Controlled Hold + Relax",
    category: "Reflex Delay Conditioning", time: "3–6 min", phase: 2,
    steps: [
      "Get to a semi-aroused state through light touch or mental stimulation.",
      "Once arousal builds to approximately 60–70%, pause all touch.",
      "Breathe slowly and wait until arousal drops back to approximately 30–40%.",
      "Resume light stimulation for 15–20 seconds.",
      "Pause again. Repeat this cycle 3 times."
    ],
    prescription: "3 cycles per session. Daily if calm, every other day if overstimulated.",
    mistakes: [
      "Going past 70% arousal before pausing",
      "Rushing the pause phase",
      "Touching the glans too early in the session"
    ],
    videoId: null
  },
  24: {
    id: 24, name: "Arousal Self-Check Reflection",
    category: "Awareness & Control Feedback", time: "2–4 min", phase: 2,
    steps: [
      "Do this immediately after your daily training session.",
      "Reflect on: When did I feel most in control during this session?",
      "When did arousal spike — and how did I respond?",
      "Did I breathe through it, or did I tense up?",
      "Which drill felt easiest? Which triggered discomfort or difficulty?"
    ],
    prescription: "Optional: write it down or say it aloud. Best done immediately after training.",
    mistakes: [
      "Skipping this reflection entirely",
      "Answering mindlessly without genuine thought",
      "Judging yourself harshly — observe without criticism"
    ],
    videoId: null
  },
  25: {
    id: 25, name: "Arousal Laddering",
    category: "Stimulation Control + Reflex Delay", time: "6–10 min", phase: 2,
    steps: [
      "Get into a calm space — no porn or explicit fantasy.",
      "Begin with light touch and slowly stimulate until you reach approximately 30% arousal. Stop touching. Breathe. Let arousal drop.",
      "Begin again and climb to approximately 50% arousal. Stop. Hold. Breathe. Let it drop.",
      "Do a final climb to 60–70% arousal. Stop before feeling 'too close'. Let it drop.",
      "Repeat the full 3-step ladder up to 3 times per session.",
      "Arousal cues: 20–30% = soft/barely semi-erect | 40–50% = semi-erect, warm, some tension | 60–70% = firm but not pulsing (STOP here)"
    ],
    prescription: "1 ladder session daily. 6–10 minutes. 3 full ladder cycles per session.",
    mistakes: [
      "Rushing through arousal levels",
      "Ignoring your body cues",
      "Tight grip or stroking motions — keep it light",
      "Letting arousal reach the point of no return"
    ],
    videoId: null
  },
  27: {
    id: 27, name: "Cold Touch + Mental Scan",
    category: "Sensory-Arousal Reframing", time: "4–6 min", phase: 2,
    steps: [
      "Wrap a small ice cube in a soft cloth.",
      "Sit relaxed. Gently bring the cold cloth to your inner thigh, lower belly, and base of the penis (not the glans or tip).",
      "Hold each area for 10–15 seconds, then move to the next.",
      "As you move the cold object, mentally ask yourself: 'Am I tensing here?'",
      "'What am I feeling right now?'",
      "'Can I relax this part of my body?'"
    ],
    prescription: "1 session daily or every other day. 4–6 minutes total. Minimum 3 zones. 10–15 seconds per zone. 2–3 total rounds.",
    mistakes: [
      "Rushing the touch",
      "Touching the glans or allowing arousal",
      "Expecting it to feel good — this is a reset exercise, not stimulation"
    ],
    videoId: null
  },
  28: {
    id: 28, name: "Laddering + Motion Drill",
    category: "Arousal Control During Movement", time: "5–7 min", phase: 2,
    steps: [
      "Lie on your back in a glute bridge position. Raise hips slightly 2–3 inches.",
      "Lightly hold the base of the shaft with a soft grip (semi-erect).",
      "MOVEMENT PHASE: While holding the bridge, slowly tilt your hips up and down 1–2 inches (mimicking a small thrust) — 10 times. Breathe steadily. Maintain arousal at 40–60%.",
      "PAUSE PHASE: After 10 slow thrusts, stop all movement and touch. Let hips rest flat. Close your eyes and do a quick body scan — 'Where do I feel tension? Can I stay semi-erect without panic?'",
      "Repeat up to 3 times."
    ],
    prescription: "2–3 rounds (10 slow thrusts + full pause + body check). 3x per week. Ideally after Arousal Laddering or SGR.",
    mistakes: [
      "Hips bouncing too fast",
      "Squeezing glutes too hard during the movement phase",
      "Letting arousal reach 70%+",
      "Clenching jaw or holding breath"
    ],
    videoId: null
  },
  29: {
    id: 29, name: "Thrust Simulation Drill",
    category: "Motion + Stimulation + Control", time: "6–10 min", phase: 2,
    steps: [
      "Sit on the edge of a firm surface with a pillow under your hips.",
      "Hold the penis with a loose grip (semi-erect only).",
      "Begin 10 slow pelvic thrusts: forward thrust → back to start. Slow and steady. Focus on moving the hips — not the hand.",
      "After 10 thrusts, pause. Take a deep breath and check in: 'Am I calm? Am I tense? Do I feel too close?'",
      "Repeat up to 3 rounds."
    ],
    prescription: "3 rounds of 10 thrusts. 30–60 seconds pause between rounds. 3–4x per week.",
    mistakes: [
      "Tight grip or fast thrusts",
      "Going past 60–70% arousal",
      "Tensing the neck or shoulders — keep the upper body relaxed"
    ],
    videoId: null
  },
  30: {
    id: 30, name: "Arousal Loop Trainer",
    category: "Reflex Delay / Extended Edge Hold", time: "8–12 min", phase: 2,
    steps: [
      "Begin with light grip stimulation. Build arousal to approximately 50–60%.",
      "HOLD that arousal level for 60 seconds — no increase, no fantasy. Stay aware, not reactive.",
      "Then pause completely for 30 seconds (full stop). Let arousal drop.",
      "Resume stimulation → return to the same arousal zone.",
      "Repeat the 60s on / 30s off loop 3 times total."
    ],
    prescription: "3 full loops (60s stimulation → 30s pause). 1 session every other day. Limit to 10–12 minutes.",
    mistakes: [
      "Letting arousal escalate past 70%",
      "Losing mental focus during the 'on' periods",
      "Holding your breath"
    ],
    videoId: null
  },
  31: {
    id: 31, name: "Movement + Stimulation Pause Combo",
    category: "Arousal Braking Under Pressure", time: "6–8 min", phase: 2,
    steps: [
      "Get semi-erect using light stimulation.",
      "Perform 5–6 small hip thrusts (as in Drill 29).",
      "Then pause everything — no touch, no movement.",
      "Inhale deeply. Relax face, shoulders, and pelvic floor. Stay completely still for 30 seconds.",
      "Resume 5 more thrusts. Pause again. Repeat 3 times total."
    ],
    prescription: "3 rounds (5–6 thrusts → 30s pause). 3x per week.",
    mistakes: [
      "Skipping the pause phase",
      "Holding tension in the body during the pause",
      "Letting arousal rise too high between rounds"
    ],
    videoId: null
  },
  32: {
    id: 32, name: "Controlled Touch → Pause → Resume",
    category: "Voluntary Reflex Override", time: "5–7 min", phase: 2,
    steps: [
      "Begin with light grip stimulation. Climb to 40–50% arousal.",
      "Stop all touch for 15–20 seconds.",
      "Resume the same stimulation. Climb again.",
      "Stop again. Breathe.",
      "Repeat 3–4 cycles. Use the exact same touch rhythm each time you resume."
    ],
    prescription: "3–4 cycles of 20s stimulation → 20s pause. Every other day. Maintain calm, even breathing.",
    mistakes: [
      "Changing grip speed on resuming",
      "Using fantasy or visual content",
      "Letting tension build during the pause phase"
    ],
    videoId: null
  },
  33: {
    id: 33, name: "Full Simulation Sequence",
    category: "Complete Nervous System Integration", time: "10–12 min", phase: 2,
    steps: [
      "Setup: Semi-erect. Lie on back or stand with soft knees. Loose grip around shaft. No lube or porn. Breathe naturally.",
      "MIN 1–2: Light stimulation. Build to ~40% arousal.",
      "MIN 2–4: Add slow thrust-like motion with hips or hand grip.",
      "MIN 4–5: Pause all stimulation. Hold semi-erection. Take 2 deep breaths.",
      "MIN 5–7: Resume same stimulation. Climb to 60% and hold there.",
      "MIN 7–9: Add a pelvic squeeze every 10 seconds while keeping your grip loose.",
      "MIN 9–10: Full pause. Hands off. Stand or sit tall. Reflect. Feel your breath.",
      "If climbing past 70% at any point → stop for 30–60 seconds, breathe, then resume from an earlier point."
    ],
    prescription: "1 full session every other day. Max 10–12 minutes. 3x this week (Mon/Thu/Sat).",
    mistakes: [
      "Using fantasy, porn, or forceful stimulation",
      "Ignoring arousal spikes",
      "Breathing erratically or tensing your pelvic floor"
    ],
    videoId: null
  },
  34: {
    id: 34, name: "Controlled Climax De-escalation",
    category: "Peak Reflex Override", time: "5–7 min", phase: 2,
    steps: [
      "Use light to moderate stimulation to build arousal to 65–70% — feel the pressure, rising urge, and warmth at the base. Do NOT go beyond this.",
      "Immediately stop all touch.",
      "Hold your breath for 3 seconds, then exhale slowly for 5 seconds.",
      "Place your hand on your lower belly and gently push outward as you exhale (stimulates parasympathetic dominance).",
      "Complete 3 deep breath cycles.",
      "Resume light stimulation ONLY if arousal has dropped back to 30–40%.",
      "Repeat up to 2–3 climbs per session."
    ],
    prescription: "1 session every 2–3 days. Max 3 climbs per session.",
    mistakes: [
      "Letting arousal go past 75% before stopping",
      "Skipping the breath reset",
      "Treating this as a test — this is training, not performance"
    ],
    videoId: null
  },
  35: {
    id: 35, name: "Grip Endurance Test",
    category: "Physical Conditioning + Mental Focus", time: "5–8 min", phase: 2,
    steps: [
      "Get semi-erect using light mapping or a Cold-Warm SGR first.",
      "Form a light but intentional grip at mid-shaft — never too tight.",
      "Start slow rhythmic hand motion (minimal controlled stroke or thrust) OR lie down and add glute bridge pulses.",
      "Continue the motion for 60 seconds straight without stopping.",
      "Pause for 30 seconds. Repeat for 2–3 total rounds."
    ],
    prescription: "2–3 rounds of 60s active motion + 30s rest. Every other day.",
    mistakes: [
      "Going too fast (this is not edging — it's endurance)",
      "Holding your breath",
      "Letting your grip tighten as arousal builds"
    ],
    videoId: null
  },
  36: {
    id: 36, name: "Partner Visualization & Confidence Drill",
    category: "Mental Readiness + Emotional Grounding", time: "3–5 min", phase: 2,
    steps: [
      "Sit in a quiet space with eyes closed.",
      "Imagine yourself with a partner or the calm, ideal version of future intimacy.",
      "Visualize: making eye contact, feeling your breath slow down, touch beginning and building gradually.",
      "Stay present in the visualization — in control, connected, without pressure.",
      "See yourself slowing things down when needed, without shame or panic.",
      "Visualize her responding with trust, comfort, and connection.",
      "Allow yourself a slight smile — this trains your nervous system to associate control with safety and success."
    ],
    prescription: "Every day this week. 3–5 minutes. Best after a training drill or before bed.",
    mistakes: [
      "Turning it into an explicit fantasy",
      "Letting fear-based images play out",
      "Rushing through it — let the visualization breathe"
    ],
    videoId: null
  }
};

// ── Weekly Plans ─────────────────────────────────────────────
const WEEKS = [
  {
    id: "week1", number: 1, phase: 1,
    title: "Week 1: Reconnect",
    goal: "Build body awareness. Calm the Overdrive Reflex. Wake up control muscles.",
    overview: "This week is all about reconnecting your brain and body. We are going to calm down the hypersensitive nerve responses causing early release, activate the deep pelvic muscles that control erection strength and timing, and introduce your body to non-sexual stimulation to rewire how it responds.",
    drills: [1, 2, 3, 4, 5, 6, 7, 8],
    schedule: [
      { day: "Mon", drills: [1, 2, 3] },
      { day: "Tue", drills: [1, 4, 5] },
      { day: "Wed", drills: [1, 6, 7] },
      { day: "Thu", drills: [1, 2, 5] },
      { day: "Fri", drills: [1, 4, 3] },
      { day: "Sat", drills: [1, 8, 5] },
      { day: "Sun", drills: [], rest: true, note: "Rest + optional Drill 9 (light)" }
    ]
  },
  {
    id: "week2", number: 2, phase: 1,
    title: "Week 2: Rebuild",
    goal: "Strengthen the neural pathways. Build stability and coordination in the pelvic region.",
    overview: "We are building on your awareness from Week 1. New drills target nerve release and mobility to support erection quality and sustained control. Keep Drill 5 (visualization) running — it is doing quiet neurological work.",
    drills: [2, 3, 4, 5, 7, 8, 9, 10, 11, 12],
    schedule: [
      { day: "Mon", drills: [10, 4, 7] },
      { day: "Tue", drills: [11, 9, 5] },
      { day: "Wed", drills: [10, 2, 3] },
      { day: "Thu", drills: [11, 4, 5] },
      { day: "Fri", drills: [12, 9, 7] },
      { day: "Sat", drills: [8, 2, 5] },
      { day: "Sun", drills: [], rest: true, note: "Full rest" }
    ]
  },
  {
    id: "week3", number: 3, phase: 1,
    title: "Week 3: Reinforce",
    goal: "Deepen the brake reflex. Add endurance and sensory gating.",
    overview: "This week we introduce the Sensory Gating Reset (Drill 17) and the Wall-Sit with Pelvic Pulses (Drill 16). These drills directly train the brake reflex under physical load — replicating real-world conditions.",
    drills: [2, 5, 7, 9, 11, 12, 16, 17],
    schedule: [
      { day: "Mon", drills: [16, 12, 17] },
      { day: "Tue", drills: [2, 9, 5] },
      { day: "Wed", drills: [16, 11, 17] },
      { day: "Thu", drills: [12, 8, 7] },
      { day: "Fri", drills: [2, 9, 17] },
      { day: "Sat", drills: [16, 2, 5] },
      { day: "Sun", drills: [], rest: true, note: "Full rest" }
    ]
  },
  {
    id: "week4", number: 4, phase: 1,
    title: "Week 4: Lock In",
    goal: "Consolidate everything from Phase 1. Move under full physical load.",
    overview: "This is the hardest week of Phase 1. You are doing everything together — wall sits, marches, bridges, SGR. By the end of this week, your nervous system should feel different. Calmer. More in control.",
    drills: [2, 3, 5, 7, 8, 9, 11, 12, 16, 17, 18, 19],
    schedule: [
      { day: "Mon", drills: [16, 9, 17, 18], note: "Drill 16 with glute squeeze emphasis" },
      { day: "Tue", drills: [12, 2, 5] },
      { day: "Wed", drills: [18, 11, 7] },
      { day: "Thu", drills: [16, 8, 17, 18], note: "Drill 16 with full glute squeeze. Drill 17 extended." },
      { day: "Fri", drills: [9, 12, 5] },
      { day: "Sat", drills: [19, 2, 3] },
      { day: "Sun", drills: [], rest: true, note: "Full rest" }
    ]
  },
  {
    id: "week5", number: 5, phase: 2,
    title: "Week 5: Penile Repatterning",
    goal: "Begin direct solo training. Rewire touch sensitivity and arousal response.",
    overview: "Phase 2 begins. We now move to direct solo training. This week focuses entirely on desensitization and repatterning how your nervous system responds to touch. Go slow. These are not pleasure drills — they are control drills.",
    drills: [7, 17, 20, 21, 22, 5],
    schedule: [
      { day: "Mon", drills: [7, 20, 5], note: "Drill 20 soft version" },
      { day: "Tue", drills: [22, 21, 17], note: "Drill 17 light version" },
      { day: "Wed", drills: [7, 20, 5], note: "Drill 20 progressive version" },
      { day: "Thu", drills: [22, 21, 17], note: "Drill 17 extended version" },
      { day: "Fri", drills: [7, 20, 5], note: "Drill 20 full version" },
      { day: "Sat", drills: [22, 23, 27], note: "Cold touch session" },
      { day: "Sun", drills: [], rest: true, note: "Full rest" }
    ]
  },
  {
    id: "week6", number: 6, phase: 2,
    title: "Week 6: Arousal Laddering",
    goal: "Master the stop-start technique and build voluntary arousal control.",
    overview: "This week is about learning to ride the arousal wave — going up, pausing, coming down, going up again. The Arousal Laddering drill (25) is the centrepiece. By the end of this week you should be able to get to 60–70% and hold it there without panic.",
    drills: [5, 9, 19, 20, 21, 22, 23, 24, 25, 27],
    schedule: [
      { day: "Mon", drills: [25, 22, 5], note: "Drill 25: climb to 20–60%" },
      { day: "Tue", drills: [25, 21, 17], note: "Drill 25: climb to 30–70%. Drill 17 recovery pace" },
      { day: "Wed", drills: [25, 20, 27], note: "Drill 25: climb to 20–50%" },
      { day: "Thu", drills: [25, 19, 24], note: "Ladder Hold + Relax cycle" },
      { day: "Fri", drills: [25, 7, 5] },
      { day: "Sat", drills: [25, 9, 23, 17], note: "Optional SGR session" },
      { day: "Sun", drills: [], rest: true, note: "Full rest" }
    ]
  },
  {
    id: "week7", number: 7, phase: 2,
    title: "Week 7: Continuous Stimulation",
    goal: "Control arousal during continuous movement. Simulate real conditions.",
    overview: "This week adds movement to stimulation. Drills 28–32 simulate the conditions of real sex — motion, continuous touch, the urge to escalate. You are training your brake reflex to operate under real pressure.",
    drills: [2, 5, 18, 21, 22, 23, 24, 27, 28, 29, 30, 31, 32],
    schedule: [
      { day: "Mon", drills: [29, 23, 5] },
      { day: "Tue", drills: [30, 22, 17], note: "Arousal Loop mid-intensity. Drill 22 extended." },
      { day: "Wed", drills: [25, 18, 27], note: "Ladder + movement + cold scan" },
      { day: "Thu", drills: [29, 32, 24], note: "Mental scan included with Drill 29" },
      { day: "Fri", drills: [30, 21, 17], note: "Arousal Loop 40-60-40 pattern. SGR stretch." },
      { day: "Sat", drills: [31, 2, 5] },
      { day: "Sun", drills: [], rest: true, note: "Full rest" }
    ]
  },
  {
    id: "week8", number: 8, phase: 2,
    title: "Week 8: Final Mastery",
    goal: "Integrate everything. Full simulation, edge control, and mental readiness.",
    overview: "This is the final week. Everything you have built comes together. The Full Simulation Sequence (Drill 33) combines physical and mental control into one continuous 10-minute session. Finish with Drill 36 every day — your mind needs to be as trained as your body.",
    drills: [5, 7, 25, 30, 33, 34, 35, 36, 17],
    schedule: [
      { day: "Mon", drills: [33, 25, 36], note: "Drill 33 full 10-min sequence. Controlled breathing focus." },
      { day: "Tue", drills: [34, 17, 29], note: "Thrust + stim hold. Drill 17 long version." },
      { day: "Wed", drills: [33, 7, 5], note: "Full edge + pause 8 min. Drill 7 advanced." },
      { day: "Thu", drills: [33, 30, 36], note: "Drill 33 repeat. Drill 30 extended." },
      { day: "Fri", drills: [35, 17, 29], note: "Motion + recovery pause. SGR session." },
      { day: "Sat", drills: [33, 25, 36], note: "Best combo + optional masturbation control test" },
      { day: "Sun", drills: [], rest: true, note: "Full rest — you finished Phase 2." }
    ]
  }
];

// ── Supplements ──────────────────────────────────────────────
const SUPPLEMENTS = {
  daily: [
    {
      name: "Tongkat Ali + Fadogia Agrestis",
      role: "Testosterone & Libido Foundation",
      dosage: "Tongkat Ali: 200–400mg daily | Fadogia Agrestis: 600–1000mg daily",
      notes: "The cornerstone of the daily stack. Supports testosterone production and free testosterone levels."
    },
    {
      name: "Panax Ginseng",
      role: "Blood Flow + Energy",
      dosage: "400mg daily",
      notes: "Improves nitric oxide production and penile blood flow. Also reduces mental fatigue."
    },
    {
      name: "Maca Root",
      role: "Drive & Endurance",
      dosage: "1500mg daily (standardized gelatinized extract)",
      notes: "Supports libido and stamina without directly raising testosterone. Use standardized extract for absorption."
    },
    {
      name: "Cistanche Tubulosa",
      role: "Nerve Function + Endurance",
      dosage: "1000mg daily (standardized 20–40% echinacosides)",
      notes: "Supports penile nerve health and blood vessel function. Requires at least 3 months for full effect."
    }
  ],
  preIntimacy: [
    {
      name: "Pycnogenol (French Maritime Pine Bark Extract)",
      role: "Nitric Oxide Booster",
      dosage: "100–120mg, taken 60–90 minutes before intimacy",
      notes: "Significantly boosts nitric oxide. Drink at least 1 litre of water with this. One of the most research-backed ED supplements."
    },
    {
      name: "Horny Goat Weed (Icariin)",
      role: "PDE5 Inhibitor (Natural)",
      dosage: "500–1000mg (standardized 10–20% icariin), taken 60–90 minutes before sex",
      notes: "Works similarly to pharmaceutical ED medications but naturally. The icariin percentage matters — use standardized extract."
    }
  ]
};

// ── Daily Habits: Saboteurs ───────────────────────────────────
const SABOTEURS = [
  {
    title: "Sitting Too Much",
    detail: "More than 90 consecutive minutes of sitting compresses the pudendal nerve and reduces blood flow to the pelvic region.",
    fix: "Get up every 45–60 minutes. Do 10 standing hip hinges or glute squeezes. Walk 2–5 minutes after long sitting sessions."
  },
  {
    title: "Shallow Breathing",
    detail: "Chest breathing keeps the sympathetic (fight/flight) nervous system dominant — making erections weaker and ejaculation earlier.",
    fix: "Before bed: 3 slow belly breaths (inhale 4s → hold 2s → exhale 6s) × 5 rounds. This activates the parasympathetic system."
  },
  {
    title: "Chronic Stress",
    detail: "Elevated cortisol suppresses testosterone, reduces genital blood flow, and keeps the nervous system in a state that fights arousal.",
    fix: "10-minute walk after your most stressful daily task. 5 minutes of cold-warm exposure (contrast shower or SGR drill)."
  },
  {
    title: "Blue Light + Porn + Dopamine Burnout",
    detail: "Screens before bed suppress melatonin and testosterone. Porn overstimulates dopamine receptors and reduces real-world arousal response.",
    fix: "Cut screen use 1 hour before bed. No porn during your training weeks. Replace scrolling with physical stimulation mapping (drill practice)."
  },
  {
    title: "Processed Food & Inflammation",
    detail: "Inflammatory foods reduce nitric oxide production, damage blood vessels, and suppress testosterone — all directly impacting erection quality.",
    fix: "Avoid fried foods, packaged snacks, and refined sugar. Add nitrate-rich foods: beetroot, pomegranate, arugula. Use ghee/butter instead of refined seed oils."
  }
];

const MICRO_SABOTEURS = [
  "Tight underwear or tight jeans (restricts blood flow and scrotal temperature)",
  "Sleeping on your stomach (compresses pudendal nerve nightly)",
  "Alcohol-based mouthwash (kills oral bacteria that produce nitric oxide)",
  "Skipping morning sunlight (lowers daytime testosterone)",
  "Plastic water bottles containing BPA (endocrine disruptor)",
  "Consuming mint in high doses (reduces testosterone)",
  "Long hot showers (lowers scrotal temperature management)",
  "Laptop on lap (heat damages testicular function)"
];

const NON_NEGOTIABLES = [
  {
    title: "Walk 3,000–5,000 Steps Per Day",
    detail: "After meals, post-workout, or during calls. Walking increases nitric oxide, improves pelvic blood flow, and regulates cortisol."
  },
  {
    title: "5 Minutes of Posture Reset Daily",
    detail: "After sitting for extended periods. Slouching compresses the pelvic nerves and restricts blood flow."
  },
  {
    title: "7–8 Hours of High-Quality Sleep",
    detail: "No screens 1 hour before bed. 80% of testosterone is produced during deep sleep. One bad night measurably drops testosterone."
  },
  {
    title: "Hydrate + Salt + Magnesium",
    detail: "Drink 2.5–3.5 litres of water daily. Add a pinch of Himalayan salt to your first 500ml of the day. Eat magnesium-rich foods or take magnesium glycinate supplement at night."
  },
  {
    title: "Stimulate then Calm the Nervous System Daily",
    detail: "Choose one: (A) 30s cold water → 30s warm → repeat 3x. (B) Box breathing (4-4-4-4) × 3 rounds. (C) SGR Drill for 5 minutes."
  }
];

// ── Tonight Protocol ──────────────────────────────────────────
const TONIGHT_PROTOCOL = [
  {
    title: "10-Minute Cold-Warm Contrast Shower",
    detail: "2 minutes cold → 1 minute warm. Repeat for 3 rounds. Focus water on your upper back, chest, and legs. End on cold.",
    why: "Maximises blood vessel dilation and nitric oxide production. Reduces cortisol. Wakes up your vascular system."
  },
  {
    title: "Ice Pack Rub (10-Minute Interval Protocol)",
    detail: "Wrap ice in cloth. Lightly press against the shaft and base of penis for 30 seconds. Remove for 30 seconds. Repeat 5–7 rounds.",
    why: "Temporarily reduces hypersensitivity in the glans and shaft, improving stamina without medication."
  },
  {
    title: "Hydration + L-Citrulline / L-Arginine",
    detail: "Drink 1 litre of water mixed with 4–6g of L-citrulline OR L-arginine powder plus a pinch of pink Himalayan salt.",
    why: "L-citrulline converts to L-arginine in the kidneys, directly boosting nitric oxide for stronger, longer-lasting erections."
  },
  {
    title: "Natural Viagra Shake",
    detail: "Drink 45–60 minutes before sex. Recipe detailed in Chapter 7.3 of the original protocol document.",
    why: "Combines natural vasodilating ingredients for peak performance. See the original PDF (Chapter 7.3) for the full recipe."
  },
  {
    title: "Pre-Sex Meal (2–3 Hours Before)",
    detail: "Eat: lean protein + healthy fat + light complex carbs. Avoid: sugar, fried food, heavy dairy, alcohol.",
    why: "A heavy or inflammatory meal right before sex diverts blood flow to digestion, weakening erections."
  }
];

const TONIGHT_OPTIONAL = "Optional: Masturbate 1 hour before sex ONLY if you feel desperate to release pressure. Conditions: no porn, no fantasy, don't edge, fully finish, then reset with a cold rinse. Use this sparingly — it is a tool of last resort, not a habit.";

// ── Sex Tips ─────────────────────────────────────────────────
const SEX_TIPS = [
  {
    title: "Shift Your Focus Entirely",
    detail: "Move your attention to your partner's reactions, not your own level of excitement. Her sounds, movement, and breath become your feedback loop — not your internal arousal level."
  },
  {
    title: "Make Her Orgasm First",
    detail: "Lower her threshold before penetration. Focus entirely on making her climax through foreplay first. When you finally penetrate, the pressure of 'lasting long enough' drops dramatically because she has already peaked."
  },
  {
    title: "Extend Foreplay Far Beyond What Feels Normal",
    detail: "Sensation and touching, kissing, oral sex, fingering, toys. The longer and better foreplay is, the shorter penetration needs to be."
  },
  {
    title: "The 4-Step Female Process",
    detail: "To truly prime your partner: Foreplay (physical and sensory) → Emotional Connection (feel safe and wanted) → Communication (know what she likes) → Perception (how she sees you — confidence, presence, eye contact)."
  },
  {
    title: "Control Your Rhythm During Sex",
    detail: "Start slow → medium → fast → super fast. Once you find a rhythm that works, stay in it consistently. Erratic changes kill her momentum."
  },
  {
    title: "If You Feel Close Too Soon — Use These Options",
    detail: "Option A: Change positions (this naturally reduces stimulation and buys time). Option B: Change rhythm or speed (slow down deliberately). Option C: Stop completely and hold (press in deep and stay still, switch to kissing or grinding). Option D: Exercise another body part (shift attention to her neck, ears, hands)."
  }
];

// ── Conclusion ───────────────────────────────────────────────
const CONCLUSION = `
<p>You have just completed the Bedroom Mastery Protocol.</p>

<p>This was not about tricks. This was about training. You did the work that most men never do — you went inside the problem instead of around it. You retrained your nervous system, rebuilt your pelvic control, rewired your arousal response, and developed the mental discipline to stay present under pressure.</p>

<p>That is not a small thing.</p>

<h2>What You Have Built</h2>
<p>Over 8 weeks, you trained the same neural pathways that fire during sex — under controlled conditions, with progressive difficulty. Your pelvic floor is stronger. Your arousal braking reflex has been reprogrammed. Your sensitivity has been recalibrated. You have spent hours building the mental image of control, calm, and connection.</p>

<h2>How to Stay Sharp</h2>
<p>You do not need to repeat the full 8-week protocol. To maintain your gains, run two sessions per week that include: Arousal Laddering with motion (Drill 28 or 29) + Cold Touch Scan (Drill 27) + Grip Reset (Drill 21 or 32). This takes 15–20 minutes and keeps everything locked in.</p>

<h2>What Happens If You Slip</h2>
<p>If you have a bad experience — early release or difficulty getting hard — do not spiral. Come back to Week 3 or 4 drills for one week. Your nervous system remembers the training. You are resetting, not starting over.</p>

<h2>The Real Shift</h2>
<p>The greatest change from this protocol is not physical — it is the moment you stop experiencing sex as something that happens to you and start experiencing it as something you do. With intention. With control. With presence.</p>

<p>That is the Bedroom Mastery Protocol in one sentence.</p>
`;
