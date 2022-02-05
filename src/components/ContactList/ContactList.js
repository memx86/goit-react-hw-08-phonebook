import { Fragment, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import ContactItem from "components/ContactItem";
import { contactsOperations, contactsSelectors } from "redux/contacts";
import s from "./ContactList.module.css";

function ContactList() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(contactsOperations.getContacts());
  }, [dispatch]);

  const contacts = useSelector(contactsSelectors.filterContacts);
  return (
    <Fragment>
      <ul className={s.list}>
        {contacts.length > 0 &&
          contacts.map(({ id, name, number }) => (
            <ContactItem name={name} number={number} id={id} key={id} />
          ))}
      </ul>
    </Fragment>
  );
}
export default ContactList;
