import { useState } from "react";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import PropTypes from "prop-types";
import {
  useAddContactMutation,
  useFetchContactsQuery,
  useUpdateContactMutation,
} from "redux/contacts";
import s from "./ContactForm.module.css";
import Button from "components/Button";

function ContactForm({
  type,
  id,
  initialName = "",
  initialNumber = "",
  setEdit,
}) {
  const [name, setName] = useState(initialName);
  const [number, setNumber] = useState(initialNumber);
  const navigate = useNavigate();
  const { data } = useFetchContactsQuery();
  const names = data?.map((contact) => contact.name);
  const [addContact] = useAddContactMutation();
  const [updateContact] = useUpdateContactMutation();
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
  const onAddContact = async (name, number) => {
    if (names.includes(name)) {
      toast.error(`${name} is already in contacts!`);
      return;
    }
    const data = await addContact({ name, number }).unwrap();
    if (data.id) {
      toast.success(`${name} was added to contacts`);
      navigate("/contacts");
    }
    if (data.message)
      toast.error(`Can't add ${name} to contacts, please try again`);
  };
  const onEditContact = async (name, number) => {
    const data = await updateContact({ id, name, number }).unwrap();
    if (data.id) {
      toast.success(`${name} was successfully updated`);
      navigate("/contacts");
    }
    if (data.message) toast.error(`Can't update ${name}, please try again`);
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    const name = e.target.name.value;
    const number = e.target.number.value;
    if (type === "Add") onAddContact(name, number);
    if (type === "Edit") onEditContact(name, number);
  };

  return (
    <form className={type === "Add" ? s.form : s.edit} onSubmit={handleSubmit}>
      <label className={type === "Add" ? s.label : s.labelEdit}>
        Name
        <input
          className={type === "Add" ? s.input : s.inputEdit}
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
      <label className={type === "Add" ? s.label : s.labelEdit}>
        Number
        <input
          className={type === "Add" ? s.input : s.inputEdit}
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
      <span>
        <button className={s.btn} type="submit">
          Save
        </button>
        {type === "Edit" && (
          <Button text="Cancel" onClick={() => setEdit(false)} />
        )}
      </span>
    </form>
  );
}
ContactForm.propTypes = {
  type: PropTypes.string.isRequired,
  id: PropTypes.string,
  initialName: PropTypes.string,
  initialNumber: PropTypes.string,
  setEdit: PropTypes.func,
};
export default ContactForm;
