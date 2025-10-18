import React from "react";

const Overview: React.FC = () => {
  return (
    <div className="max-w-4xl mx-auto">
      {/* Hero Section */}
      <div className="text-center mb-12">
        <h1 className="text-5xl font-bold text-white mb-4">
          Yashar UI Library
        </h1>
        <p className="text-xl text-gray-400 mb-6 max-w-2xl mx-auto">
          A modern, customizable React component library built with TypeScript
          and Tailwind CSS. Create beautiful, accessible user interfaces with
          ease.
        </p>
        <div className="flex items-center justify-center space-x-4 text-sm text-gray-500">
          <span className="flex items-center space-x-1">
            <span className="w-2 h-2 bg-green-500 rounded-full"></span>
            <span>v1.3.0</span>
          </span>
          <span>•</span>
          <span>Built with React 19</span>
          <span>•</span>
          <span>TypeScript Ready</span>
        </div>
      </div>

      {/* Features Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
        <div className="bg-gray-800 p-6 rounded-lg border border-gray-700">
          <div className="w-12 h-12 bg-blue-600 rounded-lg flex items-center justify-center mb-4">
            <svg
              className="w-6 h-6 text-white"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M13 10V3L4 14h7v7l9-11h-7z"
              />
            </svg>
          </div>
          <h3 className="text-lg font-semibold text-white mb-2">
            Lightning Fast
          </h3>
          <p className="text-gray-400">
            Optimized for performance with minimal bundle size and efficient
            rendering.
          </p>
        </div>

        <div className="bg-gray-800 p-6 rounded-lg border border-gray-700">
          <div className="w-12 h-12 bg-purple-600 rounded-lg flex items-center justify-center mb-4">
            <svg
              className="w-6 h-6 text-white"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zM21 5a2 2 0 00-2-2h-4a2 2 0 00-2 2v12a4 4 0 004 4h4a2 2 0 002-2V5z"
              />
            </svg>
          </div>
          <h3 className="text-lg font-semibold text-white mb-2">
            Fully Customizable
          </h3>
          <p className="text-gray-400">
            Every component is designed to be easily themed and customized with
            Tailwind CSS.
          </p>
        </div>

        <div className="bg-gray-800 p-6 rounded-lg border border-gray-700">
          <div className="w-12 h-12 bg-green-600 rounded-lg flex items-center justify-center mb-4">
            <svg
              className="w-6 h-6 text-white"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>
          </div>
          <h3 className="text-lg font-semibold text-white mb-2">
            TypeScript First
          </h3>
          <p className="text-gray-400">
            Built with TypeScript for better developer experience and type
            safety.
          </p>
        </div>

        <div className="bg-gray-800 p-6 rounded-lg border border-gray-700">
          <div className="w-12 h-12 bg-orange-600 rounded-lg flex items-center justify-center mb-4">
            <svg
              className="w-6 h-6 text-white"
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
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
              />
            </svg>
          </div>
          <h3 className="text-lg font-semibold text-white mb-2">Accessible</h3>
          <p className="text-gray-400">
            All components follow WCAG guidelines and support keyboard
            navigation.
          </p>
        </div>

        <div className="bg-gray-800 p-6 rounded-lg border border-gray-700">
          <div className="w-12 h-12 bg-teal-600 rounded-lg flex items-center justify-center mb-4">
            <svg
              className="w-6 h-6 text-white"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 100 4m0-4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 100 4m0-4v2m0-6V4"
              />
            </svg>
          </div>
          <h3 className="text-lg font-semibold text-white mb-2">
            Floating Labels
          </h3>
          <p className="text-gray-400">
            Advanced floating label system with smooth animations and custom
            styling.
          </p>
        </div>

        <div className="bg-gray-800 p-6 rounded-lg border border-gray-700">
          <div className="w-12 h-12 bg-pink-600 rounded-lg flex items-center justify-center mb-4">
            <svg
              className="w-6 h-6 text-white"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z"
              />
            </svg>
          </div>
          <h3 className="text-lg font-semibold text-white mb-2">
            Rich Components
          </h3>
          <p className="text-gray-400">
            Comprehensive set of form elements with validation, error handling,
            and more.
          </p>
        </div>
      </div>

      {/* Installation Section */}
      <div className="bg-gray-800 p-8 rounded-lg border border-gray-700 mb-12">
        <h2 className="text-2xl font-semibold text-white mb-4">Quick Start</h2>
        <p className="text-gray-400 mb-6">
          Get started with Yashar UI Library in your React project in seconds.
        </p>

        <div className="space-y-4">
          <div>
            <h3 className="text-lg font-medium text-white mb-2">
              Installation
            </h3>
            <div className="bg-gray-900 p-4 rounded-md">
              <code className="text-green-400 text-sm">
                npm install yashar-ui
              </code>
            </div>
          </div>

          <div>
            <h3 className="text-lg font-medium text-white mb-2">Usage</h3>
            <div className="bg-gray-900 p-4 rounded-md">
              <pre className="text-sm text-gray-300">
                {`import { Button, Input, Textarea } from 'yashar-ui';

function App() {
  return (
    <div>
      <Button variant="fill">Click me!</Button>
      <Input variant="floating" label="Name" />
      <Textarea variant="floating" label="Message" />
    </div>
  );
}`}
              </pre>
            </div>
          </div>
        </div>
      </div>

      {/* Component Overview */}
      <div className="text-center">
        <h2 className="text-3xl font-semibold text-white mb-4">
          Available Components
        </h2>
        <p className="text-gray-400 mb-8">
          Choose a component from the sidebar to explore its features and
          customization options.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-gray-800 p-6 rounded-lg border border-gray-700 text-center">
            <div className="text-3xl mb-3">🔘</div>
            <h3 className="text-lg font-medium text-white mb-2">Button</h3>
            <p className="text-gray-400 text-sm">
              Multiple variants with full customization support
            </p>
          </div>

          <div className="bg-gray-800 p-6 rounded-lg border border-gray-700 text-center">
            <div className="text-3xl mb-3">📝</div>
            <h3 className="text-lg font-medium text-white mb-2">Input</h3>
            <p className="text-gray-400 text-sm">
              Advanced inputs with floating labels and validation
            </p>
          </div>

          <div className="bg-gray-800 p-6 rounded-lg border border-gray-700 text-center">
            <div className="text-3xl mb-3">📄</div>
            <h3 className="text-lg font-medium text-white mb-2">Textarea</h3>
            <p className="text-gray-400 text-sm">
              Multi-line text inputs with floating label support
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Overview;
