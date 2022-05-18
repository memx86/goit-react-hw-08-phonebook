import PropTypes from "prop-types";
import s from "./Button.module.css";
function Button({ text, onClick, type = "button", className }) {
  return (
    <button type={type} className={`${s.btn} ${className}`} onClick={onClick}>
      {text}
    </button>
  );
}
Button.propTypes = {
  text: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
  type: PropTypes.string,
  className: PropTypes.string,
};
export default Button;
