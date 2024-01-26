import { XCircleIcon } from "@heroicons/react/20/solid";

import { ITodoListProps } from "@/interfaces/components/Todo";
import { api } from "@/service";

export default function TodoList({ todos, onDelete }: ITodoListProps) {
  const handleDelete = async (id: string) => {
    try {
      await api.todos.remove({ id });
      onDelete(id);
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className="w-full flex flex-col gap-4">
      {todos?.map((todo) => {
        return (
          <div
            key={todo["_id"]}
            className="w-full relative px-4 py-2 md:px-8 md:py-4 rounded-lg bg-white"
          >
            <XCircleIcon
              className="absolute top-[-10px] right-[-10px] h-8 w-8 text-rose-600 hover:text-rose-700 active:text-rose-800 cursor-pointer"
              aria-hidden="true"
              onClick={() => handleDelete(todo["_id"])}
            />
            <div>{todo.title}</div>
            <div>{todo.description}</div>
            <div>{todo.createdAt}</div>
          </div>
        );
      })}
    </div>
  );
}
