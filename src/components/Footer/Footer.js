import React from "react";
import logo from "../../images/CleanAsst_logo.png";
import appstore from "../../images/appstore1.png";
import android from "../../images/android1.png";
import twitter from "../../images/twitter-logo.png";
import insta from "../../images/instagram-logo.png";
import facebook from "../../images/facebook-logo.png";

const Footer = () => {
  return (
    <footer className="footer mt-5 pt-5">
      <div className="container">
        <div className="row">
          <div className="col-lg-4 col-md-3 mt-5 pl-1">
            <a className="footer-logo" href="./index.html">
              <img src={logo} alt="Logo" />
            </a>
            <div className="footer-downlaod">
              <div className="row align-item-center">
                <div className="img-group">
                  <img src={appstore} alt="" />
                  <img src={android} alt="" />
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-3 col-md-3 pl-1">
            <ul className="footer-links">
              <li className="font-weight-bold">
                <a href="1">About us</a>
              </li>
              <li className="pt-5">
                <a href="2">Current locations</a>
              </li>
              <li>
                <a href="3"> Careers</a>
              </li>
              <li>
                <a href="4">Contact us </a>
              </li>
            </ul>
          </div>
          <div className="col-lg-5 col-md-6 pl-1 footer-mail">
            <h2>Subscribe to newsletter</h2>
            <form className="form-inline" action="">
              <input type="text" name="" id="" placeholder="Enter You Email" />
              <button className="btn footer-button" type="button">
                Subcribe
              </button>
            </form>
          </div>
        </div>
        <div className="row">
          <div className="col-lg-12 mt-2 pl-1 social-links">
            <img
              className="pl-4"
              style={{ width: "50px" }}
              src={twitter}
              alt=""
            />
            <img
              style={{ width: "50px" }}
              className="pl-4"
              src={insta}
              alt=""
            />
            <img
              style={{ width: "50px" }}
              className="pl-4"
              src={facebook}
              alt=""
            />
          </div>
        </div>
        <div className="row mt-5 copy-right">
          <div className="col-lg-6 pl-1">
            <p>&copy; 2020 CleanAsst (Pty) Ltd All rights reserved</p>
          </div>
          <div className="col-lg-6">
            <ul className="d-flex other-pages ">
              <li>
                <a href="6">Privacy</a>
              </li>
              <li className="pl-5">
                <a href="7">Terms</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
