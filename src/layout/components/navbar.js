import React from "react";
import { NavLink } from "react-router-dom";
import logo from "assets/images/logo.svg";

function Navbar() {
  return (
    <nav className="navbar">
      <div className="branding">
        <img src={logo} className="logo" alt="Logo" />
      </div>
      <div className="links">
        <NavLink exact to="/" className="link" activeClassName="active">
          Home
        </NavLink>
        <NavLink to="/about" className="link">
          About
        </NavLink>
        <NavLink to="/contact" className="link">
          Contact
        </NavLink>
      </div>
      <div className="comingsoon" />
    </nav>
  );
}

export default Navbar;
