"use client";

import { useSnapshot } from "valtio";

import { useModal } from "@/hooks";

import { api } from "@/service";
import { valtioState } from "@/stores";

import { Form } from "@/components/customs";

import { ITodo } from "@/interfaces/components/Form";
import { IApiTodo } from "@/interfaces/api";
import { IEditModalProps } from "@/interfaces/hook/useTodo";

export default function useEditTodo() {
  const todos = useSnapshot(valtioState.general).todos;
  const { CustomModal, openModal, closeModal } = useModal();

  // * edit todo action
  const handleEdit = async (todo: ITodo) => {
    const { _id = "", title = "", description = "" } = todo;
    if (!_id) return;

    try {
      const res: IApiTodo = await api.todos.update({ id: _id, title, description });

      // * update ui
      const newTodos = todos.map((todo) => {
        if (todo["_id"] === res._id) {
          return res;
        }
        return todo;
      });
      valtioState.general.todos = newTodos;
    } catch (err) {
      console.log(err);
    } finally {
      closeModal();
    }
  };

  // * edit modal component
  const EditModal = ({ todo }: IEditModalProps) => {
    return (
      <CustomModal type="success">
        <Form.Todo
          value={todo}
          onSubmit={(newTodo) => handleEdit(newTodo)}
          onCancel={closeModal}
          isEdit
        />
      </CustomModal>
    );
  };

  return { EditModal, openEditModal: openModal };
}
