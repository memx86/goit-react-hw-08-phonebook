import { Fragment } from "react";
import { useSelector } from "react-redux";
import { useFetchContactsQuery } from "redux/contacts";
import { getFilter } from "redux/filter";
import { getIsLoggedIn } from "redux/auth";
import ContactItem from "components/ContactItem";
import Loader from "components/Loader";
import s from "./ContactList.module.css";

function ContactList() {
  const isLoggedIn = useSelector(getIsLoggedIn);
  const { data, isFetching } = useFetchContactsQuery(null, {
    skip: !isLoggedIn,
  });
  const filter = useSelector(getFilter)?.toLowerCase().trim();
  const contacts = data?.filter(({ name }) =>
    name.toLowerCase().includes(filter)
  );
  if (isFetching) return <Loader />;
  return (
    <Fragment>
      <ul className={s.list}>
        {contacts?.length > 0 &&
          contacts.map(({ id, name, number }) => (
            <ContactItem name={name} number={number} id={id} key={id} />
          ))}
      </ul>
    </Fragment>
  );
}
export default ContactList;
