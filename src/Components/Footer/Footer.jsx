import React from "react";
import "../../styles/Footer.css";
import {FaFacebook,FaTwitter } from "../Icons"

const Footer = () => {
  return (
  <div className="footer-container m-2t">
  <footer>
      <div className="container-footer padding-footer">

          <div className="item">
              <h2>Main Menu</h2>
              <ul>
                  <li><a href="#">HOME</a></li>
                  <li><a href="#">ABOUT US</a></li>
                  <li><a href="#">BLOG</a></li>
              </ul>
          </div>
          <div className=" item">
              <h2>Useful Links</h2>
              <ul>
                  <li><a href="#">FAQ</a></li>
                  <li><a href="#">PRIVACY POLICY</a></li>
                  <li><a href="#">TERMS AND CONDITIONS</a></li>
                  <li><a href="#">RETURN AND REFUND POLICY</a></li>
              </ul>
          </div>
          <div className=" item">
              <h2>Contact Us</h2>
              <ul>
                  <li><a href="#">CUSTOMER SUPPORT</a></li>
              </ul>
          </div>
          <div className=" item">
              <h2>Social Media</h2>
              <ul>
                  <li><a href="https://www.facebook.com/stuti.kumari.3994/"><FaFacebook size={25}   /></a> </li>
                  <li><a href="https://twitter.com/StutiKumari13"><FaTwitter size={25}  /></a> </li>
                  <li>Made with <i className="fa fa-heart span-color" aria-hidden="true"></i> by Stuti Kumari</li>
              </ul>
          </div>
      </div>
  </footer>
</div>
  );
};

export{Footer} ;