import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  modalOpen: false
};

const slice = createSlice({
  name: 'modalOpen',
  initialState,
  reducers: {
    modalOpen: (state, action) => {
      state.modalOpen = action.payload;
    }
  },
});

export const reducer = slice.reducer;
export const actions = slice.actions;