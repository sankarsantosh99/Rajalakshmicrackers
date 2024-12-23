import React from "react";
import "./adsidebar.css";

import { RiDashboardHorizontalLine } from "react-icons/ri";
import { FaDropbox } from "react-icons/fa";
import { FaFileAlt } from "react-icons/fa";

export default function AdSideBar() {
  return (
    <div className="adsbar">
      <a className="adslogo">
        <img src="/assets/rajalakshmilogo.png" className="LogoRajalaksmi" />
      </a>

      <div className="sbartop">
        <button className="adsbutton">
          <span className="icon">
            <RiDashboardHorizontalLine />
          </span>
          Dashboard
        </button>

        <button className="adsbutton">
          <span className="icon">
            <FaDropbox />
          </span>
          All products
        </button>

        <button className="adsbutton">
          <span className="icon">
            <FaFileAlt />
          </span>
          Order List
        </button>
      </div>

      <div className="sbarcatcon">
        <h4>Categories</h4>
        <p className="sbarcatlist">
          Lorem Ipsum <button className="sbarcatbutton">21</button>
        </p>
        <p className="sbarcatlist">
          Lorem Ipsum <button className="sbarcatbutton">21</button>
        </p>
        <p className="sbarcatlist">
          Lorem Ipsum <button className="sbarcatbutton">21</button>
        </p>
        <p className="sbarcatlist">
          Lorem Ipsum <button className="sbarcatbutton">21</button>
        </p>
      </div>
    </div>
  );
}
