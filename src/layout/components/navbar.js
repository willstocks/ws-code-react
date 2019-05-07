import React from 'react';
import { NavLink } from 'react-router-dom';
import logo from 'assets/images/logo.svg';
//import '../../stylesheets/App.css';

function Navbar() {
  return (
    <div className="navbar">
		<div className="branding">
			<img src={ logo } className="logo" alt="Logo" />
		</div>
		<div className="links">
			<NavLink exact to="/" className="link" activeClassName="active">Home</NavLink>
			<NavLink to="/about" className="link">About</NavLink>
			<NavLink to="/contact" className="link">Contact Me</NavLink>
		</div>
		<div className="comingsoon">
		</div>
    </div>
  );
}

export default Navbar;
