import { Fragment } from "react";
import { nanoid } from "nanoid";
import ContactItem from "Components/ContactItem";

function ContactList({ contacts }) {
  return (
    <Fragment>
      <h2>Contacts</h2>
      <ul>
        {contacts.map((contact) => (
          <ContactItem contact={contact} key={nanoid()} />
        ))}
      </ul>
    </Fragment>
  );
}
export default ContactList;
