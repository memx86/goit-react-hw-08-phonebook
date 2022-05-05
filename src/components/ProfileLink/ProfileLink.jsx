import PropTypes from "prop-types";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { getToken } from "redux/auth";
import { useRefreshQuery } from "redux/contacts";
import s from "./ProfileLink.module.css";

function ProfileLink({ className = "" }) {
  const token = useSelector(getToken);
  const { data } = useRefreshQuery(null, { skip: !token });

  const name = data?.name ?? "";
  const letter = name.split("").at(0).toUpperCase();
  return (
    <Link
      to="/profile"
      aria-label={`${name} profile`}
      className={`${className} ${s.circle}`}
    >
      {letter}
    </Link>
  );
}
ProfileLink.propTypes = {
  className: PropTypes.string,
};

export default ProfileLink;
