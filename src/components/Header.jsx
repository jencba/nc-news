import React from "react";
import { NavBar } from "./NavBar";
import { Link } from "react-router-dom";

export const Header = ({ className }) => {
  return (
    <>

    <header className={className}>
     
<Link to="/home"><h1>NC News</h1></Link>
    </header>
    <NavBar />
    </>
  );
};