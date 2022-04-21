import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import Logo from "../img/logo.png";

const Navigation = () => {
  const [isNavExpanded, setIsNavExpanded] = useState(false);

  return (
    <nav className={ isNavExpanded ? "navigation expanded" : "navigation"}>
      <NavLink to="/">
        <img className="logo-nav" src={Logo} alt="logo dawn valley" />
      </NavLink>
      <button
        className="hamburger"
        onClick={() => {
          setIsNavExpanded(!isNavExpanded);
        }}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-5 w-5"
          viewBox="0 0 20 20"
          fill="black"
        >
          <path
            fillRule="evenodd"
            d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM9 15a1 1 0 011-1h6a1 1 0 110 2h-6a1 1 0 01-1-1z"
            clipRule="evenodd"
          />
        </svg>
        .
      </button>
      <ul>
        <NavLink to="/" className={(nav) => (nav.isActive ? "nav-active" : "")}>
          <li>Accueil</li>
        </NavLink>
        <NavLink
          to="/reglement"
          className={(nav) => (nav.isActive ? "nav-active" : "")}
        >
          <li>Réglement</li>
        </NavLink>
        <NavLink
          to="/lore"
          className={(nav) => (nav.isActive ? "nav-active" : "")}
        >
          <li>Lore</li>
        </NavLink>
        <NavLink
          to="/commandes-ig"
          className={(nav) => (nav.isActive ? "nav-active" : "")}
        >
          <li>Commandes</li>
        </NavLink>
        <NavLink
          to="/galerie"
          className={(nav) => (nav.isActive ? "nav-active" : "")}
        >
          <li>Galerie</li>
        </NavLink>
        <NavLink
          to="/faq"
          className={(nav) => (nav.isActive ? "nav-active" : "")}
        >
          <li>FAQ</li>
        </NavLink>
        <NavLink
          to="/vote"
          className={(nav) => (nav.isActive ? "nav-active" : "")}
        >
          <li>Vote</li>
        </NavLink>
      </ul>
    </nav>
  );
};

export default Navigation;
