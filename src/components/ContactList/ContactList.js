import { Fragment, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import ContactItem from "components/ContactItem";
import { fetchContacts, filterContacts } from "redux/contacts";
import s from "./ContactList.module.css";

function ContactList() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  const contacts = useSelector(filterContacts);
  return (
    <Fragment>
      <ul className={s.list}>
        {contacts.length > 0 &&
          contacts.map(({ id, name, phone }) => (
            <ContactItem name={name} phone={phone} id={id} key={id} />
          ))}
      </ul>
    </Fragment>
  );
}
export default ContactList;
