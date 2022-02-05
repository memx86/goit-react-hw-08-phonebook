import { combineReducers } from "redux";
import { createReducer } from "@reduxjs/toolkit";
import {
  getContactsRequest,
  getContactsSuccess,
  getContactsError,
  addContactRequest,
  addContactSuccess,
  addContactError,
  removeContactRequest,
  removeContactSuccess,
  removeContactError,
  changeFilter,
} from "./contacts-actions";

const items = createReducer([], {
  [getContactsSuccess]: (_, { payload }) => payload,
  [addContactSuccess]: (state, { payload }) => [...state, payload],
  [removeContactSuccess]: (state, { payload }) =>
    state.filter((item) => item.id !== payload),
});
const filter = createReducer("", {
  [changeFilter]: (_, { payload }) => payload,
});
const loading = createReducer(false, {
  [getContactsRequest]: () => true,
  [getContactsSuccess]: () => false,
  [getContactsError]: () => false,
  [addContactRequest]: () => true,
  [addContactSuccess]: () => false,
  [addContactError]: () => false,
  [removeContactRequest]: () => true,
  [removeContactSuccess]: () => false,
  [removeContactError]: () => false,
});
const error = createReducer(null, {
  [getContactsError]: (_, { payload }) => payload,
  [getContactsRequest]: () => null,
  [addContactError]: (_, { payload }) => payload,
  [addContactRequest]: () => null,
  [removeContactError]: (_, { payload }) => payload,
  [removeContactRequest]: () => null,
});

export default combineReducers({
  items,
  filter,
  loading,
  error,
});
