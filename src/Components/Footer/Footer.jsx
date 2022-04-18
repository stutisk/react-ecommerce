import React from "react";
import "../../styles/Footer.css";
import {FaFacebook,FaTwitter } from "../Icons";
import { Link} from "react-router-dom";

const Footer = () => {
  return (
  <div className="footer-container m-2t">
  <footer>
      <div className="container-footer padding-footer">

          <div className="item">
              <h2>Main Menu</h2>
              <ul>
                  <li><Link to="">HOME</Link></li>
                  <li><Link to="">ABOUT US</Link></li>
                  <li><Link to="">BLOG</Link></li>
              </ul>
          </div>
          {/* <div className=" item">
              <h2>Useful Links</h2>
              <ul>
                  <li><a href="#">FAQ</a></li>
                  <li><a href="#">PRIVACY POLICY</a></li>
                  <li><a href="#">TERMS AND CONDITIONS</a></li>
                  <li><a href="#">RETURN AND REFUND POLICY</a></li>
              </ul>
          </div> */}
          {/* <div className=" item">
              <h2>Contact Us</h2>
              <ul>
                  <li><a href="#">CUSTOMER SUPPORT</a></li>
              </ul>
          </div> */}
          <div className=" item">
              <h2>Social Media</h2>
              <ul>
                  <li><Link to="https://www.facebook.com/stuti.kumari.3994/"><FaFacebook size={25}   /></Link> </li>
                  <li><Link to="https://twitter.com/StutiKumari13"><FaTwitter size={25}  /></Link> </li>
                  <li>Made with <i className="fa fa-heart span-color" aria-hidden="true"></i> by Stuti Kumari</li>
              </ul>
          </div>
      </div>
  </footer>
</div>
  );
};

export{Footer} ;