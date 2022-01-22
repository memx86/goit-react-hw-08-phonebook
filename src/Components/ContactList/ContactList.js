import { Fragment } from "react";
import PropTypes from "prop-types";
import ContactItem from "Components/ContactItem";
import Filter from "Components/Filter";

function ContactList({ contacts, setFilter }) {
  return (
    <Fragment>
      <h2>Contacts</h2>
      <Filter setFilter={setFilter} />
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
  setFilter: PropTypes.func.isRequired,
};
export default ContactList;
