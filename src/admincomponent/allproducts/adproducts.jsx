import React from "react";
import "./adproducts.css";

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
            <p className="prpara">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat ab nisi nobis exercitationem animi vel.</p>
          </div>
          <div className=""></div>
        </div>

        <div className="pritem">2</div>

        <div className="pritem">3</div>

        <div className="pritem">4</div>
      </div>
    </>
  );
}

export default AdProducts;
