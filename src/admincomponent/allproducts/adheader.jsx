import React from "react";
import "./adheader.css";
import { IoIosArrowDown } from "react-icons/io";
import { IoSearch } from "react-icons/io5";
import { FaBell } from "react-icons/fa";

export default function AdHeader() {
  return (
    <>
      <div className="adheader">
        <span className="adicon">
        <IoSearch />
        </span>
        <span className="adicon">
          <FaBell />
        </span>
        <div>
          <button className="adhbutton">
            ADMIN
            <IoIosArrowDown />
          </button>
        </div>
      </div>
    </>
  );
}
