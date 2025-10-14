import { jsx as _jsx } from "react/jsx-runtime";
import './Button.css';
const Button = ({ children, variant = 'primary', size = 'medium', disabled = false, onClick, type = 'button', className = '', ...props }) => {
    const buttonClass = [
        'yashar-button',
        `yashar-button--${variant}`,
        `yashar-button--${size}`,
        className
    ].filter(Boolean).join(' ');
    return (_jsx("button", { type: type, className: buttonClass, disabled: disabled, onClick: onClick, ...props, children: children }));
};
export default Button;
