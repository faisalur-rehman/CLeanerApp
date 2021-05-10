import React from "react";

const BusinessCard = () => {
  return (
    <div class="businessCard">
      <div class="card">
        <div class="card-body">
          <h5 class="card-title">
            Are you a business owner and looking for our solutions? Submit your
            email so that we can be in touch.
          </h5>
          <form class="form-inline" action="">
            <input type="text" name="" id="" placeholder="Enter your email" />
            <button class="btn businessCard-button" type="button">
              Submit
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default BusinessCard;
