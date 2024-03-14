import { Button, Form, Input, Select } from "antd";
import React, { useState } from "react";

const { Option } = Select;

export const TaskAddForm = () => {
  const [title, setTitle] = useState("");
  const [priority, setPriority] = useState("low");

  const handleSubmit = () => {};

  return (
    <Form layout="inline" onFinish={handleSubmit}>
      <Form.Item>
        <Input
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          placeholder="Task Title"
        />
      </Form.Item>
      <Form.Item>
        <Select
          value={priority}
          onChange={(value) => setPriority(value)}
          style={{ width: 120 }}
        >
          <Option value="low">Low</Option>
          <Option value="medium">Medium</Option>
          <Option value="high">High</Option>
        </Select>
      </Form.Item>
      <Form.Item>
        <Button type="primary" htmlType="submit">
          Add Task
        </Button>
      </Form.Item>
    </Form>
  );
};
