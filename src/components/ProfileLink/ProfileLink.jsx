import PropTypes from "prop-types";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { getIsLoggedIn } from "redux/auth";
import { useRefreshQuery } from "redux/contacts";
import s from "./ProfileLink.module.css";

function ProfileLink({ className = "" }) {
  const isLoggedIn = useSelector(getIsLoggedIn);
  const { data } = useRefreshQuery(null, { skip: !isLoggedIn });

  const name = data?.name ?? "";
  const [letter] = name.split("");
  return (
    <Link
      to="/profile"
      aria-label={`${name} profile`}
      className={`${className} ${s.circle}`}
    >
      {letter?.toUpperCase()}
    </Link>
  );
}
ProfileLink.propTypes = {
  className: PropTypes.string,
};

export default ProfileLink;
