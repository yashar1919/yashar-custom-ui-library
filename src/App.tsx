import { useState } from "react";
import { Button } from "./components";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div style={{ padding: "2rem", maxWidth: "800px", margin: "0 auto" }}>
      <h1>Yashar UI Library - Preview</h1>
      <p>این preview برای تست کردن کامپوننت‌های library هست</p>

      <div style={{ marginBottom: "2rem" }}>
        <h2>Button Component Examples</h2>
        <div
          style={{
            display: "flex",
            gap: "1rem",
            flexWrap: "wrap",
            marginBottom: "1rem",
          }}
        >
          <Button variant="primary" onClick={() => setCount(count + 1)}>
            Primary Button (Count: {count})
          </Button>
          <Button variant="secondary">Secondary Button</Button>
          <Button variant="danger">Danger Button</Button>
          <Button variant="success">Success Button</Button>
        </div>

        <div
          style={{
            display: "flex",
            gap: "1rem",
            flexWrap: "wrap",
            marginBottom: "1rem",
          }}
        >
          <Button size="small">Small Button</Button>
          <Button size="medium">Medium Button</Button>
          <Button size="large">Large Button</Button>
        </div>

        <div style={{ display: "flex", gap: "1rem", flexWrap: "wrap" }}>
          <Button disabled>Disabled Button</Button>
          <Button variant="danger" disabled>
            Disabled Danger
          </Button>
        </div>
      </div>

      <p style={{ color: "#666", fontSize: "0.9rem" }}>
        برای build کردن library از دستور <code>npm run build:lib</code> استفاده
        کن
      </p>
    </div>
  );
}

export default App;
