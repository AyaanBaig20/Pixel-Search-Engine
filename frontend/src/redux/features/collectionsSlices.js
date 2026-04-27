import { createSlice } from "@reduxjs/toolkit";

export const collectionsSlices = createSlice({
  name: "collections",
  initialState: {
    collections: JSON.parse(localStorage.getItem("collections")) || []
  },
  reducers: {
    addCollections: (state, action) => {
      state.collections.push(action.payload);
      localStorage.setItem("collections",JSON.stringify(state.collections))
    },
    removeCollections: (state, action) => {
     state.collections = state.collections.filter(
        (item) => item.id !== action.payload
      );
      localStorage.setItem("collections",JSON.stringify(state.collections))
    },
    clearCollections: (state) => {
      state.collections = [];
    }
  }
});

export const {addCollections,removeCollections,clearCollections} = collectionsSlices.actions
export default collectionsSlices.reducer
