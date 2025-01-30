# React TypeScript Vite Boilerplate

A modern React boilerplate with **TypeScript, Vite, Material UI (MUI), React Query, Zustand, Biome, Wouter, and Husky**. This setup provides a fast development experience with best practices for state management, API fetching, routing, code linting and formatting.

## 🚀 Features

- **⚡️ Vite** - Super-fast dev server & optimized build
- **📌 TypeScript** - Strongly typed React components
- **🎨 Material UI (MUI)** - Pre-styled, customizable UI components
- **🔄 React Query** - Efficient server state management
- **🌍 Zustand** - Simple & scalable global state management
- **🛣️ Wouter** - Lightweight routing for React apps
- **📝 Biome** - All-in-one linter, formatter, and code optimizer
- **✅ Husky & Commitlint** - Git hooks for linting before commits

---

## 🌐 Getting Started
### 🔑 Prerequisites

Ensure you have the following installed on your machine:

- [Node.js](https://nodejs.org/) (v22+ recommended)
- [npm](https://www.npmjs.com/)
- [Biome](https://biomejs.dev/) (for code formatting and linting; optional for contributors but recommended. Install the [Biome extension for VSCode](https://marketplace.visualstudio.com/items?itemName=biomejs.biome) (or your preferred code editor/IDE).)
---

### 📦 Installation

```sh
# Clone the repo
git clone https://github.com/yourusername/react-ts-vite-boilerplate.git
cd react-ts-vite-boilerplate

# Install dependencies
npm install

# Copy `.env.dev` to `.env`:
cp .env.dev .env

# Update `.env` with your api base url and other configurations.

# Start the development server
npm run dev
```

## 📁 Project Structure
```sh
📦 src
 ┣ 📂app             # Application layer
 ┃ ┣ 📂routes        # Application routes/pages
 ┃ ┣ 📜app.tsx       # Main application component
 ┃ ┣ 📜provider.tsx  # Global providers wrapper
 ┃ ┗ 📜router.tsx    # Router configuration
 ┃
 ┣ 📂assets          # Static assets (images, fonts, etc.)
 ┣ 📂components      # Shared UI components
 ┣ 📂config          # Global configurations, exported env variables
 ┣ 📂features        # Feature-based modules
 ┣ 📂hooks           # Shared hooks used across the application
 ┣ 📂lib             # Reusable libraries preconfigured for the application
 ┣ 📂stores          # Global state stores (Zustand)
 ┣ 📂testing         # Test utilities and mocks
 ┣ 📂types           # Shared TypeScript types
 ┣ 📂utils           # Shared utility functions
 ┣ 📜main.tsx        # Entry point
 ┗ 📜App.tsx         # Main application component
```

Each feature follows a modular structure:
```sh
src/features/awesome-feature
 ┣ 📂api         # API request declarations and hooks
 ┣ 📂assets      # Static files for this feature
 ┣ 📂components  # Components scoped to this feature
 ┣ 📂hooks       # Hooks scoped to this feature
 ┣ 📂stores      # State management for this feature
 ┣ 📂types       # TypeScript types used within the feature
 ┗ 📂utils       # Utility functions specific to this feature
```
In some cases, it may be more practical to store API calls in a dedicated api folder outside of features, especially if they are shared across multiple features.

## 🗄️ State Management (Zustand)
Zustand is used for managing client-side state.

```javascript
import { create } from 'zustand';

interface CounterState {
  count: number;
  increment: () => void;
}

export const useCounterStore = create<CounterState>((set) => ({
  count: 0,
  increment: () => set((state) => ({ count: state.count + 1 })),
}));
```

## 🔄 API Fetching (React Query)
```javascript
import { useQuery } from '@tanstack/react-query';

const fetchUsers = async () => {
  const res = await fetch('https://jsonplaceholder.typicode.com/users');
  return res.json();
};

export const useUsers = () => {
  return useQuery(['users'], fetchUsers);
};
```

## 🛠️ Husky and Commitlint

This project uses **Husky** and **Commitlint** to ensure consistent commit messages and code quality:

- Husky ensures the testing of commit message
- Commitlint enforces the [Conventional Commit](https://www.conventionalcommits.org/) format.

### Example Commit Message

```
feat: add user component
```

### Bypass Husky (if necessary, not recommended):

```bash
git commit --no-verify
```
---

## 🔠 Naming Conventions

- **Files & Folders**: `kebab-case` (e.g., `user-profile.tsx`)
- **Constants**: `SNAKE_CASE` (e.g., `API_BASE_URL`)
- **Variables & Functions**: `camelCase` (e.g., `fetchUserData`)
- **Classes & Components**: `PascalCase` (e.g., `UserProfile`)

## Available Scripts
- `npm run format`  
  Formats the source code in `./src` using Biome.

- `npm run lint`  
  Lints the code in `./src` and auto-formats with Biome.

- `npm run check`  
  Checks for formatting issues in `./src` using Biome.

- `npm run preview`  
  Previews the production build locally using Vite.


## 🏗️ Build for Production
```sh
npm run build
```

## Contributing
Feel free to contribute to this project. Fork the repository, create a branch, and submit a pull request.


## 📜 License
This project is licensed under the MIT License.

## Contact

For questions or support, feel free to reach out or open an issue in the repository.

---

Thank you for using the react-mui-react-query-zustand-ts boilerplate! 🔥