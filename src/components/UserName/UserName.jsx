import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {
  useLogoutMutation,
  useRefreshQuery,
  loggedOff,
  getToken,
} from "redux/auth";
import PropTypes from "prop-types";
import Button from "components/Button";
import { toast } from "react-toastify";

function UserName({ className = "" }) {
  const token = useSelector(getToken);
  const { data } = useRefreshQuery(null, { skip: !token });
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [logout, { isSuccess, isError }] = useLogoutMutation();
  useEffect(() => {
    if (isSuccess) {
      dispatch(loggedOff());
      navigate("/");
    }
    if (isError) toast.error("Logout failed");
  }, [dispatch, isError, isSuccess, navigate]);

  const email = data?.email;
  return (
    <div className={className}>
      {email ?? ""}
      <Button text="Logout" onClick={logout} />
    </div>
  );
}
UserName.propTypes = {
  className: PropTypes.string,
};

export default UserName;
