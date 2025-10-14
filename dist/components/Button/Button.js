import { jsx as _jsx } from "react/jsx-runtime";
const Button = ({ children, variant = "primary", size = "medium", disabled = false, onClick, type = "button", className = "", ...props }) => {
    // Base classes with Tailwind
    const baseClasses = [
        "inline-flex",
        "items-center",
        "justify-center",
        "border",
        "border-transparent",
        "font-medium",
        "rounded-md",
        "focus:outline-none",
        "focus:ring-2",
        "focus:ring-offset-2",
        "transition-colors",
        "duration-200",
        "cursor-pointer",
        "select-none"
    ];
    // Variant classes
    const variantClasses = {
        primary: [
            "bg-blue-600",
            "text-white",
            "hover:bg-blue-700",
            "focus:ring-blue-500",
            "disabled:bg-blue-300"
        ],
        secondary: [
            "bg-gray-600",
            "text-white",
            "hover:bg-gray-700",
            "focus:ring-gray-500",
            "disabled:bg-gray-300"
        ],
        danger: [
            "bg-red-600",
            "text-white",
            "hover:bg-red-700",
            "focus:ring-red-500",
            "disabled:bg-red-300"
        ],
        success: [
            "bg-green-600",
            "text-white",
            "hover:bg-green-700",
            "focus:ring-green-500",
            "disabled:bg-green-300"
        ]
    };
    // Size classes
    const sizeClasses = {
        small: ["px-3", "py-1.5", "text-sm"],
        medium: ["px-4", "py-2", "text-base"],
        large: ["px-6", "py-3", "text-lg"]
    };
    // Disabled classes
    const disabledClasses = disabled ? ["cursor-not-allowed", "opacity-60"] : [];
    const buttonClasses = [
        ...baseClasses,
        ...variantClasses[variant],
        ...sizeClasses[size],
        ...disabledClasses,
        className
    ]
        .filter(Boolean)
        .join(" ");
    return (_jsx("button", { type: type, className: buttonClasses, disabled: disabled, onClick: onClick, ...props, children: children }));
};
export default Button;
