import { useState } from "react";
import VectorFooter from "../../assets/VectorFooter.png";
import hamburger from "../../assets/hamburger-menu.png";
import "./Navigation.css";

function Navigation() {

  const [showMenu, setShowMenu] = useState(false);

  const handleHamburger = () => {
    setShowMenu((showMenu) => !showMenu);
  };

  return (
    <div className="Nav-container">
      <ul className="Nav-menu-desktop">
        <li className="Nav-logo">
         <a className="Nav-logo" href="/"><img src={VectorFooter} alt="logo" /></a>
        </li>
        <li className="hamburger-menu">
        <img onClick={handleHamburger} src={hamburger} alt="hamburger" />
        </li>
        <li className={`Nav-menu ${ showMenu ? 'is-open-Nav' : "" }`}>
            <a href="/">Home</a>
            <a href="#about">About</a>
            <a href="#events">Events</a>
            <a href="#contact">Contact</a>
        </li>
      </ul>
    </div>
  );
}

export default Navigation;
