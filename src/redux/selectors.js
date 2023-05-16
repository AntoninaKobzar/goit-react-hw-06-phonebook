export const getContacts = ({ contacts: { contacts } }) => contacts;

export const getFilterValue = state => state.filter;
export const visibleContacts = ({ contacts: { contacts }, filter }) => {
    if (!filter) {
    return contacts;
    }
    return contacts.filter(contact =>
    contact.name.toLowerCase().includes(filter)
    );
};    