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



// import { Component } from 'react';
// import { nanoid } from "nanoid";

//  email: "",
//   password: "",
// };

// class SignUpForm extends Component {
//   state = { ...INITIAL_STATE };

//   // Для всіх інпутів створюємо один обробник
//   // Розрізняти інпути будемо за атрибутом name
//   handleChange = evt => {
//     const { name, value } = evt.target;
//     this.setState({ [name]: value });
//   };

//   handleSubmit = evt => {
//     evt.preventDefault();
//     const { login, email, password } = this.state;
//     console.log(`Login: ${login}, Email: ${email}, Password: ${password}`);
//     this.props.onSubmit({ ...this.state });
//     this.reset();
//   };

//   reset = () => {
//     this.setState({ ...INITIAL_STATE });
//   };

//   render() {
//     const { login, email, password } = this.state;

//     return (
//       <form onSubmit={this.handleSubmit}>
//         <label>
//           Name
//           <input
//             type="text"
//             placeholder="Enter login"
//             name="login"
//             value={login}
//             onChange={this.handleChange}
//           />
//         </label>
//         <label>
//           Email
//           <input
//             type="email"
//             placeholder="Enter email"
//             name="email"
//             value={email}
//             onChange={this.handleChange}
//           />
//         </label>
//         <label>
//           Password
//           <input
//             type="password"
//             placeholder="Enter password"
//             name="password"
//             value={password}
//             onChange={this.handleChange}
//           />
//         </label>

//         <button type="submit">Sign up as {login}</button>
//       </form>
//     );
//   }
// }

// export default SignUpForm;// Виносимо об'єкт із примітивами в константу, щоб було зручно скидати.
// // Не можна використовувати, якщо в якійсь властивості стану зберігається складний тип.
// const INITIAL_STATE = {
//   login: "",
 