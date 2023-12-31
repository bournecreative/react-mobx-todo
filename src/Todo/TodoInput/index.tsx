import TodoStore from "../../stores/TodoStore";

export const TodoInput = ({ todos }: { todos: TodoStore }) => {
  const handleAdd = (e: React.FormEvent<HTMLFormElement>): void => {
    e.preventDefault();
    const formElement = e.target as HTMLFormElement;
    const formData = new FormData(formElement);
    const value = String(formData.get("todo-input") || "");
    todos.add(value);
    formElement.reset();
  };

  return (
    <form onSubmit={handleAdd}>
      <input
        className="rounded py-1.5 px-7 border text-gray-700 focus:ring-2 focus:ring-inset focus:ring-indigo-200 sm:text-sm sm:leading-6"
        name="todo-input"
        placeholder="Add new todo"
      />
      <button
        className="rounded border-1 border-slate-600 text-gray-500  py-1.5 px-5 ml-12 text-center bg-sky-300 hover:bg-sky-500 hover:text-white"
        type="submit"
      >
        Add Todo
      </button>
    </form>
  );
};
