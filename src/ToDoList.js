import ToDo from "./ToDo";
// import { v4 as uuidv4 } from 'uuid';
// import { useState } from "react";
import NewTodoForm from "./NewTodoForm";
import "./ToDoList.css";
function ToDoList({todos, addTodo, updateTodo, deleteTodo}) {

  return (
    <div className="todo-list">
      <div>
        <NewTodoForm addTodo={addTodo}/>
      </div>
      <div>
        {todos && todos.map(
          (todo) => 
          <ToDo 
            key={todo.id} 
            todo={todo} 
            updateTodo={updateTodo} 
            deleteTodo={deleteTodo}
          />)}  
      </div>
    </div>
  )
}

export default ToDoList;