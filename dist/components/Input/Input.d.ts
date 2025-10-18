import React from "react";
import type { BaseComponentProps } from "../../types";
export type InputVariant = "fill" | "outline" | "floating";
export type InputType = "text" | "email" | "password" | "number" | "search" | "tel" | "url";
export interface InputProps extends BaseComponentProps {
    variant?: InputVariant;
    type?: InputType;
    placeholder?: string;
    value?: string;
    defaultValue?: string;
    onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
    onFocus?: (event: React.FocusEvent<HTMLInputElement>) => void;
    onBlur?: (event: React.FocusEvent<HTMLInputElement>) => void;
    disabled?: boolean;
    required?: boolean;
    error?: string;
    label?: string;
    helperText?: string;
    id?: string;
    name?: string;
    autoComplete?: string;
    autoFocus?: boolean;
    readOnly?: boolean;
    maxLength?: number;
    minLength?: number;
    pattern?: string;
    unstyled?: boolean;
    floatingLabelClassName?: string;
    floatingLabelFocusColor?: string;
    floatingLabelActiveColor?: string;
    floatingLabelErrorColor?: string;
}
declare const Input: React.ForwardRefExoticComponent<InputProps & React.RefAttributes<HTMLInputElement>>;
export default Input;
//# sourceMappingURL=Input.d.ts.map