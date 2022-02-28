import ToDoList from "./ToDoList";
import './ToDoListContainer.css';
import { useState, useEffect } from "react";

function ToDoListContainer() {
  const [todos, setTodos] = useState([]);

  // function to handle newly added, updated, or deleted todos
  function addTodo(todo) {
    setTodos(todos => [...todos, todo]);
  }

  function updateTodo(todo) {
    for (let i = 0; i < todos.length; i++) {
      if (todos[i] === todo.id) {
        todos[i] = todo;
        setTodos([...todos]);
      }
    }
  }

  function deleteTodo(id) {
    setTodos(todos => todos.filter(todo => todo.id !== id));
  }

  return (
    <div className="container">
      <ToDoList todos={todos} addTodo={addTodo} updateTodo={updateTodo} deleteTodo={deleteTodo}/>
    </div>
  )
}

export default ToDoListContainer;