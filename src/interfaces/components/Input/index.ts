interface IInputProps {
  label?: string;
  value?: string;
  type?: "text" | "number" | "password" | "email";
  placeholder?: string;
  error?: string;
}

export interface IInputFrameProps extends IInputProps {
  children: React.ReactNode;
}

export interface IInputTextFieldProps extends IInputProps {
  onChange?: (value: string) => void;
}

export interface IInputTextAreaProps extends IInputProps {
  onChange?: (value: string) => void;
}
