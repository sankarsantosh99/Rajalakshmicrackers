import React from "react";
import "./adheader.css";
import { IoIosArrowDown } from "react-icons/io";
import { CiSearch } from "react-icons/ci";
import { FaBell } from "react-icons/fa";


export default function AdHeader() {
  return (
    <>
      <div className="adheader">
        <span className="adicon"><CiSearch /></span>
        <span className="adicon"><FaBell />
        </span>
        <div><button className="adhbutton">ADMIN<IoIosArrowDown /></button></div>
      </div>
    </>
  );
}
