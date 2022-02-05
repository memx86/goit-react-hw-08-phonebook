import { configureStore } from "@reduxjs/toolkit";
import contactsReducer from "./contacts/contacts-slice";
// import contactsReducer from "./contacts/contacts-reducer";

export const store = configureStore({
  reducer: {
    contacts: contactsReducer,
  },
  devTools: process.env.NODE_ENV === "development",
});

export default store;
