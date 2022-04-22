import React from "react";
import CreateTask from "./todoapp/CreateTask";
// import { useState, useEffect } from "react";
import TaskList from "./todoapp/TaskList";

const tasks = localStorage.getItem("tasks")
  ? JSON.parse(localStorage.getItem("tasks"))
  : [];

class Todo extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      tasks: [],
    };
  }

  createTask = (task) => {
    if (task.trim() === "") {
      alert("Task can't be empty");
      return;
    }
    tasks.push({ task, isCompleted: false });
    localStorage.setItem("tasks", JSON.stringify(tasks));
    this.setState({ tasks: tasks });
  };
  toggleTask = (taskId) => {
    const taskItem = tasks[taskId];
    taskItem.isCompleted = !taskItem.isCompleted;
    this.setState({ tasks: tasks });
    localStorage.setItem("tasks", JSON.stringify(tasks));
  };

  deleteTask = (taskId) => {
    tasks.splice(taskId, 1);
    this.setState({ tasks: tasks });
    localStorage.setItem("tasks", JSON.stringify(tasks));
  };
  editTask = (taskId, task) => {
    const taskItem = tasks[taskId];
    taskItem.task = task;
    this.setState({ tasks: tasks });
    localStorage.setItem("tasks", JSON.stringify(tasks));
  };

  render() {
    return (
      <div className="main">
        <h1>Todos</h1>
        <div className="content">
          <CreateTask createTask={this.createTask} />
          <br />
          <TaskList
            tasks={this.state.tasks}
            deleteTask={this.deleteTask}
            editTask={this.editTask}
            toggleTask={this.toggleTask}
          />
        </div>
      </div>
    );
  }
}

export default Todo;
