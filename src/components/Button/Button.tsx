import React from "react";
import type { BaseComponentProps, ButtonVariant } from "../../types";
import { cn } from "../../utils";

export interface ButtonProps extends BaseComponentProps {
  variant?: ButtonVariant;
  disabled?: boolean;
  onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void;
  type?: "button" | "submit" | "reset";
  unstyled?: boolean; // New prop to disable all default styles
}

const Button: React.FC<ButtonProps> = ({
  children,
  variant = "fill",
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
    fill: cn(
      "bg-sky-600 text-white border border-transparent rounded-md px-4 py-2",
      "hover:bg-sky-700 active:bg-sky-800",
      "disabled:bg-sky-300 disabled:cursor-not-allowed"
    ),
    outline: cn(
      "bg-transparent text-sky-600 border-2 border-sky-600 rounded-md px-4 py-2",
      "hover:bg-sky-700 hover:text-white active:bg-sky-800 active:text-white",
      "disabled:text-sky-300 disabled:border-sky-300 disabled:cursor-not-allowed"
    ),
  };

  // Additional disabled classes
  const disabledClasses = disabled ? "opacity-60" : "cursor-pointer";

  // Merge all classes intelligently - className will override any conflicting default classes
  const finalClasses = cn(
    baseClasses,
    variantClasses[variant],
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
