# 🚀 NakshatraX


<p align="center">
   <img src="./public/favicon.png" alt="NakshatraX Logo" width="120" />
</p>

<h1 align="center">NakshatraX</h1>
<p align="center"><b>Interactive Space Mission Simulation Platform</b></p>

---

## 🌌 Live Demo

**[Launch NakshatraX](https://nakshatra-x.vercel.app/)**

---

## ✨ Overview

NakshatraX is an interactive 3D space mission simulator that brings orbital mechanics and space exploration to your browser. Combining NASA mission control aesthetics with modern space simulation gameplay, the platform offers real-time solar system visualization, comet tracking, and free-roam flight simulation.

---

## 🎯 Features

### 🌍 3D Solar System Simulation
- Real-time planetary orbits with accurate orbital mechanics
- Interactive camera controls with zoom and rotation
- Scientifically accurate scale representations
- Smooth animations powered by Three.js

### 🛸 Mission Control Center
- Rocket selection interface with detailed specifications
- Real-time mission statistics and telemetry
- Success/failure state tracking
- Mission planning with trajectory calculations

### ☄️ Atlas Comet Tracking
- Hyperbolic trajectory visualization for interstellar object 3I/ATLAS
- Orbital path prediction and intercept planning
- Real-time position tracking
- Educational content about comet mechanics

### 🎮 Free-Roam Flight Simulator
- WASD keyboard controls for spacecraft navigation
- Unlimited exploration of solar system
- First-person perspective flight
- Realistic physics-based movement

### 🏆 Gamification System
- Mission scoring and achievement tracking
- Leaderboard with player rankings
- Challenge-based progression
- Performance metrics and analytics

### 📚 Educational Content
- Space science tutorials and guides
- Orbital mechanics explanations
- Mission planning fundamentals
- Interactive learning modules

---

## 🛠️ Tech Stack

- **React 18** - UI component library
- **TypeScript** - Type-safe development
- **Vite** - Fast build tool and dev server
- **Three.js** - 3D graphics rendering
- **React Three Fiber** - React renderer for Three.js
- **Framer Motion** - Animation library
- **Tailwind CSS** - Utility-first styling
- **React Router** - Client-side routing

---

## 🎨 Design System

### Color Palette
- **Background**: Deep navy (#0a0e27) and black (#000000)
- **Primary**: Neon cyan (#00d9ff)
- **Secondary**: Electric purple (#9333ea)
- **Accent**: Vibrant orange (#ff6b35)

### Typography
- **Headers**: Orbitron (space-inspired geometric font)
- **Body**: Inter (clean, readable sans-serif)

### Visual Effects
- Animated starfield backgrounds
- Glowing neon elements
- Particle systems
- Smooth transitions and animations

---

## 🚀 Getting Started

### Prerequisites
- Node.js 18+
- npm or yarn

### Installation

1. **Clone the repository**
```bash
   git clone https://github.com/VishalGhuge111/NakshatraX.git
   cd NakshatraX
```

2. **Install dependencies**
```bash
   npm install
```

3. **Run development server**
```bash
   npm run dev
```

4. **Open in browser**
   
   Navigate to [http://localhost:5173](http://localhost:5173)

---


## 📁 Project Structure

```
nakshatraX-main/
│
├── public/
│   ├── favicon.png
│   ├── placeholder.svg
│   └── robots.txt
│
├── src/
│   ├── App.css
│   ├── App.tsx
│   ├── index.css
│   ├── main.tsx
│   ├── vite-env.d.ts
│   ├── components/
│   │   ├── layout/
│   │   │   ├── Footer.tsx
│   │   │   ├── Header.tsx
│   │   │   └── Layout.tsx
│   │   └── ui/
│   │       ├── accordion.tsx
│   │       ├── alert-dialog.tsx
│   │       ├── alert.tsx
│   │       ├── aspect-ratio.tsx
│   │       ├── avatar.tsx
│   │       ├── badge.tsx
│   │       ├── breadcrumb.tsx
│   │       ├── button.tsx
│   │       ├── calendar.tsx
│   │       ├── card.tsx
│   │       ├── carousel.tsx
│   │       ├── chart.tsx
│   │       ├── checkbox.tsx
│   │       ├── collapsible.tsx
│   │       ├── command.tsx
│   │       ├── context-menu.tsx
│   │       ├── dialog.tsx
│   │       ├── drawer.tsx
│   │       ├── dropdown-menu.tsx
│   │       ├── form.tsx
│   │       ├── hover-card.tsx
│   │       ├── input-otp.tsx
│   │       ├── input.tsx
│   │       ├── label.tsx
│   │       ├── loading-spinner.tsx
│   │       ├── menubar.tsx
│   │       ├── navigation-menu.tsx
│   │       ├── pagination.tsx
│   │       ├── popover.tsx
│   │       ├── progress.tsx
│   │       ├── radio-group.tsx
│   │       ├── resizable.tsx
│   │       ├── scroll-area.tsx
│   │       ├── select.tsx
│   │       ├── separator.tsx
│   │       ├── sheet.tsx
│   │       ├── sidebar.tsx
│   │       ├── skeleton.tsx
│   │       ├── slider.tsx
│   │       ├── sonner.tsx
│   │       ├── switch.tsx
│   │       ├── table.tsx
│   │       ├── tabs.tsx
│   │       ├── textarea.tsx
│   │       ├── toast.tsx
│   │       ├── toaster.tsx
│   │       ├── toggle-group.tsx
│   │       ├── toggle.tsx
│   │       ├── tooltip.tsx
│   │       └── use-toast.ts
│   ├── hooks/
│   │   ├── use-mobile.tsx
│   │   └── use-toast.ts
│   ├── lib/
│   │   └── utils.ts
│   └── pages/
│       ├── Atlas.tsx
│       ├── Contact.tsx
│       ├── Docs.tsx
│       ├── Index.tsx
│       ├── Leaderboard.tsx
│       ├── Learn.tsx
│       ├── Missions.tsx
│       ├── NotFound.tsx
│       └── Simulator.tsx
│
├── .gitignore
├── bun.lockb
├── components.json
├── eslint.config.js
├── index.html
├── package-lock.json
├── package.json
├── postcss.config.js
├── tailwind.config.ts
├── tsconfig.app.json
├── tsconfig.json
├── tsconfig.node.json
└── vite.config.ts
```

---

## 🎮 How to Use

### Solar System Explorer
1. Navigate to "Solar System" from the header
2. Use mouse to rotate and zoom camera
3. Click planets for detailed information
4. Observe real-time orbital mechanics

### Mission Planning
1. Go to "Mission Control"
2. Select a rocket from available options
3. Review mission parameters and requirements
4. Launch mission and track progress

### Atlas Comet Tracking
1. Visit "Atlas Tracker" page
2. View hyperbolic trajectory visualization
3. Plan intercept missions
4. Learn about interstellar objects

### Free-Roam Simulator
1. Access "Simulator" from navigation
2. Use WASD keys for movement
3. Explore solar system at your own pace
4. Experience realistic flight physics

---

## 🧪 Available Scripts

```bash
npm run dev       # Start development server
npm run build     # Build for production
npm run preview   # Preview production build
npm run lint      # Run ESLint
```

---

## 🌟 Key Pages

- **Home** - Hero landing with animated starfield
- **Solar System** - 3D interactive planetary visualization
- **Mission Control** - Rocket selection and mission planning
- **Atlas Tracker** - Comet tracking with trajectory simulation
- **Simulator** - Free-roam flight experience
- **Learn** - Educational space science content
- **Leaderboard** - Mission scores and achievements
- **Contact** - User feedback and support

---

## 🔧 Technical Highlights

### 3D Rendering
- React Three Fiber for declarative 3D scenes
- Orbital mechanics calculations
- Real-time physics simulation
- Optimized rendering performance

### Animations
- Framer Motion for UI transitions
- Three.js animation loops
- Particle systems for space effects
- Smooth camera movements

### Responsive Design
- Mobile-first approach
- Tailwind CSS breakpoints
- Adaptive 3D controls
- Touch-friendly interfaces

---

## 📚 Learning Resources

The platform includes educational content covering:
- Orbital mechanics fundamentals
- Rocket propulsion physics
- Interstellar object trajectories
- Mission planning strategies
- Space exploration history

---

## 🤝 Contributing

Contributions are welcome! To contribute:

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

---

## 📄 License

This project is licensed under the MIT License.

---

## 👤 Author

**Vishal Ghuge**  
[GitHub](https://github.com/VishalGhuge111) • [LinkedIn](https://linkedin.com/in/vishalghuge111)

---

## 🙏 Acknowledgments

- Three.js community for 3D graphics tools
- React Three Fiber for React integration
- NASA and ESA for space exploration inspiration
- Kerbal Space Program for gameplay mechanics inspiration

---

<p align="center">Built with React, Three.js, and a passion for space exploration</p>
