import React from "react";
import "./hfooter.css";
import {
  FaWhatsappSquare,
  FaFacebookSquare,
  FaInstagramSquare,
  FaPhoneAlt,
} from "react-icons/fa";
import {
  FaLocationDot,
  FaRegCopyright,
  FaSquareYoutube,
} from "react-icons/fa6";

export default function Hfooter() {
  return (
    <>
      <footer className="hfooter">
        <div className="hfootcon">
          <div className="faboutus">
            <h3 className="fheads">Get To Know Us</h3>
            <ul>
              <li>
                <a href="#" className="flinks">
                  About Us
                </a>
              </li>
              <li>
                <a href="#" className="flinks">
                  Our Stores
                </a>
              </li>
              <li>
                <a href="#" className="flinks">
                  Services
                </a>
              </li>
              <li>
                <a href="#" className="flinks">
                  Site Map
                </a>
              </li>
            </ul>
          </div>

          <div className="quicklinks">
            <h3 className="fheads">Quick Links</h3>
            <ul>
              <li>
                <a href="#" className="flinks">
                  Terms & Conditions
                </a>
              </li>
              <li>
                <a href="#" className="flinks">
                  Contact
                </a>
              </li>
              <li>
                <a href="#" className="flinks">
                  Site Map
                </a>
              </li>
            </ul>
          </div>

          <div className="products">
            <h3 className="fheads">Products</h3>
            <ul>
              <li>
                <a href="#" className="flinks">
                  kid Crackers
                </a>
              </li>
              <li>
                <a href="#" className="flinks">
                  Green Crackers
                </a>
              </li>
              <li>
                <a href="#" className="flinks">
                  Sound-free fireworks
                </a>
              </li>
              <li>
                <a href="#" className="flinks">
                  Night Crackers
                </a>
              </li>
            </ul>
          </div>

          <div className="contactus">
            <h3 className="fheads">Contact Us</h3>
            <ul>
              <li className="fconli">
                <span>
                  <FaLocationDot className="fconic" />
                </span>
                <span className="fconsp">
                  Vsoft,
                  <br />
                  Vannarpettai,
                  <br />
                  Tirunelveli.
                  <br />
                </span>
              </li>
              <li className="fconli">
                <span>
                  <FaPhoneAlt className="fconic" />
                </span>
                <span className="fconsp">+91 1234567890</span>
              </li>
              <li>
                <a href="#" className="flinks"></a>
              </li>
              <li>
                <a href="#" className="flinks"></a>
              </li>
            </ul>
          </div>
        </div>

        <div className="fsocial">
          <a href="#" className="ficons flinks">
            <FaSquareYoutube />
          </a>

          <a href="#" className="ficons flinks">
            <FaFacebookSquare />
          </a>

          <a href="#" className="ficons flinks">
            <FaInstagramSquare />
          </a>

          <a href="#" className="ficons flinks">
            <FaWhatsappSquare />
          </a>
        </div>

        <div className="copri">
          <FaRegCopyright />
          RajalakshmiCrackers Limited. All Rights Reserved
        </div>
      </footer>
    </>
  );
}
