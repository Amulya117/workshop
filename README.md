# Amulya G — Student Developer Portfolio (Hero & Navigation)

A high-performance, responsive portfolio hero section and floating navigation bar built with **React**, **Tailwind CSS**, and an interactive **HTML5 Canvas Matrix Grid**, styled in an exclusive **Cyber-Emerald / Dark Mode** design system.

---

## 🎨 Theme & Aesthetic: 'Cyber-Emerald / Dark Mode'
* **Background**: Deep matte carbon (`#0d1117`) with rich dark contrast and zero generic blue gradients.
* **Accents**: Crisp neon emerald (`#10b981`), glowing teal-emerald, and high-voltage lime (`#a3e635`).
* **Glassmorphism**: Ultra-smooth frosted-glass surfaces (`backdrop-blur-xl`, `border-emerald-500/20`, deep matte carbon tints).

---

## ⚡ Core Features Implemented

### 1. HTML5 Canvas Interactive Matrix-Dot Grid (`MatrixGridCanvas.jsx`)
* **Dynamic Ripple & Perspective Distortion**: Tracks mouse coordinates with smooth damping (lerp). As the cursor moves, dots dynamically displace outward with harmonic ripple waves.
* **Cyber Particle Illumination**: Dots within mouse proximity transition from ambient carbon-emerald into radiant neon emerald and vivid lime highlights with ambient glow.
* **Idle Harmonic Wave**: Subtle ambient mathematical breathing wave runs when cursor is idle.
* **Device Pixel Ratio (DPR) Scaling**: Auto-scales to device pixel ratio for razor-sharp rendering on Retina and 4K displays.

### 2. Floating Frosted-Glass Navbar (`Navbar.jsx`)
* **Fixed on Scroll**: Floats gracefully at the top of the viewport with a blurred translucent carbon finish.
* **Identity Monogram**: `[AG]` cyber badge with an animated radar ping indicator + `Amulya G.` brand title.
* **Navigation Links**: Clean, responsive links for `'About'`, `'Projects'`, `'Skills'`, `'Campus Life'`, and `'Contact'` with active indicators and emerald underline hover transitions.
* **Responsive Mobile Menu**: Fully collapsible mobile drawer with animated hamburger toggle.

### 3. Hero Intro Section (`Hero.jsx`)
* **Status Badge**: Animated radar pill: `🟢 Student Developer // Open for Internships` with a pulsing concentric ping ring and lime accent.
* **Main Headline**:
  > *"Hey, I am Amulya G — Building the Future of Tech."*
  Rendered with emerald-to-lime gradient typography and neon text drop-shadow.
* **Student Bio**:
  > *`[KS INSTITUTE OF TECHNOLOGY (CSE)]` passionate about web development, AI, and building real-world projects.*
* **Interactive Action Buttons**:
  1. **Primary**: `'View My Projects'` with vibrant glowing emerald gradient, elevation lift on hover (`-translate-y-1`), and arrow translate animation.
  2. **Secondary**: `'Download Resume / CV'` cyber outline button with download icon and soft emerald backdrop glow.
* **Interactive Terminal Console**: Micro-status card showcasing technical stack: React 18, Tailwind CSS, JavaScript, Python / AI, Node.js, and DevOps.

### 4. Featured Projects Showcase (`FeaturedProjects.jsx`)
* **Interactive 3D Perspective Tilt Physics**: Cards dynamically tilt (`rotateX` / `rotateY`) in response to mouse cursor coordinates with smooth cubic-bezier return easing.
* **Smooth Hover Elevation & Glow**: Cards lift smoothly (`translateY(-6px)`), intensify their border to `border-emerald-400/60`, and project an expansive soft emerald glow (`box-shadow: 0 16px 36px -6px rgba(16,185,129,0.35)`).
* **Live Cursor Spotlight & Shine**: A radial light cone tracks the cursor over the dark glass surface (`border-emerald-500/20`), revealing a glossy edge reflection.
* **Filter Pill Row**: Smooth filtering between **'All'**, **'Web Apps'**, **'AI / ML'**, and **'Mini-Projects'** with an animated active badge.
* **Project Cards Included**:
  * **SkillsyncAI [PORTFOLIO GENERATOR]**: AI resume & repository parser auto-generating developer portfolios with dynamic skill-tagging. Badges: `React`, `Firebase`, `Gemini AI`, `Tailwind CSS`. Action buttons: **'Live Demo'** & **'GitHub Code'**.
  * **AIR MODELLING [DRONE]**: Autonomous UAV flight telemetry and edge computer vision for real-time target tracking and obstacle avoidance. Badges: `Python`, `OpenCV`, `YOLOv8`, `ROS / DroneKit`. Action buttons: **'Live Demo'** & **'GitHub Code'**.
  * **CampusPulse [STUDENT ACADEMIC ECOSYSTEM]**: Collaborative peer-learning and hackathon hub for KSIT engineering undergraduates. Badges: `React`, `Node.js`, `PostgreSQL`, `Tailwind CSS`. Action buttons: **'Live Demo'** & **'GitHub Code'**.

