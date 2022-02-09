import { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { useLoginMutation, token, loggedIn } from "redux/auth";
import { useFetchContactsQuery } from "redux/contacts";
import s from "./LoginForm.module.css";
function LoginForm() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const [login] = useLoginMutation();
  const { refetch } = useFetchContactsQuery();
  const dispatch = useDispatch();
  const handleInputChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    switch (name) {
      case "email":
        setEmail(value);
        return;
      case "password":
        setPassword(value);
        return;
      default:
        return;
    }
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const data = await login({ email, password }).unwrap();
      dispatch(token(data));
      dispatch(loggedIn());
      refetch();
      navigate("/contacts");
    } catch (error) {
      toast.error("Login failed, please try again");
    }
    resetForm();
  };

  const resetForm = () => {
    setEmail("");
    setPassword("");
  };
  return (
    <form className={s.form} onSubmit={handleSubmit}>
      <label className={s.label}>
        Email
        <input
          className={s.input}
          type="email"
          name="email"
          placeholder=" "
          required
          value={email}
          onInput={handleInputChange}
          autoComplete="off"
        />
      </label>
      <label className={s.label}>
        Password
        <input
          className={s.input}
          type="password"
          name="password"
          placeholder=" "
          required
          value={password}
          onInput={handleInputChange}
          autoComplete="off"
        />
      </label>
      <button className={s.btn} type="submit">
        Log in
      </button>
    </form>
  );
}

export default LoginForm;
