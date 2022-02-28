import ToDo from "./ToDo";
import { v4 as uuidv4 } from 'uuid';
import Button from "react-bootstrap/Button";
import { useState } from "react";
import NewTodoForm from "./NewTodoForm";
function ToDoList({todos, addTodo, updateTodo, deleteTodo}) {

  return (
    <div>
      {todos && todos.map(
        (todo) => 
        <ToDo 
          key={uuidv4()} 
          todo={todo} 
          updateTodo={updateTodo} 
          deleteTodo={deleteTodo}
        />)}
        <Button>Add New Todo</Button>
    </div>
  )
}

export default ToDoList;