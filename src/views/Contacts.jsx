import { Fragment } from "react";
import { useNavigate } from "react-router-dom";
import Filter from "components/Filter";
import IconButton from "components/IconButton/IconButton";
import ContactList from "components/ContactList";

function Contacts() {
  const navigate = useNavigate();
  return (
    <Fragment>
      <h2>Contacts</h2>
      <IconButton icon="add" onClick={() => navigate("/add")} />
      <Filter />
      <ContactList />
    </Fragment>
  );
}

export default Contacts;
