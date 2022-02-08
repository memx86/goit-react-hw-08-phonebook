// import PropTypes from "prop-types";
import { NavLink } from "react-router-dom";
import Container from "components/Container";
import s from "./Navbar.module.css";

function NavBar(props) {
  return (
    <header className={s.header}>
      <Container>
        <nav className={s.nav}>
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

// NavBar.propTypes = {
//   onFormSubmit: PropTypes.func.isRequired,
// };

export default NavBar;
