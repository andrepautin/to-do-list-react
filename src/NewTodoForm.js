import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import "./NewTodoForm.css";
import { useState } from "react";
function NewTodoForm({addTodo}) {
  const [description, setDescription] = useState("");
  const [priority, setPriority] = useState(1);
  const [todoId, setTodoId] = useState(0);
  function handleDescriptionChange(evt) {
    evt.preventDefault();
    setDescription(evt.target.value);
  }

  function handlePriorityChange(evt) {
    evt.preventDefault();
    setPriority(evt.target.value);
  }

  function handleSubmit(evt) {
    evt.preventDefault();
    if (description === "") {
      return alert ("Description is required");
    }
    let newTodo = {};
    newTodo.id = todoId;
    newTodo.description = description;
    newTodo.priority = priority;
    addTodo(newTodo);
    setTodoId(todoId + 1); 
    setDescription("");
    setPriority(1); 
  }

  return (
    <Form onSubmit={handleSubmit}>
      <Form.Group className="flex-container">
      <Form.Label htmlFor="searchBox">Todo
        <Form.Control
          className="flex-child"
          value={description}
          id="addTodo"
          type="text"
          placeholder="Add new todo"
          onChange={handleDescriptionChange}
        />
      </Form.Label>
      <Form.Label>Priority
        <Form.Select value={priority} onChange={handlePriorityChange} className="flex-child">
          <option value={1}>1</option>
          <option value={2}>2</option>
          <option value={3}>3</option>
        </Form.Select>
      </Form.Label>
      </Form.Group>
      <Button onClick={handleSubmit}>Submit ToDo</Button>
    </Form>
  )
}

export default NewTodoForm;