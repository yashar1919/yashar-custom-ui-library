import { Button } from "../components";

const ButtonDemo = () => {
  return (
    <div className="mb-8">
      <h2 className="text-2xl font-semibold text-gray-200 mb-4">
        Button Component Examples
      </h2>

      {/* Basic Variants */}
      <div className="flex flex-wrap gap-4 mb-4">
        <Button variant="fill">Fill Button</Button>
        <Button variant="outline">Outline Button</Button>
      </div>

      {/* Custom Styling Examples */}
      <div className="flex flex-wrap gap-4 mb-4">
        <h3 className="w-full text-lg font-semibold text-gray-200 mb-2">
          Custom Styling Examples
        </h3>
        <Button className="bg-amber-600 hover:bg-amber-700 active:bg-amber-800 text-white">
          Custom Amber
        </Button>
        <Button variant="fill" className="rounded-full px-8">
          Rounded Fill
        </Button>
        <Button className="bg-gradient-to-r from-lime-500 to-teal-500 hover:from-lime-600 hover:to-teal-600 active:from-lime-700 active:to-teal-700 text-white border-0">
          Gradient Button
        </Button>
        <Button
          variant="outline"
          className="border-2 border-cyan-400 text-cyan-400 hover:bg-cyan-400 hover:text-black active:bg-cyan-500 active:text-white"
        >
          Custom Cyan Outline
        </Button>
        <Button
          unstyled
          className="bg-black text-white px-6 py-3 rounded-lg hover:bg-gray-800 transition-colors font-bold uppercase tracking-wide"
        >
          Fully Custom
        </Button>
      </div>

      {/* Different Sizes */}
      <div className="flex flex-wrap gap-4 mb-4">
        <h3 className="w-full text-lg font-semibold text-gray-200 mb-2">
          Different Sizes (Custom with className)
        </h3>
        <Button variant="fill" className="px-2 py-1 text-sm">
          Small Fill
        </Button>
        <Button variant="outline" className="px-2 py-1 text-sm">
          Small Outline
        </Button>
        <Button variant="fill" className="px-6 py-3 text-lg">
          Large Fill
        </Button>
        <Button variant="outline" className="px-6 py-3 text-lg">
          Large Outline
        </Button>
      </div>

      {/* Custom Colors */}
      <div className="flex flex-wrap gap-4 mb-4">
        <h3 className="w-full text-lg font-semibold text-gray-200 mb-2">
          Custom Colors
        </h3>
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
      </div>

      {/* Disabled States */}
      <div className="flex flex-wrap gap-4">
        <Button disabled>Disabled Fill</Button>
        <Button variant="outline" disabled>
          Disabled Outline
        </Button>
      </div>
    </div>
  );
};

export default ButtonDemo;
