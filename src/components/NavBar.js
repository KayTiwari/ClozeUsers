import React from "react";
import { Link } from "react-router-dom";
import "../App.css";

const NavBar = () => {
  return (
    <nav className="navbar">
      <ul>
        <Link className="home" to="/">
          Home
        </Link>
      </ul>
    </nav>
  );
};

export default NavBar;
