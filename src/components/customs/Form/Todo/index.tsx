"use client";

import { Button, Input } from "@/components/bases";

import { useEffect, useState } from "react";
import { ITodo, ITodoFormProps } from "@/interfaces/components/Form";

const initialTodo: ITodo = {
  _id: "",
  title: "",
  description: ""
};
export default function TodoForm({ onSubmit, value, isEdit = false }: ITodoFormProps) {
  const [todo, setTodo] = useState<ITodo>(value ?? initialTodo);

  useEffect(() => {
    setTodo({
      _id: value?._id ?? initialTodo._id,
      title: value?.title ?? initialTodo.title,
      description: value?.description ?? initialTodo.description
    });
  }, [value]);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    onSubmit(todo);
  };

  return (
    <form className="flex flex-col gap-6 min-w-[300px] py-4" onSubmit={handleSubmit}>
      <Input.TextField
        label="Title"
        placeholder="Let's do something !"
        value={todo.title}
        onChange={(value) => setTodo({ ...todo, title: value })}
      />
      <Input.TextArea
        label="Description"
        placeholder="What is your plan ?"
        value={todo.description}
        onChange={(value) => setTodo({ ...todo, description: value })}
      />

      <Button type="submit" className="self-center" color="secondary" shadow>
        {isEdit ? "Save" : "Create"}
      </Button>
    </form>
  );
}
