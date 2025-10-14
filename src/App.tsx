import { Button } from "./components";

function App() {
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
          <Button variant="fill">Fill Button</Button>
          <Button variant="outline">Outline Button</Button>
        </div>

        <div className="flex flex-wrap gap-4 mb-4">
          <h3 className="w-full text-lg font-semibold text-gray-200 mb-2">
            Custom Styling Examples
          </h3>
          <div className="w-full flex justify-between items-center gap-4">
            <Button className="bg-amber-600 hover:bg-amber-700 active:bg-amber-800 text-white w-full">
              Custom Amber
            </Button>
            <Button variant="fill" className="rounded-full px-8 w-full">
              Rounded Fill
            </Button>
          </div>
          <Button className="bg-gradient-to-r from-lime-500 to-teal-500 hover:from-lime-600 hover:to-teal-600 active:from-lime-700 active:to-teal-700 text-white border-0 w-full">
            Gradient Button
          </Button>
          <Button
            variant="outline"
            className="border-2 border-cyan-400 text-cyan-400 hover:bg-cyan-400 hover:text-black active:bg-cyan-500 active:text-white"
          >
            Custom Cyan Outline
          </Button>

          <Button className="bg-purple-600 hover:bg-purple-700 active:bg-purple-800 text-white">
            Purple Fill
          </Button>
          <Button className="bg-transparent border-2 border-purple-600 text-purple-600 hover:bg-purple-600 hover:text-white active:bg-purple-700">
            Purple Outline
          </Button>
          <Button className="bg-red-600 hover:bg-red-700 active:bg-red-800 text-white">
            Red Fill
          </Button>
          <Button className="bg-transparent border-2 border-red-600 text-red-600 hover:bg-red-600 hover:text-white active:bg-red-700">
            Red Outline
          </Button>
          <Button disabled>Disabled Fill</Button>
          <Button variant="outline" disabled>
            Disabled Outline
          </Button>
          <Button
            unstyled
            className="bg-black text-white px-6 py-3 rounded-lg hover:bg-gray-800 transition-colors font-bold uppercase tracking-wide"
          >
            Fully Custom
          </Button>
        </div>
      </div>
    </div>
  );
}

export default App;
