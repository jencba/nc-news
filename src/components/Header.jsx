import React from "react";
import { NavBar } from "./NavBar";
import { Link } from "react-router-dom";

export const Header = () => {
  return (
    <>

    <header>
     
<Link to="/home"><h1>NC News</h1></Link>
    </header>
    <NavBar />
    </>
  );
};