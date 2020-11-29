import { createReducer } from '@reduxjs/toolkit';

import {
  editInputFilter,
  addContactSuccess,
  getContactsSuccess,
  removeContactsSuccess
} from '../action/contacts';

const initialState = {
  items: [],
  filter: ''
};

export default createReducer(initialState, {
  [addContactSuccess]: (state, { payload }) => ({
    ...state,
    items: [...state.items, payload],
  }),
  [getContactsSuccess]: (state, { payload }) => ({
    ...state,
    items: [...payload],
  }),
  [removeContactsSuccess]: (state, { payload }) => ({
    ...state,
    items: state.items.filter(el => el.id !== payload),
  }),
  [editInputFilter]: (state, { payload }) => ({
    ...state,
    filter: payload,
  }),
})
