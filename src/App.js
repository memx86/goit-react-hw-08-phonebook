import { Fragment, useEffect, useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.min.css";
import Section from "components/Section";
import Container from "components/Container";
import ContactForm from "components/ContactForm";
import Filter from "components/Filter";
import ContactList from "components/ContactList";

function App() {
  const [contacts, setContacts] = useState([]);
  const [filter, setFilter] = useState("");
  useEffect(() => {
    try {
      const localContacts = JSON.parse(localStorage.getItem("contacts"));
      if (localContacts) setContacts(localContacts);
    } catch {}
  }, []);
  useEffect(() => {
    localStorage.setItem("contacts", JSON.stringify(contacts));
  }, [contacts]);
  const addContact = (contact) => {
    setContacts((contacts) => [...contacts, contact]);
  };
  const removeContact = (e) => {
    const name = e.target.dataset.name;
    setContacts((contacts) =>
      contacts.filter((contact) => contact.name !== name)
    );
    toast.info(`${name} was removed from contacts`);
  };
  const getNames = () => contacts.map((contact) => contact.name);
  const filterContacts = () => {
    const filterValue = filter.toLowerCase().trim();
    return contacts.filter((contact) =>
      contact.name.toLowerCase().includes(filterValue)
    );
  };
  const finalContacts = filterContacts();
  const names = getNames();
  return (
    <Fragment>
      <Section>
        <Container>
          <h1>Phonebook</h1>
        </Container>
      </Section>
      <Section>
        <Container>
          <ContactForm names={names} onFormSubmit={addContact} />
        </Container>
      </Section>
      <Section>
        <Container>
          <h2>Contacts</h2>
          <Filter handleFilter={setFilter} />
          <ContactList contacts={finalContacts} removeContact={removeContact} />
        </Container>
      </Section>
      <ToastContainer
        position="top-right"
        autoClose={3000}
        hideProgressBar={true}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
    </Fragment>
  );
}

export default App;
