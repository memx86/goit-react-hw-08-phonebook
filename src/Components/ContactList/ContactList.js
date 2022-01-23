import { Fragment } from "react";
import PropTypes from "prop-types";
import ContactItem from "Components/ContactItem";

function ContactList({ contacts }) {
  return (
    <Fragment>
      <ul>
        {contacts.map(({ id, name, number }) => (
          <ContactItem name={name} number={number} key={id} />
        ))}
      </ul>
    </Fragment>
  );
}
ContactList.propTypes = {
  contacts: PropTypes.arrayOf(PropTypes.object).isRequired,
};
export default ContactList;
