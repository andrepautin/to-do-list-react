import ToDoList from "./ToDoList";
import Container from "react-bootstrap/Container";
import './ToDoListContainer.css';
import { useState, useEffect } from "react";

function ToDoListContainer() {
  const [todos, setTodos] = useState([]);

  function addTodo(todo) {
    setTodos(todos => [...todos, todo]);
  }

  function updateTodo(todo) {
    for (let i = 0; i < todos.length; i++) {
      if (todos[i].id === todo.id) {
        todos[i] = todo;
        setTodos([...todos]);
      }
    }
  }

  function deleteTodo(id) {
    setTodos(todos => todos.filter(todo => todo.id !== id));
  }

  return (
    <Container>
      <ToDoList todos={todos} addTodo={addTodo} updateTodo={updateTodo} deleteTodo={deleteTodo}/>
    </Container>
  )
}

export default ToDoListContainer;