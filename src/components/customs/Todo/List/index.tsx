"use client";

import { useSnapshot } from "valtio";

import { valtioState } from "@/stores";

import TodoItem from "@/components/customs/Todo/Item";

export default function TodoList() {
  const todos = useSnapshot(valtioState.general).todos;

  return (
    <div className="w-full flex flex-col gap-4">
      {todos?.map((todo) => (
        <TodoItem key={todo["_id"]} todo={todo} />
      ))}
    </div>
  );
}
