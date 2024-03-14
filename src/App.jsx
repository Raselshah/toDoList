import React from "react";
import { TaskAddForm } from "./components/TodoAddFrom";
import { TodoViewList } from "./components/TodoViewList";

const App = () => {
  return (
    <div>
      <h1 style={{ textAlign: "center" }}>Todo List</h1>
      <TodoViewList />
      <TaskAddForm />
    </div>
  );
};

export default App;
