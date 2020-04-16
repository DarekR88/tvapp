import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  searchTerm: ''
};

const slice = createSlice({
  name: 'searchTerm',
  initialState,
  reducers: {
    active: (state, action) => {
      state.searchTerm = action.payload;
    }
  },
});

export const reducer = slice.reducer;
export const actions = slice.actions;