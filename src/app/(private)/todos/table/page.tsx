import { Todo } from "@/components/customs";

export default function TodosTablePage() {
  return (
    <main className="flex flex-col gap-6">
      <h3>Todo List Summary Table</h3>
      <Todo.Table />
    </main>
  );
}
