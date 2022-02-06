import { toast } from "react-toastify";
import PropTypes from "prop-types";
import { useRemoveContactMutation } from "redux/contacts";
import s from "./ContactItem.module.css";

function ContactItem({ name, phone, id }) {
  const [removeContact] = useRemoveContactMutation();
  const onRemoveContact = () => {
    removeContact(id);
    toast.info(`${name} was removed from contacts`);
  };
  return (
    <li className={s.item}>
      <p>
        {name}: {phone}
      </p>
      <button className={s.btn} type="button" onClick={onRemoveContact}>
        Delete
      </button>
    </li>
  );
}
ContactItem.propTypes = {
  name: PropTypes.string.isRequired,
  phone: PropTypes.string.isRequired,
};
export default ContactItem;
