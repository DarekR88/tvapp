import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  formChange: false
};

const slice = createSlice({
  name: 'formChange',
  initialState,
  reducers: {
    change: (state, action) => {
      state.formChange = action.payload;
    }
  },
});

export const reducer = slice.reducer;
export const actions = slice.actions;