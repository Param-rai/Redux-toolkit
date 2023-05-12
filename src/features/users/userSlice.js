import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const POST_URL = "https://jsonplaceholder.typicode.com/users";

export const fetchUsers = createAsyncThunk("users/fetchusers", async () => {
  const res = await axios.get(POST_URL);
  return [...res.data];
});

const initialState = [];

const userSlice = createSlice({
  name: "users",
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder.addCase(fetchUsers.fulfilled, (state, action) => {
      return action.payload;
    });
  },
});

export const selectAllUser = (store) => store.users;
export default userSlice.reducer;
