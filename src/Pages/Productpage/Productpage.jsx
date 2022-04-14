import React from "react";
import { Navbar } from "../../Components/Navbar/Navbar";
import { Footer } from "../../Components/Footer/Footer";
import { ProductListing } from "../../Components/ProductListing/ProductListing";
import "../../styles/ProductListing.css";
import { AsideBar } from "../../Components/AsideBar/AsideBar";
const Productpage = () => {
  return (
    <div>
      <Navbar />
      <div class="products-page m-t3">
        <AsideBar />
     <ProductListing />
      </div>
      <Footer />
    </div>
  );
};

export { Productpage };
