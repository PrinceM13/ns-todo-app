"use client";

import { useSnapshot } from "valtio";

import { valtioState } from "@/stores";
import { useEffect } from "react";
import { localStorage } from "@/utils";
import { useSetUser } from "@/hooks";

export default function UserAccount() {
  const userId = useSnapshot(valtioState.user)._id;
  const { setUser } = useSetUser();

  useEffect(() => {
    const accessToken = localStorage.getAccessToken();

    if (accessToken) {
      setUser(accessToken);
    }
  }, [setUser]);

  return <>{userId}</>;
}
