import { ITodoListProps } from "@/interfaces/components/Todo";

import TodoItem from "@/components/customs/Todo/Item";

export default function TodoList({ todos, onDelete, onEdit }: ITodoListProps) {
  return (
    <div className="w-full flex flex-col gap-4">
      {todos?.map((todo) => (
        <TodoItem key={todo["_id"]} onEdit={onEdit} onDelete={onDelete} todo={todo} />
      ))}
    </div>
  );
}
