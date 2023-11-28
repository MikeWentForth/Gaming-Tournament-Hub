/* eslint-disable react/no-unescaped-entities */
import { NavLink } from "react-router-dom";
import "./index.css";

import Auth from "../../utils/auth";

function NavLinks({ closeHamburger, isMobile }) {
  const logout = (event) => {
    event.preventDefault();
    Auth.logout();
  };

  function closeHamburgerMenu() {
    if (isMobile) {
      closeHamburger();
    }
  }
  return (
    <nav className="navLinks">
      <ul>
        <li>
          <NavLink to="/aboutUs" onClick={closeHamburgerMenu}>
            About Us
          </NavLink>
        </li>
        {Auth.loggedIn() ? (
          <>
            <li>
              <NavLink to="/profile" onClick={closeHamburgerMenu}>
                {Auth.getProfile().data.username}'s Profile
              </NavLink>
            </li>
            <li>
              <NavLink onClick={logout} className="logout">
                Logout
              </NavLink>
            </li>
          </>
        ) : (
          <>
            <li>
              <NavLink
                to="/signup"
                onClick={closeHamburgerMenu}
                className="signup"
              >
                Signup
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/login"
                onClick={closeHamburgerMenu}
                className="login"
              >
                Login
              </NavLink>
            </li>
          </>
        )}
      </ul>
    </nav>
  );
}

export default NavLinks;
