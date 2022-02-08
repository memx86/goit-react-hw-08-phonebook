import { AiFillPlusCircle, AiFillCloseCircle } from "react-icons/ai";
import PropTypes from "prop-types";
import s from "./IconButton.module.css";

function IconButton({ type = "button", icon, onClick }) {
  switch (icon) {
    case "add":
      return (
        <button
          type={type}
          className={s.btn}
          aria-label="add contact"
          onClick={onClick}
        >
          <AiFillPlusCircle
            style={{ width: "40", height: "40", color: "green" }}
          />
        </button>
      );
    case "del":
      return (
        <button
          type={type}
          className={s.btn}
          aria-label="delete contact"
          onClick={onClick}
        >
          <AiFillCloseCircle
            style={{ width: "30", height: "30", color: "red" }}
          />
        </button>
      );
    default:
      return <button type={type} aria-label="button"></button>;
  }
}

IconButton.propTypes = {
  type: PropTypes.string,
  icon: PropTypes.string,
  onClick: PropTypes.func,
};

export default IconButton;
