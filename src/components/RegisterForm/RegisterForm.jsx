import { useState } from "react";
// import { useNavigate } from "react-router-dom";
import s from "./RegisterForm.module.css";
function RegisterForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  // const navigate = useNavigate();
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
  const handleSubmit = (e) => {
    e.preventDefault();
    // const name = e.target.name.value;
    // const phone = e.target.number.value;

    reset();
    // navigate("/contacts");
  };

  const reset = () => {
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
