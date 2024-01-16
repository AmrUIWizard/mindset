import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  title: "",
  description: "",
  imageUrl: "",
  editorValue: "",
};

export const postSlice = createSlice({
  name: "post",
  initialState,
  reducers: {
    setTitle: (state, action) => {
      state.title = action.payload;
    },
    setDescription: (state, action) => {
      state.description = action.payload;
    },
    setImageUrl: (state, action) => {
      state.imageUrl = action.payload;
    },
    setEditorValue: (state, action) => {
      state.editorValue = action.payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const { setTitle, setDescription, setImageUrl, setEditorValue } =
  postSlice.actions;

export default postSlice.reducer;
