import { configureStore } from "@reduxjs/toolkit";
import counterSlice from "../features/counter/counterSlice";
import postSclice from "../features/post/postSclice";

export const store = configureStore({
  reducer: {
    counter: counterSlice,
    posts: postSclice,
  },
});
