import React, { useState } from "react";
import "./navbar.css";
import { Dropdown } from "react-bootstrap";
import { TbBrandTelegram } from "react-icons/tb";
import CircularProgressBar from "./CicularProgressBar";
import "./toogleButton.css";
// eslint-disable-next-line react-hooks/rules-of-hooks
var mode = false
const Navbar = () => {
   const [isDarkMode, setIsDarkMode] = useState(false);
  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
    mode = isDarkMode
  };

  return (
    <div className="navbar">
      <div className="navbar-logo">
        <img
          src="https://hodlinfo.com/static/media/HODLINFO.8f78fc06.png"
          alt="logo"
        ></img>
      </div>
      <div className="navbar-link">
        <Dropdown>
          <Dropdown.Toggle variant="primary" id="dropdown-basic">
            INR
          </Dropdown.Toggle>
          <Dropdown.Menu>
            <Dropdown.Item href="#action1">INR</Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown>

        <Dropdown>
          <Dropdown.Toggle variant="primary" id="dropdown-basic">
            BTC
          </Dropdown.Toggle>
          <Dropdown.Menu>
            <Dropdown.Item href="#action1">BTC</Dropdown.Item>
            <Dropdown.Item href="#action1">ETH</Dropdown.Item>
            <Dropdown.Item href="#action1">USDT</Dropdown.Item>
            <Dropdown.Item href="#action1">XRP</Dropdown.Item>
            <Dropdown.Item href="#action1">TRX</Dropdown.Item>
            <Dropdown.Item href="#action1">DASH</Dropdown.Item>
            <Dropdown.Item href="#action1">ZEC</Dropdown.Item>
            <Dropdown.Item href="#action1">XEM</Dropdown.Item>
            <Dropdown.Item href="#action1">IOST</Dropdown.Item>
            <Dropdown.Item href="#action1">WIN</Dropdown.Item>
            <Dropdown.Item href="#action1">BTT</Dropdown.Item>
            <Dropdown.Item href="#action1">WRX</Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown>
        <button>BUY BTC</button>
      </div>
      <div className="navbar-about">
        <CircularProgressBar />
        <button>
          <TbBrandTelegram /> Connect Telegram
        </button>
        <div className={isDarkMode?"dak-mode":"light-mode"}>
        <label className="switch">
          <input type="checkbox" onChange={toggleDarkMode} />
          <span className="slider round" />
        </label>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
export {mode}