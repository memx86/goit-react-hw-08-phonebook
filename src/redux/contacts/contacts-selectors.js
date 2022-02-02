export const getContacts = (state) => state.contacts.items;
export const getFilter = (state) => state.contacts.filter;

export const getNames = (state) => {
  const contacts = getContacts(state);
  return contacts.map((contact) => contact.name);
};

export const filterContacts = (state) => {
  const contacts = getContacts(state);
  const filter = getFilter(state);
  if (!filter) return contacts;
  const filterValue = filter.toLowerCase().trim();
  return contacts.filter(({ name }) =>
    name.toLowerCase().includes(filterValue)
  );
};
