"use client";

import { XCircleIcon } from "@heroicons/react/20/solid";

import { useTodo } from "@/hooks";

import { convert } from "@/utils";

import { ITodoItemProps } from "@/interfaces/components/Todo";

export default function TodoItem({ todo }: ITodoItemProps) {
  const { EditModal, openEditModal } = useTodo.Edit();
  const { DeleteAlertModal, openDeleteModal } = useTodo.Delete();

  return (
    <>
      <div
        className="w-full relative px-8 py-2 md:py-4 rounded-lg bg-white shadow-lg"
        onClick={(e) => {
          e.stopPropagation();
          openEditModal();
        }}
      >
        <XCircleIcon
          className="absolute top-[-10px] right-[-10px] h-8 w-8 text-rose-600 hover:text-rose-700 active:text-rose-800 cursor-pointer"
          aria-hidden="true"
          onClick={(e) => {
            e.stopPropagation();
            openDeleteModal();
          }}
        />
        <div className="flex justify-between">
          <h5>{todo.title}</h5>
          <div className="text-neutral-400">
            {convert.date.toGregorian(new Date(todo.createdAt))}
          </div>
        </div>
        <div className="text-neutral-500 whitespace-pre-line">{todo.description}</div>
      </div>

      {/* modal */}
      <EditModal todo={todo} />
      <DeleteAlertModal todo={todo} />
    </>
  );
}
