import React from "react";
import { NavLink } from "react-router-dom";

const Nav = ({ thatTextTho }) => (
  <nav className="main-nav">
    <ul>
      <li>
        <NavLink
          onClick={() => thatTextTho("tigers")}
          activeStyle={{ backgroundColor: "tomato" }}
          to="/tigers"
        >
          Tigers
        </NavLink>
      </li>
      <li>
        <NavLink
          onClick={() => thatTextTho("javascript")}
          activeStyle={{ backgroundColor: "green" }}
          to="/javascript"
        >
          JavaScript
        </NavLink>
      </li>
      <li>
        <NavLink onClick={() => thatTextTho("buildings")} to="/buildings">
          Buildings
        </NavLink>
      </li>
    </ul>
  </nav>
);

export default Nav;
