import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useState, forwardRef } from "react";
import { cn } from "../../utils";
const Input = forwardRef(({ variant = "outline", type = "text", placeholder, value, defaultValue, onChange, onFocus, onBlur, disabled = false, required = false, error, label, helperText, id, name, autoComplete, autoFocus = false, readOnly = false, maxLength, minLength, pattern, className, unstyled = false, ...props }, ref) => {
    const [showPassword, setShowPassword] = useState(false);
    // Generate unique ID if not provided
    const inputId = id || `input-${Math.random().toString(36).substr(2, 9)}`;
    // Handle password visibility toggle
    const togglePasswordVisibility = () => {
        setShowPassword(!showPassword);
    };
    // Handle clear input
    const handleClear = () => {
        if (onChange) {
            const event = {
                target: { value: "" },
                currentTarget: { value: "" },
            };
            onChange(event);
        }
    };
    // Check if clear button should be shown
    const shouldShowClear = (type === "text" || type === "email" || type === "url") &&
        value &&
        value.length > 0 &&
        !disabled &&
        !readOnly; // Handle focus
    const handleFocus = (event) => {
        onFocus?.(event);
    };
    // Handle blur
    const handleBlur = (event) => {
        onBlur?.(event);
    };
    // Determine actual input type (for password visibility)
    const actualType = type === "password" && showPassword ? "text" : type;
    if (unstyled) {
        return (_jsx("input", { ref: ref, type: actualType, className: cn(className), placeholder: placeholder, value: value, defaultValue: defaultValue, onChange: onChange, onFocus: handleFocus, onBlur: handleBlur, disabled: disabled, required: required, id: inputId, name: name, autoComplete: autoComplete, autoFocus: autoFocus, readOnly: readOnly, maxLength: maxLength, minLength: minLength, pattern: pattern, ...props }));
    }
    // Base classes
    const baseClasses = cn("w-full px-3 py-2 text-base font-normal", "transition-colors duration-200", "focus:outline-none", "placeholder:text-gray-400", "disabled:cursor-not-allowed disabled:opacity-60");
    // Variant classes
    const variantClasses = {
        fill: cn("bg-gray-100 border border-transparent rounded-md", "hover:bg-gray-50", "focus:bg-white focus:border-sky-600 focus:ring-2 focus:ring-sky-600/20", error
            ? "border-red-500 focus:border-red-500 focus:ring-red-500/20"
            : "", "disabled:bg-gray-100"),
        outline: cn("bg-white border-2 border-gray-300 rounded-md", "hover:border-gray-400", "focus:border-sky-600 focus:ring-2 focus:ring-sky-600/20", error
            ? "border-red-500 focus:border-red-500 focus:ring-red-500/20"
            : "", "disabled:bg-gray-50 disabled:border-gray-200"),
    };
    // Search icon for search type
    const SearchIcon = () => (_jsx("svg", { className: "w-5 h-5 text-gray-400", fill: "none", stroke: "currentColor", viewBox: "0 0 24 24", children: _jsx("path", { strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: 2, d: "M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" }) }));
    // Eye icon for password visibility
    const EyeIcon = ({ show }) => (_jsx("svg", { className: "w-5 h-5 text-gray-400 hover:text-gray-600 cursor-pointer", fill: "none", stroke: "currentColor", viewBox: "0 0 24 24", onClick: togglePasswordVisibility, children: show ? (_jsx("path", { strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: 2, d: "M15 12a3 3 0 11-6 0 3 3 0 016 0z M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" })) : (_jsx("path", { strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: 2, d: "M13.875 18.825A10.05 10.05 0 0112 19c-4.478 0-8.268-2.943-9.543-7a9.97 9.97 0 011.563-3.029m5.858.908a3 3 0 114.243 4.243M9.878 9.878l4.242 4.242M9.878 9.878L3 3m6.878 6.878L21 21" })) }));
    // Clear icon for clearable inputs
    const ClearIcon = () => (_jsx("svg", { className: "w-5 h-5 text-gray-400 hover:text-gray-600 cursor-pointer", fill: "none", stroke: "currentColor", viewBox: "0 0 24 24", onClick: handleClear, children: _jsx("path", { strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: 2, d: "M6 18L18 6M6 6l12 12" }) }));
    const inputClasses = cn(baseClasses, variantClasses[variant], 
    // Adjust padding for icons
    type === "search" ? "pl-10" : "", type === "password" ? "pr-10" : "", shouldShowClear ? "pr-10" : "", className);
    const containerClasses = cn("relative", disabled ? "pointer-events-none" : "");
    return (_jsxs("div", { className: "space-y-1", children: [label && (_jsx("label", { htmlFor: inputId, className: cn("block text-sm font-medium", error ? "text-red-600" : "text-gray-700", required && "after:content-['*'] after:text-red-500 after:ml-1"), children: label })), _jsxs("div", { className: containerClasses, children: [type === "search" && (_jsx("div", { className: "absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none", children: _jsx(SearchIcon, {}) })), _jsx("input", { ref: ref, type: actualType, className: inputClasses, placeholder: placeholder, value: value, defaultValue: defaultValue, onChange: onChange, onFocus: handleFocus, onBlur: handleBlur, disabled: disabled, required: required, id: inputId, name: name, autoComplete: autoComplete, autoFocus: autoFocus, readOnly: readOnly, maxLength: maxLength, minLength: minLength, pattern: pattern, ...props }), shouldShowClear && (_jsx("div", { className: "absolute inset-y-0 right-0 pr-3 flex items-center", children: _jsx(ClearIcon, {}) })), type === "password" && (_jsx("div", { className: "absolute inset-y-0 right-0 pr-3 flex items-center", children: _jsx(EyeIcon, { show: showPassword }) }))] }), (helperText || error) && (_jsx("p", { className: cn("text-sm", error ? "text-red-600" : "text-gray-500"), children: error || helperText }))] }));
});
Input.displayName = "Input";
export default Input;
