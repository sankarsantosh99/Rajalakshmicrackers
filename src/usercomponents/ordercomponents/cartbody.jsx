import React from "react";
import "./cartbody.css";
import { FaArrowUp, FaCubes } from "react-icons/fa6";

export default function CartBody() {
  return (
    <>
      <div className="cartbody">
        <div className="cart">

          <div className="orderdetails">
            <div className="det">Product Details</div>
            <div className="critem">
              <div className="crtitle">
                <div className="cardtitle">
                  <img src="favicon.ico" className="crimg" />
                  <div className="cracker">
                    <span className="crname">Lorem Ipsum</span>
                    <span className="crtype">Cracker</span>
                    <span className="crrate">₹1000</span>
                    <a href="#" className="crremove">
                      X REMOVE
                    </a>
                  </div>
                </div>
                <a href="#" className="edit">
                  <span>EDIT</span>
                </a>
              </div>
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
                  <span className="val">
                    <span className="text">₹</span> 12000
                  </span>
                </div>
              </div>
            </div>
          </div>

          <div className="orderprice">
            <div className="det">Price Details(12 Items)</div>
            <div>Total Product Price</div>
          </div>
        </div>
      </div>
    </>
  );
}
