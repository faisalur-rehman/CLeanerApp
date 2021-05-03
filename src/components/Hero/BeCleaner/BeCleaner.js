import React from "react";
import appstore from "../../../assets/images/appstore1.png";
import "./BeCleaner.css";
const BeCleaner = () => {
  return (
    <div class="cleanerCard">
      <div class="card">
        <div class="card-body">
          <h5 class="card-title cleaner">Become a cleaner with us today.</h5>
          <form class="form-inline" action="">
            <input type="text" name="" id="" placeholder="Enter your email" />
            <button class="btn cleanerCard-button" type="button">
              Submit
            </button>
          </form>
          <div class="d-flex pt-3">
            <p>Or Download the App</p>
            <span class="pl-3">
              <img src={appstore} alt="" />
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BeCleaner;
