import { Component } from 'react';
import ContactList from './ContactList/ContactList';
// import { nanoid } from 'nanoid';


class App extends Component {
  state = {
  contacts: [],
  name: ''
  }
  
  // model.id = nanoid() //=> "V1StGXR8_Z5jdHi6B-myT"

  handleChange = e => {
    this.setState({name: e.target.value})
    // console.log(e.currentTarget.value)
    //единый обработчик полей
    //const { name, value } e.target;
    //  this.setState({[name]: value})
      // console.log(e.target.name)
  }
  handleNameSubmit = e => {
    e.preventDefault()
    console.log(this.state)
    // this.setState(prevState => ({
    //   contacts: [ ...prevState.contacts]
    // }))
    // this.props.onSubmit({ ...this.state });
    // this.props.onSubmit(this.state)
    this.reset();
  }

  //очистить форму
  reset = () => {
    this.setState({contacts: []})
  }
  //с удалением
  // deleteContact = contactId => {
  //   this.setState(prevState => ({
  //     contacts: prevState.contacts.filter(contact => contact.id !== contactId)
  //   }))
  // }

  render() {
      const { contacts, name } = this.state;
    return (
      <div>
        <h2>Phonebook</h2>
        <form onSubmit={this.handleSubmit}>
          <label>
            Name
          {/* <label htmlFor=""> */}
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
          <button type='submit' >Add contact</button>
        </form>
        <h3>Contacts</h3>
        {/* //с удалением */}
        {/* <ContactList contacts={contacts} onDeleteContact={this.deleteContact} /> */}
              <ContactList contacts={contacts}  />
    </div>
  );
  }
};

export default App;



