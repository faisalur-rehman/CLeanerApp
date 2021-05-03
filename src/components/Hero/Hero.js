import React from "react";
import HeroHeader from "../HeroHeader/HeroHeader";
import HeroInner from "../HeroInner/HeroInner";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Location from "./Location/Location";
import Schedule from "./Schedule/Schedule";
import BeCleaner from "./BeCleaner/BeCleaner";
import BusinessCard from "./BusinessCard/BusinessCard";
import HeroCalendar from "./Calendar/Calendar";

const Hero = () => {
  return (
    <section>
      <div className="hero">
        <div className="container">
          <div className="hero-inner">
            <Router>
              <HeroHeader />
              <Switch>
                <Route exact path="/">
                  <HeroInner />
                </Route>
                <Route exact path="/cleaner">
                  <BeCleaner />
                </Route>
                <Route exact path="/businessCard">
                  <BusinessCard />
                </Route>
                <Route path="/location">
                  <Location />
                </Route>
                <Route path="/calendar">
                  <HeroCalendar />
                </Route>
                <Route path="/schedule">
                  <Schedule />
                </Route>
              </Switch>
            </Router>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
