"use client";

import { useState } from "react";

import { Button, Input } from "@/components/bases";

import { AuthFrame } from "../Frame";
import { api } from "@/service";
import { localStorage } from "@/utils";
import { useRouter } from "next/navigation";

export default function LoginForm() {
  const router = useRouter();
  const [login, setLogin] = useState({
    username: "",
    password: ""
  });

  const handleLogin = async () => {
    try {
      const res = await api.login(login);
      localStorage.setAccessToken(res.token);
      router.push("/todos");
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <AuthFrame className="flex flex-col items-center gap-8" onSubmit={() => handleLogin()}>
      <h3>Todo List !</h3>
      <div className="w-full flex flex-col gap-4">
        <Input.TextField
          placeholder="Username"
          value={login.username}
          onChange={(value) => setLogin({ ...login, username: value })}
        />
        <Input.TextField
          type="password"
          placeholder="Password"
          value={login.password}
          onChange={(value) => setLogin({ ...login, password: value })}
        />
      </div>
      <Button type="submit">Login</Button>
    </AuthFrame>
  );
}
