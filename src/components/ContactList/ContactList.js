import { Fragment } from "react";
import { useSelector } from "react-redux";
import ContactItem from "components/ContactItem";
import { filterContacts } from "redux/contacts/contacts-selectors";
import s from "./ContactList.module.css";

function ContactList() {
  const contacts = useSelector(filterContacts);
  return (
    <Fragment>
      <ul className={s.list}>
        {contacts.map(({ id, name, number }) => (
          <ContactItem name={name} number={number} key={id} />
        ))}
      </ul>
    </Fragment>
  );
}
export default ContactList;
