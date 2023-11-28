/* eslint-disable react/no-unescaped-entities */
import { NavLink } from "react-router-dom";
import "./index.css";
import { motion } from 'framer-motion';

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
        <motion.div initial={{ opacity: 0, x: '-100vw' }} animate={{ opacity: 1, x: 0, transition: { duration: 1.5 } }}>
          <NavLink to="/aboutUs" onClick={closeHamburgerMenu}>
            About Us
          </NavLink>
          </motion.div>
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
            <motion.div initial={{ opacity: 0, y: '-100vw' }} animate={{ opacity: 1, y: 0, transition: { duration: 1.5 } }}>
              <NavLink
                to="/signup"
                onClick={closeHamburgerMenu}
                className="signup"
              >
                Signup
              </NavLink>
              </motion.div>
            </li>
            <li>
            <motion.div initial={{ opacity: 0, x: '100vw' }} animate={{ opacity: 1, x: 0, transition: { duration: 1.5 } }}>
              <NavLink
                to="/login"
                onClick={closeHamburgerMenu}
                className="login"
              >
                Login
              </NavLink>
              </motion.div>
            </li>
          </>
        )}
      </ul>
    </nav>
  );
}

export default NavLinks;
