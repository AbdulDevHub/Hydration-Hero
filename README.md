# **Reboost**

Reboost is a Chrome extension with two features: a hydration tracker for logging water intake and a wellness reminder system for setting custom break alerts.

<p align="center">
    <img src="https://i.imgur.com/Id14fNB.png" alt="Reboost Banner" style="width: 100%; height: auto;">
</p>

---

## <a name="one"></a>❓ The Problem

Many people forget to stay hydrated and take breaks while working or studying on a computer. Similar tools, like mobile apps, are often too generic, cluttered, and easy to ignore.

A Chrome extension is more efficient and faster, keeping users focused without switching devices.

---

## <a name="two"></a>🏛️ Project Architecture

### Chrome Extension APIs & Required Permissions

Reboost utilizes the following Chrome APIs, which require specific permissions to function properly:

- **Storage API (`storage` permission)**: Stores hydration logs, reminder settings, and user preferences in local storage. This ensures that timers persist even after the extension is closed or the browser is restarted.

---

## <a name="three"></a>🌟 Key Features

### **Hydration Tracker**

Log water intake and track progress toward daily hydration goals.

<p align="center">
    <img src="https://i.imgur.com/BITNl1q.gif" alt="Hydration Tracker GIF" style="width: 60%; height: auto;">
</p>

### **Free, Lightweight & Privacy-Focused**

- **Lightweight & Efficient**: Runs smoothly without slowing down your browser.
- **No Account Required**: Use all features without signing up.
- **No Data Tracking**: Your data stay on your device (local storage).
- **Completely Free**: No hidden fees, subscriptions, or in-app purchases.

---

## <a name="five"></a>⚙️ Installation & Setup

### **1. Clone the repository:**

```bash
git clone https://github.com/AbdulDevHub/reboost.git
```

### **2. Install dependencies:**

```bash
npm install
```

### **3. Build the extension:**

```bash
npm run build
```

### **4. Load the extension in Chrome:**

1. Open Google Chrome and navigate to `chrome://extensions/`

2. Enable **Developer Mode** (toggle in the top-right corner)

3. Click **Load unpacked**

4. Select the **build** folder inside your project

---

## <a name="six"></a>🛠️ Technologies Used

- React
- React Router
- Tailwind CSS
- React Icons
- Chrome Extension APIs (Storage)

---

## <a name="four"></a>🤝 Contributing

This project is open for contributions! Feel free to submit issues and pull requests.
