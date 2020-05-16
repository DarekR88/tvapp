import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  filterCheck: 'AaS'
};

const slice = createSlice({
  name: 'filterCheck',
  initialState,
  reducers: {
    filter: (state, action) => {
      state.filterCheck = action.payload;
    }
  },
});

export const reducer = slice.reducer;
export const actions = slice.actions;