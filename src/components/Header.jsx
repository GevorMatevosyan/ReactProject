import React from "react";
import { routes } from "../routes";
import { Link } from "react-router-dom";
const Header = () => {
  const menuItems = routes
    .filter((item) => item.path !== "/*")
    .map((item) => item.path.slice(1));

  return (
    <div className="header">
      <div className="logo">
        <Link to='/' className="logoclass">
            Logo
        </Link>
      </div>
      <ul className="menu">
        {menuItems.map((item) => (
          <li key={item}>
            <Link to={"/" + item}>
              {item === "" ? "Home" : item}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};
export default Header;
