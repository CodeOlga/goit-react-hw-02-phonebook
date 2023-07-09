import { Component } from 'react';
import { nanoid } from 'nanoid';

// import PropTypes from 'prop-types';
class ContactForm extends Component {
  state = {
    name: '',
    number: ''
  }
    handleNameChange = e => {

    this.setState({ ...this.state, name: e.target.value})
    // console.log(e.currentTarget.value)
    //единый обработчик полей
    //const { name, value } e.target;
    //  this.setState({[name]: value})
      // console.log(e.target.name)
  }

  handleNumberChange = e => {
      this.setState({ ...this.state, number: e.target.value})
  }

   handleNameSubmit = e => {
    e.preventDefault()
    const { contacts, name, number } = this.state;
    // console.log(this.state)
    this.setState({contacts: [...contacts, {name: name, number: number, id: nanoid()}]})
    //  this.props.onSubmit(this.state)
 
    this.reset();
  }

  //очистить форму
  reset = () => {
    this.setState({name: '', number: ''})
  }

  render() {
       const { name, number} = this.state;
    return (

<form onSubmit={this.handleNameSubmit}>
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
        </form>
    )
  }
}
export default ContactForm;
// const ContactForm = ({ }) => (
//    <form onSubmit={this.handleNameSubmit}>
//           <label>
//             Name
//             <input
//               value={name}
//               onChange={this.handleNameChange}
//               type="text"
//               name="name"
//               pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
//               title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
//               required
//             />
//           </label>

//           <label>
//             Number
//             <input
//               value={number}
//               onChange={this.handleNumberChange}
//               type="tel"
//               name="number"
//               pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
//               title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
//               required
//             />
//           </label>
//           <button type='submit' >Add contact</button>
//         </form>
// )

// export default ContactForm;