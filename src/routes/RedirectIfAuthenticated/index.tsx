"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";

import { IRedirectIfAuthenticatedProps } from "@/interfaces/routes";
import { localStorage } from "@/utils";

export default function RedirectIfAuthenticated({ children }: IRedirectIfAuthenticatedProps) {
  const route = useRouter();

  useEffect(() => {
    const accessToken = localStorage.getAccessToken();
    if (accessToken) {
      route.push("/todos");
    }
  }, [route]);

  return <>{children}</>;
}
