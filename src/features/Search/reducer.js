import { createSlice } from 'redux-starter-kit';

const initialState = {
  searchField: [],
};

const slice = createSlice({
  name: 'searchField',
  initialState,
  reducers: {
    searchField: (state, action) => {
      state.searchField = [...state.searchField, action.payload];
    },
  },
});

export const reducer = slice.reducer;
export const actions = slice.actions;