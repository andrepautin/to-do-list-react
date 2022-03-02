import ToDo from "./ToDo";
// import { v4 as uuidv4 } from 'uuid';
// import { useEffect } from "react";
import NewTodoForm from "./NewTodoForm";
import { ListGroup, ListGroupItem } from "react-bootstrap";
import "./ToDoList.css";
function ToDoList({todos, addTodo, updateTodo, deleteTodo}) {
  return (
    <div className="todo-list">
      <div>
        <NewTodoForm addTodo={addTodo}/>
      </div>
      <ListGroup className="mt-3">
        {todos 
        && todos.sort((a, b) => a.priority - b.priority) 
        && todos.map(
          (todo) => 
          <ListGroupItem key={todo.id}>
            <ToDo 
              todo={todo} 
              updateTodo={updateTodo} 
              deleteTodo={deleteTodo}
            /> 
          </ListGroupItem> 
        )}
      </ListGroup>
    </div>
  )
}

export default ToDoList;