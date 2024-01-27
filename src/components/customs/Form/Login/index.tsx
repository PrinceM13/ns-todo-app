"use client";

import { useRouter } from "next/navigation";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm, Controller, SubmitHandler } from "react-hook-form";

import { initials, localStorage, yup } from "@/utils";
import { api } from "@/service";

import { Button, Input } from "@/components/bases";

import { AuthFrame } from "../Frame";

import { ILogin } from "@/interfaces/useForm/Login";

export default function LoginForm() {
  const router = useRouter();

  const {
    control,
    handleSubmit,
    formState: { errors }
  } = useForm<ILogin>({ defaultValues: initials.login, resolver: yupResolver(yup.loginSchema) });

  const handleLogin: SubmitHandler<ILogin> = async (value) => {
    try {
      const res = await api.login(value);
      localStorage.setAccessToken(res.token);
      router.push("/todos");
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <AuthFrame className="flex flex-col items-center gap-8" onSubmit={handleSubmit(handleLogin)}>
      <h3>Todo List !</h3>
      <div className="w-full flex flex-col gap-4">
        <Controller
          name="username"
          control={control}
          render={({ field }) => (
            <Input.TextField
              placeholder="Username"
              value={field.value}
              error={errors.username?.message}
              onChange={(value) => field.onChange(value)}
            />
          )}
        />
        <Controller
          name="password"
          control={control}
          render={({ field }) => (
            <Input.TextField
              type="password"
              placeholder="Password"
              value={field.value}
              error={errors.password?.message}
              onChange={(value) => field.onChange(value)}
            />
          )}
        />
      </div>
      <Button type="submit">Login</Button>
    </AuthFrame>
  );
}
