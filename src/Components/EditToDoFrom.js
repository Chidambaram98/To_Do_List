import React, { useState } from "react";

export const EditToDoFrom = ({ editTodo, task }) => {
  const [value, setValue] = useState(task.task);

  const handleSumbit = (e) => {
    e.preventDefault();
    editTodo(value, task.id);

    setValue("");
  };
  return (
    <form className="TodoForm" onSubmit={handleSumbit}>
      <input
        type="text"
        className="TodoInput"
        value={value}
        placeholder="Update task"
        onChange={(e) => setValue(e.target.value)}
      />
      <button type="sumbit" className="todo-btn">
        Update task
      </button>
    </form>
  );
};
