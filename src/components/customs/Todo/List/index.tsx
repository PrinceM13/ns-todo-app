"use client";

import { useState } from "react";
import { XCircleIcon } from "@heroicons/react/20/solid";

import { useModal } from "@/hooks";

import { api } from "@/service";

import { Alert, Form } from "@/components/customs";

import { IApiTodo } from "@/interfaces/api";
import { ITodo } from "@/interfaces/components/Form";
import { ITodoListProps } from "@/interfaces/components/Todo";
import { IModalContent } from "@/interfaces/components/Modal";

const initialModal: IModalContent = {
  type: "info",
  title: "",
  content: <></>
};

export default function TodoList({ todos, onDelete, onEdit }: ITodoListProps) {
  const { CustomModal, openModal, closeModal } = useModal();

  const [modal, setModal] = useState<IModalContent>(initialModal);

  const handleOpenEditModal = (todo: IApiTodo) => {
    setModal({
      type: "success",
      title: "",
      content: <Form.Todo value={todo} onSubmit={(newTodo) => handleEdit(newTodo)} isEdit />
    });
    openModal();
  };

  const handleEdit = async (todo: ITodo) => {
    const { _id = "", title = "", description = "" } = todo;
    console.log(todo);
    if (!_id) return;

    try {
      const res: IApiTodo = await api.todos.update({ id: _id, title, description });

      // * update ui
      onEdit(res);
    } catch (err) {
      console.log(err);
    } finally {
      closeModal();
      setModal(initialModal);
    }
  };

  const handleOpenDeleteModal = (todo: IApiTodo) => {
    const { _id } = todo;
    setModal({
      type: "error",
      title: "Delete !",
      content: (
        <Alert.Delete
          title={todo.title}
          onCancel={closeModal}
          onConfirm={() => handleDelete(_id)}
        />
      )
    });
    openModal();
  };

  const handleDelete = async (id: string) => {
    if (!id) return;

    try {
      await api.todos.remove({ id });
      onDelete(id);
    } catch (err) {
      console.log(err);
    } finally {
      closeModal();
      setModal(initialModal);
    }
  };

  return (
    <div className="w-full flex flex-col gap-4">
      {todos?.map((todo) => {
        return (
          <div
            key={todo["_id"]}
            className="w-full relative px-4 py-2 md:px-8 md:py-4 rounded-lg bg-white shadow-lg"
            onClick={() => handleOpenEditModal(todo)}
          >
            <XCircleIcon
              className="absolute top-[-10px] right-[-10px] h-8 w-8 text-rose-600 hover:text-rose-700 active:text-rose-800 cursor-pointer"
              aria-hidden="true"
              onClick={(e) => {
                e.stopPropagation();
                handleOpenDeleteModal(todo);
              }}
            />
            <div>{todo.title}</div>
            <div>{todo.description}</div>
            <div>{todo.createdAt}</div>
          </div>
        );
      })}

      <CustomModal title={modal.title} type={modal.type}>
        {modal.content}
      </CustomModal>
    </div>
  );
}
