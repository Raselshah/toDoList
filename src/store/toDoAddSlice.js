import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  toDoList: JSON.parse(localStorage.getItem("toDoList")) || [], // Retrieve initial state from localStorage if available todo list
};

const toDoAddSlice = createSlice({
  name: "toDoList",
  initialState,
  reducers: {
    addToDo: (state, action) => {
      state.toDoList.push({
        ...action.payload,
        id: Date.now(),
        completed: false,
      });
      localStorage.setItem("toDoList", JSON.stringify(state.toDoList)); // Update localStorage after adding todo
    },
    toggleToDo: (state, action) => {
      const { id } = action.payload;
      const todo = state.toDoList.find((todo) => todo.id === id);
      if (todo) {
        todo.completed = !todo.completed;
        localStorage.setItem("toDoList", JSON.stringify(state.toDoList)); // Update localStorage after toggling todo
      }
    },
    deleteToDo: (state, action) => {
      state.toDoList = state.toDoList.filter(
        (todo) => todo.id !== action.payload
      );
      localStorage.setItem("toDoList", JSON.stringify(state.toDoList)); // Update localStorage after deleting todo
    },
    editToDo: (state, action) => {
      const { id, title, priority } = action.payload;
      const todoToUpdate = state.toDoList.find((todo) => todo.id === id);
      if (todoToUpdate) {
        todoToUpdate.title = title;
        todoToUpdate.priority = priority;
        localStorage.setItem("toDoList", JSON.stringify(state)); // Update localStorage after update todo
      }
    },
  },
});

export const { addToDo, toggleToDo, deleteToDo, editToDo } =
  toDoAddSlice.actions;

export default toDoAddSlice.reducer;
