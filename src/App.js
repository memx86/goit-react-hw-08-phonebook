import { Component, Fragment } from "react";
import Section from "Components/Section";
import Container from "Components/Container";
import ContactForm from "Components/ContactForm";
import ContactList from "Components/ContactList";

class App extends Component {
  state = {
    contacts: [
      { id: "id-1", name: "Rosie Simpson", number: "459-12-56" },
      { id: "id-2", name: "Hermione Kline", number: "443-89-12" },
      { id: "id-3", name: "Eden Clements", number: "645-17-79" },
      { id: "id-4", name: "Annie Copeland", number: "227-91-26" },
    ],
    filter: "",
  };
  addContact = (contact) => {
    const { contacts } = this.state;
    this.setState(() => ({ contacts: [...contacts, contact] }));
  };
  setFilterState = (value) => this.setState(() => ({ filter: value }));
  filterContacts = () => {
    const contacts = this.state.contacts;
    const filter = this.state.filter.toLowerCase().trim();
    return contacts.filter((contact) =>
      contact.name.toLowerCase().includes(filter)
    );
  };
  render() {
    const contacts = this.filterContacts();
    return (
      <Fragment>
        <Section>
          <Container>
            <h1>Phonebook</h1>
          </Container>
        </Section>
        <Section>
          <Container>
            <ContactForm onFormSubmit={this.addContact} />
          </Container>
        </Section>
        <Section>
          <Container>
            <ContactList contacts={contacts} setFilter={this.setFilterState} />
          </Container>
        </Section>
      </Fragment>
    );
  }
}
export default App;
