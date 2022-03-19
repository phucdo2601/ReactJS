import React from "react";
// import "../styles/Nav.css";
import "../styles/Nav.scss";

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
