function ToDo({todo, updateTodo, deleteTodo}) {

  // add todo fn
  // update todo fn
  // delete todo fn
    // all should alter state of todos in parent fns

  return (
    <div>
      <p>ID: {todo.id}</p>
      <p>DESCRIPTION: {todo.description}</p>
      <p>PRIORITY: {todo.priority}</p>
    </div>
  )
}

export default ToDo;