"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";

import { IRedirectIfAuthenticatedProps } from "@/interfaces/routes";
import { localStorage } from "@/utils";

export default function RedirectIfAuthenticated({ children }: IRedirectIfAuthenticatedProps) {
  const router = useRouter();

  useEffect(() => {
    const accessToken = localStorage.getAccessToken();
    if (accessToken) {
      router.push("/todos");
    }
  }, [router]);

  return <>{children}</>;
}
