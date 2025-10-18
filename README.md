# Yashar UI Library

A modern React UI component library built with TypeScript, Tailwind CSS, and Vite.

## Features

- **Full Customization**: Override any default styling with className prop
- **Intelligent Class Merging**: Uses tailwind-merge for smart class resolution
- **No Default Interactions**: You control hover, active, and focus states
- **TypeScript Support**: Complete type safety out of the box
- **Tree Shakeable**: Import only what you need
- **Tailwind CSS Ready**: Seamless integration with Tailwind projects

## Installation

```bash
npm install yashar-ui
```

## Quick Start

````tsx
import { Button } from "yashar-ui";
import "yashar-ui/dist/yashar-ui.css";

function App() {
  return (
    <Button
      variant="primary"
      className="hover:bg-blue-700 active:bg-blue-800"
    >

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
````

## Components

### Modal

Advanced modal component with rich customization options:

```tsx
import { Modal } from "yashar-ui";

<Modal
  open={isOpen}
  onClose={() => setIsOpen(false)}
  title="Custom Modal"
  size="lg"
  animation="scale"
  // Typography customization
  titleFontSize="2rem" // Any CSS font-size value
  titleColor="#059669" // Any CSS color value
  contentFontSize="1.1rem" // Content text size
  contentColor="#374151" // Content text color
  // Advanced options
  showHeader={true} // Show/hide entire header
  showCloseButton={true} // Show/hide close button
  closeOnOverlayClick={true} // Click outside to close
  closeOnEscape={true} // Press Escape to close
  overlayClassName="bg-black/60" // Custom overlay styling
  contentClassName="rounded-xl" // Custom content styling
  footer={<div>Custom footer</div>}
>
  Your modal content here
</Modal>;
```

**Typography Props:**

- `titleFontSize` - CSS font-size for title (e.g., "24px", "1.5rem", "large")
- `titleColor` - CSS color for title (e.g., "#ff0000", "rgb(255,0,0)", "red")
- `contentFontSize` - CSS font-size for content text
- `contentColor` - CSS color for content text

**Animation Types:** `fade | scale | slide-up | slide-down | slide-left | slide-right | bounce | flip`

**Size Variants:** `sm | md | lg | xl | 2xl | full`

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
