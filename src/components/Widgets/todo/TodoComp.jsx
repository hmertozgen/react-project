import React, { useState, useEffect } from "react";

function TodoComp() {
  const [task, setTask] = useState("");

  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    if (localStorage.getItem("localTasks")) {
      const storedList = JSON.parse(localStorage.getItem("localTasks"));
      setTasks(storedList);
    }
  }, []);

  const addTask = (e) => {
    // e.preventDefault();
    if (task) {
      const newTask = { id: Math.random() * 4564564546, title: task };
      setTasks([...tasks, newTask]);
      localStorage.setItem("localTasks", JSON.stringify([...tasks, newTask]));
      setTask("");
    }
  };
  const handleDelete = (task) => {
    const deleted = tasks.filter((t) => t.id !== task.id);
    console.log(deleted);
    setTasks(deleted);
    localStorage.setItem("localTasks", JSON.stringify(deleted));
  };
  const handleClear = () => {
    setTasks([]);
    localStorage.removeItem("localTasks");
  };
  return (
    <div className="container row">
      <h1 className="mt-3 text-white h1">To-Do App</h1>
      <div className="col-8">
        <input
          name="task"
          type="text"
          value={task}
          placeholder="Write your task..."
          className="form-control"
          onChange={(e) => {
            setTask(e.target.value);
          }}
        />
      </div>
      <div className="col-4">
        <button className="btn btn-primary form-control" onClick={addTask}>
          Add
        </button>
      </div>
      <div className="badge">
        You have{" "}
        {!tasks.length
          ? " no tasks"
          : tasks.length === 1
          ? "1 task"
          : tasks.length > 1
          ? `${tasks.length} tasks`
          : null}
        <div>
          {tasks.map((task) => (
            <div key={task.id} className="row">
              <div className="col-11">
                <span className="form-control bg-white btn mt-2 spa">
                  {task.title}
                </span>
              </div>
              <div className="col-1">
                <button
                  className="mt-2 btn btn-warning"
                  onClick={() => handleDelete(task)}
                >
                  Delete
                </button>
              </div>
            </div>
          ))}
          {!tasks.length ? null : (
            <div
              className="btn btn-secondary mt-4 mb-4"
              onClick={() => handleClear()}
            >
              Clear
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default TodoComp;
