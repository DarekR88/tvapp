import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  peopleSearchResults: ''
};

const slice = createSlice({
  name: 'peopleSearchResults',
  initialState,
  reducers: {
    peopleResults: (state, action) => {
      state.peopleSearchResults = action.payload;
    }
  },
});

export const reducer = slice.reducer;
export const actions = slice.actions;