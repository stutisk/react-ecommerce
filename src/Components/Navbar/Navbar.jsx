import "../../styles/Navbar.css";
import { FaShoppingCart, FaHeart, FaSignOutAlt } from "../Icons";
import React from "react";
import {  Link} from "react-router-dom";
const Navbar = () => {
  return (
    <div className="homepage-container">
      <div className="container m-a ">
        <nav className="nav-bar ">
          <div className="left-side ">
            <Link to="/">
              MiS<span className="span-color">tO</span>
            </Link>
          </div>
          <div className="nav-link-container">
            <Link to="/" className=" nav-link padding " >
              Women
            </Link>
            <Link to ="/" className="nav-link padding" >
              Men
            </Link>
            <Link to ="/" className="nav-link padding ">
              Kids
            </Link>
          </div>
          <div className="search-bar m-5">
            <form action="#">
              <input
                type="search"
                placeholder=" Search..."
                name="search"
                className="icon-search"
              />
            </form>
          </div>
          <div className="right-links">
            <ul>
              <div>
                <li>
                  <Link to="/Cartpage"
                    className="padding-i  "
                  >
                    <FaShoppingCart size={25} className="icon-color" />
                  </Link>
                </li>
              </div>

              <li>
              <Link to="/Wishlist" className="padding-i ">
                  <FaHeart size={25} className="icon-color" />
                </Link>
              </li>
              <li>
                <a
                  href="./Authentication/login.html"
                  className="padding-i logout "
                >
                  <FaSignOutAlt size={25} className="icon-color" />
                  <span className="logout">Logout</span>
                </a>
              </li>
            </ul>
          </div>
        </nav>
      </div>
    </div>
  );
};

export { Navbar };
