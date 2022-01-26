import { Fragment } from "react";
import PropTypes from "prop-types";
import ContactItem from "components/ContactItem";
import s from "./ContactList.module.css";

function ContactList({ contacts, removeContact }) {
  return (
    <Fragment>
      <ul className={s.list}>
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
