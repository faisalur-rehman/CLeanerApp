import React from "react";
import android from "../../assets/images/android1.png";
import appstore from "../../assets/images/appstore1.png";
const AppBanner = () => {
  return (
    <section class="download-app mt-5">
      <div class="container">
        <h1>Get a Clean Today</h1>
        <div class="image-group">
          <img src={android} alt="Andriod Link" />
          <img src={appstore} alt="App-Store" />
        </div>
        <p>Or Sign up to be a cleaner</p>
      </div>
    </section>
  );
};

export default AppBanner;
