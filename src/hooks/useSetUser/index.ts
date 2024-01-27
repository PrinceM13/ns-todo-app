"use client";

import { jwtDecode } from "jwt-decode";

import { ITokenUser } from "@/interfaces/api";
import { valtioState } from "@/stores";

export default function useSetUser() {
  const setUser = (accessToken: string) => {
    if (accessToken) {
      const { _id, exp, iat } = jwtDecode(accessToken) as ITokenUser;

      valtioState.user._id = _id;
      valtioState.user.exp = exp;
      valtioState.user.iat = iat;

      return _id;
    }
  };
  return { setUser };
}
