import { ITokenUser } from "@/interfaces/api";
import { proxy } from "valtio";

const user: ITokenUser = proxy({
  exp: 0,
  iat: 0,
  _id: ""
});

export { user };
