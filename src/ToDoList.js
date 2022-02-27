import ToDo from "./ToDo";
import { v4 as uuidv4 } from 'uuid';

function ToDoList({todos}) {

  return (
    <div>
      {todos && todos.map((todo) => <ToDo key={uuidv4()} todo={todo}/>)}
    </div>
  )
}

export default ToDoList;