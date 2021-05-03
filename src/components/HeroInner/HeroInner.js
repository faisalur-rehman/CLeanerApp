import React from "react";
import appStore1 from "../../images/appstore1.png";
import androidStore1 from "../../images/android1.png";

const HeroInner = () => {
  return (
    <>
      <div className="hero-inner-text">
        <h2>
          Join the industry’s leading cleaning services. Set your own hours and
          become your own boss.
        </h2>
      </div>
      <form className="form-inline hero-inner-form" action="">
        <input type="text" name="" id="" placeholder="Enter You Email" />
        <button className="btn hero-button" type="button">
          Subcribe
        </button>
      </form>
      <div className="images-group">
        <img src={appStore1} alt="" />
        <img src={androidStore1} alt="" />
      </div>
    </>
  );
};

export default HeroInner;
