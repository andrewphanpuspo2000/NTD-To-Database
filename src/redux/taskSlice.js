import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  taskList: [],
};
const taskSlice = createSlice({
  name: "taskSlice",
  initialState,
  reducers: {
    setLists: (state, action) => {
      state.taskList = action.payload;
    },
  },
});

const { reducer, actions } = taskSlice;

export const { setLists } = actions;

export default reducer;
