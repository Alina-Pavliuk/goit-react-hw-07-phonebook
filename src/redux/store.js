import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit';
import contacts from './reducer/contacts';
import logger from 'redux-logger';

const defaultMiddleware = getDefaultMiddleware()

const store = configureStore({
  reducer: {
    contacts,
  },
  middleware: [...defaultMiddleware, logger]
})

export default store;
