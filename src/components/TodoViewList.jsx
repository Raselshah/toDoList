import { Button, Checkbox, Form, Input, List, Modal, Select } from "antd";
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { deleteToDo, editToDo, toggleToDo } from "../store/toDoAddSlice";

const { Option } = Select;

export const TodoViewList = () => {
  const todos = useSelector((state) => state.toDoList.toDoList);
  const [filter, setFilter] = useState("all");
  const dispatch = useDispatch();
  const [editModalVisible, setEditModalVisible] = useState(false);
  const [editedToDo, setEditedToDo] = useState({});

  const handleToggleTodo = (id) => {
    dispatch(toggleToDo({ id }));
  };

  const handleDeleteTodo = (id) => {
    dispatch(deleteToDo(id));
  };

  const handleEdit = (todo) => {
    setEditedToDo(todo);
    setEditModalVisible(true);
  };

  const handleEditSubmit = () => {
    dispatch(editToDo(editedToDo));
    setEditModalVisible(false);
  };

  const filteredtodos =
    filter === "all" ? todos : todos.filter((task) => task.priority === filter);

  return (
    <div style={{ maxWidth: 400, margin: "auto" }}>
      <Select
        defaultValue="all"
        style={{ width: 120, marginBottom: "1rem" }}
        onChange={(value) => setFilter(value)}
      >
        <Select.Option value="all">All</Select.Option>
        <Select.Option value="low">Low Priority</Select.Option>
        <Select.Option value="medium">Medium Priority</Select.Option>
        <Select.Option value="high">High Priority</Select.Option>
      </Select>

      <List
        dataSource={filteredtodos}
        renderItem={(todo) => (
          <List.Item
            style={{
              backgroundColor:
                todo.priority === "high"
                  ? "#FFCCCC"
                  : todo.priority === "medium"
                  ? "#FFFFCC"
                  : "#CCE5FF",
              borderRadius: "8px",
              marginTop: "6px",
            }}
            actions={[
              <Checkbox
                checked={todo.completed}
                onChange={() => handleToggleTodo(todo.id)}
              />,
              <Button key="edit" onClick={() => handleEdit(todo)}>
                Edit
              </Button>,
              <Button type="danger" onClick={() => handleDeleteTodo(todo.id)}>
                Delete
              </Button>,
            ]}
          >
            <List.Item.Meta
              title={todo.title}
              description={`Priority: ${todo.priority}`}
              style={{ padding: "10px" }}
            />
          </List.Item>
        )}
      />

      <Modal
        title="Edit Todo"
        visible={editModalVisible}
        onCancel={() => setEditModalVisible(false)}
        onOk={handleEditSubmit}
      >
        <Form layout="vertical">
          <Form.Item label="Title">
            <Input
              value={editedToDo.title}
              onChange={(e) =>
                setEditedToDo({ ...editedToDo, title: e.target.value })
              }
            />
          </Form.Item>
          <Form.Item label="Priority">
            <Select
              value={editedToDo.priority}
              onChange={(value) =>
                setEditedToDo({ ...editedToDo, priority: value })
              }
            >
              <Option value="low">Low</Option>
              <Option value="medium">Medium</Option>
              <Option value="high">High</Option>
            </Select>
          </Form.Item>
        </Form>
      </Modal>
    </div>
  );
};
