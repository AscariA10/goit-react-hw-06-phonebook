import { createSlice } from '@reduxjs/toolkit';

const filterSlice = createSlice({
   name: 'filters',
   initialState: [],
   reducers: {
      filterContacts(state, action) {
         return action.payload.toLowerCase();
      },
   },
});

export const { filterContacts } = filterSlice.actions;

export const filtersReducer = filterSlice.reducer;
