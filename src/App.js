import { Component, Fragment } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.min.css";
import Section from "Components/Section";
import Container from "Components/Container";
import ContactForm from "Components/ContactForm";
import Filter from "Components/Filter";
import ContactList from "Components/ContactList";

class App extends Component {
  state = {
    contacts: [],
    filter: "",
  };
  componentDidMount() {
    try {
      const localContacts = JSON.parse(localStorage.getItem("contacts"));
      if (localContacts) this.setState({ contacts: localContacts });
    } catch {}
  }
  componentDidUpdate(prevProps, prevState) {
    const prevContacts = prevState.contacts;
    const contacts = this.state.contacts;
    if (prevContacts !== contacts) {
      localStorage.setItem("contacts", JSON.stringify(contacts));
    }
  }
  addContact = (contact) => {
    this.setState(({ contacts }) => ({ contacts: [...contacts, contact] }));
  };
  removeContact = (e) => {
    const name = e.target.dataset.name;
    this.setState((prevState) => ({
      contacts: prevState.contacts.filter((contact) => contact.name !== name),
    }));
    toast.info(`${name} was removed from contacts`);
  };
  getNames = () => this.state.contacts.map((contact) => contact.name);
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
    const names = this.getNames();
    return (
      <Fragment>
        <Section>
          <Container>
            <h1>Phonebook</h1>
          </Container>
        </Section>
        <Section>
          <Container>
            <ContactForm names={names} onFormSubmit={this.addContact} />
          </Container>
        </Section>
        <Section>
          <Container>
            <h2>Contacts</h2>
            <Filter setFilter={this.setFilterState} />
            <ContactList
              contacts={contacts}
              removeContact={this.removeContact}
            />
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
}
export default App;
