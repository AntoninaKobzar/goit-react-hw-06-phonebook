
import { useDispatch, useSelector } from 'react-redux';
import css from './ContactList.module.css';
import { visibleContacts } from 'redux/selectors';
import { deleteContact } from 'redux/contactsSlice';

const ContactList = () => {
    const dispatch = useDispatch();
    const getFilteredContacts = useSelector(visibleContacts);
    return (
        <ul className={css.list}>
            {getFilteredContacts.map(contact => (
                <li key={contact.id} className={css.item}>
                    <div>
                        {contact.name}:{contact.number}
                    </div>
                    
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