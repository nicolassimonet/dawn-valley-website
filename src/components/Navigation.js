import React from "react";
import { NavLink } from "react-router-dom";

const Navigation = () => {
  return (
    <nav className="navigation">
      <ul>
      <NavLink 
        to="/">
        <img className="logo-nav" src="./logo.png" alt="logo dawn valley" />
      </NavLink>
        <NavLink 
          to="/" 
          className={(nav) => (nav.isActive ? "nav-active" : "")}
          >
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
          to="/reseaux"
          className={(nav) => (nav.isActive ? "nav-active" : "")}
        >
          <li>Réseaux</li>
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
