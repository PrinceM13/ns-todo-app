import { IApiTodo } from "@/interfaces/api";

export interface IUseDeleteTodoProps {
  onDelete: (id: string) => void;
}

export interface IDeleteAlertModalProps {
  todo: IApiTodo;
}

export interface IUseEditTodoProps {
  onEdit: (todo: IApiTodo) => void;
}

export interface IEditModalProps {
  todo: IApiTodo;
}
