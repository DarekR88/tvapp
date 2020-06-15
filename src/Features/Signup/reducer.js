import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  signupOpen: false
};

const slice = createSlice({
  name: 'signupOpen',
  initialState,
  reducers: {
    signupOpen: (state, action) => {
      state.signupOpen = action.payload;
    }
  },
});

export const reducer = slice.reducer;
export const actions = slice.actions;