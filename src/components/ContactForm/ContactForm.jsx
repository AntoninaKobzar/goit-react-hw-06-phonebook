

    import css from './ContactForm.module.css';
    import { useDispatch } from 'react-redux';
    import { addContact } from 'redux/contactsSlice';


    
    const ContactForm = () => {
    const dispatch = useDispatch();


    const handleSubmit =({name,number},actions)=> {
        dispatch(addContact(name, number));
        actions.resetForm();
    };

        return (
            
            <form className={css.form}
                initialValues={{
        name: '',
        number: '',
      }}
                onSubmit={handleSubmit}>
                <label>
                    <p className={css.form__label}>Name</p>
                    <input
                        className={css.form__input}
                        type="text"
                        name="name"
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
                        pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
                        title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
                        required
                    />
                </label>
                <button type="submit" className={css.form__button}>Add contact</button>
            </form>
            );
}



    export default ContactForm;