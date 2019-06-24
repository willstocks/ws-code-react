import React from "react";
import logo from "assets/images/logo.svg";

function Footer() {
  return (
    <footer className="footer">
      <img src={logo} className="logo" alt="logo" />
      <p className="copyright">© 2019 Will Stocks</p>
      <img src={logo} className="logo" alt="logo" />
    </footer>
  );
}

export default Footer;
