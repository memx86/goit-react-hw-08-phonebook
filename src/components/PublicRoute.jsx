import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";
import PropTypes from "prop-types";
import { getIsLoggedIn } from "redux/auth";

function PublicRoute({ children }) {
  const isLoggedIn = useSelector(getIsLoggedIn);
  if (isLoggedIn) return <Navigate to="/contacts" replace={true} />;
  if (!isLoggedIn) return children;
}

PublicRoute.propTypes = {
  children: PropTypes.node.isRequired,
};

export default PublicRoute;
