import { createSlice } from "@reduxjs/toolkit";

export const counterSlice = createSlice({
  name: "counter",
  initialState: { count: 0 },
  reducers: {
    increament: (state) => {
      state.count += 1;
    },
    decreament: (state) => {
      state.count -= 1;
    },
    reset: (state) => {
      state.count = 0;
    },
    increamentByAmount: (state, action) => {
      state.count += action.payload;
    },
  },
});

export const { increament, decreament, reset, increamentByAmount } =
  counterSlice.actions;
export default counterSlice.reducer;
