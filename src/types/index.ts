// Common types for the UI library
export interface BaseComponentProps {
  className?: string;
  children?: React.ReactNode;
}

export type ButtonVariant =
  | "primary"
  | "secondary"
  | "danger"
  | "danger-outline"
  | "success";
export type ButtonSize = "small" | "medium" | "large";
