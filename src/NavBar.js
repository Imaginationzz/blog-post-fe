import React from "react";
import { Link } from "react-router-dom";

const NavBar = () => (
  <nav>
    <ul>
      <li>
        <Link to="/">الرئيسية</Link>
      </li>
      <li>
        <Link to="/about">من نحن</Link>
      </li>
      <li>
        <Link to="/articles-list">مقالات</Link>
      </li>
    </ul>
  </nav>
);

export default NavBar;
