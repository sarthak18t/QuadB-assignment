import React from "react";
import "./body.css";

import {BsCurrencyRupee} from 'react-icons/bs'
import {BiDownArrow} from 'react-icons/bi'
import {BiUpArrow} from 'react-icons/bi'

const Body = () => {
  return (
    <div className="body">
      <div className="body-heading">
        <p>#</p>
        <p>Platform</p>
        <p>Last Traded Price</p>
        <p>Buy / Sell Price</p>
        <p>Difference</p>
        <p>Savings</p>
      </div>
      <div className="body-detail">
      <div className="body-detail-1">
          <p>1</p>
          <p><img src="/images/wazirX.png" alt = ''/>WazirX</p>
          <p><BsCurrencyRupee/>23,76,901</p>
          <p><BsCurrencyRupee/>23,76,901 / <BsCurrencyRupee/>23,89,000</p>
          <p className="difference-neg">-5.47 %</p>
          <p className="savings-neg"><BiDownArrow/><BsCurrencyRupee/>1,37,582</p> 
      </div>
      <div className="body-detail-2">
          <p>2</p>
          <p><img src="/images/bitbns.png" alt = ''/>Bitbns</p>
          <p><BsCurrencyRupee/>28,18,525</p>
          <p><BsCurrencyRupee/>28,14,726 / <BsCurrencyRupee/>28,18,525</p>
          <p className="difference-pos">12.00 %</p>
          <p className="savings-pos"><BiUpArrow/><BsCurrencyRupee/>3,01,897</p> 
      </div>
      <div className="body-detail-3">
            <p>3</p>
          <p><img src="/images/Colodax.png" alt = ''/>Colodax</p>
          <p><BsCurrencyRupee/>22,63,015</p>
          <p><BsCurrencyRupee/>22,63,015 / <BsCurrencyRupee/>22,63,015</p>
          <p className="difference-neg">-8.00 %</p>
          <p className="savings-neg"><BiDownArrow/><BsCurrencyRupee/>1,96,752</p>
      </div>
      <div className="body-detail-4">
          <p>4</p>
          <p><img src="/images/Zebpay.png" alt = ''/>Zebpay</p>
          <p><BsCurrencyRupee/>24,23,999</p>
          <p><BsCurrencyRupee/>24,23,999 / <BsCurrencyRupee/>24,05,000</p>
          <p className="difference-neg">-1.45 %</p>
          <p className="savings-neg"><BiDownArrow/><BsCurrencyRupee/>35,767</p>
      </div>
      <div className="body-detail-5">
        <p>5</p>
          <p><img src="/images/coinDCX.png" alt = ''/>CoinDCX</p>
          <p><BsCurrencyRupee/>24,04,300</p>
          <p><BsCurrencyRupee/>23,88,100 / <BsCurrencyRupee/>24,04,300</p>
          <p className="difference-neg">-2.26 %</p>
          <p className="savings-neg"><BiDownArrow/><BsCurrencyRupee/>55,467</p>
      </div>
      </div>
    </div>
  );
};

export default Body;
