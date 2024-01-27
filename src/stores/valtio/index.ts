import { proxy } from "valtio";

import { IApiTodo, ITokenUser } from "@/interfaces/api";

const general: { todos: IApiTodo[]; user: ITokenUser } = proxy({
  todos: [],
  user: { exp: 0, iat: 0, _id: "" }
});

export { general };
