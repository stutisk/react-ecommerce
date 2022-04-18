import React from "react";
import { Navbar } from "../../Components/Navbar/Navbar";
import { Footer } from "../../Components/Footer/Footer";
import "../../styles/Homepage.css";
import "../../styles/Auth.css";
import {AiFillCaretRight} from "../../Components/Icons";
import {  Link} from "react-router-dom";
const Loginpage = () => {
  return (
    <div>
      <Navbar />
      <section className="login-section">
        <div className="aunth-container m-t5" id="container">
          <div className="form-container ">
            <form action="login.html" className="form m-1t">
            <h3 className="aunth-heading m-5">Sign Up</h3>
              <label for="aunth-input" className="label m-1t">
                {" "}
                Enter Your First Name*
              </label>
              <input
                className="aunth-input m-5 input-padding"
                type="email"
                placeholder="supriya"
              />
              <label for="aunth-input" className="label m-1t">
                {" "}
                Enter Your Last Name
              </label>
              <input
                className="aunth-input m-5 input-padding"
                type="email"
                placeholder="kumari"
              />
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
              <label for="aunth-input" className="label m-1t">
                {" "}
                Confirm Your Password*
              </label>
              <input
                className="aunth-input m-5 input-padding"
                type="password"
                placeholder="*******"
              />
              <button className="login-btn m-5  btn-padding">
                CREATE AN ACCOUNT
              </button>

              <Link to="/login"className="m-5 external-link logout icon-color">         
                Already have an account? Log in!
                <span><AiFillCaretRight size={25} className="icon-color" /></span> 
              </Link>
            </form>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
};

export { Loginpage };
