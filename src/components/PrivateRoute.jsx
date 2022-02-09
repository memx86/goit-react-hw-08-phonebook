import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";
import PropTypes from "prop-types";
import { getIsLoggedIn } from "redux/auth";

function PrivateRoute({ children }) {
  const isLoggedIn = useSelector(getIsLoggedIn);
  if (!isLoggedIn) return <Navigate to="/login" replace={true} />;
  if (isLoggedIn) return children;
}

PrivateRoute.propTypes = {
  children: PropTypes.node.isRequired,
};

export default PrivateRoute;
