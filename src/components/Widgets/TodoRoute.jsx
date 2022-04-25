import React, { useState } from "react";
import reducer, { initialState } from "../../context/reducer";
import { TodoLayer, useTodoLayerValue } from "../../context/TodoContext";

import TodoList from "./todo/TodoList";

function TodoRoute() {
  const [{ todos }, dispatch] = [useTodoLayerValue];

  const [content, setContent] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!content) return;

    const newTodo = {
      id: Math.floor(Math.random() * 4283744324),
      content: content,
      isCompleted: false,
    };

    dispatch({
      type: "ADD-TODO",
      payload: newTodo,
    });

    setContent(" ");
  };

  console.log(todos);

  return (
    <div>
      <TodoLayer initialState={initialState} reducer={reducer} />

      <div className="container">
        <form onSubmit={handleSubmit} className="todo-form">
          <input
            type="text"
            className="todo-input"
            value={content}
            onChange={(e) => setContent(e.target.value)}
          />
          <button className="todo-button">Add</button>
        </form>

        {/*Todo List */}

        {/* <TodoList todos={todos} /> */}
      </div>
    </div>
  );
}

export default TodoRoute;
