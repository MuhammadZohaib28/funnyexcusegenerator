import React from "react";
import '../footer/footer.css';
import logo from '../../assets/logo.png'

const Footer = () => {
  return (
    <footer className="footer">
      <img src={logo} className="footerLogo" />
      <span >
        Design and developed by 
        <a href="https://muhammadzohaibportfolio.vercel.app" target="_blank" className="link"> Muhammad Zohaib</a>
      </span>
    </footer>
  );
};

export default Footer;
