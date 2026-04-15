# ⚡ FitStreak – AI Workout Tracker
### GymStreak-inspired PWA for Samsung Galaxy Z Fold 7

---

## 🚀 Installation on Samsung Galaxy Z Fold 7

FitStreak is a **Progressive Web App (PWA)** — it installs directly onto your home screen via Chrome, no app store needed.

### Method 1: GitHub Pages (Recommended — Free & Fast)
1. Create a free account at **github.com**
2. Create a new repository called `fitstreak`
3. Upload all 3 files: `index.html`, `manifest.json`, `sw.js`
4. Go to **Settings → Pages → Branch: main → Save**
5. Your app URL will be: `https://YOUR-USERNAME.github.io/fitstreak`
6. On your Z Fold 7, open **Chrome** and visit that URL
7. Tap the **⋮ menu → Add to Home Screen → Install**
8. ✅ Done! FitStreak icon appears on your home screen

### Method 2: Netlify Drop (Fastest — 30 seconds)
1. Go to **app.netlify.com/drop** on your computer
2. Drag the entire `fitstreak` folder onto the page
3. Copy the generated URL (e.g. `https://abc123.netlify.app`)
4. On your Z Fold 7, open Chrome and visit the URL
5. Tap **⋮ → Add to Home Screen → Install**

### Method 3: Local Wi-Fi (No internet required)
1. Install **Node.js** on your computer
2. Run: `npx serve fitstreak/`
3. Note your computer's local IP (e.g. `192.168.1.100`)
4. On Z Fold 7 (same Wi-Fi), go to `http://192.168.1.100:3000`
5. Tap **⋮ → Add to Home Screen**

---

## ✨ Features

| Feature | Description |
|---------|-------------|
| 🏋️ **Workout Tracker** | Log sets, reps & weight with rest timer |
| 📚 **Exercise Library** | 45+ exercises across all muscle groups |
| 🤖 **AI Coach** | Real-time advice powered by Claude AI |
| 📊 **Progress Charts** | Volume & frequency charts, personal records |
| 🥗 **Nutrition Tracker** | Log meals, track macros & calories |
| 🔥 **Streak System** | Daily streak + XP + levelling up |
| 📱 **Z Fold Optimized** | Adapts to both inner & outer displays |
| 📴 **Works Offline** | Service worker caches the app locally |
| 🔒 **100% Private** | All data stored on-device, no server |

---

## 🤖 AI Coach Setup

To enable the AI coaching feature:
1. Get a free API key at **console.anthropic.com**
2. In FitStreak, go to **Profile → AI Coach Settings → API Key**
3. Enter your key (starts with `sk-ant-`)
4. Start chatting with your AI coach!

---

## 📱 Z Fold 7 Tips

- **Inner Display**: App automatically uses wide layout with 4-column stats grid
- **Outer Display**: Compact single-column layout for quick logging
- **Multitasking**: Works great split-screen with music apps
- **DeX Mode**: Fully functional on Samsung DeX

---

## 🔒 Security & Privacy

- Zero external data collection — everything stays on your device
- No login required, no account needed
- API key stored locally and never transmitted except to Anthropic's official API
- All user inputs sanitized to prevent XSS
- HTTPS required for PWA install (GitHub Pages / Netlify provide this automatically)
- Content Security Policy compatible

---

## 📋 GymStreak Feature Comparison

| Feature | GymStreak | FitStreak |
|---------|-----------|-----------|
| AI Workout Generator | ✅ | ✅ (via AI Coach) |
| Exercise Library | ✅ | ✅ 45+ exercises |
| Workout Tracker | ✅ | ✅ |
| Rest Timer | ✅ | ✅ Auto + Manual |
| Progress Charts | ✅ | ✅ |
| Nutrition Tracking | ✅ | ✅ |
| Personal Records | ✅ | ✅ |
| XP / Gamification | ✅ | ✅ |
| Subscription Required | ✅ | ❌ Free forever |
| Apple Watch | ✅ | ❌ (Web only) |
| Offline Support | Partial | ✅ Full |
| Data Privacy | Cloud | ✅ 100% Local |
