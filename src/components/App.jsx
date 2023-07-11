import { Component } from 'react';
import { nanoid } from 'nanoid';
import ContactList from './ContactList/ContactList';
import Filter from './Filter/Filter';
import ContactForm from './ContactForm/ContactForm';
import css from './App.module.css';


class App extends Component {
  state = {
    contacts: [
    {id: 'id-1', name: 'Rosie Simpson', number: '459-12-56'},
    {id: 'id-2', name: 'Hermione Kline', number: '443-89-12'},
    {id: 'id-3', name: 'Eden Clements', number: '645-17-79'},
    {id: 'id-4', name: 'Annie Copeland', number: '227-91-26'},
  ],
    filter: ''
  }
  
  changeFilter = e => {
    this.setState({ ...this.state, filter: e.target.value });
  }

  deleteContact = contactId => {
    this.setState(prevState => ({
      contacts: prevState.contacts.filter(contact => contact.id !== contactId)
    }))
    this.setState({filter: ''})
  }

  formSubmitHandler = data => {
  const { contacts } = this.state;
  const newContact = { ...data, id: nanoid() };
  this.setState({ contacts: [...contacts, newContact] })
  }

  render() {
    const { contacts, filter } = this.state;
    const normalizedFilter = filter.toLowerCase();
    const visibleContacts = contacts.filter(contact =>
      contact.name.toLowerCase().includes(normalizedFilter))
    
    return (
      <div className={css.mainContainer}>
        <h1 className={css.headers}>Phonebook</h1>
        <ContactForm onFormSubmit={this.formSubmitHandler} contacts={contacts } />
        <h2 className={css.headers}>Contacts</h2>
        <Filter value={filter} onChange={this.changeFilter} />
        <ContactList contacts={visibleContacts} onDeleteContact={this.deleteContact} />
    </div>
    );
  }
};

export default App;




