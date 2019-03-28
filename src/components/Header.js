import React from 'react';
import { NavLink } from "react-router-dom";

const Header = () => (
  <header>
    <span className="icn-logo"><i className="material-icons">code</i></span>
    <ul className="main-nav">
      <li>
				{// activeStyle is a way of directly affecting the styles of an active NavLink
				}
				<NavLink exact to="/" activeStyle={{ background: "tomato"}}>Home</NavLink>
			</li>
      <li>
				{// activeClassName lets you customise the class that gets applied to active NavLinks, rather than having it be the default "active"
				}
				<NavLink to="/about" activeClassName="active i-am-active-man">About</NavLink>
			</li>
      <li>
				<NavLink to="/teachers">Teachers</NavLink>
			</li>
      <li>
				<NavLink to="/courses">Courses</NavLink>
			</li>
    </ul>
  </header>
);

export default Header;
