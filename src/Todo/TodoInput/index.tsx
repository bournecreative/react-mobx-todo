import { useContext } from "react";
import { TodoContext } from "../../context/TodoContext";

export const TodoInput = () => {
  const { todos } = useContext(TodoContext);
  const handleAdd = (e: React.FormEvent<HTMLFormElement>): void => {
    e.preventDefault();
    const formElement = e.target as HTMLFormElement;
    const formData = new FormData(formElement);
    const value = String(formData.get("todo-input") || "");
    todos.add(value);
    formElement.reset();
  };

  return (
    <form onSubmit={handleAdd} className="flex flex-wrap justify-center">
      <input
        className="rounded py-1.5 px-7 border text-gray-700 focus:ring-2 focus:ring-inset focus:ring-indigo-200 sm:text-sm sm:leading-6"
        name="todo-input"
        placeholder="Add new todo"
      />
      <button
        className="text-nowrap rounded border-1 border-slate-600 text-gray-500 py-1.5 px-5 text-center bg-sky-300 hover:bg-sky-500 hover:text-white ml-4 md:ml-12"
        type="submit"
      >
        Add Todo
      </button>
    </form>
  );
};
