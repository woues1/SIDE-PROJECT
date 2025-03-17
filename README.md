# Portfolio Side Project

This is a portfolio project built with React, TypeScript, and Vite. It showcases various components and features such as authentication and API integration.

## Table of Contents

- [Installation](#installation)
- [Usage](#usage)
- [Features](#features)
- [Project Structure](#project-structure)
- [Scripts](#scripts)
- [License](#license)

## Installation

1. Clone the repository:

    ```sh
    git clone https://github.com/woues1/SIDE-PROJECT
    ```

2. Navigate to the project directory:

    ```sh
    cd SIDE-PROJECT
    ```

3. Install the dependencies:

    ```sh
    npm install
    ```

## Usage

1. Start the development server:

    ```sh
    npm run dev
    ```

2. Open your browser and navigate to `http://localhost:5173`.

## Features

- **Authentication**: Login and logout functionality.
- **API Integration**: Fetch and display data from APIs.
- **Responsive Design**: Mobile-friendly layout.

## Project Structure

```
.
├── .gitignore
├── AuthTypes.tsx
├── eslint.config.js
├── index.html
├── package.json
├── postcss.config.cjs
├── README.md
├── tailwind.config.js
├── ThemeTypes.tsx
├── tsconfig.app.json
├── tsconfig.json
├── tsconfig.node.json
├── vite.config.ts
├── public/
│   └── vite.svg
└── src/
    ├── App.tsx
    ├── index.css
    ├── main.css
    ├── main.tsx
    ├── vite-env.d.ts
    ├── assets/
    ├── components/
    │   ├── About.tsx
    │   ├── AddSkill.tsx
    │   ├── Contact.tsx
    │   ├── CreateProject.tsx
    │   ├── Footer.tsx
    │   ├── Header.tsx
    │   ├── Hero.tsx
    │   ├── Projects.tsx
    │   ├── SkillsDisplay.tsx
    │   └── SocialIcons.tsx
    ├── context/
    │   ├── AuthContext.tsx
    │   └── ThemeContext.tsx
    ├── hooks/
    │   ├── useAuthContext.tsx
    │   ├── useFetch.tsx
    │   ├── useLogin.tsx
    │   ├── useLogout.tsx
    │   ├── usePost.tsx
    │   └── useThemeContext.tsx
    ├── outlets/
    │   └── Base.tsx
    ├── pages/
    │   ├── Dashboard.tsx
    │   ├── Home.tsx
    │   └── Login.tsx
```

## Scripts

- `npm run dev`: Start the development server.
- `npm run build`: Build the project for production.
- `npm run build:css`: Build the CSS using PostCSS.
- `npm run lint`: Run ESLint to lint the code.
- `npm run preview`: Preview the production build.
