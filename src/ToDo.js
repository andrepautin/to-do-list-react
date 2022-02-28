function ToDo({todo, updateTodo, deleteTodo}) {

  // add todo fn
  // update todo fn
  // delete todo fn
    // all should alter state of todos in parent fns

  return (
    <div>
      <p>{todo.id}</p>
      <p>{todo.description}</p>
      <p>{todo.priority}</p>
    </div>
  )
}

export default ToDo;