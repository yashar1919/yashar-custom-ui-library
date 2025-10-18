import React from "react";
import type { BaseComponentProps, ButtonVariant } from "../../types";
export interface ButtonProps extends BaseComponentProps {
    variant?: ButtonVariant;
    disabled?: boolean;
    onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void;
    type?: "button" | "submit" | "reset";
    unstyled?: boolean;
}
declare const Button: React.FC<ButtonProps>;
export default Button;
//# sourceMappingURL=Button.d.ts.map