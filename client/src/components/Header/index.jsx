
import Navigation from "../Navigation";
import './index.css'

const Header = () => {
  return (
    <header className="NavBar">
      <Navigation />
      <a href="/">
        {/* <h1>Tournament Hub</h1> */}
        <img src="tournhub.png" alt="logo">
        </img>
      </a>
    </header>
  );
};

export default Header;
