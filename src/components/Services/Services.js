import React from "react";
import cleaning from "../../assets/images/cleaning1.png";
import wallet from "../../assets/images/wallet1.png";
import iphone from "../../assets/images/iphone2.png";

const Services = () => {
  return (
    <section className="services mt-5">
      <div className="container">
        <div className="row">
          <div className="col-lg-4 col-md-4 align-item-center justify-content-center">
            <div className="services-image">
              <img src={cleaning} alt=" Clean" />
            </div>
            <div className="services-text">
              <h2 className="mt-2">Get a clean</h2>
              <p>Schedule for a clean in minutes.</p>
            </div>
          </div>
          <div className="col-lg-4 col-md-4 align-item-center justify-content-center">
            <div className="services-image">
              <img src={wallet} alt=" Clean" />
            </div>
            <div className="services-text mt-2">
              <h2 className="mt-2 ">Get great prices</h2>
              <p>We promote transparency in our prices.</p>
            </div>
          </div>
          <div className="col-lg-4 col-md-4 align-item-center justify-content-center">
            <div className="services-image">
              <img src={iphone} alt=" Clean" />
            </div>
            <div className="services-text">
              <h2 className="mt-2">Easy to use</h2>
              <p>Download our app to find out more.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
