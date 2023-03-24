import { createSlice } from "@reduxjs/toolkit";

const initialState = [];

const todoSlice = createSlice({
  name: "todo",
  initialState,
  reducers: {
    add(state, action) {
      state.push(action.payload);
    },
    remove(state, action) {
      state.splice(action.payload, 1);
    },
    deleteAll(state, action) {
      return [];
    },
  },
});

export const { add, remove, deleteAll } = todoSlice.actions;

export default todoSlice.reducer;
