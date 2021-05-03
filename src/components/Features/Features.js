import React from "react";
import broom from "../../assets/images/broom1.png";
import smile from "../../images/smile1.png";
import help from "../../images/help1.png";

const Features = () => {
  return (
    <section class="features mt-5">
      <div class="container">
        <div class="row">
          <div class="col-lg-4 col-md-4 align-item-center justify-content-center">
            <div class="feature-image">
              <img src={broom} alt=" Clean Image" />
            </div>
            <div class="feature-text">
              <h2 class="mt-2">Reliable cleaning</h2>
              <p>Cleanify provide reliable services</p>
            </div>
          </div>
          <div class="col-lg-4 col-md-4  align-item-center justify-content-center">
            <div class="feature-image">
              <img src={smile} alt=" Clean " />
            </div>
            <div class="feature-text">
              <h2 class="mt-2">Customers always happy </h2>
              <p>Our customers are always satisfied </p>
            </div>
          </div>
          <div class="col-lg-4 col-md-4 align-item-center justify-content-center">
            <div class="feature-image">
              <img src={help} alt=" Clean " />
            </div>
            <div class="feature-text">
              <h2 class="mt-2">Support always available</h2>
              <p>24/7 support, whenever you need it</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;
