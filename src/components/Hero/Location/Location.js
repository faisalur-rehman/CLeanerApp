import React, { useState } from "react";
import location from "../../../assets/images/location.png";
import { Redirect } from "react-router-dom";
const Location = () => {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };
  return (
    <div>
      <div class="location">
        <form class="form-inline location-from" onSubmit={handleSubmit}>
          <img src={location} alt="" />
          <input
            type="text"
            name=""
            required
            id=""
            placeholder="Enter Your Email"
          />
        </form>
        {submitted && <Redirect to="calendar" />}
      </div>
    </div>
  );
};

export default Location;
