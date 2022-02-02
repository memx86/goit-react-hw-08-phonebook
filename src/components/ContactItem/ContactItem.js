import { useDispatch } from "react-redux";
import { toast } from "react-toastify";
import PropTypes from "prop-types";
import { remove } from "redux/contacts/contacts-slice";
import s from "./ContactItem.module.css";

function ContactItem({ name, number }) {
  const dispatch = useDispatch();
  const removeContact = (e) => {
    const name = e.target.dataset.name;
    dispatch(remove(name));
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
        onClick={removeContact}
        data-name={name}
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
