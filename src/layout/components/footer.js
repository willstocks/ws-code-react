import React from 'react';
import logo from "assets/images/logo.svg";

function Footer() {
  return (
    <div className="footer">
      <footer>
        <img src={logo} className="logo" alt="logo" />
        <p className="copyright">© 2019 Will Stocks</p>
        <img src={logo} className="logo" alt="logo" />
      </footer>
    </div>
  );
}

export default Footer;
