import React from "react";
import { BsCurrencyRupee } from "react-icons/bs";
import "./header.css";

const Header = () => {
  return (
    <div className="header">
      <div className="header-5min">
        <h2>0.35%</h2>
        <h5>5 Mins</h5>
      </div>
      <div className="header-1hour">
        <h2>1.33%</h2>
        <h5>1 Hour</h5>
      </div>
      <div className="header-main">
        <h3>Best Price To Trade</h3>
        <h1>
          <div className="main-rs">
            <BsCurrencyRupee />
          </div>
          25,16,520
        </h1>
        <h4>Average BTC/INR net price including commission</h4>
      </div>
      <div className="header-1day">
        <h2>6.89%</h2>
        <h5>1 Day</h5>
      </div>
      <div className="header-1week">
        <h2>13.05%</h2>
        <h5>7 Days</h5>
      </div>
    </div>
  );
};

export default Header;
