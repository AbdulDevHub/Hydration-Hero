# **Hydration Hero**

Hydration Hero is a lightweight Chrome extension for tracking daily water intake and staying on top of your hydration goals—right from your browser.

<p align="center">
    <img src="https://i.imgur.com/BITNl1q.gif" alt="Hydration Tracker GIF" style="width: 60%; height: auto;">
</p>

---

## <a name="one"></a>❓ The Problem

Many people forget to stay hydrated while working or studying on a computer. Mobile apps are often too generic, cluttered, and easy to ignore when you're focused on your screen.

A Chrome extension is more efficient—keeping hydration tracking just one click away without switching devices or breaking your workflow.

---

## <a name="two"></a>🏛️ Project Architecture

### Project Structure

```
src/
├── components/
│   ├── DrinkButtons.jsx          # All action buttons (Log, Reset, Save, Settings)
│   ├── DrinkLogs.jsx              # Drink history with timestamps and totals
│   ├── DrinkSettings.jsx          # Daily goal configuration and reset controls
│   ├── DrinkModals.jsx            # Modal wrappers for logs and settings
│   ├── DrinkHeader.jsx            # Extension header component
│   ├── DrinkProgressCard.jsx      # Visual progress indicator
│   ├── LogADrink.jsx              # Main drink logging interface
│   ├── VolumeSelection.jsx        # Volume input controls
│   └── utils/
│       └── timeUtils.js           # Timestamp formatting utilities
└── pages/
    └── DrinkPage.jsx              # Main application page
```

### Chrome Extension APIs & Required Permissions

Hydration Hero utilizes the following Chrome APIs:

- **Storage API (`storage` permission)**: Stores hydration logs, daily goals, and user preferences in local storage. Data persists across browser sessions while staying completely private on your device.

---

## <a name="three"></a>🌟 Key Features

### **Hydration Tracker**

- Log water intake with customizable volumes (50ml - 1000ml)
- Track progress toward daily hydration goals
- View timestamped drink logs with "time ago" formatting
- Visual progress indicator showing daily completion percentage
- Automatic daily reset at midnight

### **Customizable Settings**

- Set personalized daily hydration goals (500ml - 10,000ml)
- Manual reset option for starting fresh anytime
- Clean, intuitive settings interface

### **Free, Lightweight & Privacy-Focused**

- **Lightweight & Efficient**: Runs smoothly without slowing down your browser
- **No Account Required**: Use all features without signing up
- **No Data Tracking**: Your data stays on your device (local storage only)
- **Completely Free**: No hidden fees, subscriptions, or in-app purchases
- **Open Source**: Fully transparent codebase on GitHub

---

## <a name="five"></a>⚙️ Installation & Setup

### **1. Clone the repository:**

```bash
git clone https://github.com/AbdulDevHub/Hydration-Hero.git
cd Hydration-Hero
```

### **2. Install dependencies:**

```bash
pnpm install
```

### **3. Build the extension:**

```bash
pnpm run build
```

### **4. Load the extension in Chrome:**

1. Open Google Chrome and navigate to `chrome://extensions/`
2. Enable **Developer Mode** (toggle in the top-right corner)
3. Click **Load unpacked**
4. Select the **build** folder inside your project
5. Pin the extension to your toolbar for easy access

---

## <a name="six"></a>🛠️ Technologies Used

- **React** - UI framework
- **Vite** - Build tool and dev server
- **Tailwind CSS** - Utility-first styling
- **React Icons** - Icon library (Lucide, Font Awesome, GoGear)
- **Chrome Extension APIs** - Storage API for data persistence

---

## <a name="seven"></a>📝 Development

### Available Scripts

```bash
pnpm run dev      # Start development server
pnpm run build    # Build for production
pnpm run preview  # Preview production build
```

### Code Organization

This project uses a consolidated component structure for better maintainability:

- **Named exports** for related components (buttons, modals)
- **Internal sub-components** to reduce file fragmentation
- **Utility functions** organized in a dedicated utils folder

---

## <a name="four"></a>🤝 Contributing

This project is open for contributions! Feel free to submit issues and pull requests.

### Ways to Contribute

- Report bugs or suggest features via GitHub Issues
- Submit pull requests with improvements or fixes
- Improve documentation
- Share feedback on UX/UI

---

## <a name="eight"></a>📄 License

This project is open source and available under the [MIT License](LICENSE).

---

**Stay hydrated! 💧**
