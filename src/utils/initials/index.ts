import { ILogin, IRegister } from "@/interfaces/useForm/Login";

const login: ILogin = {
  username: "",
  password: ""
};

const register: IRegister = {
  username: "",
  password: "",
  confirmPassword: ""
};

export { login, register };
