"use client";

import { PlusIcon } from "@heroicons/react/20/solid";

import { useTodo } from "@/hooks";

import { Todo } from "@/components/customs";
import { Button } from "@/components/bases";

export default function TodoListPage() {
  useTodo.GetAll(); // * get user todos from api
  const { CreateTodoModal, openCreateModal } = useTodo.Create();

  return (
    <div className="flex flex-col items-center gap-6 min-w-[300px] max-w-[500px] w-[80%]">
      <h3>Todo</h3>
      <Todo.List />
      <Button
        className="flex justify-center items-center gap-2"
        color="secondary"
        size="lg"
        shadow
        onClick={openCreateModal}
      >
        <PlusIcon className="h-6 w-6" aria-hidden="true" />
        Add New Todo
      </Button>

      <CreateTodoModal />
    </div>
  );
}
