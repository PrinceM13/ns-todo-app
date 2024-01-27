import { useModal } from "@/hooks";

import { api } from "@/service";

import { Form } from "@/components/customs";

import { ITodo } from "@/interfaces/components/Form";
import { IApiTodo } from "@/interfaces/api";
import { IEditModalProps, IUseEditTodoProps } from "@/interfaces/hook/useTodo";

export default function useEditTodo({ onEdit }: IUseEditTodoProps) {
  const { CustomModal, openModal, closeModal } = useModal();

  // * edit todo action
  const handleEdit = async (todo: ITodo) => {
    const { _id = "", title = "", description = "" } = todo;
    if (!_id) return;

    try {
      const res: IApiTodo = await api.todos.update({ id: _id, title, description });

      // * update ui
      onEdit(res);
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
