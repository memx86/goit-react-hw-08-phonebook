import { Component, Fragment } from "react";
import Section from "Components/Section";
import Container from "Components/Container";
import ContactForm from "Components/ContactForm";
import ContactList from "Components/ContactList";

class App extends Component {
  state = {
    contacts: [],
    filter: "",
  };
  addContact = (name) => {
    const { contacts } = this.state;
    this.setState(() => ({ contacts: [...contacts, name] }));
  };

  render() {
    const { contacts } = this.state;
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
            <ContactList contacts={contacts} />
          </Container>
        </Section>
      </Fragment>
    );
  }
}
export default App;
