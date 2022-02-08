import { NavLink } from "react-router-dom";
import Container from "components/Container";
import s from "./Navbar.module.css";

function NavBar() {
  return (
    <header className={s.header}>
      <Container>
        <nav className={s.nav}>
          <NavLink
            className={({ isActive }) => (isActive ? s.active : s.link)}
            to="/"
          >
            Home
          </NavLink>
          <NavLink
            className={({ isActive }) => (isActive ? s.active : s.link)}
            to="/contacts"
          >
            Contacts
          </NavLink>
          <NavLink
            className={({ isActive }) => (isActive ? s.active : s.link)}
            to="/login"
          >
            Login
          </NavLink>
          <NavLink
            className={({ isActive }) => (isActive ? s.active : s.link)}
            to="/register"
          >
            Register
          </NavLink>
        </nav>
      </Container>
    </header>
  );
}

export default NavBar;