### 5. Interactive Tech Stack & Skills (`TechStackSkills.jsx`)
* **Categorized 3-Panel Grid**:
  * **Languages**: C++, Python, JavaScript, Java, TypeScript, SQL.
  * **Frameworks & Tools**: React 18, Tailwind CSS, Node.js, Git & GitHub, Firebase, Docker.
  * **Core CS Concepts**: Data Structures & Algorithms, Object-Oriented Programming (OOP), Database Management (DBMS), Operating Systems (OS), Computer Networks, System Design.
* **Interactive Pill Physics**: Each badge includes its official SVG icon, smoothly scales up on hover (`scale-105`), illuminates with a neon emerald halo, and projects a floating comfort level tooltip:
  * 🟢 **Proficient** (Emerald Glow)
  * 🟡 **Familiar** (Lime Glow)
  * 🔵 **Currently Learning** (Cyan Glow)

### 6. Education & Campus Journey (`CampusJourney.jsx`)
* **Illuminated Vertical Timeline**:
  * **2026**: `3RD SEM BTECH SIH WINNER` — Clinched victory in Smart India Hackathon (SIH) internal collegiate rounds during 3rd sem CSE.
  * **2025**: `NXGEN CLUB MEMBER` — Core technical wing contributor at NxGen Club KSIT organizing workshops and peer mentoring.
  * **2024**: `SKILLSYNC AI` — Architected and launched the flagship AI-driven portfolio automation platform.
* **2x2 Achievement Callout Badges**:
  * 🏆 **1st Place - University Hackathon** (Smart India Hackathon collegiate winner)
  * ⚡ **150+ LeetCode Problems Solved** (DSA consistency in C++ & Python)
  * 👥 **Tech Club Organizer** (Community lead & event driver at NxGen Club)
  * 📜 **Full-Stack Certified** (React, APIs & Cloud Systems)

---

## 🚀 How to Run & Preview

### Option A: Instant Zero-Install Browser Preview (Recommended)
Simply double-click `index.html` in Windows Explorer or open it in Microsoft Edge / Google Chrome. It loads React 18 and Tailwind CSS directly with zero installation needed.

### Option B: Running with Vite & Node.js
If you have Node.js and npm installed:
```bash
npm install
npm run dev
```
Open `http://localhost:3000` to view the live hot-reloading development server.

---

## 📂 Project Structure

```text
├── index.html                 # Standalone interactive preview (Double-click to run!)
├── package.json               # Vite & React dependencies
├── vite.config.js             # Vite configuration
├── tailwind.config.js         # Cyber-Emerald theme tokens & animations
├── postcss.config.js          # PostCSS configuration
└── src/
    ├── main.jsx               # React entry point
    ├── App.jsx                # Application layout & section anchors
    ├── index.css              # Custom cyber scrollbars & Tailwind base
    └── components/
        ├── Navbar.jsx           # Floating frosted-glass navbar
        ├── Hero.jsx             # Cyber-Emerald intro hero screen
        ├── FeaturedProjects.jsx # 3D tilt physics showcase & filter pills
        ├── TechStackSkills.jsx  # Interactive skills badges with comfort tooltips
        ├── CampusJourney.jsx    # Vertical timeline & 2x2 achievement callouts
        └── MatrixGridCanvas.jsx # HTML5 interactive matrix ripple canvas
```

