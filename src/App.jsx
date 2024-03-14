import React from "react";
import { TaskAddForm } from "./components/TaskAddFrom";
import { TaskViewList } from "./components/TaskViewList";

const App = () => {
  return (
    <div>
      <h1>Todo List</h1>
      <TaskViewList />
      <TaskAddForm />
    </div>
  );
};

export default App;
