import React from "react";
import type {
  BaseComponentProps,
  ButtonVariant,
  ButtonSize,
} from "../../types";
import { cn } from "../../utils";

export interface ButtonProps extends BaseComponentProps {
  variant?: ButtonVariant;
  size?: ButtonSize;
  disabled?: boolean;
  onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void;
  type?: "button" | "submit" | "reset";
  unstyled?: boolean; // New prop to disable all default styles
}

const Button: React.FC<ButtonProps> = ({
  children,
  variant = "primary",
  size = "medium",
  disabled = false,
  onClick,
  type = "button",
  className,
  unstyled = false,
  ...props
}) => {
  // If unstyled, only apply className and basic functionality
  if (unstyled) {
    return (
      <button
        type={type}
        className={cn(className)}
        disabled={disabled}
        onClick={onClick}
        {...props}
      >
        {children}
      </button>
    );
  }

  // Base classes with Tailwind - no default focus ring
  const baseClasses = cn(
    // Essential layout and interaction classes
    "inline-flex items-center justify-center",
    "font-medium transition-colors duration-200",
    "focus:outline-none select-none"
    // No default focus ring - user can add their own via className
  );

  // Variant classes - these can be overridden by className
  const variantClasses = {
    primary: cn(
      "bg-sky-600 text-white border border-transparent rounded-md",
      "hover:bg-sky-700 active:bg-sky-800",
      "disabled:bg-sky-300 disabled:cursor-not-allowed"
    ),
    secondary: cn(
      "bg-transparent text-sky-600 border-2 border-sky-600 rounded-md",
      "hover:bg-sky-700 hover:text-white active:bg-sky-900 active:text-white",
      "disabled:text-sky-300 disabled:border-sky-300 disabled:cursor-not-allowed"
    ),
    danger: cn(
      "bg-red-600 text-white border border-transparent rounded-md",
      "hover:bg-red-700 active:bg-red-800",
      "disabled:bg-red-300 disabled:cursor-not-allowed"
    ),
    "danger-outline": cn(
      "bg-transparent text-red-600 border-2 border-red-600 rounded-md",
      "hover:bg-red-700 hover:text-white active:bg-red-900 active:text-white",
      "disabled:text-red-300 disabled:border-red-300 disabled:cursor-not-allowed"
    ),
    success: cn(
      "bg-green-600 text-white border border-transparent rounded-md",
      "hover:bg-green-700 active:bg-green-800",
      "disabled:bg-green-300 disabled:cursor-not-allowed"
    ),
  };

  // Size classes - these can also be overridden
  const sizeClasses = {
    small: "px-3 py-1.5 text-sm",
    medium: "px-4 py-2 text-base",
    large: "px-6 py-3 text-lg",
  };

  // Additional disabled classes
  const disabledClasses = disabled ? "opacity-60" : "cursor-pointer";

  // Merge all classes intelligently - className will override any conflicting default classes
  const finalClasses = cn(
    baseClasses,
    variantClasses[variant],
    sizeClasses[size],
    disabledClasses,
    className // User's className will override any conflicting default classes
  );

  return (
    <button
      type={type}
      className={finalClasses}
      disabled={disabled}
      onClick={onClick}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;
