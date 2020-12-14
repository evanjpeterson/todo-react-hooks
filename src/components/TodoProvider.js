import { v4 as uuid } from "uuid";
import React, { useState, useContext } from "react";
import { useDebouncedEffect, useMountEffect } from "../utils";

const LOCAL_STORAGE_KEY = "todo-react-hooks-local-storage";

const sampleTodos = [
  {
    id: uuid(),
    title: "Finish the app",
    completed: false,
    deprioritized: false,
  },
];

const TodoContext = React.createContext(null);

export const TodoProvider = ({ children }) => {
  const [todos, setTodos] = useState([]);

  useMountEffect(() => {
    try {
      const storedTodos = localStorage.getItem(LOCAL_STORAGE_KEY);
      setTodos(JSON.parse(storedTodos) || sampleTodos);
    } catch {
      // JSON.parse() failed, no need to set anything for now
    }
  });

  useDebouncedEffect(
    () => {
      localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(todos));
    },
    500,
    [todos]
  );

  const contextData = {
    todos,
    setTodos,
  };

  return (
    <TodoContext.Provider value={contextData}>{children}</TodoContext.Provider>
  );
};

export const useTodoContext = () => {
  const context = useContext(TodoContext);
  if (context == null) {
    throw new Error("useTodoContext() called outside of a <TodoProvider/>");
  }

  return context;
};
