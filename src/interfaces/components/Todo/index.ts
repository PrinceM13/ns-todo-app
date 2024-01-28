import { IApiTodo } from "@/interfaces/api";

export interface ITodoItemProps {
  todo: IApiTodo;
}

export interface ITodoExportData {
  [key: string]: string | number;
}

export interface ITodoTableColumn {
  key: string;
  name: string;
}
export interface ITodoTableData {
  columns: ITodoTableColumn[];
  data: (string | number)[][];
}
