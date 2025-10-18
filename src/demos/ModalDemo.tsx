import { useState } from "react";
import { Modal, Button } from "../components";

const ModalDemo = () => {
  // Basic modal states
  const [basicModal, setBasicModal] = useState(false);
  const [confirmModal, setConfirmModal] = useState(false);
  const [deleteModal, setDeleteModal] = useState(false);

  // Animation modals
  const [fadeModal, setFadeModal] = useState(false);
  const [scaleModal, setScaleModal] = useState(false);
  const [slideUpModal, setSlideUpModal] = useState(false);
  const [slideDownModal, setSlideDownModal] = useState(false);
  const [slideLeftModal, setSlideLeftModal] = useState(false);
  const [slideRightModal, setSlideRightModal] = useState(false);
  const [bounceModal, setBounceModal] = useState(false);
  const [flipModal, setFlipModal] = useState(false);

  // Size modals
  const [smallModal, setSmallModal] = useState(false);
  const [mediumModal, setMediumModal] = useState(false);
  const [largeModal, setLargeModal] = useState(false);
  const [extraLargeModal, setExtraLargeModal] = useState(false);
  const [fullModal, setFullModal] = useState(false);

  // Custom styled modals
  const [darkModal, setDarkModal] = useState(false);
  const [blurredModal, setBlurredModal] = useState(false);
  const [noCloseModal, setNoCloseModal] = useState(false);
  const [headerlessModal, setHeaderlessModal] = useState(false);

  // Typography modals
  const [largeTitleModal, setLargeTitleModal] = useState(false);
  const [coloredTextModal, setColoredTextModal] = useState(false);
  const [customTypographyModal, setCustomTypographyModal] = useState(false);

  return (
    <div className="max-w-6xl mx-auto">
      <h2 className="text-3xl font-semibold text-white mb-6">
        Modal Component Examples
      </h2>
      <p className="text-gray-400 mb-8">
        Interactive modal dialogs with various animations, sizes, and
        customization options.
      </p>

      {/* Basic Examples */}
      <div className="mb-10">
        <h3 className="text-xl font-semibold text-gray-200 mb-4">
          Basic Modals
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <Button
            variant="outline"
            onClick={() => setBasicModal(true)}
            className="w-full"
          >
            Basic Modal
          </Button>

          <Button
            variant="fill"
            onClick={() => setConfirmModal(true)}
            className="w-full bg-blue-600 hover:bg-blue-700"
          >
            Confirmation Modal
          </Button>

          <Button
            variant="fill"
            onClick={() => setDeleteModal(true)}
            className="w-full bg-red-600 hover:bg-red-700"
          >
            Delete Modal
          </Button>
        </div>
      </div>

      {/* Animation Examples */}
      <div className="mb-10">
        <h3 className="text-xl font-semibold text-gray-200 mb-4">
          Animation Variants
        </h3>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          <Button
            variant="outline"
            onClick={() => setFadeModal(true)}
            className="w-full"
          >
            Fade
          </Button>

          <Button
            variant="outline"
            onClick={() => setScaleModal(true)}
            className="w-full"
          >
            Scale
          </Button>

          <Button
            variant="outline"
            onClick={() => setSlideUpModal(true)}
            className="w-full"
          >
            Slide Up
          </Button>

          <Button
            variant="outline"
            onClick={() => setSlideDownModal(true)}
            className="w-full"
          >
            Slide Down
          </Button>

          <Button
            variant="outline"
            onClick={() => setSlideLeftModal(true)}
            className="w-full"
          >
            Slide Left
          </Button>

          <Button
            variant="outline"
            onClick={() => setSlideRightModal(true)}
            className="w-full"
          >
            Slide Right
          </Button>

          <Button
            variant="fill"
            onClick={() => setBounceModal(true)}
            className="w-full bg-purple-600 hover:bg-purple-700"
          >
            🎯 Bounce
          </Button>

          <Button
            variant="fill"
            onClick={() => setFlipModal(true)}
            className="w-full bg-indigo-600 hover:bg-indigo-700"
          >
            🔄 Flip
          </Button>
        </div>
      </div>

      {/* Size Examples */}
      <div className="mb-10">
        <h3 className="text-xl font-semibold text-gray-200 mb-4">
          Size Variants
        </h3>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
          <Button
            variant="outline"
            onClick={() => setSmallModal(true)}
            className="w-full"
          >
            Small
          </Button>

          <Button
            variant="outline"
            onClick={() => setMediumModal(true)}
            className="w-full"
          >
            Medium
          </Button>

          <Button
            variant="outline"
            onClick={() => setLargeModal(true)}
            className="w-full"
          >
            Large
          </Button>

          <Button
            variant="outline"
            onClick={() => setExtraLargeModal(true)}
            className="w-full"
          >
            Extra Large
          </Button>

          <Button
            variant="outline"
            onClick={() => setFullModal(true)}
            className="w-full"
          >
            Full Screen
          </Button>
        </div>
      </div>

      {/* Custom Styling Examples */}
      <div className="mb-10">
        <h3 className="text-xl font-semibold text-gray-200 mb-4">
          Custom Styling
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          <Button
            variant="outline"
            onClick={() => setDarkModal(true)}
            className="w-full"
          >
            Dark Theme
          </Button>

          <Button
            variant="outline"
            onClick={() => setBlurredModal(true)}
            className="w-full"
          >
            Heavy Blur
          </Button>

          <Button
            variant="fill"
            onClick={() => setNoCloseModal(true)}
            className="w-full bg-orange-600 hover:bg-orange-700"
          >
            No Auto Close
          </Button>

          <Button
            variant="outline"
            onClick={() => setHeaderlessModal(true)}
            className="w-full bg-purple-50 border-purple-200 text-purple-700 hover:bg-purple-100"
          >
            No Header
          </Button>
        </div>
      </div>

      {/* Typography Examples */}
      <div className="mb-10">
        <h3 className="text-xl font-semibold text-gray-200 mb-4">
          Typography Customization
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <Button
            variant="outline"
            onClick={() => setLargeTitleModal(true)}
            className="w-full"
          >
            Large Title
          </Button>

          <Button
            variant="outline"
            onClick={() => setColoredTextModal(true)}
            className="w-full"
          >
            Colored Content
          </Button>

          <Button
            variant="fill"
            onClick={() => setCustomTypographyModal(true)}
            className="w-full bg-teal-600 hover:bg-teal-700"
          >
            Custom Typography
          </Button>
        </div>
      </div>

      {/* Modal Implementations */}

      {/* Basic Modal */}
      <Modal
        open={basicModal}
        onClose={() => setBasicModal(false)}
        title="Basic Modal"
      >
        <p className="text-gray-600 mb-4">
          This is a basic modal with default styling and animations. It includes
          a header with title and close button.
        </p>
        <p className="text-gray-600">
          You can customize every aspect of this modal using Tailwind CSS
          classes.
        </p>
      </Modal>

      {/* Confirmation Modal */}
      <Modal
        open={confirmModal}
        onClose={() => setConfirmModal(false)}
        title="Confirm Action"
        size="sm"
        footer={
          <div className="flex justify-end space-x-3">
            <Button variant="outline" onClick={() => setConfirmModal(false)}>
              Cancel
            </Button>
            <Button
              variant="fill"
              onClick={() => {
                alert("Action confirmed!");
                setConfirmModal(false);
              }}
              className="bg-blue-600 hover:bg-blue-700"
            >
              Confirm
            </Button>
          </div>
        }
      >
        <p className="text-gray-600">
          Are you sure you want to proceed with this action? This operation
          cannot be undone.
        </p>
      </Modal>

      {/* Delete Modal */}
      <Modal
        open={deleteModal}
        onClose={() => setDeleteModal(false)}
        title="Delete Item"
        size="sm"
        animation="scale"
        overlayClassName="bg-red-900/20 backdrop-blur-sm"
        contentClassName="border-red-200"
        headerClassName="border-red-200 bg-red-50"
        footer={
          <div className="flex justify-end space-x-3">
            <Button variant="outline" onClick={() => setDeleteModal(false)}>
              Cancel
            </Button>
            <Button
              variant="fill"
              onClick={() => {
                alert("Item deleted!");
                setDeleteModal(false);
              }}
              className="bg-red-600 hover:bg-red-700"
            >
              Delete
            </Button>
          </div>
        }
      >
        <div className="flex items-start space-x-3">
          <div className="flex-shrink-0">
            <div className="w-10 h-10 bg-red-100 rounded-full flex items-center justify-center">
              <svg
                className="w-5 h-5 text-red-600"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.964-.833-2.732 0L3.732 16.5c-.77.833.192 2.5 1.732 2.5z"
                />
              </svg>
            </div>
          </div>
          <div>
            <h4 className="text-lg font-medium text-gray-900 mb-2">
              Are you sure?
            </h4>
            <p className="text-gray-600">
              This action cannot be undone. This will permanently delete the
              item and remove all associated data.
            </p>
          </div>
        </div>
      </Modal>

      {/* Animation Modals */}
      <Modal
        open={fadeModal}
        onClose={() => setFadeModal(false)}
        title="Fade Animation"
        animation="fade"
      >
        <p className="text-gray-600">
          This modal uses fade animation for a simple and clean entrance effect.
        </p>
      </Modal>

      <Modal
        open={scaleModal}
        onClose={() => setScaleModal(false)}
        title="Scale Animation"
        animation="scale"
      >
        <p className="text-gray-600">
          This modal uses scale animation for a bouncy and attention-grabbing
          entrance.
        </p>
      </Modal>

      <Modal
        open={slideUpModal}
        onClose={() => setSlideUpModal(false)}
        title="Slide Up Animation"
        animation="slide-up"
      >
        <p className="text-gray-600">
          This modal slides up from the bottom, perfect for mobile-first
          experiences.
        </p>
      </Modal>

      <Modal
        open={slideDownModal}
        onClose={() => setSlideDownModal(false)}
        title="Slide Down Animation"
        animation="slide-down"
      >
        <p className="text-gray-600">
          This modal slides down from the top, creating a dropdown-like effect.
        </p>
      </Modal>

      <Modal
        open={slideLeftModal}
        onClose={() => setSlideLeftModal(false)}
        title="Slide Left Animation"
        animation="slide-left"
      >
        <p className="text-gray-600">
          This modal slides in from the right side of the screen.
        </p>
      </Modal>

      <Modal
        open={slideRightModal}
        onClose={() => setSlideRightModal(false)}
        title="Slide Right Animation"
        animation="slide-right"
      >
        <p className="text-gray-600">
          This modal slides in from the left side of the screen.
        </p>
      </Modal>

      {/* New Bounce Modal */}
      <Modal
        open={bounceModal}
        onClose={() => setBounceModal(false)}
        title="🎯 Bounce Animation"
        animation="bounce"
        overlayClassName="bg-purple-900/30 backdrop-blur-md"
      >
        <div className="text-center">
          <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
            <span className="text-2xl">🎯</span>
          </div>
          <p className="text-gray-600 mb-4">
            This modal uses a bouncy spring animation for a playful and
            attention-grabbing entrance!
          </p>
          <p className="text-sm text-gray-500">
            Perfect for success messages, celebrations, or important
            notifications.
          </p>
        </div>
      </Modal>

      {/* New Flip Modal */}
      <Modal
        open={flipModal}
        onClose={() => setFlipModal(false)}
        title="🔄 3D Flip Animation"
        animation="flip"
        overlayClassName="bg-indigo-900/30 backdrop-blur-lg"
      >
        <div className="text-center">
          <div className="w-16 h-16 bg-indigo-100 rounded-xl flex items-center justify-center mx-auto mb-4">
            <span className="text-2xl">🔄</span>
          </div>
          <p className="text-gray-600 mb-4">
            This modal flips into view with a 3D perspective transformation!
          </p>
          <div className="bg-gray-100 p-4 rounded-lg mb-4">
            <h4 className="font-medium mb-2">Perfect for:</h4>
            <ul className="text-sm text-gray-600 space-y-1">
              <li>• Card flipping effects</li>
              <li>• Premium features showcase</li>
              <li>• Interactive tutorials</li>
              <li>• Product reveals</li>
            </ul>
          </div>
          <p className="text-sm text-gray-500">
            Uses CSS 3D transforms for hardware-accelerated animations.
          </p>
        </div>
      </Modal>

      {/* Size Modals */}
      <Modal
        open={smallModal}
        onClose={() => setSmallModal(false)}
        title="Small Modal"
        size="sm"
      >
        <p className="text-gray-600">
          This is a small modal, perfect for confirmations and simple dialogs.
        </p>
      </Modal>

      <Modal
        open={mediumModal}
        onClose={() => setMediumModal(false)}
        title="Medium Modal"
        size="md"
      >
        <p className="text-gray-600 mb-4">
          This is a medium modal, the default size that works well for most use
          cases.
        </p>
        <p className="text-gray-600">
          It provides enough space for content while not being overwhelming.
        </p>
      </Modal>

      <Modal
        open={largeModal}
        onClose={() => setLargeModal(false)}
        title="Large Modal"
        size="lg"
      >
        <p className="text-gray-600 mb-4">
          This is a large modal that provides more space for complex content.
        </p>
        <div className="grid grid-cols-2 gap-4 mb-4">
          <div className="bg-gray-100 p-4 rounded">
            <h4 className="font-medium mb-2">Feature 1</h4>
            <p className="text-sm text-gray-600">Description of feature 1</p>
          </div>
          <div className="bg-gray-100 p-4 rounded">
            <h4 className="font-medium mb-2">Feature 2</h4>
            <p className="text-sm text-gray-600">Description of feature 2</p>
          </div>
        </div>
        <p className="text-gray-600">
          Perfect for forms, detailed information, or complex interactions.
        </p>
      </Modal>

      <Modal
        open={extraLargeModal}
        onClose={() => setExtraLargeModal(false)}
        title="Extra Large Modal"
        size="xl"
      >
        <p className="text-gray-600 mb-6">
          This is an extra large modal for content that needs maximum space.
        </p>
        <div className="space-y-4">
          {[1, 2, 3].map((item) => (
            <div key={item} className="bg-gray-100 p-4 rounded">
              <h4 className="font-medium mb-2">Section {item}</h4>
              <p className="text-sm text-gray-600 mb-2">
                This section contains detailed information that requires more
                space to display properly.
              </p>
              <p className="text-sm text-gray-600">
                Extra large modals are perfect for dashboards, detailed forms,
                or complex data presentations.
              </p>
            </div>
          ))}
        </div>
      </Modal>

      <Modal
        open={fullModal}
        onClose={() => setFullModal(false)}
        title="Full Screen Modal"
        size="full"
      >
        <div className="h-96 overflow-auto">
          <p className="text-gray-600 mb-6">
            This modal takes up almost the entire screen, perfect for immersive
            experiences.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {[1, 2, 3, 4, 5, 6, 7, 8, 9].map((item) => (
              <div key={item} className="bg-gray-100 p-4 rounded">
                <h4 className="font-medium mb-2">Card {item}</h4>
                <p className="text-sm text-gray-600">
                  Full screen modals are great for complex interfaces,
                  galleries, or detailed workflows.
                </p>
              </div>
            ))}
          </div>
        </div>
      </Modal>

      {/* Custom Styled Modals */}
      <Modal
        open={darkModal}
        onClose={() => setDarkModal(false)}
        title="Dark Theme Modal"
        overlayClassName="bg-black/70 backdrop-blur-md"
        contentClassName="bg-gray-900 border border-gray-700"
        headerClassName="bg-gray-800 border-gray-700"
        footerClassName="bg-gray-800 border-gray-700"
        footer={
          <Button
            variant="fill"
            onClick={() => setDarkModal(false)}
            className="bg-blue-600 hover:bg-blue-700"
          >
            Close
          </Button>
        }
      >
        <div className="text-gray-300">
          <p className="mb-4">
            This modal demonstrates dark theme styling using custom className
            props.
          </p>
          <p>
            Every part of the modal can be customized: overlay, content, header,
            and footer.
          </p>
        </div>
      </Modal>

      <Modal
        open={blurredModal}
        onClose={() => setBlurredModal(false)}
        title="Heavy Blur Modal"
        overlayClassName="bg-blue-500/30 backdrop-blur-xl"
      >
        <p className="text-gray-600 mb-4">
          This modal uses heavy blur effect on the background for a modern
          glass-morphism look.
        </p>
        <p className="text-gray-600">
          The backdrop-blur can be customized from sm to xl or even removed
          entirely.
        </p>
      </Modal>

      <Modal
        open={noCloseModal}
        onClose={() => setNoCloseModal(false)}
        title="Restricted Modal"
        closeOnOverlayClick={false}
        closeOnEscape={false}
        showCloseButton={false}
        footer={
          <div className="flex justify-end space-x-3">
            <Button variant="outline" onClick={() => setNoCloseModal(false)}>
              Maybe Later
            </Button>
            <Button
              variant="fill"
              onClick={() => {
                alert("Required action completed!");
                setNoCloseModal(false);
              }}
              className="bg-orange-600 hover:bg-orange-700"
            >
              Complete Required Action
            </Button>
          </div>
        }
      >
        <div className="text-center">
          <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
            <svg
              className="w-8 h-8 text-orange-600"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.964-.833-2.732 0L3.732 16.5c-.77.833.192 2.5 1.732 2.5z"
              />
            </svg>
          </div>
          <h3 className="text-lg font-medium text-gray-900 mb-2">
            Required Action
          </h3>
          <p className="text-gray-600">
            This modal cannot be closed by clicking outside, pressing Escape, or
            using the close button. You must complete the required action to
            proceed.
          </p>
        </div>
      </Modal>

      {/* No Header Modal */}
      <Modal
        open={headerlessModal}
        onClose={() => setHeaderlessModal(false)}
        showHeader={false}
        size="lg"
        className="rounded-xl"
      >
        <div className="text-center p-6">
          <div className="w-20 h-20 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-6">
            <svg
              className="w-10 h-10 text-purple-600"
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
          <h3 className="text-xl font-semibold text-gray-900 mb-3">
            Clean Design Modal
          </h3>
          <p className="text-gray-600 mb-6">
            This modal has no header section - no title bar, no close button.
            Perfect for creating custom layouts or clean, minimal designs.
          </p>
          <div className="flex justify-center space-x-3">
            <Button
              className="w-full rounded-xl"
              variant="outline"
              onClick={() => setHeaderlessModal(false)}
            >
              Close
            </Button>
            <Button
              variant="fill"
              className="bg-purple-600 hover:bg-purple-700 w-full rounded-xl"
              onClick={() => setHeaderlessModal(false)}
            >
              Got it
            </Button>
          </div>
        </div>
      </Modal>

      {/* Large Title Modal */}
      <Modal
        open={largeTitleModal}
        onClose={() => setLargeTitleModal(false)}
        title="This is a Large Title"
        titleFontSize="2rem"
        titleColor="#1f2937"
        size="md"
      >
        <p className="text-gray-600 mb-4">
          This modal demonstrates custom title sizing. The title uses a custom
          font size of 2rem (32px) instead of the default size.
        </p>
        <p className="text-gray-600">
          You can set any CSS font-size value like "24px", "1.5rem", "large",
          etc.
        </p>
      </Modal>

      {/* Colored Text Modal */}
      <Modal
        open={coloredTextModal}
        onClose={() => setColoredTextModal(false)}
        title="Colorful Content"
        titleColor="#059669"
        contentColor="#dc2626"
        contentFontSize="1.1rem"
        size="md"
      >
        <p className="mb-4">
          This modal shows custom text colors. The title is green and the
          content text is red with a slightly larger font size.
        </p>
        <p>
          You can use any CSS color value: hex codes, RGB, HSL, or color names.
        </p>
      </Modal>

      {/* Custom Typography Modal */}
      <Modal
        open={customTypographyModal}
        onClose={() => setCustomTypographyModal(false)}
        title="Advanced Typography"
        titleFontSize="1.75rem"
        titleColor="#0d9488"
        contentFontSize="1.125rem"
        contentColor="#374151"
        size="lg"
        className="font-sans"
      >
        <div className="space-y-4">
          <p>This modal demonstrates comprehensive typography customization:</p>
          <ul className="list-disc pl-6 space-y-2">
            <li>
              <strong>Title:</strong> 1.75rem (28px) size in teal color
            </li>
            <li>
              <strong>Content:</strong> 1.125rem (18px) size in gray color
            </li>
            <li>
              <strong>Custom fonts:</strong> You can also override font families
            </li>
          </ul>
          <div className="bg-gray-50 p-4 rounded-lg mt-4">
            <p className="text-sm">
              <strong>Tip:</strong> Combine with className prop to apply
              additional styling like font families, line heights, and text
              decorations.
            </p>
          </div>
        </div>
      </Modal>
    </div>
  );
};

export default ModalDemo;
