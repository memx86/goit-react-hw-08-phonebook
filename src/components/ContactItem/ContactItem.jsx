import { toast } from "react-toastify";
import PropTypes from "prop-types";
import { useRemoveContactMutation } from "redux/contacts";
import IconButton from "components/IconButton";
import s from "./ContactItem.module.css";
import { useEffect } from "react";

function ContactItem({ name, number, id }) {
  const [removeContact, { isSuccess, isError }] = useRemoveContactMutation();
  const onRemoveContact = () => {
    removeContact(id);
  };
  useEffect(() => {
    if (isSuccess) toast.info(`${name} was removed from contacts`);
    if (isError)
      toast.error(`Can't remove ${name} from contacts, please try again`);
  }, [isError, isSuccess, name]);

  return (
    <li className={s.item}>
      <p>
        {name}: {number}
      </p>
      <IconButton icon="del" onClick={onRemoveContact} />
    </li>
  );
}
ContactItem.propTypes = {
  name: PropTypes.string.isRequired,
  number: PropTypes.string.isRequired,
};
export default ContactItem;
