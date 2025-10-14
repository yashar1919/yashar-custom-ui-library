import { useState } from "react";
import { Button } from "./components";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="p-8 max-w-4xl mx-auto bg-white min-h-screen">
      <h1 className="text-4xl font-bold text-gray-900 mb-4">Yashar UI Library - Preview</h1>
      <p className="text-gray-600 mb-8">این preview برای تست کردن کامپوننت‌های library هست</p>

      <div className="mb-8">
        <h2 className="text-2xl font-semibold text-gray-800 mb-4">Button Component Examples</h2>
        <div className="flex flex-wrap gap-4 mb-4">
          <Button variant="primary" onClick={() => setCount(count + 1)}>
            Primary Button (Count: {count})
          </Button>
          <Button variant="secondary">Secondary Button</Button>
          <Button variant="danger">Danger Button</Button>
          <Button variant="success">Success Button</Button>
        </div>

        <div className="flex flex-wrap gap-4 mb-4">
          <Button size="small">Small Button</Button>
          <Button size="medium">Medium Button</Button>
          <Button size="large">Large Button</Button>
        </div>

        <div className="flex flex-wrap gap-4">
          <Button disabled>Disabled Button</Button>
          <Button variant="danger" disabled>
            Disabled Danger
          </Button>
        </div>
      </div>

      <div className="bg-blue-50 p-4 rounded-lg">
        <p className="text-gray-600 text-sm">
          برای build کردن library از دستور <code className="bg-gray-200 px-2 py-1 rounded">npm run build:lib</code> استفاده کن
        </p>
        <div className="mt-4">
          <span className="inline-block bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm">
            ✅ Tailwind CSS Active
          </span>
        </div>
      </div>
    </div>
  );
}

export default App;
