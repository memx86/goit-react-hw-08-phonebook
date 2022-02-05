import { useDispatch } from "react-redux";
import { toast } from "react-toastify";
import PropTypes from "prop-types";
// import { remove } from "redux/contacts/contacts-slice";
import { removeContact } from "redux/contacts/contacts-operations";
import s from "./ContactItem.module.css";

function ContactItem({ name, number, id }) {
  const dispatch = useDispatch();
  const onRemoveContact = (e) => {
    const name = e.target.dataset.name;
    const id = e.target.dataset.id;
    dispatch(removeContact(id));
    toast.info(`${name} was removed from contacts`);
  };
  return (
    <li className={s.item}>
      <p>
        {name}: {number}
      </p>
      <button
        className={s.btn}
        type="button"
        onClick={onRemoveContact}
        data-name={name}
        data-id={id}
      >
        Delete
      </button>
    </li>
  );
}
ContactItem.propTypes = {
  name: PropTypes.string.isRequired,
  number: PropTypes.string.isRequired,
};
export default ContactItem;
