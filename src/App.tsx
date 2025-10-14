import { useState } from "react";
import { Button } from "./components";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="p-8 max-w-4xl mx-auto min-h-screen">
      <h1 className="text-4xl font-bold text-gray-200 mb-4">
        Yashar UI Library - Preview
      </h1>
      <p className="text-gray-400 mb-8">
        This preview is for testing library components
      </p>

      <div className="mb-8">
        <h2 className="text-2xl font-semibold text-gray-200 mb-4">
          Button Component Examples
        </h2>
        <div className="flex flex-wrap gap-4 mb-4">
          <Button variant="primary" onClick={() => setCount(count + 1)}>
            Primary Button (Count: {count})
          </Button>
          <Button variant="secondary">Secondary Button</Button>
          <Button variant="danger">Danger Button</Button>
          <Button variant="danger-outline">Danger Outline</Button>
          <Button variant="success">Success Button</Button>
        </div>

        <div className="flex flex-wrap gap-4 mb-4">
          <h3 className="w-full text-lg font-semibold text-gray-200 mb-2">
            Custom Styling Examples
          </h3>
          <Button className="bg-amber-600 hover:bg-amber-700 active:bg-amber-800 text-white">
            Custom Amber
          </Button>
          <Button variant="primary" className="rounded-full px-8">
            Rounded Primary
          </Button>
          <Button className="bg-gradient-to-r from-lime-500 to-teal-500 hover:from-lime-600 hover:to-teal-600 active:from-lime-700 active:to-teal-700 text-white border-0">
            Gradient Button
          </Button>
          <Button
            variant="secondary"
            className="border-2 border-cyan-400 bg-transparent text-cyan-400 hover:bg-cyan-400 hover:text-black active:bg-cyan-500 active:text-white"
          >
            Outlined Cyan
          </Button>
          <Button
            unstyled
            className="bg-black text-white px-6 py-3 rounded-lg hover:bg-gray-800 transition-colors font-bold uppercase tracking-wide"
          >
            Fully Custom
          </Button>
        </div>

        <div className="flex flex-wrap gap-4 mb-4">
          <Button size="small">Small Button</Button>
          <Button size="medium">Medium Button</Button>
          <Button size="large">Large Button</Button>
        </div>

        <div className="flex flex-wrap gap-4 mb-4">
          <h3 className="w-full text-lg font-semibold text-gray-200 mb-2">
            Active States (Try clicking and holding)
          </h3>
          <Button variant="primary">Primary Active</Button>
          <Button variant="secondary">Secondary Active</Button>
          <Button variant="danger">Danger Active</Button>
          <Button variant="success">Success Active</Button>
          <Button className="bg-purple-600 hover:bg-purple-700 active:bg-purple-800 text-white">
            Custom Purple Active
          </Button>
        </div>

        <div className="flex flex-wrap gap-4">
          <Button disabled>Disabled Button</Button>
          <Button variant="danger" disabled>
            Disabled Danger
          </Button>
        </div>
      </div>
    </div>
  );
}

export default App;
