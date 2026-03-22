# Kutumbpur High School - Digital Platform

![Build Status](https://img.shields.io/badge/build-passing-brightgreen)
![License](https://img.shields.io/badge/license-MIT-blue)
![Version](https://img.shields.io/badge/version-1.0.0-orange)
![Tech Stack](https://img.shields.io/badge/stack-React%20%7C%20Vite%20%7C%20Tailwind-blueviolet)

A modern, responsive, and comprehensive digital platform for **Kutumbpur High School**, designed to bridge the gap between students, parents, and faculty. This application serves as the central hub for academic management, communication, and school updates.

## 🚀 Features

### 🎓 For Students
- **Academic Portal:** View grades, attendance, and class schedules.
- **Resource Library:** Access digital textbooks, study materials, and past exam papers.
- **Assignment Tracker:** Submit assignments and track deadlines with real-time status updates.

### 👨‍👩‍👧‍👦 For Parents
- **Progress Monitoring:** Real-time access to child's academic performance and attendance.
- **Communication:** Direct messaging with teachers and administration.
- **Fee Management:** Digital fee structure viewing and payment history tracking.

### 🏫 For Administration & Faculty
- **Content Management:** Manage news, events, and school announcements.
- **Student Records:** Centralized database for student information.
- **Faculty Portal:** Manage classes, grading, and resources.

## 🛠️ Technology Stack

- **Runtime:** [Bun](https://bun.sh) (v1.x)
- **Framework:** [React](https://react.dev) (v19)
- **Build Tool:** [Vite](https://vitejs.dev) (v7)
- **Styling:** [Tailwind CSS](https://tailwindcss.com) (v4)
- **State Management:** React Context API (with domain-based splitting)
- **Routing:** React Router DOM (v7)
- **Testing:** [Vitest](https://vitest.dev) & React Testing Library
- **Linting:** ESLint

## 🏗️ Architecture & Decisions

### State Management Strategy
We chose **React Context API** over external libraries (like Redux) to minimize boilerplate for this scale of application. To ensure performance and scalability:
- **Context Splitting:** State is divided into domain-specific contexts (`ThemeContext`, `NotificationContext`, `StudentContext`) to prevent unnecessary re-renders.
- **Service Layer:** Data fetching is abstracted into a `services/api.js` layer, simulating asynchronous API calls. This decouples the UI from the data source, allowing for easy integration with a real backend in the future.

### Component Design
- **Atomic Design Principles:** UI primitives (like Badges, Icons) are separated from feature components.
- **Compound Components:** Complex dashboards are broken down into small, single-responsibility widgets (e.g., `DailySchedule`, `QuickStats`) for maintainability.

## 📂 Project Structure

```bash
src/
├── assets/             # Static assets (images, icons)
├── Components/         # Reusable UI components
│   ├── Shared/         # Global components (Navbar, Footer)
│   ├── UI/             # Atomic UI primitives (Badge, Button)
│   ├── Icons/          # SVG Icon library
│   └── ...             # Feature-specific components
├── context/            # Global state (Theme, Auth, Data)
├── data/               # Static data & mock APIs
├── services/           # API service layer (Mock async calls)
├── Layouts/            # Page layouts (Main, Auth, Dashboard)
├── Pages/              # Application views/routes
│   ├── Home/           # Landing page & sub-sections
│   ├── Portals/        # Student, Parent, & Faculty portals
│   └── ...
├── Routes/             # Router configuration
├── styles/             # Global styles & Tailwind config
└── utils/              # Helper functions & constants
```

## ⚡ Getting Started

### Prerequisites
- [Bun](https://bun.sh) (latest version recommended)

### Installation

1.  **Clone the repository:**
    ```bash
    git clone https://github.com/tarekul42/OPTB-P1-kutumbpur-high-school.git
    cd OPTB-P1-kutumbpur-high-school
    ```

2.  **Install dependencies:**
    ```bash
    bun install
    ```

3.  **Start the development server:**
    ```bash
    bun run dev
    ```
    The application will be available at `http://localhost:5173`.

## 🧪 Testing

We use **Vitest** for unit and integration testing.

- **Run all tests:**
    ```bash
    bun run test
    ```
- **Run tests with UI:**
    ```bash
    bun run test:ui
    ```
- **Check coverage:**
    ```bash
    bun run test:coverage
    ```

## 🗺️ Roadmap

- [x] **Core Portals:** Student and Faculty dashboards.
- [x] **Event Management:** Interactive calendar with Bangladesh holidays.
- [ ] **Backend Integration:** Connect to a Node.js/Express API.
- [ ] **Real-time Chat:** Socket.io integration for Parent-Teacher communication.
- [ ] **Payment Gateway:** Integration with SSLCommerz for fee payments.

## 🤝 Contribution Guidelines

We welcome contributions! Please follow these steps to ensure a smooth workflow:

1.  **Fork the repository.**
2.  **Create a feature branch:** `git checkout -b feature/amazing-feature`
3.  **Commit your changes:** `git commit -m 'feat: Add amazing feature'` (Use [Conventional Commits](https://www.conventionalcommits.org/))
4.  **Push to the branch:** `git push origin feature/amazing-feature`
5.  **Open a Pull Request.**

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 📞 Support & Contact

- **Email:** kutumbpurhighschool1996@gmail.com
- **Maintainer:** [Tarekul Islam](https://github.com/tarekul42)
