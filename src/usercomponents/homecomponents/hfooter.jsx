import React from "react";
import "./hfooter.css";
import { FaYoutube } from "react-icons/fa";
import { FaFacebookSquare } from "react-icons/fa";
import { FaInstagramSquare } from "react-icons/fa";
import { BiLogoWhatsappSquare } from "react-icons/bi";
import { FaLocationDot } from "react-icons/fa6";


export default function Hfooter() {
  return (
    <>
    <footer>
      <div className="container">
        <div className="faboutus">
          <h2>About Us</h2>
          <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Culpa pariatur nisi architecto optio quae accusamus? Laborum alias quia recusandae atque iste nisi consequuntur! Est fuga dolor iste adipisci maxime reprehenderit.</p>
          <ul>
            <li>
              <span><a href="#" className="ficons">
                <FaYoutube />
              </a></span>
            </li>
            <li>
              <a href="#" className="ficons">
                <FaFacebookSquare />
              </a>
            </li>
            <li>
              <a href="#" className="ficons">
                <FaInstagramSquare />
              </a>
            </li>
            <li>
              <a href="#" className="ficons">
                <BiLogoWhatsappSquare />
              </a>
            </li>
          </ul>
        </div>

        <div className="quicklinks">
          <h2>Quick Links</h2>
          <ul>
            <li>
              <a href="#">About</a>
            </li>
            <li>
              <a href="#">Terms & Conditions</a>
            </li>
            <li>
              <a href="#">Contact</a>
            </li>
            <li>
              <a href="#">Site Map</a>
            </li>
          </ul>
        </div>

        <div className="products">
          <h2>Products</h2>
          <ul>
            <li>
              <a href="#">kid Crackers</a>
            </li>
            <li>
              <a href="#">Green Crackers</a>
            </li>
            <li>
              <a href="#">Sound-free fireworks</a>
            </li>
            <li>
              <a href="#">Night Crackers</a>
            </li>
          </ul>
        </div>
        <div className="products">
          <h2>Products</h2>
          <ul>
            <li>
              <a href="#">kid Crackers</a>
            </li>
            <li>
              <a href="#">Green Crackers</a>
            </li>
            <li>
              <a href="#">Sound-free fireworks</a>
            </li>
            <li>
              <a href="#">Night Crackers</a>
            </li>
          </ul>
        </div>

        <div className="contactus">
          <h2>Contact Us</h2>
          <ul>
            <li>
              <span><FaLocationDot /> </span>
              <span></span>
            </li>
            <li>
              <a href="#"></a>
            </li>
            <li>
              <a href="#"></a>
            </li>
            <li>
              <a href="#"></a>
            </li>
          </ul>
        </div>
      </div>
    </footer>
    </>
  );
}
