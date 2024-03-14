import { Button, Form, Input, Modal, Select } from "antd";
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { TodoInputModal } from "../common/TodoInputModal";
import { addToDo } from "../store/toDoAddSlice";

const { Option } = Select;

export const TaskAddForm = () => {
  const [title, setTitle] = useState("");
  const [priority, setPriority] = useState("low");
  const [modalVisible, setModalVisible] = useState(false);

  const showModal = () => {
    setModalVisible(true);
  };

  const handleCancel = () => {
    setModalVisible(false);
  };

  const dispatch = useDispatch();

  const handleFormSubmit = () => {
    if (!title.trim()) return;
    dispatch(addToDo({ title, priority }));
    setTitle("");
    setPriority("low");
    setModalVisible(false);
  };

  return (
    <div style={{ marginTop: "16px" }}>
      <div style={{ maxWidth: 400, margin: "auto" }}>
        <Button type="primary" onClick={showModal}>
          Add New Todo
        </Button>
      </div>

      <TodoInputModal
        title={"Add Todo"}
        todoModalVisible={modalVisible}
        setTodoModalVisible={handleCancel}
        handleTodoSubmit={handleFormSubmit}
        editedToDo={""}
        setEditedToDo={""}
      />
      <Modal
        title="Add Todo"
        visible={modalVisible}
        onCancel={handleCancel}
        footer={null}
      >
        <Form layout="vertical" onFinish={handleFormSubmit}>
          <Form.Item label="Title">
            <Input
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              placeholder="Todo Title"
            />
          </Form.Item>
          <Form.Item label="Priority">
            <Select
              value={priority}
              onChange={(value) => setPriority(value)}
              style={{ width: 120 }}
            >
              <Select.Option value="low">Low</Select.Option>
              <Select.Option value="medium">Medium</Select.Option>
              <Select.Option value="high">High</Select.Option>
            </Select>
          </Form.Item>
          <Form.Item>
            <Button type="primary" htmlType="submit">
              Add Todo
            </Button>
          </Form.Item>
        </Form>
      </Modal>
    </div>
  );
};
