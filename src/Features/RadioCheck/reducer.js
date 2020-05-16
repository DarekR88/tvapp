import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  radioCheck: ''
};

const slice = createSlice({
  name: 'radioCheck',
  initialState,
  reducers: {
    results: (state, action) => {
      state.radioCheck = action.payload;
    }
  },
});

export const reducer = slice.reducer;
export const actions = slice.actions;