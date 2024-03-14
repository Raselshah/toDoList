import { configureStore } from "@reduxjs/toolkit";
import taskReducer from "./toDoAddSlice";

export default configureStore({
  reducer: {
    toDoList: taskReducer,
  },
});
