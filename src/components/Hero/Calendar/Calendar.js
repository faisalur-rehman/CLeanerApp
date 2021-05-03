import React, { useState } from "react";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
import { Link } from "react-router-dom";
import "./Calendar.css";

const HeroCalendar = () => {
  const [value, onChange] = useState(new Date());

  return (
    <div className="calendar-card">
      <Calendar onChange={onChange} value={value} />
      <div>
        <input type="number" className="time" />
        <span>:</span>
        <input type="number" className="time" />
        <div>
          <Link to="schedule">
            <button className="time-btn">NEXT</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default HeroCalendar;
