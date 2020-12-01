import { Todo } from "./Todo";
import { AddTodo } from "./AddTodo";
import { useTodoContext } from "./TodoProvider";

export const TodoList = () => {
  const { todos, setTodos } = useTodoContext();

  return (
    <ul>
      <li>
        <AddTodo />
      </li>
      {todos.map((todo, index) => (
        <li key={todo.id}>
          <Todo
            todo={todo}
            onTodoEdit={(newTodo) => {
              const newTodos = [
                ...todos.slice(0, index),
                newTodo,
                ...todos.slice(index + 1),
              ];
              setTodos(newTodos);
            }}
          />
        </li>
      ))}
    </ul>
  );
};
