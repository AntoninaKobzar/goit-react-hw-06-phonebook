export const getContacts = state => state.contacts;

export const getFilterValue = state => state.filter;
export const allContacts = ({ contacts: { contacts }, filter }) => {
    if (!filter) {
    return contacts;
    }
    return contacts.filter(contact =>
    contact.name.toLowerCase().includes(filter)
    );
};    