"use client";

import { useEffect } from "react";
import { useSnapshot } from "valtio";

import { useSetUser } from "@/hooks";

import { valtioState } from "@/stores";
import { localStorage } from "@/utils";

export default function UserAccount() {
  const userId = useSnapshot(valtioState.general).user._id;
  const { setUser } = useSetUser();

  useEffect(() => {
    const accessToken = localStorage.getAccessToken();

    if (accessToken) {
      setUser(accessToken);
    }
  }, [setUser]);

  return <>{userId}</>;
}
