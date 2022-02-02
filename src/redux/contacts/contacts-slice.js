import { createSlice } from "@reduxjs/toolkit";
export const contactsSlice = createSlice({
  name: "contacts",
  initialState: {
    items: [],
    filter: "",
  },
  reducers: {
    add: (state, { payload }) => {
      state.items = [...state.items, payload];
    },
    remove: (state, { payload }) => {
      state.items = state.items.filter((contact) => contact.name !== payload);
    },
    filter: (_, { payload }) => payload,
  },
});

export const { add, remove } = contactsSlice.actions;

export default contactsSlice.reducer;
