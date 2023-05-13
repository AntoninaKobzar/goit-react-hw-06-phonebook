export const getContacts = ({ contacts: { contacts } }) => contacts;
export const getFilter = state => state.filter;
export const contactList=({ contacts: { contacts }, filter }) => {
  if (!filter) {
    return contacts;
  }
  return contacts.filter(contact =>
    contact.name.toLowerCase().includes(filter)
  );
};