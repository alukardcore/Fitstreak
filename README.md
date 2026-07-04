# ⚡ FitStreak

**A free, private, offline-capable workout tracker and nutrition logger — installable as an app on any phone.**

No accounts. No subscriptions. No servers. Everything lives on your device.

---

## 🚀 Installation

FitStreak is a Progressive Web App (PWA). Host the four files anywhere with HTTPS and install it from the browser.

### GitHub Pages (free)
1. Create a repository and upload all **4 files**: `index.html`, `app.js`, `sw.js`, `manifest.json`
2. Go to **Settings → Pages → Branch: main → Save**
3. Open `https://YOUR-USERNAME.github.io/REPO-NAME/` on your phone in Chrome
4. Tap **⋮ → Add to Home Screen → Install**

### Netlify Drop (fastest)
1. Go to **app.netlify.com/drop** and drag the folder onto the page
2. Open the generated URL on your phone → **⋮ → Add to Home Screen**

> **Updating:** after uploading new files, open the site with `?v=NUMBER` appended to the URL (e.g. `…/Fitstreak/?v=2`) to force past any cached version.

---

## ✨ Features

### 🏋️ Training
- **28 workout templates** — PPL (A/B variants), bro splits (Chest Day, Back Day, Arm Day, Bicep/Tricep Day…), Upper/Lower strength & hypertrophy, Full Body A/B/C, bodyweight circuits, powerlifting, cardio
- **70+ exercise library** — filterable by muscle group, searchable
- **Custom workouts** — create your own, and edit *any* plan (add/remove exercises, including the presets)
- **Weekly schedule** — assign a workout (or Rest Day) to each weekday; Home's "Today's Plan" follows it
- **Live workout logging** — weight × reps for strength, duration + distance for cardio
- **Warmup sets** — tap a set number to mark it "W"; excluded from volume, XP and PRs
- **Auto rest timer** — starts when you tick a set; ±15s adjust, skip, configurable duration
- **Exercise switching** — swap any exercise mid-workout without losing logged sets
- **Crash-proof** — the active workout is saved on every input and auto-resumes if the app closes
- **Workout notes** — attach a note when finishing ("felt strong", "knee sore"), visible in history

### 📊 Progress
- **Weekly summary** — last 7 days: workouts, volume, XP, distance, average calories
- **Body weight tracking** — log your weight over time with a chart; also updates your calorie targets
- **Volume & frequency charts**
- **Personal records** — strength PRs (best weight × reps) and cardio PRs (best distance/duration); **tap any PR** for a per-exercise progress chart
- **Full workout history** — paginated, with per-entry **delete** that refunds XP and rebuilds PRs cleanly
- **XP history** — every XP gain, grouped by day with running totals

### 🎮 Gamification
- **100 levels across 10 tiers**: Rookie → Novice → Amateur → Athlete → Veteran → Pro → Elite → Champion → Master → Legend
- XP from working sets, volume, cardio minutes and kilometres
- **14 achievements** — first workout, streak milestones, 100 kg bench/squat, 150 kg deadlift, 5 km run, level milestones…
- **Streak system with weekly shield** — one 2-day gap per week is forgiven automatically

### 🥗 Nutrition
- **Daily macro ring** — calories, protein, carbs, fat vs. your goals
- **Food database with portion sizes** — tap a portion chip (e.g. "3 pieces", "1 fillet ~180 g") and log in two taps; includes Georgian staples like khinkali and gomi
- **Manual entry** for anything not in the database
- **Day navigation** — browse and edit any past day with ‹ › arrows
- **Water tracker** — +250/+500 ml taps, daily goal auto-calculated from your body weight
- **Goal-based calorie targets** — Mifflin-St Jeor with activity level and goal adjustment (cut −20%, bulk +10%, strength +8%); recalculates whenever you edit weight/height/age/goal/activity in Profile

### 🤖 AI Coach
- Chat with Claude — it knows your profile, goal, workout count, streak and calorie target
- Bring your own Anthropic API key (stored only on your device)

### 🔒 Data
- **Export** — one-tap JSON backup (API key excluded for safety)
- **Import** — restore any backup; your API key is preserved
- **100% local** — localStorage only, nothing ever leaves your phone except AI chat calls to Anthropic

---

## 🤖 AI Coach Setup
1. Get an API key at **console.anthropic.com**
2. In FitStreak: **Profile → AI Coach → Anthropic API Key**
3. Paste the key and save — done

---

## 📁 Files

| File | Purpose |
|------|---------|
| `index.html` | UI structure and styles |
| `app.js` | All application logic |
| `sw.js` | Service worker — offline caching (network-first, so updates always land) |
| `manifest.json` | PWA install metadata |

---

## 🔒 Privacy & Security
- No accounts, no analytics, no external data collection
- All data in your browser's localStorage
- API key stored locally, sent only to Anthropic's official API
- User input sanitised against XSS
- HTTPS required for PWA install (GitHub Pages/Netlify provide it)

---

## 💾 Backup advice
localStorage is wiped if you clear the browser's site data. **Export regularly** (Profile → Data → Export) — restoring takes one tap via Import.
