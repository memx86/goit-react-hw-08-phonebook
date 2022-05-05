import { NavLink } from "react-router-dom";
import { useSelector } from "react-redux";
import Container from "components/Container";
import ProfileLink from "components/ProfileLink";
import { getIsLoggedIn } from "redux/auth";
import s from "./Navbar.module.css";

function NavBar() {
  const isLoggedIn = useSelector(getIsLoggedIn);
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
          {isLoggedIn && (
            <NavLink
              className={({ isActive }) => (isActive ? s.active : s.link)}
              to="/contacts"
            >
              Contacts
            </NavLink>
          )}
          {!isLoggedIn && (
            <div className={s.right}>
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
            </div>
          )}

          {isLoggedIn && <ProfileLink className={s.right} />}
        </nav>
      </Container>
    </header>
  );
}

export default NavBar;
