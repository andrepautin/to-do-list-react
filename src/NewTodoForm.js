import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import { useState } from "react";
function NewTodoForm({addTodo}) {
  const [description, setDescription] = useState("");
  const [priority, setPriority] = useState();
  const [todoId, setTodoId] = useState(0);
  function handleDescriptionChange(evt) {
    evt.preventDefault();
    setDescription(evt.target.value);
  }

  function handlePriorityChange(evt) {
    evt.preventDefault();
    setPriority(evt.target.value);
  }

  function handleSubmit() {
    console.log("desc, pri, id --->", description, priority, todoId);
    let newTodo = {};
    newTodo.id = todoId;
    newTodo.description = description;
    newTodo.priority = priority;
    addTodo(newTodo);
    setTodoId(todoId + 1); 
    setDescription("");
    setPriority(); 
  }

  return (
    <Form>
      <Form.Group>
      <Form.Label htmlFor="searchBox"></Form.Label>
        <Form.Control
          className="new-todo"
          value={description}
          id="addTodo"
          type="text"
          placeholder="Add new todo"
          onChange={handleDescriptionChange}
        />
        <Form.Select onChange={handlePriorityChange}>
          <option value={false}>Priority</option>
          <option value={1}>1</option>
          <option value={2}>2</option>
          <option value={3}>3</option>
        </Form.Select>
      </Form.Group>
      <Button onClick={handleSubmit}>Submit ToDo</Button>
    </Form>
  )
}

export default NewTodoForm;