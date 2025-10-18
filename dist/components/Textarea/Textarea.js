import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useState, forwardRef } from "react";
import { cn } from "../../utils";
const Textarea = forwardRef(({ variant = "outline", placeholder, value, defaultValue, onChange, onFocus, onBlur, disabled = false, required = false, error, label, helperText, id, name, autoFocus = false, readOnly = false, maxLength, minLength, rows = 4, cols, resize = "vertical", className, unstyled = false, floatingLabelClassName, floatingLabelFocusColor = "text-blue-600", floatingLabelActiveColor = "text-gray-600", floatingLabelErrorColor = "text-red-600", ...props }, ref) => {
    const [isFocused, setIsFocused] = useState(false);
    const [internalValue, setInternalValue] = useState(defaultValue || "");
    // Generate unique ID if not provided
    const textareaId = id || `textarea-${Math.random().toString(36).substr(2, 9)}`;
    // Get current value (controlled vs uncontrolled)
    const currentValue = value !== undefined ? value : internalValue;
    // Handle onChange to track internal value for uncontrolled inputs
    const handleChange = (event) => {
        if (!value) {
            // Only track internal value for uncontrolled inputs
            setInternalValue(event.target.value);
        }
        onChange?.(event);
    };
    // Handle clear textarea
    const handleClear = () => {
        const event = {
            target: { value: "" },
            currentTarget: { value: "" },
        };
        // Always update internal value for uncontrolled inputs
        if (value === undefined) {
            setInternalValue("");
        }
        // Always call onChange if provided
        if (onChange) {
            onChange(event);
        }
    };
    // Handle focus
    const handleFocus = (event) => {
        setIsFocused(true);
        onFocus?.(event);
    };
    // Handle blur
    const handleBlur = (event) => {
        setIsFocused(false);
        onBlur?.(event);
    };
    // Check if clear button should be shown
    const shouldShowClear = currentValue && currentValue.length > 0 && !disabled && !readOnly;
    if (unstyled) {
        return (_jsx("textarea", { ref: ref, className: cn(className), placeholder: placeholder, value: value, defaultValue: defaultValue, onChange: onChange, onFocus: handleFocus, onBlur: handleBlur, disabled: disabled, required: required, id: textareaId, name: name, autoFocus: autoFocus, readOnly: readOnly, maxLength: maxLength, minLength: minLength, rows: rows, cols: cols, style: { resize }, ...props }));
    }
    // Extract text size from className for floating label
    const extractTextSize = (className) => {
        if (!className)
            return "text-base";
        // Look for text-size classes in className
        const textSizeMatch = className.match(/text-(xs|sm|base|lg|xl|2xl|3xl|4xl|5xl|6xl|7xl|8xl|9xl)/);
        return textSizeMatch ? textSizeMatch[0] : "text-base";
    };
    const textareaTextSize = extractTextSize(className);
    // Base classes
    const baseClasses = cn("w-full px-3 py-2 font-normal", textareaTextSize, // Use extracted or default text size
    "transition-colors duration-200", "focus:outline-none", "placeholder:text-gray-400", "disabled:cursor-not-allowed disabled:opacity-60", 
    // Resize styles
    resize === "none" && "resize-none", resize === "both" && "resize", resize === "horizontal" && "resize-x", resize === "vertical" && "resize-y");
    // Default variant classes (can be overridden with className)
    const defaultVariantClasses = {
        fill: cn("bg-gray-100 border border-transparent rounded-md", 
        // Default hover (can be overridden)
        !className?.includes("hover:") && "hover:bg-gray-50", 
        // Default focus (can be overridden)
        !className?.includes("focus:bg-") && "focus:bg-white", !className?.includes("focus:border-") &&
            !error &&
            "focus:border-sky-600", !className?.includes("focus:ring-") &&
            !error &&
            "focus:ring-2 focus:ring-sky-600/20", 
        // Disabled state
        !className?.includes("disabled:") && "disabled:bg-gray-100"),
        outline: cn("bg-white border-2 border-gray-300 rounded-md", 
        // Default hover (can be overridden)
        !className?.includes("hover:") && "hover:border-gray-400", 
        // Default focus (can be overridden)
        !className?.includes("focus:border-") &&
            !error &&
            "focus:border-sky-600", !className?.includes("focus:ring-") &&
            !error &&
            "focus:ring-2 focus:ring-sky-600/20", 
        // Disabled state
        !className?.includes("disabled:bg-") && "disabled:bg-gray-50", !className?.includes("disabled:border-") && "disabled:border-gray-200"),
        floating: cn("bg-transparent border-2 border-gray-300 rounded-md py-4", 
        // Default hover (can be overridden)
        !className?.includes("hover:") && "hover:border-gray-400", 
        // Default focus (can be overridden)
        !className?.includes("focus:border-") &&
            !error &&
            "focus:border-sky-600", !className?.includes("focus:ring-") &&
            !error &&
            "focus:ring-2 focus:ring-sky-600/20", 
        // Disabled state
        !className?.includes("disabled:bg-") && "disabled:bg-gray-50", !className?.includes("disabled:border-") && "disabled:border-gray-200"),
    };
    const textareaClasses = cn(baseClasses, defaultVariantClasses[variant], 
    // Add filled state class when textarea has value
    currentValue && currentValue.length > 0 && "textarea-filled", 
    // Adjust padding for clear button
    shouldShowClear ? "pr-10" : "", className, 
    // Error styles should always have highest priority
    error && "!border-red-600 focus:!border-red-600 focus:!ring-red-600");
    const containerClasses = cn("relative", disabled ? "pointer-events-none" : "");
    // Floating label logic
    const hasValue = Boolean(currentValue && currentValue.length > 0);
    const isFloatingActive = isFocused || hasValue;
    // Determine floating label color based on state
    const getFloatingLabelColor = () => {
        if (error)
            return floatingLabelErrorColor;
        if (isFocused)
            return floatingLabelFocusColor;
        if (hasValue)
            return floatingLabelActiveColor;
        return "text-gray-500"; // Default placeholder color
    };
    // Clear icon for textarea
    const ClearIcon = () => (_jsx("svg", { className: "w-5 h-5 text-gray-400 hover:text-gray-600 cursor-pointer", fill: "none", stroke: "currentColor", viewBox: "0 0 24 24", onMouseDown: (e) => {
            e.preventDefault(); // Prevent textarea from losing focus
            handleClear();
        }, children: _jsx("path", { strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: 2, d: "M6 18L18 6M6 6l12 12" }) }));
    return (_jsxs("div", { className: "space-y-1", children: [label && variant !== "floating" && (_jsx("label", { htmlFor: textareaId, className: cn("block text-sm font-medium", error ? "text-red-600" : "text-gray-700", required && "after:content-['*'] after:text-red-600 after:ml-1"), children: label })), _jsxs("div", { className: containerClasses, children: [variant === "floating" && (label || placeholder) && (_jsx("label", { htmlFor: textareaId, className: cn("absolute left-3 transition-all duration-200 pointer-events-none floating-label", getFloatingLabelColor(), isFloatingActive
                            ? cn("text-xs italic", // Fixed small size when floating (above border) + italic
                            "top-0 -translate-y-1/2 px-1", 
                            // Apply background only when floating is active (floating above)
                            floatingLabelClassName || "bg-white")
                            : cn(textareaTextSize, // Same size as textarea when acting as placeholder
                            "top-4 translate-y-0"
                            // No background when floating is not active (in placeholder position)
                            ), required &&
                            isFloatingActive &&
                            "after:content-['*'] after:text-red-600 after:ml-1"), children: label || placeholder })), _jsx("textarea", { ref: ref, className: textareaClasses, placeholder: variant === "floating" ? "" : placeholder, value: value, defaultValue: defaultValue, onChange: handleChange, onFocus: handleFocus, onBlur: handleBlur, disabled: disabled, required: required, id: textareaId, name: name, autoFocus: autoFocus, readOnly: readOnly, maxLength: maxLength, minLength: minLength, rows: rows, cols: cols, ...props }), shouldShowClear && (_jsx("div", { className: "absolute top-3 right-3", children: _jsx(ClearIcon, {}) }))] }), (helperText || error) && (_jsx("p", { className: cn("text-xs ml-1", error ? "text-red-600" : "text-gray-500"), children: error || helperText }))] }));
});
Textarea.displayName = "Textarea";
export default Textarea;
