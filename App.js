import React, { useState } from "react";
import "./App.css";

const App = () => {
  const [formData, setFormData] = useState({ task: "" });
  const [list, setList] = useState([{ id: 1, name: "yoga", isDone: true }]);
  console.log(formData);

  function handleChange(event) {
    setFormData((prevData) => {
      return {
        ...prevData,
        [event.target.name]: event.target.value,
      };
    });
  }

  function handleSubmit(event) {
    event.preventDefault();
    let newTask = { id: list.length + 1, name: formData.task, isDone: false };
    setList([...list, newTask]);
  }

  function handleClick(taskId) {
    setList(
      list.map((task) => {
        if (task.id === taskId) {
          return {
            ...task,
            isDone: !task.isDone,
          };
        } else {
          return task;
        }
      })
    );
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Task"
          name="task"
          onChange={handleChange}
        />
        <button type="submit">Add</button>
      </form>
      {list.filter((x) => !x.isDone).length} remaning tasks out of {list.length}{" "}
      tasks
      <ul>
        {list.map((task) => (
          <li
            className={task.isDone ? "strike" : ""}
            onClick={() => {
              handleClick(task.id);
            }}
          >
            {task.name}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default App;
