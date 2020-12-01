export const Todo = ({ item: { title, completed }, onCompletedToggle }) => (
  <div onClick={() => onCompletedToggle(!completed)}>
    <p>
      {completed ? "✅  " : ""}
      {title}
    </p>
  </div>
);
