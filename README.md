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

## <a name="docker"></a>🐳 Docker

This project is Dockerized for a consistent development and build experience — no need to install Node or pnpm locally.

### How it works

Since this is a Chrome extension (not a web server), Docker isn't used to *run* the extension. Instead it serves two purposes:

- **Build**: Produce the `build/` folder output inside a container, then copy it to your machine
- **Dev**: Run the Vite dev server inside a container with live file syncing, so you can develop without a local Node environment

The `Dockerfile` defines the environment (Node + pnpm + dependencies). The `docker-compose.yml` defines two named services — `dev` and `build` — so you can target either one on demand.

### Key concepts used here

- **Images vs Containers**: `docker build` creates an image (a frozen snapshot of the environment). `docker run` spins up a temporary container from that image, does its job, and exits. The image is the thing you share; containers are disposable instances of it.
- **Layer caching**: The Dockerfile copies `package.json` and `pnpm-lock.yaml` before the source code. Docker caches each step, so dependency installs are only re-run when those files change — not on every source code edit.
- **Volume mounts** (`-v`): Links a folder on your real machine to a path inside the container. Used so the `build/` output written inside the container appears on your host machine, and so source file edits during `dev` are reflected inside the container in real time.
- **`docker compose up <service>`**: Starts only the named service. `docker compose up dev` starts the dev server; `docker compose up` would start all services simultaneously. Compose also auto-rebuilds the image if the Dockerfile changed, so you rarely need to run `docker build` manually.
- **Polling for hot reload on Windows**: Vite's file watcher uses native OS events, which don't work across the Windows/Linux boundary when files are volume-mounted. Setting `usePolling: true` in `vite.config.js` tells Vite to check for file changes on a timer instead, which works correctly.

### Docker commands

**Development** (live reloading dev server at `localhost:5173`):

```bash
docker compose up dev
```

**Production build** (outputs the `build/` folder to your project):

```bash
# Windows PowerShell
docker run --rm -v "${PWD}/build:/app/build" hydration-hero

# Mac/Linux
docker run --rm -v "$(pwd)/build:/app/build" hydration-hero
```

Or with compose:

```bash
docker compose run --rm build
```

**Share the image without sharing source code:**

```bash
# Export to a file
docker save hydration-hero > hydration-hero.tar

# Recipient imports and runs it — only Docker required, no Node/pnpm needed
docker load < hydration-hero.tar
docker run --rm -v "${PWD}/build:/app/build" hydration-hero
```

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