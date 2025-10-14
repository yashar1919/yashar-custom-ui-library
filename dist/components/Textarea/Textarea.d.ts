import React from "react";
import type { BaseComponentProps } from "../../types";
export type TextareaVariant = "fill" | "outline";
export interface TextareaProps extends BaseComponentProps {
    variant?: TextareaVariant;
    placeholder?: string;
    value?: string;
    defaultValue?: string;
    onChange?: (event: React.ChangeEvent<HTMLTextAreaElement>) => void;
    onFocus?: (event: React.FocusEvent<HTMLTextAreaElement>) => void;
    onBlur?: (event: React.FocusEvent<HTMLTextAreaElement>) => void;
    disabled?: boolean;
    required?: boolean;
    error?: string;
    label?: string;
    helperText?: string;
    id?: string;
    name?: string;
    autoFocus?: boolean;
    readOnly?: boolean;
    maxLength?: number;
    minLength?: number;
    rows?: number;
    cols?: number;
    resize?: "none" | "both" | "horizontal" | "vertical";
    unstyled?: boolean;
}
declare const Textarea: React.ForwardRefExoticComponent<TextareaProps & React.RefAttributes<HTMLTextAreaElement>>;
export default Textarea;
//# sourceMappingURL=Textarea.d.ts.map