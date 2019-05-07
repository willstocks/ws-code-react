import React from 'react';
import logo from 'assets/images/logo.svg';
//import '../../stylesheets/App.css';

function Footer() {
  return (
    <div>
		<footer className="footer">
			<img src={logo} className="footer-logo" alt="logo" />
			<p>© 2019 Will Stocks</p>
		</footer>
    </div>
  );
}

export default Footer;
