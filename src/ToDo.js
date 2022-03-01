import "./ToDo.css";
import Button from "react-bootstrap/Button";
function ToDo({todo, updateTodo, deleteTodo}) {
  // update todo fn
  // delete todo fn
    // all should alter state of todos in parent fns
  function edit() {
    // should allow user to edit info
    // updateTodo(todo)
  }

  function remove() {
    deleteTodo(todo.id);
  }

  return (
    <div className="todo">
      <div className="description">{todo.description}</div>
      <div className="priority">{todo.priority}</div>
      <Button className="btn" onClick={edit}>Edit</Button>
      <Button className="btn" onClick={remove}>Delete</Button>
    </div>
  )
}

export default ToDo;