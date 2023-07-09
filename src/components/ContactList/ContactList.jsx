//с кнопкой удаления
// const ContactList = ({ contacts, onDeleteContact }) => (
  const ContactList = ({ contacts }) => (
  <ul>
    {contacts.map(({ id, text }) => (
      <li key={id}>
        <p>{text}</p>
        {/* <button onClick={() => onDeleteContact(id)}>Удалить</button> */}
    </li>
    ))}
  </ul>
)
export default ContactList;