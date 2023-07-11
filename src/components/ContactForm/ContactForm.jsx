import { Component } from 'react';
import PropTypes from 'prop-types';
import css from './ContactForm.module.css'

class ContactForm extends Component {
  state = {
    name: '',
    number: ''
  }

handleChange = e => {
    const { name, value } = e.target;
    this.setState({[name]: value})
  }


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

  //to clear form
  reset = () => {
    this.setState({name: '', number: ''})
  }

  render() {
      const { name, number} = this.state;
      return (

        <form className={css.formContainer} onSubmit={this.handleSubmit}>
          <label className={css.formLabel}>
            Name
            <input
              className={css.formInput}
              value={name}
              onChange={this.handleChange}
              type="text"
              name="name"
              pattern="^[a-zA-Zа-яА-Я]+(([' \-][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
              title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
              required
            />
          </label>

          <label className={css.formLabel}>
            Number
            <input
              className={css.formInput}
              value={number}
              onChange={this.handleChange}
              type="tel"
              name="number"
              pattern="\+?\d{1,4}?[ .\-\s]?\(?\d{1,3}?\)?[ .\-\s]?\d{1,4}[ .\-\s]?\d{1,4}[ .\-\s]?\d{1,9}"
              title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
              required
            />
          </label>
          <button className={css.formButton} type='submit' >Add contact</button>
        </form>
    )
  }
}

ContactForm.propTypes = {
  onFormSubmit: PropTypes.func.isRequired,
  contacts: PropTypes.arrayOf(PropTypes.objectOf(
    PropTypes.string.isRequired))
}

export default ContactForm;

