# TestArchitect Pro

TestArchitect Pro is a premium, single-page application (SPA) designed for a comprehensive **90-Day QA Automation Upskilling & Interview Preparation** journey. Built with a modern, high-performance professional aesthetic, it provides interactive playgrounds, curated curriculum pathways, and robust interview tools to level up development and testing expertise.

---

## 🚀 Key Features

*   **Responsive Navy & Cobalt Navbar**: A sticky top navigation bar (`#0b1a30`) that completely replaces legacy dark sidebars, allowing maximum horizontal canvas space.
*   **Vibrant Hero & Bento Grid**: Dynamic hero section highlighting key learning modules alongside beautiful rounded bento grids for "Skill Development" tracks and "Interview Prep" workspaces.
*   **Persistent Learning Engine**: Progress tracker tracking 10 domain pathways over a 90-day learning curriculum, complete with local storage sync.
*   **Tabbed Interview Prep Playground**: Considers developer visual comfort by keeping description panels bright and clean, while using high-contrast dark editors (`#020617` background with JetBrains Mono) for active coding:
    *   **Coding Arena**: Dynamic code editor supporting Java, JavaScript, Python, and TypeScript with live evaluation output logs.
    *   **Debugging Lab**: Spot syntax, logical, and runner errors in real-time test logs.
    *   **API Designer**: Simulate HTTP requests, parse query parameters, and validate response edge-cases.
    *   **Competency Quizzes**: Domain-specific assessments checking test execution and test architecture capabilities.
*   **State Persistence**: All user progress, checklist logs, and diagnostic scores are preserved locally in the browser under the `testarchitect_pro_state` key.

---

## 🛠️ How to Run the Project

### Prerequisites
Make sure you have [Node.js](https://nodejs.org/) installed on your machine to execute the package scripts.

### Step 1: Install Dependencies
This project is built using vanilla HTML, modern CSS, and JavaScript. The only dependency is a lightweight development server.

If you want to run via npm, initialize inside the directory:
```bash
npm install
```

### Step 2: Start the Development Server
You can run the site using the built-in npm start script or using direct npx commands:

#### Option A: Using NPM (Recommended)
```bash
npm start
```

#### Option B: Using NPX Direct
```bash
npx -y http-server -p 8080 -c-1
```

### Step 3: Access the Application
Once the server starts, open your web browser and navigate to:
👉 **[http://localhost:8080](http://localhost:8080)**

---

## 📂 Project Structure

```text
d:/Tutorials/InterviewPrparation/
├── index.html          # Core HTML structure & semantic layout
├── style.css           # Responsive light-theme layout, custom micro-animations & tokenized css variables
├── app.js            # Routing manager, interactive mock compilers, persistent store, & quiz engines
├── developer_hero.png  # Warm premium stock developer vector illustration 
├── package.json        # NPM scripts & metadata
└── README.md           # Documentation & startup instructions (This file)
```

---

## 💾 Local Storage Schema

Application states are stored under:
*   `testarchitect_pro_state`: JSON structure preserving current route, completed curriculum milestones, quiz scores, and saved playground configurations.
