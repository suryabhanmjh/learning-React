import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const navStyle = {
    background: "#007bff",
    padding: "15px 20px",
    boxShadow: "0 2px 4px rgba(0,0,0,0.1)"
  };

  const linkStyle = {
    color: "white",
    textDecoration: "none",
    margin: "0 15px",
    fontSize: "16px",
    fontWeight: "500",
    transition: "color 0.3s ease"
  };

  const separatorStyle = {
    color: "white",
    margin: "0 5px"
  };

  return (
    <nav style={navStyle}>
      <Link to="/" style={linkStyle}>Home</Link>
      <span style={separatorStyle}>|</span>
      <Link to="/counter" style={linkStyle}>Counter App</Link>
      <span style={separatorStyle}>|</span>
      <Link to="/theme" style={linkStyle}>Theme Change App</Link>
      <span style={separatorStyle}>|</span>
      <Link to="/todo" style={linkStyle}>ToDo List App</Link>
      <span style={separatorStyle}>|</span>
      <Link to="/contact" style={linkStyle}>Contact Us</Link>
    </nav>
  );
};

export default Navbar;
