import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "./coutner/counterSlice";
import userReducer from "./user/userSlice";
import postReducer from "./post/postSlice";

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    user: userReducer,
    post: postReducer,
  },
});
