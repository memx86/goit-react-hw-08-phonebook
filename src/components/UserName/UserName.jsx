import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import PropTypes from "prop-types";
import { useDispatch, useSelector } from "react-redux";
import { loggedOff, getToken } from "redux/auth";
import { useLogoutMutation, useRefreshQuery } from "redux/contacts";
import Button from "components/Button";

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

  const name = data?.name;
  return (
    <div className={className}>
      {name ?? ""}
      <Button text="Logout" onClick={logout} />
    </div>
  );
}
UserName.propTypes = {
  className: PropTypes.string,
};

export default UserName;
