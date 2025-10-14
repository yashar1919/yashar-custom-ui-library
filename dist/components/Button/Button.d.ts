import React from 'react';
import type { BaseComponentProps, ButtonVariant, ButtonSize } from '../../types';
import './Button.css';
export interface ButtonProps extends BaseComponentProps {
    variant?: ButtonVariant;
    size?: ButtonSize;
    disabled?: boolean;
    onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void;
    type?: 'button' | 'submit' | 'reset';
}
declare const Button: React.FC<ButtonProps>;
export default Button;
//# sourceMappingURL=Button.d.ts.map