import { configureStore } from "@reduxjs/toolkit";
import contactsReducer from "./contacts/contacts-slice";

export const store = configureStore({
  reducer: {
    contacts: contactsReducer,
  },
  devTools: process.env.NODE_ENV === "development",
});

export default store;
