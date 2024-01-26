"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

import { localStorage } from "@/utils";
import { api } from "@/service";

import { Todo } from "@/components/customs";
import { Button } from "@/components/bases";

import { IApiTodo } from "@/interfaces/api";

export default function TodoListPage() {
  const router = useRouter();
  const [todos, setTodos] = useState<IApiTodo[]>([]);

  useEffect(() => {
    const fetchTodos = async () => {
      try {
        const res = await api.todos.getAll();
        setTodos(res);
      } catch (err) {
        console.log(err);
        localStorage.removeAccessToken();
        router.push("/login");
      }
    };
    fetchTodos();
  }, [router]);

  const handleDelete = (id: string) => {
    const newTodos = todos.filter((todo) => todo["_id"] !== id);
    setTodos(newTodos);
  };

  return (
    <div className="flex flex-col items-center gap-6 min-w-[300px] max-w-[500px] w-[80%]">
      <h3>Todo</h3>
      <Todo.List todos={todos} onDelete={handleDelete} />
      <Button color="secondary" size="lg" shadow>
        Create
      </Button>
    </div>
  );
}
