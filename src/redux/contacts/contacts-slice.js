import { createSlice } from "@reduxjs/toolkit";
export const contactsSlice = createSlice({
  name: "contacts",
  initialState: {
    items: [],
    filter: "",
  },
  reducers: {
    add: (state, { payload }) => ({
      ...state,
      items: [...state.items, payload],
    }),
    remove: (state, { payload }) => ({
      ...state,
      items: state.items.filter((contact) => contact.name !== payload),
    }),
    changeFilter: (state, { payload }) => ({
      ...state,
      filter: payload,
    }),
  },
});

export const { add, remove, changeFilter } = contactsSlice.actions;

export default contactsSlice.reducer;
