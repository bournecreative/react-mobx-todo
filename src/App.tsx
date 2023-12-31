import { TodoInput } from "./Todo/TodoInput";
import { TodoList } from "./Todo/TodoList";
import TodoStore from "./stores/TodoStore";

const todos = new TodoStore();

const App = () => {
  return (
    <div className="flex flex-col items-center justify-center h16">
      <h1 className="mt-8 text-xl font-bold">
        React Todo List with Mobx state management
      </h1>
      <p className="mb-8">Also using Tailwind css for styling</p>
      <TodoInput todos={todos} />
      <TodoList todos={todos} />
    </div>
  );
};
export default App;
