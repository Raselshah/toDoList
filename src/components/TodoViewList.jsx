import { Button, Checkbox, List, Select } from "antd";
import React, { useMemo, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { TodoInputModal } from "../common/TodoInputModal";
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

  const totalTodoCount = useMemo(() => {
    return todos?.length || 0;
  }, [todos]);

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

      <h2 style={{ fontSize: "16px" }}>Total Todo : {totalTodoCount}</h2>

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

      <TodoInputModal
        title={"Edit Todo"}
        todoModalVisible={editModalVisible}
        setTodoModalVisible={setEditModalVisible}
        handleTodoSubmit={handleEditSubmit}
        editedToDo={editedToDo}
        setEditedToDo={setEditedToDo}
      />
    </div>
  );
};
