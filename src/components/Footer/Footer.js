import React from "react";
import logo from "../../images/CleanAsst_logo.png";
import appstore from "../../images/appstore1.png";
import android from "../../images/android1.png";
import twitter from "../../images/twitter-logo.png";
import insta from "../../images/instagram-logo.png";
import facebook from "../../images/facebook-logo.png";

const Footer = () => {
  return (
    <footer class="footer mt-5 pt-5">
      <div class="container">
        <div class="row">
          <div class="col-lg-4 col-md-3 mt-5 pl-1">
            <a class="footer-logo" href="./index.html">
              <img src={logo} alt="Logo" />
            </a>
            <div class="footer-downlaod">
              <div class="row align-item-center">
                <div class="img-group">
                  <img src={appstore} alt="" />
                  <img src={android} alt="" />
                </div>
              </div>
            </div>
          </div>
          <div class="col-lg-3 col-md-3 pl-1">
            <ul class="footer-links">
              <li class="font-weight-bold">
                <a href="#">About us</a>
              </li>
              <li class="pt-5">
                <a href="#">Current locations</a>
              </li>
              <li>
                <a href="#"> Careers</a>
              </li>
              <li>
                <a href="#">Contact us </a>
              </li>
            </ul>
          </div>
          <div class="col-lg-5 col-md-6 pl-1 footer-mail">
            <h2>Subscribe to newsletter</h2>
            <form class="form-inline" action="">
              <input type="text" name="" id="" placeholder="Enter You Email" />
              <button class="btn footer-button" type="button">
                Subcribe
              </button>
            </form>
          </div>
        </div>
        <div class="row">
          <div class="col-lg-12 mt-2 pl-1 social-links">
            <img src={twitter} alt="" />
            <img class="pl-4" src={insta} alt="" />
            <img class="pl-4" src={facebook} alt="" />
          </div>
        </div>
        <div class="row mt-5 copy-right">
          <div class="col-lg-6 pl-1">
            <p>&copy; 2020 Cleanify (Pty) Ltd All rights reserved</p>
          </div>
          <div class="col-lg-6">
            <ul class="d-flex other-pages ">
              <li>
                <a href="#">Privacy</a>
              </li>
              <li class="pl-5">
                <a href="#">Terms</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
