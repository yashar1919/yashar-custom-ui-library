import React from "react";
import type {
  BaseComponentProps,
  ButtonVariant,
  ButtonSize,
} from "../../types";
import "./Button.css";

export interface ButtonProps extends BaseComponentProps {
  variant?: ButtonVariant;
  size?: ButtonSize;
  disabled?: boolean;
  onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void;
  type?: "button" | "submit" | "reset";
}

const Button: React.FC<ButtonProps> = ({
  children,
  variant = "primary",
  size = "medium",
  disabled = false,
  onClick,
  type = "button",
  className = "",
  ...props
}) => {
  const buttonClass = [
    "yashar-button",
    `yashar-button--${variant}`,
    `yashar-button--${size}`,
    className,
  ]
    .filter(Boolean)
    .join(" ");

  return (
    <button
      type={type}
      className={buttonClass}
      disabled={disabled}
      onClick={onClick}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;
