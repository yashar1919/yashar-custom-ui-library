import React from "react";
import type { BaseComponentProps } from "../../types";
export type ModalSize = "sm" | "md" | "lg" | "xl" | "2xl" | "full";
export type ModalAnimation = "fade" | "scale" | "slide-up" | "slide-down" | "slide-left" | "slide-right" | "bounce" | "flip";
export interface ModalProps extends BaseComponentProps {
    /** Whether the modal is open */
    open: boolean;
    /** Function to call when modal should close */
    onClose: () => void;
    /** Modal title */
    title?: string;
    /** Modal size variant */
    size?: ModalSize;
    /** Animation type for modal entrance/exit */
    animation?: ModalAnimation;
    /** Whether to show the entire header section */
    showHeader?: boolean;
    /** Whether to show close button in header */
    showCloseButton?: boolean;
    /** Whether clicking overlay closes modal */
    closeOnOverlayClick?: boolean;
    /** Whether pressing Escape closes modal */
    closeOnEscape?: boolean;
    /** Custom overlay className for backdrop styling */
    overlayClassName?: string;
    /** Custom content className for modal content styling */
    contentClassName?: string;
    /** Custom header className */
    headerClassName?: string;
    /** Custom footer content */
    footer?: React.ReactNode;
    /** Custom footer className */
    footerClassName?: string;
    /** Disable body scroll when modal is open */
    preventBodyScroll?: boolean;
    /** Title font size (CSS font-size value) */
    titleFontSize?: string;
    /** Title color (CSS color value) */
    titleColor?: string;
    /** Content font size (CSS font-size value) */
    contentFontSize?: string;
    /** Content text color (CSS color value) */
    contentColor?: string;
    /** Children content */
    children: React.ReactNode;
}
declare const Modal: React.FC<ModalProps>;
export default Modal;
//# sourceMappingURL=Modal.d.ts.map