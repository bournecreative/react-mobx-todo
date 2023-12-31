import { createContext } from "react";
import TodoStore from "../stores/TodoStore";

const store = { todos: new TodoStore() };

export const TodoContext = createContext(store);
export default store;
