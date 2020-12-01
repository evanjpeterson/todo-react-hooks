import { useState, useEffect, useRef } from "react";

export const Todo = ({ todo, onTodoEdit, onTodoDelete }) => {
  const { title, completed } = todo;
  const [isEditing, setIsEditing] = useState(title === "");
  const titleInputEl = useRef(null);

  useEffect(() => {
    if (isEditing) {
      titleInputEl.current.focus();
    }

    if (!isEditing && title === "") {
      onTodoDelete();
    }
  });

  const toggleCompleted = () =>
    onTodoEdit({
      ...todo,
      completed: !completed,
    });

  const enterEditMode = () => {
    setIsEditing(true);
  };

  const exitEditMode = () => {
    setIsEditing(false);
  };

  const handleEditModeSubmit = (e) => {
    exitEditMode();
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
      <div onClick={toggleCompleted}>{completed ? "🙆‍♂️ " : "️️🙅‍♀️ "}</div>
      {isEditing ? (
        <form onSubmit={handleEditModeSubmit}>
          <input
            type="text"
            value={title}
            onChange={editTitle}
            onBlur={exitEditMode}
            onKeyUp={({ key }) => {
              if (key === "Escape") {
                exitEditMode();
              }
            }}
            ref={titleInputEl}
          />
        </form>
      ) : (
        <span onClick={enterEditMode}>{title || "<no title>"}</span>
      )}
      <div onClick={onTodoDelete}>{"🗑"}</div>
    </div>
  );
};
