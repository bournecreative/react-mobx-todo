import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./styles/index.css";
import { TodoContext } from "./context/TodoContext.tsx";
import store from "./context/TodoContext.tsx";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <TodoContext.Provider value={store}>
      <App />
    </TodoContext.Provider>
  </React.StrictMode>
);
