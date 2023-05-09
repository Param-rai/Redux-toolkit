import { createSlice } from "@reduxjs/toolkit";

const initialState = [
  { id: "032", name: "param" },
  { id: "01", name: "tanuj" },
  { id: "03", name: "shalini" },
];

const userSlice = createSlice({
  name: "users",
  initialState,
  reducers: {},
});

export const selectAllUser = (store) => store.users;
export default userSlice.reducer;
