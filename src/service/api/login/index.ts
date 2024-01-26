import { axios } from "@/utils";

const login = async ({ username, password }: { username: string; password: string }) => {
  try {
    const res = await axios.post("/users/auth", {
      username,
      password
    });
    return res.data;
  } catch (err) {
    console.log(err);
  }
};

export default login;
