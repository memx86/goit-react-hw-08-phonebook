import { toast } from "react-toastify";
import PropTypes from "prop-types";
import { useRemoveContactMutation } from "redux/contacts";
import IconButton from "components/IconButton";
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
      <IconButton icon="del" onClick={onRemoveContact} />
    </li>
  );
}
ContactItem.propTypes = {
  name: PropTypes.string.isRequired,
  phone: PropTypes.string.isRequired,
};
export default ContactItem;
