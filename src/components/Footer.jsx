import React from "react";
import { routes } from "../routes";
import { Link } from "react-router-dom";
const Footer = () => {
  const menuItems = routes
    .filter((item) => item.path !== "/*")
    .map((item) => item.path.slice(1));

  return (
    <div class="container">
        <footer>
            <div class="footer-content">
                <p>&copy; 2023 Your Company</p>
                <p>Contact: contact@yourcompany.com</p>
            </div>
        </footer>
    </div>
  );
};
export default Footer;
