import { useEffect, useState } from "react";
import { toast } from "react-toastify";
import PropTypes from "prop-types";
import { useRemoveContactMutation } from "redux/contacts";
import ContactForm from "components/ContactForm";
import IconButton from "components/IconButton";
import s from "./ContactItem.module.css";

function ContactItem({ name, number, id }) {
  const [edit, setEdit] = useState(false);
  const [removeContact, { isSuccess, isError }] = useRemoveContactMutation();
  const onRemoveContact = () => {
    removeContact(id);
  };
  useEffect(() => {
    if (isSuccess) toast.info(`${name} was removed from contacts`);
    if (isError)
      toast.error(`Can't remove ${name} from contacts, please try again`);
  }, [isSuccess, isError, name]);
  if (edit)
    return (
      <li className={s.item}>
        <ContactForm
          type="Edit"
          setEdit={setEdit}
          id={id}
          initialName={name}
          initialNumber={number}
        />
      </li>
    );
  if (!edit)
    return (
      <li className={s.item}>
        <span className={s.name}>{name}</span>
        <span className={s.number}>{number}</span>
        <div className={s.btns}>
          <IconButton icon="edit" onClick={() => setEdit(true)} />
          <IconButton icon="del" onClick={onRemoveContact} />
        </div>
      </li>
    );
}
ContactItem.propTypes = {
  name: PropTypes.string.isRequired,
  number: PropTypes.string.isRequired,
};
export default ContactItem;
