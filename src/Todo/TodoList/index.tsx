import { observer } from "mobx-react-lite";
import TodoStore from "../../stores/TodoStore";
import { Todo } from "../../stores/TodoStore";

export const TodoList = observer(({ todos }: { todos: TodoStore }) => {
  const handleDelete = (todo: Todo) => {
    todos.remove(todo);
  };

  const handleToggle = (todo: Todo) => {
    todos.toggle(todo);
  };

  const maxWords = (word: string) => {
    if (word.length && word.length > 45) {
      const displayWord = word.slice(0, 40);
      // const remainder = word.slice(21, word.length - 40);
      return `${displayWord}...`;
    } else {
      return word;
    }
  };

  const todoList = todos?.list.map((i) => (
    <li
      className={`border py-1.5 px-7 mb-4 flex justify-between ${
        i.isDone ? "line-through" : ""
      }`}
      key={i.id}
    >
      <span className="break-words">{maxWords(i.title)}</span>
      <div>
        {i.isDone ? (
          <button
            onClick={() => handleDelete(i)}
            className="mr-4 bg-rose-300 rounded py-1 px-3 text-gray-700 hover:bg-rose-500 hover:text-white"
          >
            Delete
          </button>
        ) : (
          ""
        )}
        <input type="checkbox" onChange={() => handleToggle(i)} />
      </div>
    </li>
  ));

  return (
    <div className="container flex flex-col items-center justify-center mt-4 w-full">
      <ul className="w-1/2">{todoList ? todoList : "No todos"}</ul>
    </div>
  );
});
