"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

import { localStorage } from "@/utils";

import { IPrivateRouteProps } from "@/interfaces/routes";

export default function PrivateRoute({ children }: IPrivateRouteProps) {
  const router = useRouter();
  const [token, setToken] = useState<string>("");

  useEffect(() => {
    const acessToken = localStorage.getAccessToken();
    if (!acessToken) {
      router.push("/login");
    } else {
      setToken(acessToken);
    }
  }, [router]);

  return <>{token && children}</>;
}
