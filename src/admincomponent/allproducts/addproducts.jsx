import React from "react";
import "./addproducts.css";

export default function AddProducts() {
  return (
    <>
      <div className="addproducts">
        <form onSubmit="">

          <div className="filecon"> 
            <button className="filebtn">Browse Files</button>
            <input type="file" className="fileinp" />
          </div>

        </form>
      </div>
    </>
  );
}
