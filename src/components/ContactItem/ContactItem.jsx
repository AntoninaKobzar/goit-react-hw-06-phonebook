import PropTypes from 'prop-types';
import { useSelector, useDispatch } from 'react-redux';
import { deleteContact } from '../../redux/contactsSlice';
import { getContacts } from '../../redux/selectors';
import css from './ContactItem.module.css';

const ContactItem = () => {
  const dispatch = useDispatch();
  const contact = useSelector(getContacts);
  console.log(contact);
  const onDeleteContact = () => dispatch(deleteContact(contact.id));
  console.log(onDeleteContact);
  return (
    <li className={css.item}>
      <span className={css.item}>{contact.name}: </span>
      <a href={`tel:${contact.number}`} className={css.number}>
        {contact.number}
      </a>
      <button type="button" className={css.button} onClick={onDeleteContact}>
        Delete
      </button>
    </li>
  );
};

ContactItem.propTypes = {
  contact: PropTypes.shape({
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    number: PropTypes.string.isRequired,
  }),
  onDeleteContact: PropTypes.func.isRequired,
};
export default ContactItem;
