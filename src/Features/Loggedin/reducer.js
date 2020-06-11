import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  loggedIn: false
};

const slice = createSlice({
  name: 'loggedIn',
  initialState,
  reducers: {
    loggedIn: (state, action) => {
      state.loggedIn = action.payload;
    }
  },
});

export const reducer = slice.reducer;
export const actions = slice.actions;