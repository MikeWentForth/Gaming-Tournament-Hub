import { NavLink } from 'react-router-dom'
import './index.css'

function NavLinks({ closeHamburger, isMobile }) {

    function closeHamburgerMenu () {
        if(isMobile) {
            closeHamburger();
        }
    }
    return (
        <nav className='navLinks'>
            <ul>
                <li>
                    <NavLink to='/' onClick={closeHamburgerMenu}>
                        Home
                    </NavLink>
                </li>
                <li>
                    <NavLink to='/aboutUs' onClick={closeHamburgerMenu}>
                        About Us
                    </NavLink>
                </li>
                <li>
                    <NavLink to='/login' onClick={closeHamburgerMenu}>
                        Login
                    </NavLink>
                </li>
                <li>
                    <NavLink to='/signUp' onClick={closeHamburgerMenu}>
                        Sign Up
                    </NavLink>
                </li>
                <li>
                    <NavLink to='/profile' onClick={closeHamburgerMenu}>
                        Profile
                    </NavLink>
                </li>
            </ul>
        </nav>
    )
}

export default NavLinks;