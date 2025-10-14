# Button Component - Advanced Usage

The Button component supports full customization through className while maintaining intelligent class merging.

## Features

### 1. **Default Variants & Sizes**

```tsx
<Button variant="primary" size="large">
  Default Styling
</Button>
```

### 2. **Custom Styling with className**

The className prop will intelligently override default styles:

```tsx
// Override background color - add your own hover/active states
<Button className="bg-amber-600 hover:bg-amber-700 active:bg-amber-800 text-white">
  Custom Color
</Button>

// Override shape (keeps default colors)
<Button variant="primary" className="rounded-full px-8">
  Rounded Button
</Button>

// Complete custom styling with interaction states
<Button className="border-2 border-cyan-400 bg-transparent text-cyan-400 hover:bg-cyan-400 hover:text-black active:bg-cyan-500 active:text-white">
  Outlined Style
</Button>
```

### 3. **Gradient and Advanced Styling**

```tsx
<Button className="bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white border-0">
  Gradient Button
</Button>
```

### 4. **Fully Custom (Unstyled)**

Use the `unstyled` prop to start from scratch:

```tsx
<Button
  unstyled
  className="bg-black text-white px-6 py-3 rounded-lg hover:bg-gray-800 transition-colors font-bold uppercase tracking-wide"
>
  Fully Custom
</Button>
```

## Interactive States

**Default variants have NO hover or active states by default.** You have full control to add whatever interaction states you want:

```tsx
// Basic button - no hover/active by default
<Button variant="primary">Basic Button</Button>

// Add your own hover state
<Button variant="primary" className="hover:bg-blue-700">
  With Hover
</Button>

// Add both hover and active states
<Button variant="primary" className="hover:bg-blue-700 active:bg-blue-800">
  Full Interactive
</Button>

// Custom color with custom interactions
<Button className="bg-purple-600 hover:bg-purple-700 active:bg-purple-800 text-white">
  Custom Interactive
</Button>
```

## Focus Ring Behavior

**By default, buttons have NO focus ring.** You can add focus styles manually if needed:

```tsx
// No focus ring by default
<Button variant="primary">No Focus Ring</Button>

// Add custom focus ring
<Button variant="primary" className="focus:ring-2 focus:ring-blue-500 focus:ring-offset-2">
  With Focus Ring
</Button>

// Custom button with matching focus ring
<Button className="bg-purple-600 hover:bg-purple-700 text-white focus:ring-2 focus:ring-purple-500 focus:ring-offset-2">
  Purple Button
</Button>
```

**Why no default interactions?**

- Full control over visual design
- No unwanted hover effects on custom colored buttons
- You decide what interactions your button needs
- Clean default appearance

## How it Works

- Uses `tailwind-merge` to intelligently resolve conflicting Tailwind classes
- Your `className` always takes precedence over default styles
- Default variants provide only base styling (color, padding, borders)
- All interaction states (hover, active, focus) are manual and optional
- Base functionality (accessibility, transitions) is preserved unless using `unstyled`

## Complete Examples

### **Basic Usage**

```tsx
// Clean defaults - add interactions as needed
<Button variant="primary">Primary Button</Button>        // Just blue-600
<Button variant="secondary">Secondary Button</Button>    // Just gray-600
<Button variant="danger">Delete Item</Button>            // Just red-600
<Button variant="success">Success Button</Button>        // Just green-600
```

### **Custom Buttons with Full Interactivity**

```tsx
// Orange button with full state management
<Button className="bg-orange-500 hover:bg-orange-600 active:bg-orange-700 text-white">
  Orange Button
</Button>

// Emerald button
<Button className="bg-emerald-500 hover:bg-emerald-600 active:bg-emerald-700 text-white">
  Emerald Button
</Button>

// Gradient with interactive states
<Button className="bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-600 hover:to-blue-600 active:from-cyan-700 active:to-blue-700 text-white">
  Gradient Interactive
</Button>
```

### **Advanced Patterns**

```tsx
// With custom shadows that change on interaction
<Button className="bg-indigo-500 hover:bg-indigo-600 active:bg-indigo-700 text-white shadow-lg hover:shadow-xl active:shadow-md">
  Shadow Interactive
</Button>

// With scale animation on active
<Button className="bg-pink-500 hover:bg-pink-600 active:bg-pink-700 active:scale-95 transition-transform text-white">
  Scale on Click
</Button>

// Outline button with fill on hover
<Button className="border-2 border-teal-500 text-teal-500 bg-transparent hover:bg-teal-500 hover:text-white active:bg-teal-600">
  Outline to Fill
</Button>
```

## Props

| Prop        | Type                                                | Default     | Description                                      |
| ----------- | --------------------------------------------------- | ----------- | ------------------------------------------------ |
| `variant`   | `'primary' \| 'secondary' \| 'danger' \| 'success'` | `'primary'` | Default styling variant (no hover/active)        |
| `size`      | `'small' \| 'medium' \| 'large'`                    | `'medium'`  | Default size                                     |
| `className` | `string`                                            | -           | Custom Tailwind classes (will override defaults) |
| `unstyled`  | `boolean`                                           | `false`     | Disable all default styles                       |
| `disabled`  | `boolean`                                           | `false`     | Disable the button                               |

## Utility Export

The library also exports the `cn` utility function for your own components:

```tsx
import { cn } from "yashar-ui";

const MyComponent = ({ className, ...props }) => {
  return <div className={cn("default-classes", className)} {...props} />;
};
```
