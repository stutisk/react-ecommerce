import "../../styles/ProductListing.css";
import React, { useState, useEffect } from "react";
import axios from "axios";
import { FaShoppingCart,FaHeart } from"../Icons";

const ProductListing = () => {
  const [products, setProducts] = useState([]);

  async function getItems() {
    try {
      const res = await axios.get("/api/products");
      console.log(res.data);
      setProducts(res.data.products);
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    getItems();
  }, []);

  return (
     <div className="products-container m-2t m-l5">
      {products.map((products) => {
        return (
          
          <div className="card-product padding">
            <div className="">
              <img
                src={products.image}
                alt={products.category}
                className="image-product"
              />
            </div>
            <div className="delivery details">
              <div className="delivery-details m-5">
              {products.brand}
            
              </div>
            </div>
            <div className="product-title m-5">{products.title}</div>
            <div className="text-secondary m-5">
              {products.rating}
            </div>
            <div className="price-container m-5">
              <div className="price">{products.price}</div>
            </div>
            <div className="delivery details">
              <div className="delivery-details m-5">
                {products.deliverydetails}
            
              </div>
             
                  
            </div>
            <div className=" card-btn-container m-5">
              <button className=" btn-product primary btn-padding">           
                Add to Cart
                < FaShoppingCart size={22}/>
              </button>
              <button className="wishlist-badge input-padding ">
                <FaHeart size={25}/>
              </button>
            </div>
          </div>
        );
      })}
    </div>
  );
};
export { ProductListing };
