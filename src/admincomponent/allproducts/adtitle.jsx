import React from "react";
import { PiPlusCircleBold } from "react-icons/pi";

import "./adtitle.css";

export default function AdTitle() {
  return (
    <>
      <div className="adtitle">
        <div>
          <h3>All Products</h3>
          <div>
            <span>Home{">"}</span>
            <span>All Products</span>
          </div>
        </div>
        <div>
          <button className="addprod">
            <PiPlusCircleBold className="adicon" />
            ADD NEW PRODUCT
          </button>
        </div>
      </div>
    </>
  );
}
