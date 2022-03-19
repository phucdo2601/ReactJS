import React from "react";
import "../styles/Nav.css";

//arrow function
const Nav = () => {
  return (
    <>
      <div className="topnav">
        <a className="active" href="#home">
          Home
        </a>
        <a href="#news">News</a>
        <a href="#contact">Contact</a>
        <a href="#about">About</a>
      </div>
    </>
  );
};

export default Nav;
