
import { useDispatch, useSelector } from 'react-redux';
import css from './ContactList.module.css';
import { allContacts } from 'redux/selectors';
import { deleteContact } from 'redux/contactsSlice';

const ContactList = () => {
    const dispatch = useDispatch();
    const getFilteredContacts = useSelector(allContacts);
    return (
        <ul className={css.list}>
            {getFilteredContacts.map(contact => (
                <li key={contact.id} className={css.item}>
            <span className={css.item}>{contact.name}: </span>
            <a href={`tel:${contact.number}`} className={css.number}>{contact.number}</a>
            <button
                type='button'
                className={css.button}
                onClick={() => dispatch(deleteContact(contact.id))}>Delete</button>
        </li>
            ))}
        </ul>
    );
};



export default ContactList;