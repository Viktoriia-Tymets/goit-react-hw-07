import { createSelector, createSlice } from '@reduxjs/toolkit';
import { fetchContacts, addContact, deleteContact } from './contactsOps';
import { selectNameFilter } from './filtersSlice';

export const selectContacts = (state) => state.contacts.items;
export const selectLoading = (state) => state.contacts.loading;
export const selectError = (sate) => state.contacts.error;

export const selectFilteredContacts = createSelector(
    [selectContacts, selectNameFilter],
    (contacts, selectFilter) => {
        console.log('selectFilteredContacts', Date.now());
        return contacts.filter((contact) => contact.text.toLowerCase().includes(selectFilter.toLowerCase()))
    }
)


const contactsSlice = createSlice({
  contacts: {
    items: [],
    loading: false,
    error: null
  },
  filters: {
		name: ""
	}
})

export default contactsSlice.reducer;
export const {fetchContacts, addContact, deleteContact } = contactsSlice.actions;