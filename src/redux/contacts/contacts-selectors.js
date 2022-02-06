import { createSelector } from "@reduxjs/toolkit";

export const getContacts = (state) => state.contacts.items;
export const getFilter = (state) => state.contacts.filter;

export const getNames = createSelector([getContacts], (contacts) =>
  contacts.map((contact) => contact.name)
);

export const filterContacts = createSelector(
  [getContacts, getFilter],
  (contacts, filter) => {
    const filterValue = filter.toLowerCase().trim();
    return contacts.filter(({ name }) =>
      name.toLowerCase().includes(filterValue)
    );
  }
);
