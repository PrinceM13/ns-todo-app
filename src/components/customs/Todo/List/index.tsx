"use client";

import { useState } from "react";
import { XCircleIcon } from "@heroicons/react/20/solid";

import { useModal } from "@/hooks";

import { api } from "@/service";

import { Button } from "@/components/bases";

import { IApiTodo } from "@/interfaces/api";
import { ITodoListProps } from "@/interfaces/components/Todo";

export default function TodoList({ todos, onDelete }: ITodoListProps) {
  const { CustomModal, openModal, closeModal } = useModal();
  const [currentTodo, setCurrentTodo] = useState<IApiTodo | null>();

  const handleOpenDeleteModal = (todo: IApiTodo) => {
    setCurrentTodo(todo);
    openModal();
  };

  const handleDelete = async () => {
    const id = currentTodo?._id ?? "";
    if (!id) return;

    try {
      await api.todos.remove({ id });
      onDelete(id);
    } catch (err) {
      console.log(err);
    } finally {
      closeModal();
      setCurrentTodo(null);
    }
  };

  return (
    <div className="w-full flex flex-col gap-4">
      {todos?.map((todo) => {
        return (
          <div
            key={todo["_id"]}
            className="w-full relative px-4 py-2 md:px-8 md:py-4 rounded-lg bg-white shadow-lg"
          >
            <XCircleIcon
              className="absolute top-[-10px] right-[-10px] h-8 w-8 text-rose-600 hover:text-rose-700 active:text-rose-800 cursor-pointer"
              aria-hidden="true"
              onClick={() => handleOpenDeleteModal(todo)}
            />
            <div>{todo.title}</div>
            <div>{todo.description}</div>
            <div>{todo.createdAt}</div>
          </div>
        );
      })}

      <CustomModal title="Delete !" type="error">
        <div className="flex flex-col gap-8 py-2">
          <div>
            Do you want to delete{" "}
            <span className="text-rose-600 font-bold">{`" ${currentTodo?.title} "`}</span> ?
          </div>
          <div className="flex gap-2 self-end">
            <Button variant="outlined" color="secondary" onClick={closeModal}>
              Cancel
            </Button>
            <Button color="error" onClick={handleDelete}>
              Delete
            </Button>
          </div>
        </div>
      </CustomModal>
    </div>
  );
}
