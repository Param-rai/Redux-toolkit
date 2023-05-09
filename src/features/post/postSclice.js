import { createSlice, nanoid } from "@reduxjs/toolkit";

const initialState = [
  {
    id: "1",
    title: "Learning redux toolkit",
    content: "I am going to master redux toolkit",
  },
  {
    id: "2",
    title: "Slicess....",
    content: "Lorem dkjb kasjfns fadgkBC ksdajflkvb dsjkvbvc difaj ",
  },
];

export const postSlice = createSlice({
  name: "posts",
  initialState,
  reducers: {
    addPost: {
      reducer(state, action) {
        // immer js help under the hood to not mutate the state
        state.push(action.payload);
      },
      prepare(title, content) {
        return {
          payload: {
            id: nanoid(),
            title,
            content,
          },
        };
      },
    },
  },
});

export const selectAllPost = (store) => store.posts;
export const { addPost } = postSlice.actions;
export default postSlice.reducer;
