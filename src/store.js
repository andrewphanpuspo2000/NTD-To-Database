import { configureStore } from "@reduxjs/toolkit";
import taskReducer from "./redux/taskSlice";

export const Store = configureStore({
  reducer: {
    tasks: taskReducer,
  },
});

export default Store;
