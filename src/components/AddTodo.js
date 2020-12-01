import { v4 as uuid } from "uuid";
import { useTodoContext } from "./TodoProvider";

export const AddTodo = () => {
  const { todos, setTodos } = useTodoContext();
  const handleClick = () =>
    setTodos([{ id: uuid(), title: "", completed: false }, ...todos]);

  return <div onClick={handleClick}>➕ TODO</div>;
};
