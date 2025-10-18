import { useState } from "react";
import { Input, Button } from "../components";

const InputDemo = () => {
  // State for controlled inputs to test clear functionality
  const [fullNameValue, setFullNameValue] = useState("John Doe");
  const [emailValue, setEmailValue] = useState("john@example.com");
  const [websiteValue, setWebsiteValue] = useState("https://johndoe.com");

  // State for filled state demo
  const [filledStateValue, setFilledStateValue] = useState("");
  const [floatingTestValue, setFloatingTestValue] = useState(
    "Test content with value"
  );

  // State for validation test inputs (default values that will show errors)
  const [errorEmailValue, setErrorEmailValue] = useState("invalid-email");
  const [errorPasswordValue, setErrorPasswordValue] = useState("123");

  // State for floating form validation
  const [floatingFullName, setFloatingFullName] = useState("");
  const [floatingEmail, setFloatingEmail] = useState("");
  const [floatingFullNameError, setFloatingFullNameError] = useState("");
  const [floatingEmailError, setFloatingEmailError] = useState("");

  // Validation functions for floating form
  const validateFloatingFullName = (name: string) => {
    if (!name.trim()) {
      return "Full name is required";
    }
    return "";
  };

  const validateFloatingEmail = (email: string) => {
    if (!email.trim()) {
      return "Email is required";
    }
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return "Please enter a valid email address";
    }
    return "";
  };

  // Submit handler for floating form
  const handleFloatingFormSubmit = () => {
    const nameValidationError = validateFloatingFullName(floatingFullName);
    const emailValidationError = validateFloatingEmail(floatingEmail);

    setFloatingFullNameError(nameValidationError);
    setFloatingEmailError(emailValidationError);

    if (!nameValidationError && !emailValidationError) {
      alert("Form submitted successfully!");
    }
  };

  // Error states
  const [emailError, setEmailError] = useState("");
  const [passwordError, setPasswordError] = useState("");

  // Validation functions
  const validateEmail = (email: string) => {
    if (!email.trim()) {
      return "Email is required";
    }
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return "Please enter a valid email address";
    }
    return "";
  };

  const validatePassword = (password: string) => {
    if (!password.trim()) {
      return "Password is required";
    }
    if (password.length < 8) {
      return "Password must be at least 8 characters";
    }
    return "";
  };

  // Submit handler for validation test
  const handleValidationTest = () => {
    const emailValidationError = validateEmail(errorEmailValue);
    const passwordValidationError = validatePassword(errorPasswordValue);

    setEmailError(emailValidationError);
    setPasswordError(passwordValidationError);
  };

  return (
    <div className="mb-8">
      <h2 className="text-2xl font-semibold text-gray-200 mb-4">
        Input Component Examples
      </h2>

      {/* Basic Input Types */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
        <Input
          variant="outline"
          type="text"
          label="Full Name"
          placeholder="Enter your full name"
          helperText="This field is required"
          required
          value={fullNameValue}
          onChange={(e) => setFullNameValue(e.target.value)}
        />

        <Input
          variant="fill"
          type="email"
          label="Email Address"
          placeholder="john@example.com"
          value={emailValue}
          onChange={(e) => setEmailValue(e.target.value)}
        />

        <Input
          variant="outline"
          type="password"
          label="Password"
          placeholder="Enter password"
          helperText="Must be at least 8 characters"
        />

        <Input variant="fill" type="number" label="Age" placeholder="25" />

        <Input
          variant="outline"
          type="search"
          placeholder="Search anything..."
          label="Search"
        />

        <Input
          variant="fill"
          type="tel"
          label="Phone Number"
          placeholder="+1 (555) 123-4567"
        />

        <Input
          variant="outline"
          type="url"
          label="Website"
          placeholder="https://example.com"
          value={websiteValue}
          onChange={(e) => setWebsiteValue(e.target.value)}
        />

        <Input
          variant="fill"
          type="text"
          label="Disabled Input"
          placeholder="Can't edit this"
          disabled
        />
      </div>

      {/* Error States */}
      <div className="mb-6">
        <h3 className="text-lg font-semibold text-gray-200 mb-3">
          Validation Test - Click Submit to Test Errors
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-4">
          <Input
            variant="outline"
            type="email"
            label="Email"
            placeholder="Enter email..."
            helperText="Please enter your email address"
            error={emailError}
            value={errorEmailValue}
            onChange={(e) => {
              setErrorEmailValue(e.target.value);
              // Clear error when user starts typing
              if (emailError) {
                setEmailError("");
              }
            }}
          />

          <Input
            variant="outline"
            type="password"
            label="Password"
            placeholder="Enter password..."
            helperText="Please enter your password"
            error={passwordError}
            value={errorPasswordValue}
            onChange={(e) => {
              setErrorPasswordValue(e.target.value);
              // Clear error when user starts typing
              if (passwordError) {
                setPasswordError("");
              }
            }}
          />
        </div>

        <div className="flex justify-center">
          <Button
            variant="fill"
            onClick={handleValidationTest}
            className="w-full"
          >
            Submit & Validate
          </Button>
        </div>
      </div>

      {/* Custom Styled Inputs */}
      <div className="mb-6">
        <h3 className="text-lg font-semibold text-gray-200 mb-3">
          Custom Hover, Focus & State Examples
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Purple theme with custom hover/focus */}
          <Input
            variant="outline"
            type="text"
            label="Purple Theme"
            placeholder="Hover and focus me..."
            className="border-purple-400 hover:border-purple-500 focus:border-purple-600 focus:ring-purple-500/30"
          />

          {/* Green theme with custom states */}
          <Input
            variant="fill"
            type="text"
            label="Green Theme"
            placeholder="Custom green styling..."
            className="bg-green-50 border-green-200 hover:bg-green-100 focus:bg-white focus:border-green-500 focus:ring-green-400/20"
          />

          {/* Orange/amber theme */}
          <Input
            variant="outline"
            type="email"
            label="Amber Theme"
            placeholder="Custom border colors..."
            className="border-amber-300 hover:border-amber-400 focus:border-amber-500 focus:ring-amber-400/25"
          />

          {/* Rose theme with thick border + filled state */}
          <Input
            variant="outline"
            type="text"
            label="Rose Theme (Thick Border + Filled State)"
            placeholder="Type something to see filled state..."
            value={filledStateValue}
            onChange={(e) => setFilledStateValue(e.target.value)}
            className="rounded-xl border-2 border-gray-400 hover:border-rose-500 focus:border-rose-700 focus:ring-rose-400/30 [&.input-filled]:border-emerald-600 [&.input-filled:hover]:border-emerald-700 ring-offset-2"
          />

          {/* Dark theme example */}
          <Input
            variant="fill"
            type="text"
            label="Dark Theme"
            placeholder="Dark mode styling..."
            className="bg-gray-800 border-gray-600 text-gray-100 placeholder-gray-400 hover:bg-gray-700 focus:bg-gray-800 focus:border-blue-400 focus:ring-blue-400/20"
          />

          {/* Completely custom with gradient borders */}
          <Input
            unstyled
            type="text"
            placeholder="Gradient focus ring..."
            className="w-full px-4 py-3 border-2 border-purple-400 rounded-xl bg-white/5 text-gray-200 placeholder-gray-400 hover:border-purple-300 focus:outline-none focus:ring-4 focus:ring-purple-400/50 focus:border-purple-500 transition-all duration-300"
          />
        </div>

        {/* Custom Floating Label Backgrounds */}
        <h3 className="text-lg font-semibold text-gray-200 mb-3 mt-8">
          Custom Floating Label Backgrounds
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Dark background */}
          <Input
            variant="floating"
            type="text"
            label="Dark Background (Test with Value)"
            floatingLabelClassName="bg-[#242424]"
            floatingLabelFocusColor="text-sky-600"
            floatingLabelActiveColor="text-white"
            //floatingLabelErrorColor="text-orange-600"
            className="text-white"
            value={floatingTestValue}
            onChange={(e) => setFloatingTestValue(e.target.value)}
          />

          {/* Transparent background */}
          <Input
            variant="floating"
            type="email"
            label="Transparent"
            floatingLabelClassName="bg-transparent"
          />

          {/* Custom color background */}
          <Input
            variant="floating"
            type="text"
            label="Blue Background"
            floatingLabelClassName="bg-blue-50"
          />

          {/* Match page background */}
          <Input
            variant="floating"
            type="tel"
            placeholder="Matches Page BG"
            floatingLabelClassName="bg-gray-950"
          />
        </div>

        {/* Floating Form Validation Example */}
        <h4 className="text-lg font-semibold mb-3 text-gray-300 mt-10">
          Floating Label Form with Validation
        </h4>
        <div className="space-y-6 bg-gray-800 p-6 rounded-lg border border-gray-700">
          <Input
            variant="floating"
            type="text"
            label="Full Name"
            value={floatingFullName}
            onChange={(e) => {
              setFloatingFullName(e.target.value);
              // Clear error when user starts typing
              if (floatingFullNameError) {
                setFloatingFullNameError("");
              }
            }}
            error={floatingFullNameError}
            floatingLabelFocusColor="text-teal-300"
            floatingLabelActiveColor="text-teal-500"
            floatingLabelErrorColor="text-red-600"
            floatingLabelClassName="bg-gray-800"
            helperText="Please enter your full name"
            className="rounded-full h-12 text-gray-300 border-2 border-gray-500 hover:border-teal-500 focus:border-teal-300 focus:ring-teal-300 [&.input-filled]:border-teal-600 [&.input-filled:hover]:border-teal-500 ring-offset-2 text-sm"
          />

          <Input
            variant="floating"
            type="email"
            label="Email Address"
            value={floatingEmail}
            onChange={(e) => {
              setFloatingEmail(e.target.value);
              // Clear error when user starts typing
              if (floatingEmailError) {
                setFloatingEmailError("");
              }
            }}
            error={floatingEmailError}
            floatingLabelFocusColor="text-teal-300"
            floatingLabelActiveColor="text-teal-500"
            floatingLabelErrorColor="text-red-600"
            floatingLabelClassName="bg-gray-800"
            helperText="Please enter your email address"
            className="rounded-full h-12 text-gray-300 border-2 border-gray-500 hover:border-teal-500 focus:border-teal-300 focus:ring-teal-300 [&.input-filled]:border-teal-600 [&.input-filled:hover]:border-teal-500 ring-offset-2 text-sm"
          />

          <div className="flex justify-center">
            <Button
              variant="fill"
              onClick={handleFloatingFormSubmit}
              className="w-full bg-teal-500 hover:bg-teal-600 active:bg-teal-800 rounded-full mt-7"
            >
              Submit Form
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default InputDemo;
