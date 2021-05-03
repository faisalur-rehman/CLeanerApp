import React from "react";

const Schedule = () => {
  return (
    <div class="booking-card">
      <div class="card">
        <div class="card-body">
          <div class="row">
            <div class="col-5 c-pt c-pl">
              <h3>Bedrooms</h3>
              <div class="slidecontainer">
                <input
                  type="range"
                  min="1"
                  max="10"
                  value="2"
                  class="slider"
                  id="myRange"
                />
              </div>
              <h3>BathRooms</h3>
              <div class="slidecontainer">
                <input
                  type="range"
                  min="1"
                  max="10"
                  value="2"
                  class="slider"
                  id="myRange"
                />
              </div>
              <form class="form-inline" action="">
                <button class="btn booking-card-button" type="button">
                  SCHEDULE
                </button>
              </form>
            </div>
            <div class="col-7">
              <div class="card inside-card">
                <div class="card-body">
                  <div>
                    <h6>Rooms</h6>
                    <p class="card-text">2 Bedrooms, 1 BathRoom</p>
                  </div>
                  <div>
                    <h6>Date & Time</h6>
                    <p class="card-text">19/10/2021 @ 10:30 am</p>
                  </div>
                  <div>
                    <h6>Location</h6>
                    <p class="card-text">
                      539 Bluegum street, Midrand, South Africa
                    </p>
                  </div>

                  <hr />
                  <div class="card-bottom">
                    <h5>Total</h5>
                    <p>R215.00</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Schedule;
