"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";

import { api } from "@/service";
import { valtioState } from "@/stores";
import { localStorage } from "@/utils";

export default function useGetAllTodos() {
  const router = useRouter();

  useEffect(() => {
    const fetchTodos = async () => {
      try {
        const res = await api.todos.getAll();
        valtioState.general.todos = res;
      } catch (err) {
        console.log(err);
        localStorage.removeAccessToken();
        router.push("/login");
      }
    };

    fetchTodos();
  }, [router]);
}
