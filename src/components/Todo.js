import { useState, useEffect, useRef } from "react";
import styled from "styled-components";
import { colors } from "../styles";

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
    <Tile>
      <Info>
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
      </Info>
      <div onClick={onTodoDelete}>{"🗑"}</div>
    </Tile>
  );
};

const Tile = styled.div`
  border: 1px solid ${colors.lightGrey};
  border-radius: 0.5rem;
  padding: 1.5rem;
  box-shadow: 2px 2px 2px ${colors.lightGrey};
  display: flex;
  justify-content: space-between;
  margin-bottom: 16px;
`;

const Info = styled.div`
  display: flex;
`;
