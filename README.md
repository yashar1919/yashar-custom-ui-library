# Yashar UI Library# React + TypeScript + Vite

A modern React UI component library built with TypeScript, Tailwind CSS, and Vite.This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

## FeaturesCurrently, two official plugins are available:

- **Full Customization**: Override any default styling with className prop- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) (or [oxc](https://oxc.rs) when used in [rolldown-vite](https://vite.dev/guide/rolldown)) for Fast Refresh

- **Intelligent Class Merging**: Uses tailwind-merge for smart class resolution - [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

- **No Default Interactions**: You control hover, active, and focus states

- **TypeScript Support**: Complete type safety out of the box## React Compiler

- **Tree Shakeable**: Import only what you need

- **Tailwind CSS Ready**: Seamless integration with Tailwind projectsThe React Compiler is not enabled on this template because of its impact on dev & build performances. To add it, see [this documentation](https://react.dev/learn/react-compiler/installation).

## Installation## Expanding the ESLint configuration

```````bashIf you are developing a production application, we recommend updating the configuration to enable type-aware lint rules:

npm install yashar-ui

``````js

export default defineConfig([

## Quick Start  globalIgnores(['dist']),

  {

```tsx    files: ['**/*.{ts,tsx}'],

import { Button } from "yashar-ui";    extends: [

import "yashar-ui/dist/yashar-ui.css";      // Other configs...



function App() {      // Remove tseslint.configs.recommended and replace with this

  return (      tseslint.configs.recommendedTypeChecked,

    <Button       // Alternatively, use this for stricter rules

      variant="primary"       tseslint.configs.strictTypeChecked,

      className="hover:bg-blue-700 active:bg-blue-800"      // Optionally, add this for stylistic rules

    >      tseslint.configs.stylisticTypeChecked,

      Click me

    </Button>      // Other configs...

  );    ],

}    languageOptions: {

```      parserOptions: {

        project: ['./tsconfig.node.json', './tsconfig.app.json'],

## Components        tsconfigRootDir: import.meta.dirname,

      },

### Button      // other options...

    },

```tsx  },

// Basic variants (no default hover/active states)])

<Button variant="primary">Primary</Button>```

<Button variant="secondary">Secondary</Button>

<Button variant="danger">Danger</Button>You can also install [eslint-plugin-react-x](https://github.com/Rel1cx/eslint-react/tree/main/packages/plugins/eslint-plugin-react-x) and [eslint-plugin-react-dom](https://github.com/Rel1cx/eslint-react/tree/main/packages/plugins/eslint-plugin-react-dom) for React-specific lint rules:

<Button variant="success">Success</Button>

```js

// Add your own interactions// eslint.config.js

<Button import reactX from 'eslint-plugin-react-x'

  variant="primary" import reactDom from 'eslint-plugin-react-dom'

  className="hover:bg-blue-700 active:bg-blue-800"

>export default defineConfig([

  Interactive Button  globalIgnores(['dist']),

</Button>  {

    files: ['**/*.{ts,tsx}'],

// Complete custom styling    extends: [

<Button className="bg-purple-600 hover:bg-purple-700 active:bg-purple-800 text-white rounded-full px-8">      // Other configs...

  Custom Purple      // Enable lint rules for React

</Button>      reactX.configs['recommended-typescript'],

      // Enable lint rules for React DOM

// Unstyled for complete control      reactDom.configs.recommended,

<Button     ],

  unstyled     languageOptions: {

  className="bg-black text-white px-4 py-2 rounded hover:bg-gray-800"      parserOptions: {

>        project: ['./tsconfig.node.json', './tsconfig.app.json'],

  Fully Custom        tsconfigRootDir: import.meta.dirname,

</Button>      },

```      // other options...

    },

## Key Philosophy  },

])

This library provides **clean defaults** with **full customization control**:```


- Default variants have no hover/active states - you add what you need
- No default focus rings - clean appearance by default
- className prop intelligently overrides any default styling
- tailwind-merge ensures proper class precedence

## Utility Export

```tsx
import { cn } from "yashar-ui";

// Use the same intelligent class merging in your components
const MyComponent = ({ className }) => (
  <div className={cn("default-classes", className)} />
);
```````

## Documentation

See [BUTTON_ADVANCED_USAGE.md](./BUTTON_ADVANCED_USAGE.md) for comprehensive examples and patterns.

## Development

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build library
npm run build:lib

# Build for production
npm run build
```

## License

MIT
