import { TodoItem } from "../TodoItem/index";

export const TodoList = () => {
  return (
    <div className="container flex flex-col items-center justify-center mt-4 w-full">
      <ul className="w-1/2">
        <TodoItem />
      </ul>
    </div>
  );
};
