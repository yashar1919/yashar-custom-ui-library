import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { forwardRef } from "react";
import { cn } from "../../utils";
const Textarea = forwardRef(({ variant = "outline", placeholder, value, defaultValue, onChange, onFocus, onBlur, disabled = false, required = false, error, label, helperText, id, name, autoFocus = false, readOnly = false, maxLength, minLength, rows = 4, cols, resize = "vertical", className, unstyled = false, ...props }, ref) => {
    // Generate unique ID if not provided
    const textareaId = id || `textarea-${Math.random().toString(36).substr(2, 9)}`;
    // Handle clear textarea
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
    const shouldShowClear = value &&
        value.length > 0 &&
        !disabled &&
        !readOnly;
    if (unstyled) {
        return (_jsx("textarea", { ref: ref, className: cn(className), placeholder: placeholder, value: value, defaultValue: defaultValue, onChange: onChange, onFocus: onFocus, onBlur: onBlur, disabled: disabled, required: required, id: textareaId, name: name, autoFocus: autoFocus, readOnly: readOnly, maxLength: maxLength, minLength: minLength, rows: rows, cols: cols, style: { resize }, ...props }));
    }
    // Base classes
    const baseClasses = cn("w-full px-3 py-2 text-base font-normal", "transition-colors duration-200", "focus:outline-none", "placeholder:text-gray-400", "disabled:cursor-not-allowed disabled:opacity-60", 
    // Resize styles
    resize === "none" && "resize-none", resize === "both" && "resize", resize === "horizontal" && "resize-x", resize === "vertical" && "resize-y");
    // Variant classes
    const variantClasses = {
        fill: cn("bg-gray-100 border border-transparent rounded-md", "hover:bg-gray-50", "focus:bg-white focus:border-sky-600 focus:ring-2 focus:ring-sky-600/20", error
            ? "border-red-500 focus:border-red-500 focus:ring-red-500/20"
            : "", "disabled:bg-gray-100"),
        outline: cn("bg-white border-2 border-gray-300 rounded-md", "hover:border-gray-400", "focus:border-sky-600 focus:ring-2 focus:ring-sky-600/20", error
            ? "border-red-500 focus:border-red-500 focus:ring-red-500/20"
            : "", "disabled:bg-gray-50 disabled:border-gray-200"),
    };
    const textareaClasses = cn(baseClasses, variantClasses[variant], shouldShowClear ? "pr-10" : "", className);
    // Clear icon for textarea
    const ClearIcon = () => (_jsx("svg", { className: "w-5 h-5 text-gray-400 hover:text-gray-600 cursor-pointer", fill: "none", stroke: "currentColor", viewBox: "0 0 24 24", onClick: handleClear, children: _jsx("path", { strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: 2, d: "M6 18L18 6M6 6l12 12" }) }));
    return (_jsxs("div", { className: "space-y-1", children: [label && (_jsx("label", { htmlFor: textareaId, className: cn("block text-sm font-medium", error ? "text-red-600" : "text-gray-700", required && "after:content-['*'] after:text-red-500 after:ml-1"), children: label })), _jsxs("div", { className: "relative", children: [_jsx("textarea", { ref: ref, className: textareaClasses, placeholder: placeholder, value: value, defaultValue: defaultValue, onChange: onChange, onFocus: onFocus, onBlur: onBlur, disabled: disabled, required: required, id: textareaId, name: name, autoFocus: autoFocus, readOnly: readOnly, maxLength: maxLength, minLength: minLength, rows: rows, cols: cols, ...props }), shouldShowClear && (_jsx("div", { className: "absolute top-3 right-3", children: _jsx(ClearIcon, {}) }))] }), (helperText || error) && (_jsx("p", { className: cn("text-sm", error ? "text-red-600" : "text-gray-500"), children: error || helperText }))] }));
});
Textarea.displayName = "Textarea";
export default Textarea;
