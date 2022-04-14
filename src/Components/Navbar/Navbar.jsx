import "../../styles/Navbar.css";
import { FaShoppingCart,FaHeart,FaSignOutAlt  } from"../Icons";
import React from "react";

const Navbar = () => {
  return (
  <div className="homepage-container">
        <div className="container m-a ">
            <nav className="nav-bar ">
                <div className="left-side ">
                    <a href="./index.html">MiS<span className="span-color">tO</span></a>
                </div>
                <div className="nav-link-container">
                    <a className=" nav-link padding " href="">Women</a>
                    <a className="nav-link padding" href="">Men</a>
                    <a className="nav-link padding " href="">Kids</a>
                </div>
                <div className="search-bar m-5">
                    <form action="#">
                        <input type="search" placeholder=" Search..." name="search" className="icon-search"/></form>
                </div>
                <div className="right-links">
                    <ul>
                        <li><a href="./wishlist page/wishlist.html" className="padding-i "><FaShoppingCart size={25} className="icon-color" /></a>
                        </li>
                        <li><a href="./cart management/cart.html" className="padding-i "><FaHeart size={25}  className="icon-color"/ ></a>
                        </li>
                        <li><a href="./Authentication/login.html" className="padding-i logout " ><FaSignOutAlt size={25}  className="icon-color"/ ><span className="logout">Logout</span></a></li>
                    </ul>
                </div>
            </nav>
        </div>

        </div>
  )
};

export {Navbar};