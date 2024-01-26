export interface IAuthFrameProps {
  children: React.ReactNode;
  className?: string;
  onSubmit?: () => void;
}

export interface ITodo {
  _id?: string;
  title?: string;
  description?: string;
}

export interface ITodoFormProps {
  onSubmit: (todo: ITodo) => void;
  value?: ITodo;
  isEdit?: boolean;
}
