import React, {useState} from 'react'

export const TodoFrom = ({addTodo}) => {
    const[value,setValue]=useState("")

    const handleSumbit = e =>{
        e.preventDefault();
        addTodo(value);
        setValue("")
    }
  return (
    <form className="TodoForm" onSubmit={handleSumbit}>
      <input
        type="text"
        className="TodoInput"
        value ={value}
        placeholder="What is the task today"
        onChange={(e) => setValue(e.target.value)}
      />
      <button type="sumbit" className="todo-btn">Add Task</button>
    </form>
  );
}
