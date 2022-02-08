// import PropTypes from "prop-types";
import { useNavigate } from "react-router-dom";
import Section from "components/Section";
import Container from "components/Container";
import Filter from "components/Filter";
import IconButton from "components/IconButton/IconButton";
import ContactList from "components/ContactList";

function Contacts(props) {
  const navigate = useNavigate();
  return (
    <Section>
      <Container>
        <h2>Contacts</h2>
        <IconButton icon="add" onClick={() => navigate("/add")} />
        <Filter />
        <ContactList />
      </Container>
    </Section>
  );
}

// Contacts.propTypes = {};

export default Contacts;
