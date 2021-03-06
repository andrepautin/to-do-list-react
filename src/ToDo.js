import { useState } from "react";
import "./ToDo.css";
import Button from "react-bootstrap/Button";
import { Form, FormControl, FormGroup, FormSelect } from "react-bootstrap";
function ToDo({todo, updateTodo, deleteTodo}) {
  const [description, setDescription] = useState(todo.description);
  const [priority, setPriority] = useState(todo.priority);

  function edit(evt) {
    evt.preventDefault();
    if (description === "") {
      alert("Description is required");
    }
    todo.description = description;
    todo.priority = priority;
    updateTodo(todo);
  }

  function handleDescriptionChange(evt) {
    evt.preventDefault();
    setDescription(evt.target.value);
  }

  function handlePriorityChange(evt) {
    evt.preventDefault();
    setPriority(evt.target.value);
  }

  function remove() {
    deleteTodo(todo.id);
  }

  return (
    <div className="todo">
      <Form onSubmit={edit} className="edit-form">
        <FormGroup className="description">
          <FormControl
            value={description}
            type="text"
            onChange={handleDescriptionChange}
          />
        </FormGroup>
        <FormGroup className="priority">
          <FormSelect value={priority} onChange={handlePriorityChange}>
            <option value={1}>1</option>
            <option value={2}>2</option>
            <option value={3}>3</option>
          </FormSelect>
        </FormGroup>
        <Button className="ms-2 save" type="submit" >Save</Button>
      </Form>
      <Button className="ms-2" onClick={remove}>Delete</Button>
    </div>
  )
}

export default ToDo;