import React from "react";
import "./adproducts.css";
import { FaArrowUp, FaCubes } from "react-icons/fa6";

function AdProducts() {
  return (
    <>
      <div className="prcontainer">
        <div className="pritem">
          <div className="cardtitle">
            <img src="favicon.ico" className="primg" />

            <div className="product">
              <span className="prname">Lorem Ipsum</span>
              <span className="prtype">Cracker</span>
              <span className="prprice">₹1000</span>
            </div>
          </div>

          <div className="prsummary">
            <h5>Summary</h5>
            <p className="prpara">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat
              ab nisi nobis exercitationem animi vel.
            </p>
          </div>

          <div className="stats">

            <div className="bottom">
              <span className="text">Sales</span>
              <span className="val">
                <FaArrowUp className="pricon" />
                1269
              </span>
            </div><hr/>
            <div className="bottom">
              <span className="text">Remaining Products</span>
              <span className="val">
                <FaCubes className="pricon" />
                1269
              </span>
            </div>
          </div>
        </div>

        <div className="pritem"><div className="cardtitle">
            <img src="favicon.ico" className="primg" />

            <div className="product">
              <span className="prname">Lorem Ipsum</span>
              <span className="prtype">Cracker</span>
              <span className="prprice">₹1000</span>
            </div>
          </div>

          <div className="prsummary">
            <h5>Summary</h5>
            <p className="prpara">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat
              ab nisi nobis exercitationem animi vel.
            </p>
          </div>

          <div className="stats">

            <div className="bottom">
              <span className="text">Sales</span>
              <span className="val">
                <FaArrowUp className="pricon" />
                1269
              </span>
            </div><hr/>
            <div className="bottom">
              <span className="text">Remaining Products</span>
              <span className="val">
                <FaCubes className="pricon" />
                1269
              </span>
            </div>
          </div></div>

        <div className="pritem"></div>

        <div className="pritem"></div>
      </div>
    </>
  );
}

export default AdProducts;
