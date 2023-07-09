import { Component } from 'react';
// import { nanoid } from 'nanoid';
import ContactList from './ContactList/ContactList';
import Filter from './Filter/Filter';
import ContactForm from './ContactForm/ContactForm';


class App extends Component {
  state = {
    contacts: [
    {id: 'id-1', name: 'Rosie Simpson', number: '459-12-56'},
    {id: 'id-2', name: 'Hermione Kline', number: '443-89-12'},
    {id: 'id-3', name: 'Eden Clements', number: '645-17-79'},
    {id: 'id-4', name: 'Annie Copeland', number: '227-91-26'},
  ],
    filter: ''
    // name: '',
    // number: ''
  }

  // handleNameChange = e => {
    
  //   this.setState({ ...this.state, name: e.target.value})
  //   // console.log(e.currentTarget.value)
  //   //единый обработчик полей
  //   //const { name, value } e.target;
  //   //  this.setState({[name]: value})
  //     // console.log(e.target.name)
  // }

  // handleNumberChange = e => {
  //     this.setState({ ...this.state, number: e.target.value})
  // }

  // handleNameSubmit = e => {
  //   e.preventDefault()
  //   const { contacts, name, number } = this.state;
  //   console.log(this.state)
  //   this.setState({contacts: [...contacts, {name: name, number: number, id: nanoid()}]})

  //   this.reset();
  // }

  // //очистить форму
  // reset = () => {
  //   this.setState({name: '', number: ''})
  // }
  changeFilter = e => {
    this.setState({...this.state, filter: e.target.value})
  }

  //с удалением
  // deleteContact = contactId => {
  //   this.setState(prevState => ({
  //     contacts: prevState.contacts.filter(contact => contact.id !== contactId)
  //   }))
  // }

  formSubmitHandler = data => {
    console.log(data)
  }

  render() {
    // const { contacts, name, number, filter } = this.state;
  const { contacts, filter } = this.state;
    const normalizedFilter = filter.toLowerCase();
      const visibleContacts = contacts.filter(contact =>
    contact.name.toLowerCase().includes(normalizedFilter))
    return (
//       <div>
//   <h1>Phonebook</h1>
//   <ContactForm ... />

//   <h2>Contacts</h2>
//   <Filter ... />
//   <ContactList ... />
// </div>
      <div>
        <h1>Phonebook</h1>
        <ContactForm onSubmit={this.formSubmitHandler} />
        {/* <form onSubmit={this.handleNameSubmit}>
          <label>
            Name
            <input
              value={name}
              onChange={this.handleNameChange}
              type="text"
              name="name"
              pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
              title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
              required
            />
          </label>

          <label>
            Number
            <input
              value={number}
              onChange={this.handleNumberChange}
              type="tel"
              name="number"
              pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
              title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
              required
            />
          </label>
          <button type='submit' >Add contact</button>
        </form> */}
        <h2>Contacts</h2>
        <Filter value={filter} onChange={this.changeFilter}/>
        {/* <Filter value={filter} onChange={this.changeFilter} /> */}
          {/* <label>
            Find contacts by name
            <input
              value={filter}
              onChange={this.changeFilter}
              type="text" />
          </label> */}
        {/* //с удалением */}
        {/* <ContactList contacts={contacts} onDeleteContact={this.deleteContact} /> */}
              <ContactList contacts={visibleContacts}  />
    </div>
  );
  }
};

export default App;




