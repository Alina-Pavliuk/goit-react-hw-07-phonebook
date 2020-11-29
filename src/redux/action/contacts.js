import { createAction } from '@reduxjs/toolkit';

export const addContactRequest = createAction('contacts/addRequest');
export const addContactSuccess = createAction('contacts/addSuccess');
export const addContactError = createAction('contacts/addError');

export const getContactsRequest = createAction('contacts/getRequest');
export const getContactsSuccess = createAction('contacts/getSuccess');
export const getContactsError = createAction('contacts/getError');


export const removeContactsRequest = createAction('contacts/removeRequest');
export const removeContactsSuccess = createAction('contacts/removeSuccess');
export const removeContactsError = createAction('contacts/removeError');

export const addContact = createAction('contacts/add', contactObj => ({
  payload: {
    contactObj,
  }
}));
export const removeContact = createAction('contacts/remove');
export const setContacts = createAction('contacts/set');
export const editInputFilter = createAction('filter/edit');
