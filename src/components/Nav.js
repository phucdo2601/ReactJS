import React from "react";
import { NavLink } from "react-router-dom";
// import "../styles/Nav.css";
import "../styles/Nav.scss";

//arrow function
const Nav = () => {
  return (
    <>
      <div className="topnav">
        <NavLink to="/">Home</NavLink>
        <NavLink to="/timer">Timer App</NavLink>
        <NavLink to="/todo">Todo App</NavLink>
        <NavLink to="/secret">Secret</NavLink>
      </div>
    </>
  );
};

export default Nav;
