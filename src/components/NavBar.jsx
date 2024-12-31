import React, { useState } from "react";
import { Link } from "react-router-dom";


export const NavBar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <nav className="navbar">
      <button className="navbar-toggle" onClick={toggleMenu}>
        ☰
      </button>
      <div className={`navbar-center ${menuOpen ? "show" : ""}`}>
        <ul className="nav-links">
          <li>
            <Link to="/home">Home</Link>
          </li>
          <li>
            <Link to="/articles">Articles</Link>
          </li>
          <li>
            <Link to="/topics">Topics</Link>
          </li>
          <li>
            <Link to="/post">Post</Link>
          </li>
          <li>
            <Link to="/login">Log In</Link>
          </li>
        </ul>
        <select className="drop-down-menu" onChange={(e) => (window.location.href = e.target.value)}>
          <option value="" selected="selected">
            Menu
          </option>
          <option value="/home">Home</option>
          <option value="/articles">Articles</option>
          <option value="/topics">Topics</option>
          <option value="/post">Post</option>
          <option value="/login">Log In</option>
        </select>
      </div>
    </nav>
  );
};
