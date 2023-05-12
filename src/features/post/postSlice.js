import { createSlice, nanoid, createAsyncThunk } from "@reduxjs/toolkit";
import { sub } from "date-fns";
import axios from "axios";

const POST_URL = "https://jsonplaceholder.typicode.com/posts";

const initialState = {
  posts: [],
  status: "idle", // 'idle' | "loading" | "succeeded" | "failed"
  error: null,
};

export const fetchPost = createAsyncThunk("posts/fetchpost", async () => {
  const res = await axios.get(POST_URL);
  return [...res.data];
});

export const addNewPost = createAsyncThunk("posts/addNewPost", async (post) => {
  const res = await axios.post(POST_URL, post);
  console.log(res.data);
  return res.data;
});

export const postSlice = createSlice({
  name: "posts",
  initialState,
  reducers: {
    addPost: {
      reducer(state, action) {
        // immer js help under the hood to not mutate the state
        state.posts.push(action.payload);
      },
      prepare(title, content, userId) {
        return {
          payload: {
            id: nanoid(),
            title,
            content,
            userId,
            date: new Date().toISOString(),
            reactions: {
              thumbsUp: 0,
              wow: 0,
              heart: 0,
              rocket: 0,
              coffee: 0,
            },
          },
        };
      },
    },
    addReaction(state, action) {
      const { postId, reaction } = action.payload;
      const existingPost = state.posts.find((post) => post.id === postId);
      if (existingPost) {
        existingPost.reactions[reaction]++;
      }
    },
  },
  extraReducers(builder) {
    builder
      .addCase(fetchPost.pending, (state, action) => {
        state.status = "loading";
      })
      .addCase(fetchPost.fulfilled, (state, action) => {
        state.status = "succeeded";
        let min = 1;
        // adding date and reaction manually coz api doesn't contain it
        const loadedPost = action.payload.map((post) => {
          post.date = sub(new Date(), { minutes: min++ }).toISOString();
          post.reactions = {
            thumbsUp: 0,
            wow: 0,
            heart: 0,
            rocket: 0,
            coffee: 0,
          };
          return post;
        });

        //add posts to array
        state.posts = state.posts.concat(loadedPost); // muting handle by immer
      })
      .addCase(fetchPost.rejected, (action, state) => {
        state.status = "failed";
        state.error = action.error.message;
      })
      .addCase(addNewPost.fulfilled, (state, action) => {
        action.payload.userId = Number(action.payload.userId);
        action.payload.date = new Date().toISOString();
        action.payload.reactions = {
          thumbsUp: 0,
          wow: 0,
          heart: 0,
          rocket: 0,
          coffee: 0,
        };
        state.posts.push(action.payload);
      });
  },
});

export const selectAllPost = (store) => store.posts.posts;
export const getPostStatus = (store) => store.posts.status;
export const getPostError = (store) => store.posts.error;

export const { addPost, addReaction } = postSlice.actions;
export default postSlice.reducer;
