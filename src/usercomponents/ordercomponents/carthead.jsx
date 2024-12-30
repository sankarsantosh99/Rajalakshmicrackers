import React from "react";
import "./carthead.css";

export default function CartHead() {
  return (
    <div className="chead">
      <a href="#" className="carta">
        <img src="/assets/rajalakshmilogo.png" className="cartlogo" ></img>
      </a>

      <div className="stages">
        <span className="stgitem">1<span className="stgtext">cart</span> </span>
        <hr className="hrline" />
        <span className="stgitem">2<span className="stgtext">Address</span> </span>
        <hr className="hrline" />
        <span className="stgitem">3<span className="stgtext">Payment</span> </span>
        <hr className="hrline" />
        <span className="stgitem">4<span className="stgtext"> Summary</span> </span>
      </div>

      
    </div>
  );
}
