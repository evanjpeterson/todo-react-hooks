import { v4 as uuid } from "uuid";
import React, { useState, useEffect, useContext } from "react";

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
  const [todos, setTodos] = useState(sampleTodos);

  useEffect(() => {
    // TODO: Fetch from local storage
    // setTodos(...)
  }, []);

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
