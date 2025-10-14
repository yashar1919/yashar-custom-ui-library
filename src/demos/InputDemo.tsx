import { useState } from "react";
import { Input, Button } from "../components";

const InputDemo = () => {
  // State for controlled inputs to test clear functionality
  const [fullNameValue, setFullNameValue] = useState("John Doe");
  const [emailValue, setEmailValue] = useState("john@example.com");
  const [websiteValue, setWebsiteValue] = useState("https://johndoe.com");

  // State for validation test inputs (default values that will show errors)
  const [errorEmailValue, setErrorEmailValue] = useState("invalid-email");
  const [errorPasswordValue, setErrorPasswordValue] = useState("123");

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
            variant="fill"
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
          Custom Styled Inputs
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <Input
            variant="outline"
            type="text"
            label="Custom Border"
            placeholder="Custom styling"
            className="border-purple-500 focus:border-purple-600 focus:ring-purple-600/20"
          />

          <Input
            unstyled
            type="text"
            placeholder="Completely custom input"
            className="w-full px-4 py-3 bg-gradient-to-r from-blue-500 to-purple-600 text-white placeholder-blue-100 rounded-lg border-0 focus:outline-none focus:ring-2 focus:ring-white/50"
          />

          <Input
            //unstyled
            variant="outline"
            type="password"
            placeholder="Completely custom input"
            className="w-full px-3 py-2 border border-lime-400 rounded-xl bg-white/5 text-gray-200 placeholder-gray-400 focus:outline-none focus:ring focus:ring-lime-500 focus:border-lime-500 transition-all duration-200"
          />
        </div>
      </div>
    </div>
  );
};

export default InputDemo;
