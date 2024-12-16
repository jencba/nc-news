import React from "react";
import './NavBar.css'
import { Link } from "react-router-dom";

export const NavBar = () => {
    return (
        <nav className="navbar">
     <div className="navbar-center">
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
  </div>
      </nav>
    );
  };