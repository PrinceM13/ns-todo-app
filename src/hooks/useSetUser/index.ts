"use client";

import { jwtDecode } from "jwt-decode";

import { valtioState } from "@/stores";

import { ITokenUser } from "@/interfaces/api";

export default function useSetUser() {
  const setUser = (accessToken: string) => {
    if (accessToken) {
      const { _id, exp, iat } = jwtDecode(accessToken) as ITokenUser;

      valtioState.general.user._id = _id;
      valtioState.general.user.exp = exp;
      valtioState.general.user.iat = iat;

      return _id;
    }
  };

  return { setUser };
}
