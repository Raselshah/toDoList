import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  toDoList: [],
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
    },
    toggleToDo: (state, action) => {
      const { id } = action.payload;
      const todo = state.toDoList.find((todo) => todo.id === id);
      if (todo) {
        todo.completed = !todo.completed;
      }
    },
    deleteToDo: (state, action) => {
      state.toDoList = state.toDoList.filter(
        (todo) => todo.id !== action.payload
      );
    },
  },
});

export const { addToDo, toggleToDo, deleteToDo } = toDoAddSlice.actions;

export default toDoAddSlice.reducer;
