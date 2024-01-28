"use client";

import { useRouter } from "next/navigation";

import { localStorage } from "@/utils";

import { Button } from "@/components/bases";

export default function LogoutButton() {
  const router = useRouter();

  return (
    <Button
      color="error"
      onClick={() => {
        localStorage.removeAccessToken();
        router.push("/");
      }}
      shadow
    >
      Logout
    </Button>
  );
}
