interface IInputProps {
  label?: string;
  value?: string;
  type?: "text" | "number" | "password" | "email";
  placeholder?: string;
}

export interface IInputFrameProps extends IInputProps {
  children: React.ReactNode;
}

export interface IInputTextFieldProps extends IInputProps {
  onChange?: (value: string) => void;
}
