import { Form } from "./Form";
import "./todowidgetcss.css";

function TodoWidget() {
  return (
    <div className="wrapper">
      <h3>TODOAPP </h3>
      <div className="form-and-todo-box">
        <Form />
      </div>
    </div>
  );
}

export default TodoWidget;
