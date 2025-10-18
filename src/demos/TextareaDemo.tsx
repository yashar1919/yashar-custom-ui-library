import { useState } from "react";
import { Textarea, Button } from "../components";

const TextareaDemo = () => {
  // State for controlled textarea to test clear functionality
  const [textareaValue, setTextareaValue] = useState(
    "This is sample textarea content that can be cleared."
  );

  // State for filled state demo
  const [filledStateValue, setFilledStateValue] = useState("");
  const [floatingTestValue, setFloatingTestValue] = useState(
    "Test content with value in floating textarea"
  );

  // State for validation test (default empty to show error)
  const [errorTextareaValue, setErrorTextareaValue] = useState("");
  const [textareaError, setTextareaError] = useState("");

  // State for floating form validation
  const [floatingMessage, setFloatingMessage] = useState("");
  const [floatingFeedback, setFloatingFeedback] = useState("");
  const [floatingMessageError, setFloatingMessageError] = useState("");
  const [floatingFeedbackError, setFloatingFeedbackError] = useState("");

  // Validation functions
  const validateTextarea = (text: string) => {
    if (!text.trim()) {
      return "Feedback is required";
    }
    return "";
  };

  const validateFloatingMessage = (message: string) => {
    if (!message.trim()) {
      return "Message is required";
    }
    if (message.length < 10) {
      return "Message must be at least 10 characters";
    }
    return "";
  };

  const validateFloatingFeedback = (feedback: string) => {
    if (!feedback.trim()) {
      return "Feedback is required";
    }
    return "";
  };

  // Submit handler for validation test
  const handleValidationTest = () => {
    const validationError = validateTextarea(errorTextareaValue);
    setTextareaError(validationError);
  };

  // Submit handler for floating form
  const handleFloatingFormSubmit = () => {
    const messageValidationError = validateFloatingMessage(floatingMessage);
    const feedbackValidationError = validateFloatingFeedback(floatingFeedback);

    setFloatingMessageError(messageValidationError);
    setFloatingFeedbackError(feedbackValidationError);

    if (!messageValidationError && !feedbackValidationError) {
      alert("Floating form submitted successfully!");
    }
  };

  return (
    <div className="mb-8">
      <h2 className="text-2xl font-semibold text-gray-200 mb-4">
        Textarea Component Examples
      </h2>

      {/* Basic Textarea Types */}
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

        <Textarea
          variant="outline"
          label="Comments"
          placeholder="Leave your comments..."
          rows={3}
          disabled
        />

        <Textarea
          variant="fill"
          label="Read-only Content"
          value="This is read-only content that cannot be edited."
          rows={3}
          readOnly
        />
      </div>

      {/* Error States */}
      <div className="mb-6">
        <h3 className="text-lg font-semibold text-gray-200 mb-3">
          Validation Test - Click Submit to Test Errors
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-4">
          <div>
            <Textarea
              variant="outline"
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

      {/* Custom Styled Textareas */}
      <div className="mb-6">
        <h3 className="text-lg font-semibold text-gray-200 mb-3">
          Custom Hover, Focus & State Examples
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Purple theme with custom hover/focus */}
          <Textarea
            variant="outline"
            label="Purple Theme"
            placeholder="Hover and focus me..."
            rows={3}
            className="border-purple-400 hover:border-purple-500 focus:border-purple-600 focus:ring-purple-500/30"
          />

          {/* Green theme with custom states */}
          <Textarea
            variant="fill"
            label="Green Theme"
            placeholder="Custom green styling..."
            rows={3}
            className="bg-green-50 border-green-200 hover:bg-green-100 focus:bg-white focus:border-green-500 focus:ring-green-400/20"
          />

          {/* Orange/amber theme */}
          <Textarea
            variant="outline"
            label="Amber Theme"
            placeholder="Custom border colors..."
            rows={3}
            className="border-amber-300 hover:border-amber-400 focus:border-amber-500 focus:ring-amber-400/25"
          />

          {/* Rose theme with thick border + filled state */}
          <Textarea
            variant="outline"
            label="Rose Theme (Thick Border + Filled State)"
            placeholder="Type something to see filled state..."
            rows={3}
            value={filledStateValue}
            onChange={(e) => setFilledStateValue(e.target.value)}
            className="rounded-xl border-2 border-gray-400 hover:border-rose-500 focus:border-rose-700 focus:ring-rose-400/30 [&.textarea-filled]:border-emerald-600 [&.textarea-filled:hover]:border-emerald-700 ring-offset-2"
          />

          {/* Dark theme example */}
          <Textarea
            variant="fill"
            label="Dark Theme"
            placeholder="Dark mode styling..."
            rows={3}
            className="bg-gray-800 border-gray-600 text-gray-100 placeholder-gray-400 hover:bg-gray-700 focus:bg-gray-800 focus:border-blue-400 focus:ring-blue-400/20"
          />

          {/* Completely custom with gradient borders */}
          <Textarea
            unstyled
            placeholder="Gradient focus ring..."
            rows={3}
            className="w-full px-4 py-3 border-2 border-purple-400 rounded-xl bg-white/5 text-gray-200 placeholder-gray-400 hover:border-purple-300 focus:outline-none focus:ring-4 focus:ring-purple-400/50 focus:border-purple-500 transition-all duration-300 resize-vertical"
          />
        </div>

        {/* Floating Label Examples */}
        <h3 className="text-lg font-semibold text-gray-200 mb-3 mt-8">
          Floating Label Textareas
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Basic floating */}
          <Textarea
            variant="floating"
            label="Basic Floating"
            rows={4}
            helperText="This is a floating label textarea"
          />

          {/* Dark background */}
          <Textarea
            variant="floating"
            label="Dark Background (Test with Value)"
            floatingLabelClassName="bg-[#242424]"
            floatingLabelFocusColor="text-sky-600"
            floatingLabelActiveColor="text-white"
            className="text-white"
            rows={4}
            value={floatingTestValue}
            onChange={(e) => setFloatingTestValue(e.target.value)}
          />

          {/* Transparent background */}
          <Textarea
            variant="floating"
            label="Transparent Background"
            floatingLabelClassName="bg-transparent"
            rows={3}
          />

          {/* Custom color background */}
          <Textarea
            variant="floating"
            label="Blue Background"
            floatingLabelClassName="bg-blue-50"
            rows={3}
          />
        </div>

        {/* Floating Form Validation Example */}
        <h4 className="text-lg font-semibold mb-3 text-gray-300 mt-10">
          Floating Label Form with Validation
        </h4>
        <div className="space-y-6 bg-gray-800 p-6 rounded-lg border border-gray-700">
          <Textarea
            variant="floating"
            label="Message"
            value={floatingMessage}
            onChange={(e) => {
              setFloatingMessage(e.target.value);
              // Clear error when user starts typing
              if (floatingMessageError) {
                setFloatingMessageError("");
              }
            }}
            error={floatingMessageError}
            floatingLabelFocusColor="text-teal-300"
            floatingLabelActiveColor="text-teal-500"
            floatingLabelErrorColor="text-red-600"
            floatingLabelClassName="bg-gray-800"
            helperText="Please enter your message (min 10 characters)"
            className="rounded-xl text-gray-300 border-2 border-gray-500 hover:border-teal-500 focus:border-teal-300 focus:ring-teal-300 [&.textarea-filled]:border-teal-600 [&.textarea-filled:hover]:border-teal-500 ring-offset-2 text-sm"
            rows={4}
          />

          <Textarea
            variant="floating"
            label="Additional Feedback"
            value={floatingFeedback}
            onChange={(e) => {
              setFloatingFeedback(e.target.value);
              // Clear error when user starts typing
              if (floatingFeedbackError) {
                setFloatingFeedbackError("");
              }
            }}
            error={floatingFeedbackError}
            floatingLabelFocusColor="text-teal-300"
            floatingLabelActiveColor="text-teal-500"
            floatingLabelErrorColor="text-red-600"
            floatingLabelClassName="bg-gray-800"
            helperText="Please enter your feedback"
            className="rounded-xl text-gray-300 border-2 border-gray-500 hover:border-teal-500 focus:border-teal-300 focus:ring-teal-300 [&.textarea-filled]:border-teal-600 [&.textarea-filled:hover]:border-teal-500 ring-offset-2 text-sm"
            rows={3}
          />

          <div className="flex justify-center">
            <Button
              variant="fill"
              onClick={handleFloatingFormSubmit}
              className="w-full bg-teal-500 hover:bg-teal-600 active:bg-teal-800 rounded-xl mt-7"
            >
              Submit Form
            </Button>
          </div>
        </div>

        {/* Different Resize Options */}
        <h4 className="text-lg font-semibold mb-3 text-gray-300 mt-10">
          Resize Options
        </h4>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <Textarea
            variant="outline"
            label="No Resize"
            placeholder="Cannot be resized..."
            rows={3}
            resize="none"
          />

          <Textarea
            variant="outline"
            label="Horizontal Resize"
            placeholder="Can be resized horizontally..."
            rows={3}
            resize="horizontal"
          />

          <Textarea
            variant="outline"
            label="Vertical Resize (Default)"
            placeholder="Can be resized vertically..."
            rows={3}
            resize="vertical"
          />

          <Textarea
            variant="outline"
            label="Both Directions"
            placeholder="Can be resized in both directions..."
            rows={3}
            resize="both"
          />
        </div>
      </div>
    </div>
  );
};

export default TextareaDemo;
