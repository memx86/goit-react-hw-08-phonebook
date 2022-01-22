import { Component } from "react";
import PropTypes from "prop-types";

class ContactForm extends Component {
  static propTypes = {
    onFormSubmit: PropTypes.func.isRequired,
  };
  state = {
    name: "",
  };
  handleInputChange = (e) => {
    const name = e.target.value;
    this.setState({ name });
  };
  handleSubmit = (e) => {
    e.preventDefault();
    const { onFormSubmit } = this.props;
    const name = e.target.name.value;
    onFormSubmit(name);
    this.reset();
  };
  reset = () =>
    this.setState(() => ({
      name: "",
    }));

  render() {
    const { name } = this.state;
    return (
      <form onSubmit={this.handleSubmit}>
        <label>
          Name
          <input
            type="text"
            name="name"
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            required
            value={name}
            onInput={this.handleInputChange}
          />
        </label>
        <button type="submit">Add contact</button>
      </form>
    );
  }
}
export default ContactForm;
