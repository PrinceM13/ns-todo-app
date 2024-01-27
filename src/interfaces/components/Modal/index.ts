export interface IModalProps {
  children: React.ReactNode;
  isOpen?: boolean;
  onClose?: () => void;
  title?: string;
  type?: "info" | "success" | "warning" | "error";
}

export interface IModalContent {
  type: "info" | "success" | "warning" | "error";
  title: string;
  content: React.ReactNode;
}
