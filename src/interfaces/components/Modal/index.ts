export interface IModalProps {
  children: React.ReactNode;
  isOpen?: boolean;
  onClose?: () => void;
  title?: string;
  type?: "info" | "success" | "warning" | "error";
}
