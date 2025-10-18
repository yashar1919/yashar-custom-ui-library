import React, { useEffect, useRef, useState } from "react";
import { createPortal } from "react-dom";
import type { BaseComponentProps } from "../../types";
import { cn } from "../../utils";

export type ModalSize = "sm" | "md" | "lg" | "xl" | "2xl" | "full";
export type ModalAnimation =
  | "fade"
  | "scale"
  | "slide-up"
  | "slide-down"
  | "slide-left"
  | "slide-right"
  | "bounce"
  | "flip";

export interface ModalProps extends BaseComponentProps {
  /** Whether the modal is open */
  open: boolean;
  /** Function to call when modal should close */
  onClose: () => void;
  /** Modal title */
  title?: string;
  /** Modal size variant */
  size?: ModalSize;
  /** Animation type for modal entrance/exit */
  animation?: ModalAnimation;
  /** Whether to show the entire header section */
  showHeader?: boolean;
  /** Whether to show close button in header */
  showCloseButton?: boolean;
  /** Whether clicking overlay closes modal */
  closeOnOverlayClick?: boolean;
  /** Whether pressing Escape closes modal */
  closeOnEscape?: boolean;
  /** Custom overlay className for backdrop styling */
  overlayClassName?: string;
  /** Custom content className for modal content styling */
  contentClassName?: string;
  /** Custom header className */
  headerClassName?: string;
  /** Custom footer content */
  footer?: React.ReactNode;
  /** Custom footer className */
  footerClassName?: string;
  /** Disable body scroll when modal is open */
  preventBodyScroll?: boolean;
  /** Title font size (CSS font-size value) */
  titleFontSize?: string;
  /** Title color (CSS color value) */
  titleColor?: string;
  /** Content font size (CSS font-size value) */
  contentFontSize?: string;
  /** Content text color (CSS color value) */
  contentColor?: string;
  /** Children content */
  children: React.ReactNode;
}

