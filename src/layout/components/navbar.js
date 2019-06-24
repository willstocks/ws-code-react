import React from "react";
import { NavLink } from "react-router-dom";
import logo from "assets/images/logo.svg";
import "assets/stylesheets/navbar.scss";

class Navbar extends React.Component {
  componentDidMount() {
    const myHamburger = document.querySelector(".hamburger");
    const navLinks = document.querySelector(".nav-links");
    const links = document.querySelectorAll(".nav-links li");
    const body = document.body;

    function openMenuonClick() {
      myHamburger.classList.toggle("is-active");
      navLinks.classList.toggle("open");
      body.classList.toggle("locked");
      links.forEach(link => {
        link.classList.toggle("fade");
        link.addEventListener("click", closeMenuonClick);
      });
    }

    function closeMenuonClick() {
      links.forEach(link => {
        link.classList.toggle("fade");
      });
      navLinks.classList.toggle("open");
      body.classList.toggle("locked");
      myHamburger.classList.toggle("is-active");
    }

    myHamburger.addEventListener("click", openMenuonClick);
  }

  render() {
    return (
      <nav>
        <div className="branding">
          <img src={logo} className="logo" alt="Logo" />
        </div>
        <button className="hamburger hamburger--elastic" type="button">
          <span className="hamburger-box">
            <span className="hamburger-inner" />
          </span>
        </button>
        <ul className="nav-links">
          <li>
            <NavLink exact to="/" className="link" activeClassName="active">
              Home
            </NavLink>
          </li>
          <li>
            <NavLink to="/about" className="link">
              About
            </NavLink>
          </li>
          <li>
            <NavLink to="/contact" className="link">
              Contact
            </NavLink>
          </li>
        </ul>
      </nav>
    );
  }
}

export default Navbar;
