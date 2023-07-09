// import PropTypes from 'prop-types';

//с кнопкой удаления
// const ContactList = ({ contacts, onDeleteContact }) => (
  const ContactList = ({ contacts }) => (
  <ul>
    {contacts.map(({ id, name, number }) => (
      <li key={id}>
        <p>{name}: <span>{number}</span></p> 
        {/* <button onClick={() => onDeleteContact(id)}>Удалить</button> */}
    </li>
    ))}
  </ul>
)
export default ContactList;