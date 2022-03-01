import "./ToDo.css";
function ToDo({todo, updateTodo, deleteTodo}) {
  // update todo fn
  // delete todo fn
    // all should alter state of todos in parent fns

  return (
    <div className="todo">
      <div className="description">{todo.description}</div>
      <div className="priority">{todo.priority}</div>
    </div>
  )
}

export default ToDo;