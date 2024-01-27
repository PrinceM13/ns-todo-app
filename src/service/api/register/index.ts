import { IRegister } from "@/interfaces/useForm/Login";
import { axios } from "@/utils";

const register = async ({ username, password }: IRegister) => {
  const res = await axios.post("/users/register", {
    username,
    password
  });
  return res.data;
};

export default register;
