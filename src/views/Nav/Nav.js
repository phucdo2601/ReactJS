import React, { Component } from "react";
import "../Nav/Nav.scss";

class Nav extends Component {
  render() {
    return (
      <div>
        <div className="topnav">
          <a className="active" href="/">
            Home
          </a>
          <a href="/todo">Todos</a>
          <a href="/about">About</a>
        </div>
      </div>
    );
  }
}

export default Nav;
