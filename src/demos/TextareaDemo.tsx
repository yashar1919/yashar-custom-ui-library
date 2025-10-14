import { useState } from "react";
import { Textarea, Button } from "../components";

const TextareaDemo = () => {
  // State for controlled textarea to test clear functionality
  const [textareaValue, setTextareaValue] = useState(
    "This is sample textarea content that can be cleared."
  );

  // State for validation test (default empty to show error)
  const [errorTextareaValue, setErrorTextareaValue] = useState("");
  const [textareaError, setTextareaError] = useState("");

  // Validation function
  const validateTextarea = (text: string) => {
    if (!text.trim()) {
      return "Feedback is required";
    }
    return "";
  };

  // Submit handler for validation test
  const handleValidationTest = () => {
    const validationError = validateTextarea(errorTextareaValue);
    setTextareaError(validationError);
  };

  return (
    <div className="mb-8">
      <h2 className="text-2xl font-semibold text-gray-200 mb-4">
        Textarea Component Examples
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
        <Textarea
          variant="outline"
          label="Message"
          placeholder="Enter your message here..."
          helperText="Maximum 500 characters"
          rows={4}
          maxLength={500}
          value={textareaValue}
          onChange={(e) => setTextareaValue(e.target.value)}
        />

        <div>
          <Textarea
            variant="fill"
            label="Feedback"
            placeholder="Enter your feedback... (try leaving empty and click Submit)"
            helperText="Please enter your feedback"
            error={textareaError}
            rows={4}
            value={errorTextareaValue}
            onChange={(e) => {
              setErrorTextareaValue(e.target.value);
              // Clear error when user starts typing
              if (textareaError) {
                setTextareaError("");
              }
            }}
          />

          <div className="mt-3 flex justify-start">
            <Button
              variant="outline"
              onClick={handleValidationTest}
              className="w-full"
            >
              Submit & Validate
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TextareaDemo;
