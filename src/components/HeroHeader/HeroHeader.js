import React from "react";
import mop1 from "../../images/mop1.png";
import cleaningLady from "../../images/cleaning-lady1.png";
import suitcase from "../../images/suitcase2.png";
import { Link } from "react-router-dom";

const HeroHeader = () => {
  return (
    <div className="flex-container">
      <div className="item item1">
        <Link to="location">
          <img src={mop1} alt="" />
          <h2>Get a Cleaner</h2>
        </Link>
      </div>
      <div className=" item item2">
        <Link to="cleaner">
          <img src={cleaningLady} alt="" />
          <h2>Be a Cleaner</h2>
        </Link>
      </div>
      <div className=" item item3">
        <Link to="businessCard">
          <img src={suitcase} alt="" />
          <h2>Business</h2>
        </Link>
      </div>
    </div>
  );
};

export default HeroHeader;
