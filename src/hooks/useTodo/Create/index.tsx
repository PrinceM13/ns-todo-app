"use client";

import { useSnapshot } from "valtio";

import { useModal } from "@/hooks";

import { api } from "@/service";
import { valtioState } from "@/stores";

import { Form } from "@/components/customs";

import { ITodo } from "@/interfaces/components/Form";
import { IApiTodo } from "@/interfaces/api";

export default function useCreateTodo() {
  const todos = useSnapshot(valtioState.general).todos;
  const { CustomModal, openModal, closeModal } = useModal();

  // * create todo action
  const handleCreate = async (todo: ITodo) => {
    const { title = "", description = "" } = todo;
    try {
      const res: IApiTodo = await api.todos.create({
        title,
        description
      });

      // * update ui
      valtioState.general.todos = [...todos, res];
    } catch (err) {
      console.log(err);
    } finally {
      closeModal();
    }
  };

  // * create todo modal
  const CreateTodoModal = () => {
    return (
      <CustomModal>
        <Form.Todo onSubmit={handleCreate} onCancel={closeModal} />
      </CustomModal>
    );
  };

  return { CreateTodoModal, openCreateModal: openModal };
}