const Modal: React.FC<ModalProps> = ({
  open,
  onClose,
  title,
  size = "md",
  animation = "scale",
  showHeader = true,
  showCloseButton = true,
  closeOnOverlayClick = true,
  closeOnEscape = true,
  overlayClassName,
  contentClassName,
  headerClassName,
  footer,
  footerClassName,
  preventBodyScroll = true,
  titleFontSize,
  titleColor,
  contentFontSize,
  contentColor,
  className,
  children,
  ...props
}) => {
  const modalRef = useRef<HTMLDivElement>(null);
  const previousActiveElement = useRef<HTMLElement | null>(null);
  const [isVisible, setIsVisible] = useState(false);
  const [shouldRender, setShouldRender] = useState(false);

  // Handle animation states
  useEffect(() => {
    if (open) {
      setShouldRender(true);
      // Small delay to ensure DOM is ready before animation
      setTimeout(() => setIsVisible(true), 20);
    } else {
      setIsVisible(false);
      // Wait for animation to finish before unmounting
      setTimeout(() => setShouldRender(false), 400);
    }
  }, [open]);

  // Handle escape key
  useEffect(() => {
    if (!open || !closeOnEscape) return;

    const handleEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        onClose();
      }
    };

    document.addEventListener("keydown", handleEscape);
    return () => document.removeEventListener("keydown", handleEscape);
  }, [open, closeOnEscape, onClose]);

  // Handle body scroll
  useEffect(() => {
    if (!preventBodyScroll) return;

    if (open) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }

    return () => {
      document.body.style.overflow = "";
    };
  }, [open, preventBodyScroll]);

  // Handle focus management
  useEffect(() => {
    if (open) {
      // Store the currently focused element
      previousActiveElement.current = document.activeElement as HTMLElement;

      // Focus the modal
      setTimeout(() => {
        modalRef.current?.focus();
      }, 100);
    } else {
      // Restore focus to the previously focused element
      if (previousActiveElement.current) {
        previousActiveElement.current.focus();
      }
    }
  }, [open]);

  // Handle overlay click
  const handleOverlayClick = (event: React.MouseEvent<HTMLDivElement>) => {
    if (closeOnOverlayClick && event.target === event.currentTarget) {
      onClose();
    }
  };

  if (!shouldRender) return null;

  // Size classes
  const sizeClasses = {
    sm: "max-w-sm",
    md: "max-w-md",
    lg: "max-w-lg",
    xl: "max-w-xl",
    "2xl": "max-w-2xl",
    full: "max-w-[95vw] max-h-[95vh]",
  };

  // Get animation styles based on type and visibility
  const getAnimationStyles = (): React.CSSProperties => {
    const duration = 350; // ms
    const easingEnter = "cubic-bezier(0.34, 1.56, 0.64, 1)"; // Back easing for enter
    const easingExit = "cubic-bezier(0.25, 0.46, 0.45, 0.94)"; // Smooth exit

    const baseTransition = `all ${duration}ms ${
      isVisible ? easingEnter : easingExit
    }`;

    switch (animation) {
      case "fade":
        return {
          transition: baseTransition,
          opacity: isVisible ? 1 : 0,
          filter: isVisible ? "blur(0px)" : "blur(4px)",
        };

      case "scale":
        return {
          transition: baseTransition,
          opacity: isVisible ? 1 : 0,
          transform: isVisible
            ? "scale(1) rotate(0deg)"
            : "scale(0.8) rotate(-3deg)",
          filter: isVisible ? "blur(0px)" : "blur(2px)",
        };

      case "slide-up":
        return {
          transition: baseTransition,
          opacity: isVisible ? 1 : 0,
          transform: isVisible
            ? "translateY(0px) scale(1)"
            : "translateY(40px) scale(0.95)",
          filter: isVisible ? "blur(0px)" : "blur(1px)",
        };

      case "slide-down":
        return {
          transition: baseTransition,
          opacity: isVisible ? 1 : 0,
          transform: isVisible
            ? "translateY(0px) scale(1) rotate(0deg)"
            : "translateY(-40px) scale(0.9) rotate(2deg)",
          filter: isVisible ? "blur(0px)" : "blur(2px)",
        };

      case "slide-left":
        return {
          transition: baseTransition,
          opacity: isVisible ? 1 : 0,
          transform: isVisible
            ? "translateX(0px) scale(1) rotateY(0deg)"
            : "translateX(60px) scale(0.85) rotateY(-10deg)",
          transformOrigin: "left center",
          filter: isVisible ? "blur(0px)" : "blur(2px)",
        };

      case "slide-right":
        return {
          transition: baseTransition,
          opacity: isVisible ? 1 : 0,
          transform: isVisible
            ? "translateX(0px) scale(1) rotateY(0deg)"
            : "translateX(-60px) scale(0.85) rotateY(10deg)",
          transformOrigin: "right center",
          filter: isVisible ? "blur(0px)" : "blur(2px)",
        };

      case "bounce":
        return {
          transition: isVisible
            ? `all 600ms cubic-bezier(0.68, -0.55, 0.265, 1.55)`
            : `all 300ms cubic-bezier(0.25, 0.46, 0.45, 0.94)`,
          opacity: isVisible ? 1 : 0,
          transform: isVisible
            ? "scale(1) translateY(0px) rotate(0deg)"
            : "scale(0.3) translateY(-50px) rotate(-10deg)",
          filter: isVisible ? "blur(0px)" : "blur(4px)",
        };

      case "flip":
        return {
          transition: baseTransition,
          opacity: isVisible ? 1 : 0,
          transform: isVisible
            ? "perspective(1000px) rotateX(0deg) rotateY(0deg) scale(1)"
            : "perspective(1000px) rotateX(-90deg) rotateY(20deg) scale(0.8)",
          transformOrigin: "center top",
          filter: isVisible ? "blur(0px)" : "blur(3px)",
        };

      default:
        return {
          transition: baseTransition,
          opacity: isVisible ? 1 : 0,
          transform: isVisible
            ? "scale(1) rotate(0deg)"
            : "scale(0.7) rotate(-5deg)",
          filter: isVisible ? "blur(0px)" : "blur(3px)",
        };
    }
  };

  const overlayStyles: React.CSSProperties = {
    transition: "all 400ms cubic-bezier(0.25, 0.46, 0.45, 0.94)",
    opacity: isVisible ? 1 : 0,
    backdropFilter: isVisible
      ? "blur(8px) saturate(1.2)"
      : "blur(0px) saturate(1)",
  }; // Close button icon
  const CloseIcon = () => (
    <svg
      className="w-5 h-5"
      fill="none"
      stroke="currentColor"
      viewBox="0 0 24 24"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M6 18L18 6M6 6l12 12"
      />
    </svg>
  );

  const modalContent = (
    <div
      className={cn(
        "fixed inset-0 z-50 flex items-center justify-center p-4",
        overlayClassName || "bg-black/50 backdrop-blur-sm"
      )}
      style={overlayStyles}
      onClick={handleOverlayClick}
      aria-modal="true"
      role="dialog"
      aria-labelledby={title ? "modal-title" : undefined}
    >
      <div
        ref={modalRef}
        className={cn(
          "relative w-full rounded-lg bg-white shadow-xl",
          "focus:outline-none",
          sizeClasses[size],
          contentClassName,
          className
        )}
        style={getAnimationStyles()}
        tabIndex={-1}
        {...props}
      >
        {/* Header */}
        {showHeader && (title || showCloseButton) && (
          <div
            className={cn(
              "flex items-center justify-between px-6 py-4 border-b border-gray-200",
              headerClassName
            )}
          >
            {title && (
              <h2
                id="modal-title"
                className="text-lg font-semibold text-gray-900"
                style={{
                  fontSize: titleFontSize,
                  color: titleColor,
                }}
              >
                {title}
              </h2>
            )}

            {showCloseButton && (
              <button
                onClick={onClose}
                className="p-1 rounded-md text-gray-400 hover:text-gray-600 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-colors"
                aria-label="Close modal"
              >
                <CloseIcon />
              </button>
            )}
          </div>
        )}{" "}
        {/* Content */}
        <div
          className="px-6 py-4"
          style={{
            fontSize: contentFontSize,
            color: contentColor,
          }}
        >
          {children}
        </div>
        {/* Footer */}
        {footer && (
          <div
            className={cn(
              "px-6 py-4 border-t border-gray-200 bg-gray-50 rounded-b-lg",
              footerClassName
            )}
          >
            {footer}
          </div>
        )}
      </div>
    </div>
  );

  // Render modal in portal
  return createPortal(modalContent, document.body);
};

Modal.displayName = "Modal";

export default Modal;
