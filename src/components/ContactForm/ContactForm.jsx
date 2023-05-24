import css from './ContactForm.module.css';
import { useDispatch, useSelector } from 'react-redux';
import { addContact } from 'redux/contactsSlice';
import { getContacts } from '../../redux/selectors';
import { nanoid } from 'nanoid';

const ContactForm = () => {
  const dispatch = useDispatch();
  const contacts = useSelector(getContacts);

  const handleSubmit = event => {
    event.preventDefault();
    const form = event.target;
    const name = form.elements.name.value;
    const number = form.elements.number.value;

    const isAdded = contacts.some(
      contact => contact.text.name.toLowerCase() === name.toLowerCase()
    );
    if (isAdded) {
      alert(`${name} is already in contacts`);
    } else {
      dispatch(addContact({ name, number }));
      form.reset();
    }
  };

  const nameInputId = nanoid();
  const numberInputId = nanoid();

  return (
    <form className={css.form} onSubmit={handleSubmit}>
      <label>
        <p className={css.form__label}>Name</p>
        <input
          className={css.form__input}
          type="text"
          name="name"
          id={nameInputId}
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. 
                        For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
        />
      </label>
      <label>
        <p className={css.form__label}>Number</p>
        <input
          className={css.form__input}
          type="tel"
          name="number"
          id={numberInputId}
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          required
        />
      </label>
      <button type="submit" className={css.form__button}>
        Add contact
      </button>
    </form>
  );
};

export default ContactForm;
