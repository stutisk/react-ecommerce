import React from "react";
import { Navbar } from "../../Components/Navbar/Navbar";
import { Footer } from "../../Components/Footer/Footer";
import "../../styles/Homepage.css";
import "../../styles/Auth.css"
import {AiFillCaretRight} from "../../Components/Icons"
const Signuppage = () => {
  return (
    <div>
      <Navbar />
      <section className="login-section">
        <div className="aunth-container m-t5 padding " id="container">
          <div className="form-container ">
            <form action="login.html" className="form m-1t padding-i">
              <h3 className="aunth-heading m-5">WELCOME BACK!</h3>
              <label for="aunth-input" className="label m-1t">
                {" "}
                Enter Your Email Address*
              </label>
              <input
                className="aunth-input m-5 input-padding"
                type="email"
                placeholder="abcde88888@abcde.com"
              />
              <label for="aunth-input" className="label m-1t">
                {" "}
                Enter Your Password*
              </label>
              <input
                className="aunth-input m-5 input-padding"
                type="password"
                placeholder="*******"
              />
              <a  className="m-1t external-link">
                Forgot your password?
              </a>
              <button className="login-btn m-5  btn-padding">LOGIN </button>
            
              <a className="m-5 external-link logout icon-color">
              
                Don't have an account ? Sign-up
               <span><AiFillCaretRight size={25} className="icon-color logout" /></span> 
              </a>
            </form>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
};

export {Signuppage};
