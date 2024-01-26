import { IApiTodo } from "@/interfaces/api";

export interface ITodoListProps {
  todos: IApiTodo[];
  onDelete: (id: string) => void;
}
