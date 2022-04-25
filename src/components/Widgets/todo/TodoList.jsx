import React from "react";
import TodoApp from "./TodoApp";

const TodoList = ({ todos }) => {
  return (
    <div className="todo-list">
      {todos && todos.map((todo) => <TodoApp key={todo.id} todo={todo} />)}
    </div>
  );
};

export default TodoList;
