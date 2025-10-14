import { ButtonDemo, InputDemo, TextareaDemo } from "./demos";

function App() {
  return (
    <div className="p-8 max-w-4xl mx-auto min-h-screen">
      <h1 className="text-4xl font-bold text-gray-200 mb-4">
        Yashar UI Library - Preview
      </h1>
      <p className="text-gray-400 mb-8">
        This preview is for testing library components
      </p>

      <ButtonDemo />
      <InputDemo />
      <TextareaDemo />
    </div>
  );
}

export default App;
