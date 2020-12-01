import { useState, useEffect, useRef } from "react";

export const Todo = ({ todo, onTodoEdit }) => {
  const { title, completed } = todo;
  const [isEditing, setIsEditing] = useState(title === "");
  const titleInputEl = useRef(null);

  useEffect(() => {
    if (isEditing) {
      titleInputEl.current.focus();
    }
  }, [isEditing]);

  const toggleCompleted = () =>
    onTodoEdit({
      ...todo,
      completed: !completed,
    });

  const enterEditMode = () => {
    setIsEditing(true);
  };

  const exitEditMode = (e) => {
    setIsEditing(false);

    e.preventDefault();
  };

  const editTitle = ({ target: { value } }) => {
    onTodoEdit({
      ...todo,
      title: value,
    });
  };

  return (
    <div>
      <div onClick={toggleCompleted}>{completed ? "✅  " : "🚫 "}</div>
      {isEditing ? (
        <form onSubmit={exitEditMode}>
          <input
            type="text"
            value={title}
            onChange={editTitle}
            onBlur={exitEditMode}
            ref={titleInputEl}
          />
        </form>
      ) : (
        <span onClick={enterEditMode}>{title || "<no title>"}</span>
      )}
    </div>
  );
};
