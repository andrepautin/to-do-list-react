import ToDo from "./ToDo";
// import { v4 as uuidv4 } from 'uuid';
// import { useState } from "react";
import NewTodoForm from "./NewTodoForm";
function ToDoList({todos, addTodo, updateTodo, deleteTodo}) {

  return (
    <div>
      <NewTodoForm addTodo={addTodo}/>
      {todos && todos.map(
        (todo) => 
        <ToDo 
          key={todo.id} 
          todo={todo} 
          updateTodo={updateTodo} 
          deleteTodo={deleteTodo}
        />)}
    </div>
  )
}

export default ToDoList;