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
     <div class="products-container m-2t m-l5">
      {products.map((products) => {
        return (
          
          <div class="card-product padding">
            <div class="">
              <img
                src={products.image}
                alt={products.category}
                className="image-product"
              />
            </div>
            <div class="delivery details">
              <div class="delivery-details m-5">
              {products.brand}
            
              </div>
            </div>
            <div class="product-title m-5">{products.title}</div>
            <div class="text-secondary m-5">
              {products.rating}
            </div>
            <div class="price-container m-5">
              <div class="price">{products.price}</div>
            </div>
            <div class="delivery details">
              <div class="delivery-details m-5">
                {products.deliverydetails}
            
              </div>
             
                  
            </div>
            <div class=" card-btn-container m-5">
              <button class=" btn-product primary btn-padding">           
                Add to Cart
                < FaShoppingCart size={22}/>
              </button>
              <button class="wishlist-badge input-padding ">
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
