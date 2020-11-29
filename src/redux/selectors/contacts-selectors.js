import { createSelector } from "reselect";

export const contactsSelector = (state) => state.contacts;

export const allContactsSelector = createSelector(
  contactsSelector,
  (contacts) => contacts.items,
)

export const filterSelector = createSelector(
  contactsSelector,
  (contacts) => contacts.filter,
)

export const getFilteredContacts = createSelector(
  allContactsSelector,
  filterSelector,
  (contacts, filter) => {
    if (contacts.length === 0) {
      return [];
    }
    return contacts.filter((contact) =>
      contact.name.toLowerCase().includes(filter.toLowerCase())
    );
  }
)
