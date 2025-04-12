import {
  createAsyncThunk,
  createSlice,
  isFulfilled,
  isPending,
  isRejected,
} from "@reduxjs/toolkit";

export const fetchusers = createAsyncThunk("users/fetchusers", async () => {
  const response = await fetch("https://jsonplaceholder.typicode.com/users");
  return response.json;
});

const usersSlice = createSlice({
  name: "users",
  initialState: { users: [], status: "idle", error: null },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(isPending, (state) => (state.status = "loading"))
      .addCase(isFulfilled, (state, action) => {
        (state.status = "success"), (state.users = action.payload);
      })
      .addCase(isRejected, (state, action) => {
        (state.status = "Error"), (state.error = action.error.message);
      });
  },
});

export default usersSlice.reducer;
