import ToDoList from "./ToDoList";
import './ToDoListContainer.css';
import { useState, useEffect } from "react";

function ToDoListContainer() {
  const [todos, setTodos] = useState([]);

  // function to handle newly added, updated, or deleted todos

  return (
    <div className="container">
      <ToDoList todos={todos}/>
    </div>
  )
}

export default ToDoListContainer;