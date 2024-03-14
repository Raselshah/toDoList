import { Form, Input, Modal, Select } from "antd";
const { Option } = Select;

export const TodoInputModal = ({
  todoModalVisible,
  setTodoModalVisible,
  editedToDo,
  setEditedToDo,
  handleTodoSubmit,
  title,
}) => {
  return (
    <Modal
      title={title}
      visible={todoModalVisible}
      onCancel={() => setTodoModalVisible(false)}
      onOk={handleTodoSubmit}
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
  );
};
