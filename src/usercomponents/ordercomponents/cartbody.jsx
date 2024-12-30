import React from "react";
import "./cartbody.css";
import { FaArrowUp, FaCubes } from "react-icons/fa6";

export default function CartBody() {
  return (
    <div className="cartbody">
      <div className="critem">
        <div className="cardtitle">
          <img src="favicon.ico" className="crimg" />

          <div className="cracker">
            <span className="crname">Lorem Ipsum</span>
            <span className="crtype">Cracker</span>
            <span className="crrate">₹1000</span>
          </div>
        </div>

        <div className="crsummary">
          <h5>Summary</h5>
          <p className="crpara">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat ab
            nisi nobis exercitationem animi vel.
          </p>
        </div>
        <a>Remove</a>

        <div className="purchase">
          <div className="bottom">
            <span>Quantity</span>
            <span className="val">
              <span className="text">x</span> 12
            </span>
          </div>
          <hr />
          <div className="bottom">
            <span>Price</span>
            <span className="val">12000</span>
          </div>
        </div>
      </div>
    </div>
  );
}
