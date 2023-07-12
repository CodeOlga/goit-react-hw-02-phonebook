import PropTypes from 'prop-types';
import ContactItem from 'components/ContactItem/ContactItem';
import css from './ContactList.module.css'

const ContactList = ({ contacts, onDeleteContact }) => (
  <ul className={css.listContainer}>
    {contacts.map(({ id, name, number }) => (
      <ContactItem
        key={id}
        id={id}
        name={name}
        number={number}
        onDeleteContact={() => onDeleteContact(id)}/>
    ))}
  </ul>
)

ContactList.propTypes = {
  contacts: PropTypes.arrayOf(PropTypes.objectOf(
    PropTypes.string.isRequired)),
  onDeleteContact: PropTypes.func.isRequired
}

export default ContactList;














// import PropTypes from 'prop-types';

// const ContactList = ({ contacts, onDeleteContact }) => (
//   <ul>
//     {contacts.map(({ id, name, number }) => (
//       <li key={id}>
//         <p>{name}: <span>{number}</span></p> 
//         <button onClick={() => onDeleteContact(id)}>Удалить</button>
//     </li>
//     ))}
//   </ul>
// )

// ContactList.propTypes = {
//   contacts: PropTypes.arrayOf(PropTypes.shape({
//     id: PropTypes.string.isRequired,
//     name: PropTypes.string.isRequired,
//     number: PropTypes.number.isRequired
//   })),
//   onDeleteContact: PropTypes.func.isRequired
// }

// export default ContactList;