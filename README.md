# 🏫 Kutumbpur High School - Digital Excellence Platform

[![Bun](https://img.shields.io/badge/Runtime-Bun-black?style=for-the-badge&logo=bun)](https://bun.sh)
[![React](https://img.shields.io/badge/React-19-blue?style=for-the-badge&logo=react)](https://react.dev)
[![TypeScript](https://img.shields.io/badge/TypeScript-6.0-blue?style=for-the-badge&logo=typescript)](https://www.typescriptlang.org/)
[![Vite](https://img.shields.io/badge/Vite-7-646CFF?style=for-the-badge&logo=vite)](https://vitejs.dev/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-4.0-38B2AC?style=for-the-badge&logo=tailwind-css)](https://tailwindcss.com)

A premium, high-performance digital ecosystem for **Kutumbpur High School**. This platform provides a seamless bridge between administration, faculty, parents, and students, specifically optimized for the Bangladeshi educational context.

Built with a modern stack emphasizing speed, reliability, and accessibility.

---

## ✨ Strategic Features

### 🏛️ Specialized Portals
*   **Student Hub:** Personalized dashboards with academic tracking, schedules, and digital resources.
*   **Faculty Control:** Advanced class management, grading systems, and resource distribution.
*   **Parent Insights:** Real-time visibility into attendance, performance, and communication channels.

### 📅 Cultural Localization
*   **Bangladesh-Tailored Calendar:** Fully localized in Bengali with Friday weekends and national holiday integration.
*   **Holiday Service:** Automated tracking of national days (Victory Day, Independence Day, etc.) and educational holidays.

### 🚀 Educational Innovation
*   **Curiosity Corner:** A curated digital library for independent learning.
*   **Edu-Adventure:** Engagement-focused learning modules designed for modern education.
*   **FAQ System:** Instant answers to common administrative and academic queries.

---

## 🏗️ Architecture: Atomic Design System

The project has transitioned to a highly modular **Atomic Architecture**. Large, monolithic features are decomposed into lean, state-managing containers that compose reusable sub-components.

-   **Containers:** Located in `src/features/[feature]/[FeatureName].tsx`. They handle side effects, data fetching, and state.
-   **Sub-components:** Located in `src/features/[feature]/components/`. These are visual-only or specialized UI blocks.
-   **Shared UI:** Located in `src/shared/ui/`. Generic, project-wide atoms (Buttons, Badges, Modals, Cards).

### 📂 Directory Structure

```bash
src/
├── app/                # Global providers, styles, and routing
├── features/           # Domain-driven feature modules
│   ├── curiosity-corner/
│   ├── edu-adventure/
│   ├── events/
│   ├── faculty-portal/
│   ├── parent-portal/  # Lean containers + component folders
│   └── student-portal/
├── shared/             # Atomic cross-cutting concerns
│   ├── ui/             # Premium Design System (UI Kit)
│   ├── data/           # Mock data and localization sets
│   ├── types/          # Shared TypeScript definitions
│   └── utils/          # Formatting & logic helpers
```

---

## 🛠️ Technical Excellence

-   **Runtime & Package Manager:** [Bun](https://bun.sh) for lightning-fast installations and builds. (Configured as primary toolchain).
-   **Core Framework:** [React 19](https://react.dev) utilizing latest concurrent features.
-   **Build Tool:** [Vite 7](https://vitejs.dev/) with optimized HMR.
-   **Styling Engine:** [Tailwind CSS 4.0](https://tailwindcss.com) for a modern, fluid design system.
-   **Data Visualization:** [Recharts](https://recharts.org/) for student performance analytics.
-   **Testing:** [Vitest](https://vitest.dev) with co-location strategy for maximum reliability.

---

## 🚀 Get Started

### Prerequisites
*   [Bun](https://bun.sh) (v1.x+)

### Setup
1.  **Clone the Vision:**
    ```bash
    git clone https://github.com/tarekul42/OPTB-P1-kutumbpur-high-school.git
    cd OPTB-P1-kutumbpur-high-school
    ```
2.  **Initialize Environment:**
    ```bash
    bun install
    ```
3.  **Launch Dev Server:**
    ```bash
    bun run dev
    ```

---

## 🧪 Quality Assurance

We maintain zero-error tolerance for the build and lint process.

```bash
# Type check and lint
bun run lint
bun run type-check

# Execute unit and integration tests
bun run test
```

---

## 🚀 Recent Updates

- **Atomic Architecture Finalized:** Transitioned the entire frontend project into a lean, modular atomic component-based structure, eliminating monolithic files.
- **Build Stabilization:** Successfully resolved all persistent build failures and broken relative imports for a stable, production-ready release.
- **Bun Migration Complete:** Fully integrated Bun as the primary toolchain for development, testing, and building, replacing npm.

---

## 🤝 Roadmap & Vision

- [x] **Phase 1:** Core Portal Architecture and localized events.
- [x] **Phase 2:** Transition to Atomic Component Design (FSD-lite).
- [x] **Phase 3:** Infrastructure migration to Bun/React 19/Vite 7.
- [x] **Phase 4:** Finalize Atomic UI components and stabilize build process.
- [ ] **Phase 5:** Real-time parent-teacher communication bridge.
- [ ] **Phase 6:** National Result API and SSLCommerz payment gateway.

---

## 📄 License & Maintainers

This project is licensed under the **MIT License**.

Developed and maintained with ❤️ by [Tarekul Islam](https://github.com/tarekul42) and the Kutumbpur High School Digital Team.
