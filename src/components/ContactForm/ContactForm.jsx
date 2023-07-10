import { Component } from 'react';
import PropTypes from 'prop-types';

class ContactForm extends Component {
  state = {
    name: '',
    number: ''
  }
//якщо handleChange розбити на два різні обробника
  //   handleNameChange = e => {
  //   this.setState({ ...this.state, name: e.target.value})
  // }
  // handleNumberChange = e => {
  //     this.setState({ ...this.state, number: e.target.value})
  // }

handleChange = e => {
    const { name, value } = e.target;
    this.setState({[name]: value})
  }

//коли все було в одному App.jsx
  // handleSubmit = e => {
  //   e.preventDefault()
  //   // const { contacts, name, number } = this.state;
  //   // this.setState({contacts: [...contacts, {name: name, number: number, id: nanoid()}]});
  //   this.reset();
  // }

  handleSubmit = e => {
    e.preventDefault();
    const { name, number } = this.state;
    this.reset();

    const isNameExist = this.props.contacts.some(contact => contact.name.toLowerCase() === name.toLowerCase());
      if (isNameExist) {
        alert(`${name} is already in contacts.`);
        return
      }
    
    this.props.onFormSubmit({ name, number });
};

  //очистити форму
  reset = () => {
    this.setState({name: '', number: ''})
  }

  render() {
      const { name, number} = this.state;
      return (

<form onSubmit={this.handleSubmit}>
          <label>
            Name
            <input
              value={name}
              onChange={this.handleChange}
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
              onChange={this.handleChange}
              type="tel"
              name="number"
              pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
              title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
              required
            />
          </label>
          <button type='submit' >Add contact</button>
        </form>
    )
  }
}

ContactForm.propTypes = {
  onFormSubmit: PropTypes.func.isRequired,
    contacts: PropTypes.arrayOf(PropTypes.string.isRequired),

}

export default ContactForm;

