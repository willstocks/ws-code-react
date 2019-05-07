import React from 'react';
import { NavLink } from 'react-router-dom';
//import logo from '../../images/logo.svg';
//import '../../stylesheets/App.css';

function Navbar() {
  return (
    <div>
		<nav className="navbar links">
				<NavLink exact to="/" className="link" activeClassName="active">Home</NavLink>
				<NavLink to="/about" className="link">About</NavLink>
				<NavLink to="/contact" className="link">Contact Me</NavLink>
		</nav>
    </div>
  );
}

export default Navbar;
