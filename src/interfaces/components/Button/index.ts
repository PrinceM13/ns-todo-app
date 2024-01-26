export interface IButtonProps {
  children: React.ReactNode;
  type?: "button" | "submit" | "reset";
  size?: "sm" | "md" | "lg";
  variant?: "contained" | "outlined" | "text";
  color?: "primary" | "secondary" | "info" | "success" | "error" | "warning";
  shadow?: boolean;
  rounded?: boolean;
  linkTo?: string;
  onClick?: () => void;
  className?: string;
  disabled?: boolean;
}
