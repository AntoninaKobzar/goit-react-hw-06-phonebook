
import ContactForm from '../components/ContactForm';
import ContactList from '../components/ContactList';
import Filter from '../components/Filter';
import { useSelector } from 'react-redux';
import { getContacts, allContacts } from 'redux/selectors';
import css from './App.module.css';

function App() {
  const contacts = useSelector(getContacts);
  const getFilteredContacts = useSelector(allContacts);
  
    return (
      <div className={css.container}>
        <h1>Phonebook</h1>
        <ContactForm/>
        <h2>Contacts</h2>
        <Filter />
          {getFilteredContacts.length === 0 ? (
            <p>You have no contact with this name</p>
          ) : (
            <ContactList />
          )}
      </div>
    );
  }


export default App;
