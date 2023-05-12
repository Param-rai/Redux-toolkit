import { configureStore } from "@reduxjs/toolkit";
import counterSlice from "../features/counter/counterSlice";
import postSclice from "../features/post/postSlice";
import userSlice from "../features/users/userSlice";

export const store = configureStore({
  reducer: {
    counter: counterSlice,
    posts: postSclice,
    users: userSlice,
  },
});
