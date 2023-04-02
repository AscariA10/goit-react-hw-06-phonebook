import { createSlice } from '@reduxjs/toolkit';

const contactSlice = createSlice({
   name: 'contacts',
   initialState: [
      { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
      { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
      { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
      { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
   ],
   reducers: {
      addContact(state, action) {
         state.push(action.payload);
      },
      deleteContact(state, action) {
         const index = state.findIndex(contact => contact.name === action.payload);
         state.splice(index, 1);
      },
      // filterContactsQuery(state, action) {
      // return state.filter(element =>
      //    element.name.toLowerCase().includes(action.payload.toLowerCase())
      //    );
      // },
      // filterContacts(state, action) {
      // return state.filter(element =>
      //    element.name.toLowerCase().includes(action.payload.toLowerCase())
      // );
      // },
   },
});

export const { addContact, deleteContact } = contactSlice.actions;

export const contactsReducer = contactSlice.reducer;
