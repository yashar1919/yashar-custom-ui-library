import { useState } from "react";
import { Modal, Button } from "../components";

const TypographyModalExample = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="p-6">
      <Button
        onClick={() => setIsOpen(true)}
        className="bg-teal-600 hover:bg-teal-700"
      >
        Open Typography Modal
      </Button>

      <Modal
        open={isOpen}
        onClose={() => setIsOpen(false)}
        title="Custom Typography Modal"
        // Title customization
        titleFontSize="2.5rem" // Large title
        titleColor="#0d9488" // Teal color
        // Content customization
        contentFontSize="1.2rem" // Larger content text
        contentColor="#374151" // Dark gray
        size="lg"
      >
        <div className="space-y-4">
          <p>
            This modal demonstrates the new typography customization features:
          </p>

          <div className="bg-teal-50 p-4 rounded-lg border border-teal-200">
            <h4 className="font-semibold text-teal-800 mb-2">
              Available Props:
            </h4>
            <ul className="text-teal-700 space-y-1">
              <li>
                • <code>titleFontSize</code> - CSS font-size for title
              </li>
              <li>
                • <code>titleColor</code> - CSS color for title
              </li>
              <li>
                • <code>contentFontSize</code> - CSS font-size for content
              </li>
              <li>
                • <code>contentColor</code> - CSS color for content text
              </li>
            </ul>
          </div>

          <p>
            You can use any valid CSS values like "24px", "1.5rem", "#ff0000",
            "rgb(255, 0, 0)", or color names like "blue".
          </p>
        </div>
      </Modal>
    </div>
  );
};

export default TypographyModalExample;
