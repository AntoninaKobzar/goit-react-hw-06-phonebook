import { useDispatch, useSelector } from 'react-redux';
import css from './ContactList.module.css';
import { getContacts, getFilterValue } from 'redux/selectors';
import { deleteContact } from 'redux/contactsSlice';

const getVisibleContacts = (contacts, filter) => {
  const normalizedFilter = filter.toLowerCase();
  return contacts.filter(contact =>
    contact.name.toLowerCase().includes(normalizedFilter)
  );
};
console.log(getVisibleContacts);
const ContactList = () => {
  const dispatch = useDispatch();
  const contacts = useSelector(getContacts);
  const filter = useSelector(getFilterValue);
  const visibleContacts = getVisibleContacts(contacts, filter);

  return (
    <ul className={css.list}>
      {visibleContacts.length ? (
        visibleContacts.map(contact => (
          <li key={contact.id} className={css.item}>
            <div>
              {contact.name}:{contact.number}
            </div>

            <button
              type="button"
              className={css.button}
              onClick={() => dispatch(deleteContact(contact.id))}
            >
              Delete
            </button>
          </li>
        ))
      ) : (
        <h3>There are no contacts</h3>
      )}
    </ul>
  );
};
export default ContactList;
