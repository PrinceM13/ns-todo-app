export interface ILogin {
  username: string;
  password: string;
}

export interface IRegister {
  username: string;
  password: string;
  confirmPassword?: string;
}
