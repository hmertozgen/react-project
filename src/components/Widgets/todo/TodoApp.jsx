import React from "react";
import TodoComp from "./TodoComp";
import "./todocss.css";

function TodoApp() {
  return (
    <div className="container border border-primary rounded mt-5 cap">
      <TodoComp />
    </div>
  );
}

export default TodoApp;
