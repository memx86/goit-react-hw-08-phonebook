import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { useDispatch, useSelector } from "react-redux";
import { loggedOff, getIsLoggedIn } from "redux/auth";
import { useLogoutMutation, useRefreshQuery } from "redux/contacts";
import Button from "components/Button";

import s from "./Profile.module.css";

export default function Profile() {
  const isLoggedIn = useSelector(getIsLoggedIn);
  const { data } = useRefreshQuery(null, { skip: !isLoggedIn });
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
    <div>
      <h1>{name} profile</h1>
      <Button text="Logout" onClick={logout} className={s.button} />
    </div>
  );
}
