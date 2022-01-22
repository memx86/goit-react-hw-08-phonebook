import { Fragment } from "react";
import ContactItem from "Components/ContactItem";

function ContactList({ contacts }) {
  return (
    <Fragment>
      <h2>Contacts</h2>
      <ul>
        {contacts.map(({ id, name, number }) => (
          <ContactItem name={name} number={number} key={id} />
        ))}
      </ul>
    </Fragment>
  );
}
export default ContactList;
