"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { PlusIcon } from "@heroicons/react/20/solid";

import { useModal } from "@/hooks";

import { localStorage } from "@/utils";
import { api } from "@/service";

import { Form, Todo } from "@/components/customs";
import { Button } from "@/components/bases";

import { IApiTodo } from "@/interfaces/api";
import { ITodo } from "@/interfaces/components/Form";

export default function TodoListPage() {
  const router = useRouter();
  const [todos, setTodos] = useState<IApiTodo[]>([]);

  const { CustomModal, openModal, closeModal } = useModal();

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
    // * update ui
    const newTodos = todos.filter((todo) => todo["_id"] !== id);
    setTodos(newTodos);
  };

  const handleCreate = async (todo: ITodo) => {
    const { title = "", description = "" } = todo;
    try {
      const res: IApiTodo = await api.todos.create({
        title,
        description
      });

      // * update ui
      setTodos([...todos, res]);
    } catch (err) {
      console.log(err);
    } finally {
      closeModal();
    }
  };

  return (
    <div className="flex flex-col items-center gap-6 min-w-[300px] max-w-[500px] w-[80%]">
      <h3>Todo</h3>
      <Todo.List todos={todos} onDelete={handleDelete} />
      <Button
        className="flex justify-center items-center gap-2"
        color="secondary"
        size="lg"
        shadow
        onClick={openModal}
      >
        <PlusIcon className="h-6 w-6" aria-hidden="true" />
        Add New Todo
      </Button>

      <CustomModal>
        <Form.Todo onSubmit={handleCreate} />
      </CustomModal>
    </div>
  );
}
