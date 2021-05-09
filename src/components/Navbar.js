import React from "react";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="navbar navbar-dark bg-dark navbar-expand">
      <Link to="/" className="navbar-brand ml-3">
        My Portfolio
      </Link>

      <div className="collapse navbar-collapse">
        <ul className="navbar-nav ml-auto mr-3">
          <li className="navbar-item">
            <Link to="/" className="nav-link">
              Home
            </Link>
          </li>

          <li className="navbar-item">
            <Link to="/about" className="nav-link">
              About
            </Link>
          </li>

          <li className="navbar-item">
            <Link to="/work" className="nav-link">
              Work
            </Link>
          </li>

          <li className="navbar-item">
            <Link to="/contact" className="nav-link">
              Contact
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
