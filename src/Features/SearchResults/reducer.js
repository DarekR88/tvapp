import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  searchResults: ''
};

const slice = createSlice({
  name: 'searchResults',
  initialState,
  reducers: {
    results: (state, action) => {
      state.searchResults = action.payload;
    }
  },
});

export const reducer = slice.reducer;
export const actions = slice.actions;