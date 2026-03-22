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
- **Assignment Tracker:** Submit assignments and track deadlines.

### 👨‍👩‍👧‍👦 For Parents
- **Progress Monitoring:** Real-time access to child's academic performance and attendance.
- **Communication:** Direct messaging with teachers and administration.
- **Fee Management:** View fee structures and payment history (future integration).

### 🏫 For Administration & Faculty
- **Content Management:** Manage news, events, and school announcements.
- **Student Records:** centralized database for student information.
- **Faculty Portal:** Manage classes, grading, and resources.

## 🛠️ Technology Stack

- **Runtime:** [Bun](https://bun.sh) (v1.x)
- **Framework:** [React](https://react.dev) (v19)
- **Build Tool:** [Vite](https://vitejs.dev) (v7)
- **Styling:** [Tailwind CSS](https://tailwindcss.com) (v4)
- **State Management:** React Context API
- **Routing:** React Router DOM (v7)
- **Testing:** [Vitest](https://vitest.dev) & React Testing Library
- **Linting:** ESLint

## 📂 Project Structure

```bash
src/
├── assets/             # Static assets (images, icons)
├── Components/         # Reusable UI components
│   ├── Shared/         # Global components (Navbar, Footer)
│   └── ...             # Feature-specific components
├── context/            # Global state (Theme, Auth, Data)
├── data/               # Static data & mock APIs
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

## 🚢 Building for Production

To create an optimized production build:

```bash
bun run build
```
The output will be in the `dist/` directory, ready for deployment.

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
