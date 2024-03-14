import { Select } from "antd";
import React, { useState } from "react";

const { Option } = Select;

export const TodoViewList = () => {
  const [filter, setFilter] = useState("all");

  return (
    <div>
      <Select
        defaultValue="all"
        style={{ width: 120, marginBottom: "1rem" }}
        onChange={(value) => setFilter(value)}
      >
        <Option value="all">All</Option>
        <Option value="low">Low Priority</Option>
        <Option value="medium">Medium Priority</Option>
        <Option value="high">High Priority</Option>
      </Select>
    </div>
  );
};
