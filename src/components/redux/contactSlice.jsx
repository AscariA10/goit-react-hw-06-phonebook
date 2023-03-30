import { createSlice } from '@reduxjs/toolkit';

const contactSlice = createSlice({
   name: 'contacts',
   initialState: [],
   reducers: {
      addContact(state, action) {
         state.push(action.payload);
      },
      deleteContact(state, action) {
         const index = state.findIndex(contact => contact.name === action.payload);
         state.splice(index, 1);
      },
   },
});

export const { addContact, deleteContact } = contactSlice.actions;

export const contactsReducer = contactSlice.reducer;
