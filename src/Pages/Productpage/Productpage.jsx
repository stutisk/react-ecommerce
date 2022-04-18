import React from "react";
import { Navbar } from "../../Components/Navbar/Navbar";
import { Footer } from "../../Components/Footer/Footer";
import { ProductListing } from "../../Components/ProductListing/ProductListing";
import "../../styles/ProductListing.css";

const Productpage = () => {
  return (
    <div>
      <Navbar />
      
     <ProductListing />
    
      <Footer />
    </div>
  );
};

export { Productpage };
