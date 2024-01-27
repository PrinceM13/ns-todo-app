export interface IApiTodo {
  _id: string;
  title: string;
  description: string;
  user_id: string;
  createdAt: string;
  updatedAt: string;
}

export interface ITokenUser {
  exp: number;
  iat: number;
  _id: string;
}
