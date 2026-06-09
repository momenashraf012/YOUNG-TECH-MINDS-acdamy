# 🚀 YOUNG TECH MINDS Academy

> Live, online coding & AI classes for ages 8–18 with one-on-one mentorship

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
[![Node](https://img.shields.io/badge/Node-%3E%3D18.0.0-green.svg)](https://nodejs.org/)
[![React](https://img.shields.io/badge/React-18.3+-blue.svg)](https://react.dev/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.6+-blue.svg)](https://www.typescriptlang.org/)

---

## 📋 Table of Contents

- [Features](#-features)
- [Tech Stack](#-tech-stack)
- [Getting Started](#-getting-started)
- [Installation](#-installation)
- [Development](#-development)
- [Build & Deploy](#-build--deploy)
- [Project Structure](#-project-structure)
- [Contributing](#-contributing)
- [License](#-license)

---

## ✨ Features

- 🎯 **Multi-Language Support** - English & Arabic with RTL support
- 🎨 **Modern UI** - Built with Tailwind CSS 4.0
- ⚡ **Fast Performance** - Optimized with Vite
- 📱 **Responsive Design** - Works on all devices
- 🔐 **Type Safe** - Full TypeScript support
- 🎓 **Course Showcase** - Display 120+ live courses
- 📧 **Lead Generation** - Booking modal for class registrations
- 🌍 **Internationalization** - Complete i18n support
- ♿ **Accessible** - WCAG compliant components
- 📊 **Analytics Ready** - Easy integration with tracking tools

---

## 🛠 Tech Stack

| Technology | Version | Purpose |
|-----------|---------|---------|
| React | 18.3+ | UI library |
| TypeScript | 5.6+ | Type safety |
| Tailwind CSS | 4.0+ | Styling |
| Vite | 6.0+ | Build tool |
| Lucide Icons | 0.460+ | Icons |

---

## 🚀 Getting Started

### Prerequisites

- **Node.js** 18.0 or higher ([Download](https://nodejs.org/))
- **npm** 9.0+ or **yarn** 4.0+
- **Git** for version control

### Clone the Repository

```bash
git clone https://github.com/momenashraf012/YOUNG-TECH-MINDS-acdamy.git
cd YOUNG-TECH-MINDS-acdamy
```

---

## 📦 Installation

### 1. Install Dependencies

```bash
npm install
```

### 2. Environment Setup

Copy the environment template and fill in your values:

```bash
cp .env.example .env.local
```

Available environment variables:

```env
# API Configuration
VITE_API_BASE_URL=http://localhost:3000
VITE_API_TIMEOUT=10000

# Analytics (Optional)
VITE_GA_TRACKING_ID=
VITE_SEGMENT_WRITE_KEY=

# Feature Flags
VITE_ENABLE_ANALYTICS=true
VITE_ENABLE_CHAT=false
```

---

## 💻 Development

### Start Development Server

```bash
npm run dev
```

The app will be available at **http://localhost:4736**

### Available Scripts

```bash
# Development with HMR
npm run dev

# Type checking
npx tsc --noEmit

# Linting
npm run lint

# Format code
npm run format

# Build for production
npm run build

# Preview production build
npm run preview
```

### Code Quality

```bash
# Run ESLint (check for issues)
npm run lint

# Fix linting issues automatically
npm run lint:fix

# Format code with Prettier
npm run format

# Check formatting without changes
npm run format:check
```

---

## 🏗 Build & Deploy

### Production Build

```bash
npm run build
```

This creates an optimized production build in the `dist/` folder.

### Preview Production Build

```bash
npm run preview
```

### Deployment Platforms

#### **Vercel** (Recommended)

```bash
npm i -g vercel
vercel
```

#### **Netlify**

```bash
npm i -g netlify-cli
netlify deploy --prod --dir=dist
```

#### **GitHub Pages**

1. Update `vite.config.ts`:
```typescript
export default defineConfig({
  base: '/YOUNG-TECH-MINDS-acdamy/',
  // ... rest of config
});
```

2. Deploy:
```bash
npm run build
git add dist/
git commit -m "Deploy to GitHub Pages"
git push
```

---

## 📁 Project Structure

```
src/
├── components/          # Reusable UI components
│   ├── Button.tsx
│   ├── Card.tsx
│   ├── CourseCard.tsx
│   ├── BookingModal.tsx
│   └── ...
├── sections/           # Page sections
│   ├── Header.tsx
│   ├── Hero.tsx
│   ├── Courses.tsx
│   ├── HowItWorks.tsx
│   ├── Proof.tsx
│   └── ...
├── App.tsx            # Root component
├── main.tsx           # Entry point
├── types.ts           # TypeScript interfaces
├── copy.ts            # i18n content (EN/AR)
├── icons.tsx          # Icon components
├── cn.ts              # Utility functions
└── index.css          # Global styles & Tailwind
```

---

## 🤝 Contributing

We welcome contributions! Please follow these steps:

### 1. Fork & Clone

```bash
git clone https://github.com/YOUR_USERNAME/YOUNG-TECH-MINDS-acdamy.git
cd YOUNG-TECH-MINDS-acdamy
```

### 2. Create a Feature Branch

```bash
git checkout -b feature/amazing-feature
```

### 3. Make Your Changes

```bash
# Install dependencies
npm install

# Start dev server
npm run dev

# Code with quality checks
npm run lint:fix    # Fix linting issues
npm run format      # Format code
npm run build       # Verify build succeeds
```

### 4. Commit & Push

```bash
git add .
git commit -m "feat: add amazing feature"
git push origin feature/amazing-feature
```

### 5. Create a Pull Request

- Go to [Pull Requests](https://github.com/momenashraf012/YOUNG-TECH-MINDS-acdamy/pulls)
- Click "New Pull Request"
- Add description of changes
- Submit for review

### Commit Message Convention

Follow [Conventional Commits](https://www.conventionalcommits.org/):

```
feat:    A new feature
fix:     A bug fix
docs:    Documentation only changes
style:   Changes that don't affect code meaning
refactor: Code change that neither fixes a bug nor adds a feature
test:    Adding missing tests
chore:   Changes to build process or dependencies
```

### Code Style

- **ESLint** enforces code quality
- **Prettier** auto-formats code
- **TypeScript** ensures type safety
- Run `npm run lint:fix && npm run format` before committing

---

## 📧 Contact & Support

- **Email**: support@youngtech.minds
- **Website**: [youngtech.minds](https://youngtech.minds)
- **Issues**: [GitHub Issues](https://github.com/momenashraf012/YOUNG-TECH-MINDS-acdamy/issues)

---

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

---

## 🙏 Acknowledgments

- Built with [React](https://react.dev/)
- Styled with [Tailwind CSS](https://tailwindcss.com/)
- Icons from [Lucide](https://lucide.dev/)
- Bundled with [Vite](https://vitejs.dev/)

---

**Made with ❤️ by the YOUNG TECH MINDS Team**
