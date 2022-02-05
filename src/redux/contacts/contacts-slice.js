import { createSlice } from "@reduxjs/toolkit";
import {
  fetchContacts,
  addContact,
  removeContact,
} from "./contacts-operations";
export const contactsSlice = createSlice({
  name: "contacts",
  initialState: {
    items: [],
    filter: "",
  },
  reducers: {
    changeFilter: (state, { payload }) => ({
      ...state,
      filter: payload,
    }),
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchContacts.fulfilled, (state, { payload }) => ({
        ...state,
        loading: false,
        items: payload,
      }))
      .addCase(fetchContacts.pending, (state) => ({
        ...state,
        loading: true,
      }))
      .addCase(fetchContacts.rejected, (state, { payload }) => ({
        ...state,
        loading: false,
        error: payload,
      }));
    builder
      .addCase(addContact.fulfilled, (state, { payload }) => ({
        ...state,
        loading: false,
        items: [...state.items, payload],
      }))
      .addCase(addContact.pending, (state) => ({
        ...state,
        loading: true,
      }))
      .addCase(addContact.rejected, (state, { payload }) => ({
        ...state,
        loading: false,
        error: payload,
      }));
    builder
      .addCase(removeContact.fulfilled, (state, { payload }) => ({
        ...state,
        loading: false,
        items: state.items.filter((item) => item.id !== payload),
      }))
      .addCase(removeContact.pending, (state) => ({
        ...state,
        loading: true,
      }))
      .addCase(removeContact.rejected, (state, { payload }) => ({
        ...state,
        loading: false,
        error: payload,
      }));
  },
});

export const { changeFilter } = contactsSlice.actions;

export default contactsSlice.reducer;
