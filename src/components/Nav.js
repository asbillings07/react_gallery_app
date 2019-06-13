import React from "react";
import { NavLink } from "react-router-dom";

const Nav = () => {
  return (
    <nav className="main-nav">
      <ul>
        <li>
          <NavLink to="/tigers">Tigers</NavLink>
        </li>
        <li>
          <NavLink to="/computers">Computers</NavLink>
        </li>
        <li>
          <NavLink to="/buildings">Buildings</NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default Nav;
