import PropTypes from "prop-types";
import s from "./ContactItem.module.css";

function ContactItem({ name, number, removeContact }) {
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
  removeContact: PropTypes.func.isRequired,
};
export default ContactItem;
