import { Button, Select } from "antd";
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { TodoInputModal } from "../common/TodoInputModal";
import { addToDo } from "../store/toDoAddSlice";

const { Option } = Select;

export const TaskAddForm = () => {
  const [addToDoInputData, setAddToDoInputData] = useState({
    title: "",
    priority: "low",
  });
  const [modalVisible, setModalVisible] = useState(false);

  const dispatch = useDispatch();

  const handleFormSubmit = () => {
    if (!addToDoInputData.title.trim()) return;
    dispatch(
      addToDo({
        title: addToDoInputData.title,
        priority: addToDoInputData.priority,
      })
    );
    setAddToDoInputData({ title: "", priority: "low" });
    setModalVisible(false);
  };

  return (
    <div style={{ marginTop: "16px" }}>
      <div style={{ maxWidth: 400, margin: "auto" }}>
        <Button type="primary" onClick={() => setModalVisible(true)}>
          Add New Todo
        </Button>
      </div>

      <TodoInputModal
        title={"Add Todo"}
        todoModalVisible={modalVisible}
        setTodoModalVisible={setModalVisible}
        handleTodoSubmit={handleFormSubmit}
        editedToDo={addToDoInputData}
        setEditedToDo={setAddToDoInputData}
      />
    </div>
  );
};
