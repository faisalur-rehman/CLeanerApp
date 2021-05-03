import React, { useState } from "react";
import "../../../src/assets/css/style.css";
import logo from "../../images/CleanAsst_logo.png";
import "./Header.css";
import { FaTimesCircle } from "react-icons/fa";

const Header = () => {
  const [toggle, setToggle] = useState(false);

  let nav = toggle ? "show" : "";
  function handleToggle() {
    setToggle(!toggle);
  }
  return (
    <header>
      <div className="container">
        <nav className="navbar navbar-expand-lg">
          <a className="navbar-brand" href="./index.html">
            <img src={logo} alt="Logo" />
          </a>

          <button
            style={{ marginLeft: "18px" }}
            className="btn nav-btn"
            type="submit"
          >
            GET AN ESTIMATE
          </button>
          <button className="navbar-toggler" type="button">
            <span className="navbar-toggler-icon" onClick={handleToggle}>
              {!toggle ? (
                <i style={{ fontSize: "2rem" }} className="fas fa-bars"></i>
              ) : (
                <FaTimesCircle style={{ fontSize: "2rem", color: "gray" }} />
              )}
            </span>
          </button>
          <ul className={`nav-items ${nav}`}>
            <li>About Us</li>
            <li>Careers</li>
            <li>Current Locations</li>
            <li>
              <button
                className="btn nav-btn"
                style={{ fontSize: "2rem", marginTop: "40px" }}
              >
                Contact Us
              </button>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
