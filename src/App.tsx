import { useState } from "react";
import { Navigation, type NavigationItem } from "./components/Navigation";
import { Overview } from "./components/Overview";
import { ButtonDemo, InputDemo, TextareaDemo, ModalDemo } from "./demos";

function App() {
  const [activeComponent, setActiveComponent] = useState<string>("overview");

  // Navigation items for components
  const navigationItems: NavigationItem[] = [
    {
      id: "button",
      label: "Button",
      icon: (
        <svg
          className="w-4 h-4"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
          />
        </svg>
      ),
      description: "Interactive button component with multiple variants",
    },
    {
      id: "input",
      label: "Input",
      icon: (
        <svg
          className="w-4 h-4"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z"
          />
        </svg>
      ),
      description: "Advanced input fields with floating labels",
    },
    {
      id: "textarea",
      label: "Textarea",
      icon: (
        <svg
          className="w-4 h-4"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
          />
        </svg>
      ),
      description: "Multi-line text areas with floating label support",
    },
    {
      id: "modal",
      label: "Modal",
      icon: (
        <svg
          className="w-4 h-4"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M8 9l3 3-3 3m5 0h3M5 20h14a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
          />
        </svg>
      ),
      description: "Interactive modal dialogs with animations",
    },
  ];

  // Render the active component
  const renderActiveComponent = () => {
    switch (activeComponent) {
      case "overview":
        return <Overview />;
      case "button":
        return <ButtonDemo />;
      case "input":
        return <InputDemo />;
      case "textarea":
        return <TextareaDemo />;
      case "modal":
        return <ModalDemo />;
      default:
        return <Overview />;
    }
  };

  return (
    <div className="flex h-screen bg-gray-950">
      {/* Sidebar Navigation */}
      <div className="w-64 flex-shrink-0">
        <Navigation
          items={navigationItems}
          activeItem={activeComponent}
          onItemClick={setActiveComponent}
        />
      </div>

      {/* Main Content */}
      <div className="flex-1 overflow-auto">
        <div className="p-8">{renderActiveComponent()}</div>
      </div>
    </div>
  );
}

export default App;
