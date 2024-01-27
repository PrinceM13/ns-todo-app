"use client";

import { useRouter } from "next/navigation";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm, Controller, SubmitHandler } from "react-hook-form";

import { initials, yup } from "@/utils";
import { api } from "@/service";

import { Button, Input } from "@/components/bases";

import AuthFrame from "@/components/customs/Form/Frame/Auth";

import { IRegister } from "@/interfaces/hook/useForm";

export default function RegisterForm() {
  const router = useRouter();

  const {
    control,
    handleSubmit,
    formState: { errors }
  } = useForm<IRegister>({
    defaultValues: initials.register,
    resolver: yupResolver(yup.loginSchema)
  });

  const handleRegister: SubmitHandler<IRegister> = async (value) => {
    try {
      const res = await api.register(value);
      if (res) {
        alert(`${res.username} register success !`);
        router.push("/login");
      }
    } catch (err: any) {
      console.log(err);
      alert(err.response.data.message);
    }
  };

  return (
    <AuthFrame className="flex flex-col items-center gap-8" onSubmit={handleSubmit(handleRegister)}>
      <h3>Create Account !</h3>
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
      <Button type="submit" shadow>
        Create
      </Button>
    </AuthFrame>
  );
}
