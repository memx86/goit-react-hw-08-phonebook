import { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { useRegisterMutation, token, loggedIn } from "redux/auth";
import { useFetchContactsQuery } from "redux/contacts";
import s from "./RegisterForm.module.css";
function RegisterForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const [register] = useRegisterMutation();
  const { refetch } = useFetchContactsQuery();
  const dispatch = useDispatch();
  const handleInputChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    switch (name) {
      case "name":
        setName(value);
        return;
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
      const data = await register({ name, email, password }).unwrap();
      dispatch(token(data));
      dispatch(loggedIn());
      refetch();
      resetForm();
      navigate("/contacts");
    } catch (error) {}
  };

  const resetForm = () => {
    setName("");
    setEmail("");
    setPassword("");
  };
  return (
    <form className={s.form} onSubmit={handleSubmit}>
      <label className={s.label}>
        Name
        <input
          className={s.input}
          type="text"
          name="name"
          placeholder=" "
          required
          value={name}
          onInput={handleInputChange}
          autoComplete="off"
        />
      </label>
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
        Register
      </button>
    </form>
  );
}

export default RegisterForm;
