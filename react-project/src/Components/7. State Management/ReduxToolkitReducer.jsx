import { createSlice } from "@reduxjs/toolkit";
export const myslice = createSlice({
  name: "myuser",
  initialState: [
    {
      id: 1,
      name: "Bhartesh",
    },
  ],
  reducers: {
    addUser(state, action) {
      state.push(action.payload);
    },
  },
});

export const { addUser } = myslice.actions;
