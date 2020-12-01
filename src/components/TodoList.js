import { Todo } from "./Todo";
import { useTodoContext } from "./TodoProvider";

export const TodoList = () => {
  const { todos, setTodos } = useTodoContext();

  return (
    <ul>
      <li>
        {todos.map((todo, index) => (
          <Todo
            key={index}
            item={todo}
            onCompletedToggle={(completed) => {
              const newTodos = [
                ...todos.slice(0, index),
                {
                  ...todo,
                  completed,
                },
                ...todos.slice(index + 1),
              ];
              setTodos(newTodos);
            }}
          />
        ))}
      </li>
    </ul>
  );
};
