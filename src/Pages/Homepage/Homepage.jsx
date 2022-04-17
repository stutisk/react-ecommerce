import React from "react";
import { Navbar } from "../../Components/Navbar/Navbar";
import { Footer } from "../../Components/Footer/Footer";
import "../../styles/Homepage.css";
import { Categories } from "../../Components/Cards/Categories";
import {
  AiOutlineCaretLeft,
  AiFillCaretRight,
  BsFillCheckCircleFill,
  FaTruckMoving,
  FaRegCreditCard,
} from "../../Components/Icons";
import { Link} from "react-router-dom";

const Homepage = () => {
  return (
    <div>
      <Navbar />
      <div className="hero-section">
        <img
          className="img-hero m-t3"
          src="https://res.cloudinary.com/dvbw8xujd/image/upload/v1649711816/Hero_v5uubq.jpg"
          alt="hero image"
        />
        <div className="overlay-text">
          20% OFF SITE WIDE SALE
          <button className="hero-btn btn-padding">
            {" "}
            <Link to="/productpage">SHOP NOW</Link>
          </button>
        </div>
      </div>
      <div className="category m-1t ">
        <p>Featured Categories</p>
        <img src="https://res.cloudinary.com/dvbw8xujd/image/upload/v1649759391/design_ncppvj.png" />
      </div>
      <Categories />
      <div className="category m-1t ">
        <p>Blogs And Articles</p>
        <img src="https://res.cloudinary.com/dvbw8xujd/image/upload/v1649759391/design_ncppvj.png" />
      </div>
      {/* blogs */}
      <section className="card-categories   m-t5 ">
        <div className="prev-btn m-t5">
          <button className="move-btn">
            <AiOutlineCaretLeft size={25} className="icon-color" />
          </button>
        </div>
        <a href="" className=" cards blog-categories ">
          <div>
            <img
              src="https://res.cloudinary.com/dvbw8xujd/image/upload/v1649784421/blogs1_d5a3dk.png"
              className="card-image "
              alt="blog-img"
            />
          </div>
          <span className="blog-created">
            <time datetime="2022" className="date">
              1 Feb, 2022
            </time>

            <div>Secrets to Make Your Scents Last...</div>
          </span>
        </a>
        <a href="" className=" cards blog-categories">
          <div>
            <img
              src="https://res.cloudinary.com/dvbw8xujd/image/upload/v1649784421/b-3_mjfwyf.png"
              className="card-image "
              alt="blog-img"
            />
          </div>
          <span className="blog-created">
            <time datetime="2022" className="date">
              1 Feb, 2022
            </time>

            <div>Secrets to Make Your Scents Last...</div>
          </span>
        </a>
        <a href="" className=" cards blog-categories">
          <div>
            <img
              src="https://res.cloudinary.com/dvbw8xujd/image/upload/v1649784421/b-4_hy5gnj.png"
              className="card-image "
              alt="blog-img"
            />
          </div>
          <span className="blog-created">
            <time datetime="2022" className="date">
              1 Feb, 2022
            </time>

            <div>Secrets to Make Your Scents Last...</div>
          </span>
        </a>
        <div className="next-btn m-t5">
          <button className="move-btn">
            <AiFillCaretRight size={25} className="icon-color" />
          </button>
        </div>
      </section>
      {/* service */}
      <div className="service-category  m-t5 card-background ">
        <div className="services ">
          <div className="service-icon">
            <BsFillCheckCircleFill size={80} className="icon-color" />
          </div>
          <div className="text">
            <div className="heading">Money Guarantee</div>
            <div className="sub-heading ">7 Days Money Back</div>
          </div>
        </div>
        <div className="services">
          <div className="service-icon">
            <FaTruckMoving size={80} className="icon-color" />
          </div>
          <div className="text">
            <div className="heading ">Fast Delivery</div>
            <div className="sub-heading ">Within 2-6 business days</div>
          </div>
        </div>
        <div className="services">
          <div className="service-icon">
            <FaRegCreditCard size={80} className="icon-color" />
          </div>
          <div className="text">
            <div className="heading ">Secure Payments</div>
            <div className="sub-heading ">business days</div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export { Homepage };