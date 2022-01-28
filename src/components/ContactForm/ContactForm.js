import { useState } from "react";
import { nanoid } from "nanoid";
import { toast } from "react-toastify";
import PropTypes from "prop-types";
import s from "./ContactForm.module.css";

function ContactForm({ onFormSubmit, names }) {
  const [name, setName] = useState("");
  const [number, setNumber] = useState("");

  const handleInputChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    switch (name) {
      case "name":
        setName(value);
        return;
      case "number":
        setNumber(value);
        return;
      default:
        return;
    }
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    const id = nanoid();
    const name = e.target.name.value;
    const number = e.target.number.value;
    if (names.includes(name)) {
      toast.error(`${name} is already in contacts!`);
      return;
    }
    onFormSubmit({ id, name, number });
    toast.success(`${name} was added to contacts`);
    reset();
  };
  const reset = () => {
    setName("");
    setNumber("");
  };

  return (
    <form className={s.form} onSubmit={handleSubmit}>
      <label className={s.label}>
        Name
        <input
          className={s.input}
          type="text"
          name="name"
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          placeholder=" "
          required
          value={name}
          onInput={handleInputChange}
        />
      </label>
      <label className={s.label}>
        Number
        <input
          className={s.input}
          type="tel"
          name="number"
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          placeholder=" "
          required
          value={number}
          onInput={handleInputChange}
        />
      </label>
      <button className={s.btn} type="submit">
        Add contact
      </button>
    </form>
  );
}
ContactForm.propTypes = {
  onFormSubmit: PropTypes.func.isRequired,
  names: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default ContactForm;
