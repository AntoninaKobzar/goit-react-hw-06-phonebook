import ContactForm from './ContactForm';
import ContactList from './ContactList/ContactList';
import Filter from './Filter/Filter';
import { useSelector } from 'react-redux';
import { getContacts, contactsAdded } from 'redux/selectors';
import css from './App.module.css';

function App() {
  const contacts = useSelector(getContacts);
  const getFilteredContacts = useSelector(contactsAdded);

  return (
    <div className={css.container}>
      <h1>Phonebook</h1>
      <ContactForm />
      <h2>Contacts</h2>
      {contacts.length === 0 ? (
        <p>Your phonebook is empty</p>
      ) : (
        <div>
          <Filter />
          {getFilteredContacts.length === 0 ? (
            <p>You have no contact with this name</p>
          ) : (
            <ContactList />
          )}
        </div>
      )}
    </div>
  );
}

export default App;
