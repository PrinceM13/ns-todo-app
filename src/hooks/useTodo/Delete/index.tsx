"use client";

import { useModal } from "@/hooks";

import { api } from "@/service";

import { Alert } from "@/components/customs";

import { IDeleteAlertModalProps, IUseDeleteTodoProps } from "@/interfaces/hook/useTodo";

export default function useDeleteTodo({ onDelete }: IUseDeleteTodoProps) {
  const { CustomModal, openModal, closeModal } = useModal();

  // * delete todo action
  const handleDelete = async (id: string) => {
    if (!id) return;

    try {
      await api.todos.remove({ id });

      // * update ui
      onDelete(id);
    } catch (err) {
      console.log(err);
    } finally {
      closeModal();
    }
  };

  // * delete modal component
  const DeleteAlertModal = ({ todo }: IDeleteAlertModalProps) => {
    const { _id, title } = todo;
    return (
      <CustomModal title="Delete" type="error">
        <Alert.Delete title={title} onCancel={closeModal} onConfirm={() => handleDelete(_id)} />
      </CustomModal>
    );
  };

  return { DeleteAlertModal, openDeleteModal: openModal };
}
