import React from "react";
import "./hfooter.css";
import {
  FaWhatsappSquare,
  FaYoutube,
  FaFacebookSquare,
  FaInstagramSquare,
  FaPhoneAlt,
} from "react-icons/fa";
import { FaLocationDot, FaRegCopyright } from "react-icons/fa6";

export default function Hfooter() {
  return (
    <>
      <footer className="hfooter">
        <div className="hfootcon">
          <div className="faboutus">
            <h2 className="fheads">Get To Know Us</h2>
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
            <h2 className="fheads">Quick Links</h2>
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
            <h2 className="fheads">Products</h2>
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
            <h2 className="fheads">Contact Us</h2>
            <ul>
              <li>
                <span>
                  <FaLocationDot />{" "}
                </span>
                <p className="fpara">
                  Vsoft,
                  <br />
                  Vannarpettai,
                  <br />
                  Tirunelveli.
                  <br />{" "}
                </p>
              </li>
              <li>
                <span>
                  <FaPhoneAlt />
                </span>
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
            <ul className="fsocbar">
              <li>
                <a href="#" className="ficons flinks">
                  <FaYoutube />
                </a>
              </li>
              <li>
                <a href="#" className="ficons flinks">
                  <FaFacebookSquare />
                </a>
              </li>
              <li>
                <a href="#" className="ficons flinks">
                  <FaInstagramSquare />
                </a>
              </li>
              <li>
                <a href="#" className="ficons flinks">
                  <FaWhatsappSquare />
                </a>
              </li>
            </ul>
          </div>

          <div className="copri"><FaRegCopyright />RajalakshmiCrackers Limited. All Rights Reserved</div>

      </footer>
    </>
  );
}
