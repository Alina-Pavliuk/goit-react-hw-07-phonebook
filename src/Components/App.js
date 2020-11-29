import React, { useState, useEffect, useRef } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { CSSTransition, TransitionGroup } from 'react-transition-group';

import stylesApp from './App.module.css';
import styles from './ContactItem/ContactItem.module.css';

import ContactForm from './ContactForm/ContactForm';
import Filter from './Filter/Filter';
import ContactItem from '../Components/ContactItem/ContactItem';

import * as actions from '../redux/action/contacts';
import operations from '../redux/operations/contactOperations';
import { allContactsSelector, filterSelector, getFilteredContacts } from '../redux/selectors/contacts-selectors';

// const filterContacts = (contacts, filter) => {
//   if (contacts.length === 0) {
//     return [];
//   }
//   return contacts.filter(contact => contact.name.toLowerCase().includes(filter.toLowerCase()));
// }

const App = () => {
  const contacts = useSelector(allContactsSelector);
  const filter = useSelector(filterSelector);
  const filteredContacts = useSelector(getFilteredContacts);

  const dispatch = useDispatch();
  const [start, setStart] = useState(false);
  const [alert, setAlert] = useState(false);

  // console.log(getContacts(contacts, filter));
  // const firstRender = useRef(false);

  // useEffect(() => {
  //   if (firstRender.current) {
  //     localStorage.setItem('contacts', JSON.stringify(contacts));
  //   } else {
  //     firstRender.current = true;
  //   }
  // }, [contacts]);

  useEffect(() => {
    dispatch(operations.getContacts());
  }, [])
  console.log(contacts);
  const filterHandler = (e) => {
    dispatch(actions.editInputFilter(e.target.value));
  }

  const removeContact = (id) => (e) => {
    dispatch(operations.removeContact(id));

  }

  const addContact = (singleContact) => {
    dispatch(operations.addContact(singleContact))
  }

  // const filteredContacts = filterContacts(contacts, filter);

  return (
    <div className={stylesApp.wrapper}>
      <CSSTransition classNames={{
        enterActive: stylesApp.alertBoxEnterActive,
        exitActive: stylesApp.alertBoxExitActive
      }}
        mountOnEnter
        unmountOnExit
        timeout={300}
        in={alert}>

        <div className={stylesApp.alertBox}>
          <h2>{`The name is already a contact`}</h2>
          <button
            onClick={() => setAlert(false)}
            className={styles.alertBtn}
            type="button"
          >X
          </button>
        </div>
      </CSSTransition>
      <CSSTransition classNames={{
        enterActive: stylesApp.titleEnterActive,
      }} timeout={800} in={start}>
        <h2 className={stylesApp.title}>Phonebook </h2>
      </CSSTransition>

      <ContactForm setAlert={setAlert} addContact={addContact} contacts={contacts} />
      <Filter filter={filter} filterHandler={filterHandler} />

      <TransitionGroup className={stylesApp.contactsList} component="ul">
        {filteredContacts.map(contact =>
          <CSSTransition
            key={contact.id}
            timeout={800}
            classNames={{
              enterActive: styles.listItemEnterActive,
              exitActive: styles.listItemExitActive,
            }}
          >
            <ContactItem {...contact} removeContact={removeContact} />
          </CSSTransition>
        )}

      </TransitionGroup>

    </div>
  );

}

export default App;
