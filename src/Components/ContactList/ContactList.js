import { Fragment } from "react";
import PropTypes from "prop-types";
import ContactItem from "Components/ContactItem";

function ContactList({ contacts, removeContact }) {
  return (
    <Fragment>
      <ul>
        {contacts.map(({ id, name, number }) => (
          <ContactItem
            name={name}
            number={number}
            removeContact={removeContact}
            key={id}
          />
        ))}
      </ul>
    </Fragment>
  );
}
ContactList.propTypes = {
  contacts: PropTypes.arrayOf(PropTypes.object).isRequired,
  removeContact: PropTypes.func.isRequired,
};
export default ContactList;
