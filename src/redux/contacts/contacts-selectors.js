export const getContacts = (state) => state.contacts.items;
export const getFilter = (state) => state.contacts.filter;

export const getNames = (state) =>
  getContacts(state).map((contact) => contact.name);

export const filterContacts = (state) => {
  const contacts = getContacts(state);
  const filter = getFilter(state);
  const filterValue = filter.toLowerCase().trim();

  return contacts.filter(({ text }) =>
    text.toLowerCase().includes(filterValue)
  );
};
