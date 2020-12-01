import React from "react";
import { TodoList } from "./TodoList";
import { TodoProvider } from "./TodoProvider";

import "./App.css";

export const App = () => (
  <TodoProvider>
    <div className="app">
      <header className="app-header">To-do</header>
      <TodoList />
    </div>
  </TodoProvider>
);
