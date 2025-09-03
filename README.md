# React + TypeScript + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

# Isumi Gayasha - Portfolio Website

A modern, responsive portfolio website showcasing the work and skills of Isumi Gayasha, an undergraduate student at Sabaragamuwa University of Sri Lanka.

![Portfolio Preview](https://img.shields.io/badge/Status-Live-brightgreen)
![React](https://img.shields.io/badge/React-18+-blue)
![TypeScript](https://img.shields.io/badge/TypeScript-5+-blue)
![Tailwind CSS](https://img.shields.io/badge/Tailwind%20CSS-3+-blue)

## 🌟 Features

- **Modern Design**: Clean, professional, and visually appealing interface
- **Responsive Layout**: Optimized for all devices (desktop, tablet, mobile)
- **Smooth Animations**: Engaging user experience with smooth transitions
- **Interactive Navigation**: Easy-to-use navigation with smooth scrolling
- **Contact Integration**: Multiple ways to get in touch
- **Performance Optimized**: Fast loading and efficient code

## 🛠️ Technologies Used

- **Frontend Framework**: React 18+ with TypeScript
- **Styling**: Tailwind CSS for modern, utility-first styling
- **Build Tool**: Vite for fast development and optimized builds
- **Code Quality**: ESLint for code consistency
- **Version Control**: Git & GitHub

## 📁 Project Structure

```
my-portfolio/
├── public/
│   ├── profile.jpg          # Profile image
│   └── vite.svg            # Vite logo
├── src/
│   ├── components/         # React components
│   │   ├── Header.tsx      # Navigation header
│   │   ├── Hero.tsx        # Hero/landing section
│   │   ├── About.tsx       # About me section
│   │   ├── Skills.tsx      # Skills and expertise
│   │   ├── Projects.tsx    # Projects showcase
│   │   ├── Contact.tsx     # Contact information
│   │   └── Footer.tsx      # Footer component
│   ├── App.tsx             # Main app component
│   ├── App.css             # Global styles
│   ├── index.css           # Base styles
│   └── main.tsx            # App entry point
├── package.json            # Dependencies and scripts
└── README.md              # Project documentation
```

## 🚀 Getting Started

### Prerequisites

- Node.js (version 18 or higher)
- npm or yarn package manager

### Installation

1. **Clone the repository**

   ```bash
   git clone https://github.com/JMIG-Jayasooriya/my-portfolio.git
   cd my-portfolio
   ```

2. **Install dependencies**

   ```bash
   npm install
   ```

3. **Start the development server**

   ```bash
   npm run dev
   ```

4. **Open your browser**
   Navigate to `http://localhost:5173` to view the portfolio

### Building for Production

```bash
npm run build
```

The build artifacts will be stored in the `dist/` directory.

### Preview Production Build

```bash
npm run preview
```

## 🚀 Deployment to GitHub Pages

This portfolio is automatically deployed to GitHub Pages using GitHub Actions. Here's how to set it up:

### Automatic Deployment (Recommended)

1. **Push to GitHub**

   ```bash
   git add .
   git commit -m "Initial portfolio setup"
   git push origin main
   ```

2. **Enable GitHub Pages**

   - Go to your repository settings
   - Navigate to "Pages" section
   - Set source to "GitHub Actions"
   - The site will be available at: `https://yourusername.github.io/my-portfolio/`

3. **Automatic Updates**
   - Every push to the `main` branch triggers automatic deployment
   - Check the "Actions" tab to monitor deployment status

### Manual Deployment

If you prefer manual deployment:

```bash
npm run deploy
```

**Note**: You'll need to install `gh-pages` first:

```bash
npm install --save-dev gh-pages
```

### Deployment Configuration

- **Base URL**: Configured for GitHub Pages (`/my-portfolio/`)
- **GitHub Actions**: Automated workflow in `.github/workflows/deploy.yml`
- **Build Output**: Static files in `dist/` directory
- **Image Paths**: Automatically adjusted for deployment

## 📱 Sections Overview

### 🏠 Hero Section

- Professional introduction
- Call-to-action buttons
- Profile image with elegant styling

### 👤 About Section

- Personal story and background
- Educational information
- Areas of interest and philosophy

### 💼 Skills Section

- Technical skills with progress indicators
- Categorized by expertise areas:
  - Software Engineering
  - Data Analysis
  - UI/UX Design
- Tools and technologies showcase

### 🚀 Projects Section

- Featured project: IshucCakes Website
- Upcoming projects roadmap
- Direct links to GitHub repositories

### 📞 Contact Section

- Multiple contact methods
- Contact form for direct messages
- Social media links
- Professional information

## 👩‍💻 About Isumi Gayasha

Isumi Gayasha is a passionate 2nd-year undergraduate student at Sabaragamuwa University of Sri Lanka, specializing in software engineering, data analysis, and UI/UX design.

### 🎓 Education

- **University**: Sabaragamuwa University of Sri Lanka
- **Program**: Computer Science (2nd Year)
- **Student ID**: 22fis0542

### 🎯 Areas of Interest

- Software Engineering
- Data Analysis
- UI/UX Design

### 📬 Contact Information

- **Email**: isumigayasha20@gmail.com, 22fis0542@ms.sab.ac.lk
- **Phone**: 0766375625
- **GitHub**: [JMIG-Jayasooriya](https://github.com/JMIG-Jayasooriya)
- **LinkedIn**: [Isumi Gayasha](https://www.linkedin.com/in/isumi-gayasha-a89685345)

## 🎨 Design Philosophy

This portfolio follows modern web design principles:

- **User-Centered Design**: Every element is designed with the user experience in mind
- **Clean Aesthetics**: Minimalist approach with focus on content
- **Accessibility**: Built with accessibility best practices
- **Performance**: Optimized for fast loading and smooth interactions

## 🔧 Customization

The portfolio is built with modularity in mind. To customize:

1. **Colors**: Edit the Tailwind CSS classes in components
2. **Content**: Update the information in each component file
3. **Images**: Replace images in the `public/` directory
4. **Styling**: Modify CSS in `App.css` and component files

## 📈 Performance Features

- **Code Splitting**: Automatic code splitting with Vite
- **Optimized Images**: Properly sized and formatted images
- **Minimal Bundle Size**: Tree-shaking and dead code elimination
- **Fast Loading**: Optimized for Core Web Vitals

## 🤝 Contributing

While this is a personal portfolio, suggestions and feedback are welcome:

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Submit a pull request

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 🙏 Acknowledgments

- Built with [React](https://reactjs.org/)
- Styled with [Tailwind CSS](https://tailwindcss.com/)
- Bundled with [Vite](https://vitejs.dev/)
- Icons from [Heroicons](https://heroicons.com/)

---

**Built with ❤️ by Isumi Gayasha**

For any questions or collaborations, feel free to reach out through any of the contact methods listed above!

You can also install [eslint-plugin-react-x](https://github.com/Rel1cx/eslint-react/tree/main/packages/plugins/eslint-plugin-react-x) and [eslint-plugin-react-dom](https://github.com/Rel1cx/eslint-react/tree/main/packages/plugins/eslint-plugin-react-dom) for React-specific lint rules:

```js
// eslint.config.js
import reactX from "eslint-plugin-react-x";
import reactDom from "eslint-plugin-react-dom";

export default tseslint.config([
  globalIgnores(["dist"]),
  {
    files: ["**/*.{ts,tsx}"],
    extends: [
      // Other configs...
      // Enable lint rules for React
      reactX.configs["recommended-typescript"],
      // Enable lint rules for React DOM
      reactDom.configs.recommended,
    ],
    languageOptions: {
      parserOptions: {
        project: ["./tsconfig.node.json", "./tsconfig.app.json"],
        tsconfigRootDir: import.meta.dirname,
      },
      // other options...
    },
  },
]);
```
