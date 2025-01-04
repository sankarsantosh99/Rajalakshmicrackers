import React from "react";
import "./addproducts.css";

export default function AddProducts() {
  return (
    <>
      <div className="">
        <form onSubmit="" className="addproducts">
          <div className="filecon">
            <button className="filebtn">Browse Files</button>
            <input type="file" className="fileinp" />
          </div>

          <div className="datacon">
            
              <div>
                
                  <input
                    type="text"
                    placeholder="Enter Product Name"
                    className="inputs"
                  />
                
                  <input
                    type="text"
                    placeholder="Enter Cost Price"
                    className="inputs"
                  />
                
              </div>
              <div>
                
                  <input
                    type="text"
                    placeholder="Enter Brand Name"
                    className="inputs"
                  />
                
                  <input
                    type="text"
                    placeholder="Enter Sales Price"
                    className="inputs"
                  />
               
              </div>
              <div>
                  <input
                    type="text"
                    placeholder="Select Category"
                    className="inputs"
                  />
              
                  <input
                    type="text"
                    placeholder="Enter Age Limit"
                    className="inputs"
                  />
              
              </div>

               <div>
                  <input
                    type="text"
                    placeholder="Enter Stock availability"
                    className="inputs"
                  />
              
                  <input
                    type="text"
                    placeholder="Enter Sound Description"
                    className="inputs"
                  />
               </div>
            
            <input
              placeholder=" Enter Cracker Description"
              className="textar"
            />
            <button className="add">Add Product</button>
          </div>
        </form>
      </div>
    </>
  );
}
