import React from "react";
import { TaskAddForm } from "./components/TaskAddFrom";
import { TodoViewList } from "./components/TodoViewList";

const App = () => {
  return (
    <div>
      <h1>Todo List</h1>
      <TodoViewList />
      <TaskAddForm />
    </div>
  );
};

export default App;
