import { Fragment } from "react";
import { useSelector } from "react-redux";
import ContactItem from "components/ContactItem";
import { getFilter } from "redux/contacts";
import { useFetchContactsQuery } from "redux/contacts";
import s from "./ContactList.module.css";

function ContactList() {
  const { data } = useFetchContactsQuery();
  const filter = useSelector(getFilter)?.toLowerCase().trim();
  const contacts = data?.filter(({ name }) =>
    name.toLowerCase().includes(filter)
  );
  return (
    <Fragment>
      <ul className={s.list}>
        {contacts?.length > 0 &&
          contacts.map(({ id, name, phone }) => (
            <ContactItem name={name} phone={phone} id={id} key={id} />
          ))}
      </ul>
    </Fragment>
  );
}
export default ContactList;
