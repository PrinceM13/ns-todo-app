import { axios } from "@/utils";

import { ILogin } from "@/interfaces/useForm/Login";

const login = async ({ username, password }: ILogin) => {
  const res = await axios.post("/users/auth", {
    username,
    password
  });
  return res.data;
};

export default login;
