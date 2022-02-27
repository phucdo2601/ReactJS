import React, { Component } from "react";
import "../Nav/Nav.scss";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  NavLink,
} from "react-router-dom";

class Nav extends Component {
  render() {
    return (
      <div>
        <div className="topnav">
          {/* <a className="active" href="/">
            Home
          </a>
          <a href="/todo">Todos</a>
          <a href="/about">About</a> */}

          {/* Link ho tro chuyen trang ma khong can reload lai, nhung no khong ho tro active tieu de khi nhan */}
          {/* NavLink ho tro chuyen trang ma khong can reload lai, va no co ho tro tro active tieu de khi nhan  */}

          {/* <Link to="/">Home</Link>
          <Link to="/todo">Todo</Link>
          <Link to="/about">About</Link> */}

          {/* phai them exaclt de cac duong NavLink phan bien ma khong hien thi nhieu mau */}
          <NavLink to="/" activeClassName="active" exact>
            Home
          </NavLink>
          <NavLink to="/todo" activeClassName="active">
            Todo
          </NavLink>
          <NavLink to="/about" activeClassName="active">
            About
          </NavLink>

          <NavLink to="/user" activeClassName="active">
            User
          </NavLink>
        </div>
      </div>
    );
  }
}

export default Nav;
