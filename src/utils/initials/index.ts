import { ILogin, IRegister } from "@/interfaces/hook/useForm";

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
