import React from "react";
import "./subheader.css";

 function SubHeader({isVisible}) {
  // console.log({isVisible});
  return (
    <>
    
      <div className={`subheader ${isVisible? "visible":"hidden"}`}>
        <span className="subitems"><a href="#">Home</a></span>
        <span className="subitems"><a href="#">Products</a></span>
        <span className="subitems"><a href="#">About Us</a></span>
        <span className="subitems"><a href="#">Contact Us</a></span>
      </div>
    </>
  );
}
export default SubHeader;