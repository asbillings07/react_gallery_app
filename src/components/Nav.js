import React from "react";
import { NavLink } from "react-router-dom";

const Nav = ({ getThatText }) => (
  <nav className="main-nav">
    <ul>
      <li>
        <NavLink
          onClick={() => getThatText("trains")}
          activeStyle={{ backgroundColor: "tomato" }}
          to="/trains"
        >
          Trains
        </NavLink>
      </li>
      <li>
        <NavLink
          onClick={() => getThatText("people")}
          activeStyle={{ backgroundColor: "green" }}
          to="/people"
        >
          People
        </NavLink>
      </li>
      <li>
        <NavLink onClick={() => getThatText("planes")} to="/planes">
          Planes
        </NavLink>
      </li>
    </ul>
  </nav>
);

export default Nav;
