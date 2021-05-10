import React from "react";
import playstore from "../../../assets/images/android1.png";
import "./BeCleaner.css";
const BeCleaner = () => {
  return (
    <div class="cleanerCard">
      <div class="card">
        <div class="card-body">
          <h5 class="card-title cleaner">Become a cleaner with us today.</h5>
          <form class="form-inline" action="">
            <input
              type="text"
              name=""
              id=""
              placeholder="Enter your cellphone"
            />
            <button class="btn cleanerCard-button" type="button">
              Signup
            </button>
          </form>
          <div class="d-flex pt-3">
            <p>Or Download the App</p>
            <span class="pl-3">
              <img src={playstore} alt="" />
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BeCleaner;
