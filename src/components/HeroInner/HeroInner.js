import React from "react";
import appStore1 from "../../images/appstore1.png";
import androidStore1 from "../../images/android1.png";

const HeroInner = () => {
  return (
    <>
      {/* <div
        style={{
          textAlign: "center",
          display: "flex",
          justifyContent: "center",
        }}
      >
        <div
          style={{
            width: "2%",
            background: "red",
            marginRight: "22rem",
            borderRadius: "50%",
          }}
        >
          .
        </div>
        <div
          style={{
            width: "2%",
            marginRight: "22rem",
            background: "red",
            borderRadius: "50%",
          }}
        >
          .
        </div>
        <div style={{ width: "2%", borderRadius: "50%", background: "red" }}>
          .
        </div>
      </div> */}
      <div className="hero-inner-text">
        <h2>
          Join the industry’s leading cleaning services. Set your own hours and
          become your own boss.
        </h2>
      </div>
      <form className="form-inline hero-inner-form" action="">
        <input type="text" name="" id="" placeholder="Enter You Email" />
        <button className="btn hero-button" type="button">
          Subscribe
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
