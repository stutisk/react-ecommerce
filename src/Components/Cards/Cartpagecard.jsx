import { FaShoppingCart, FaHeart } from "../Icons";
import "../../styles/Cartpage.css";
import "../../styles/ProductListing.css";

import React from "react";
// import { useCart } from "../../Context/CartContext";
import { HiMinusCircle, HiPlusCircle ,AiFillDelete} from "../Icons";
const Cartpagecard = ({ product }) => {
  // const { state, dispatch } = useCart();
  // console.log(cart)

  return (
    <div >
      <div className="cart-card padding card-Horizontal m-2t ">
        <div className=" horizontal-cart-image ">
          <img
            src={product.image}
            alt={product.category}
            className="image-product"
          />
        </div>
        <div className="content-side">
          <div className=" m-5">{product.title}</div>
          <div className="delivery details">
            <div className="delivery-details m-5">{product.brand}</div>
          </div>
          <div className="price-container m-5">
            <div className="price">{product.price}</div>
          </div>
          <div className="delivery details">
            <div className="delivery-details m-5">
              {product.deliverydetails}
            </div>
          </div>
          <div className="cart-actions">
            <div className="counter">
              <button className="btn-value">
                <HiMinusCircle className="icon-color" size={30} />
              </button>
              <p className="count m-1t">1</p>
              <button className="btn-value">
                <HiPlusCircle className="icon-color" size={30} />
              </button>
              
            </div>
            
          </div>

          <div className=" ">
              
              <div >
                <button className=" btn-product primary btn-padding remove-from-cart-btn m-1t ">
               Move To Wishlist 
                  <FaShoppingCart size={22} />
                </button>
              </div>
              <div>
                <button className=" btn-product primary btn-padding remove-from-cart-btn m-1t ">
                  Remove From Cart
                  <FaShoppingCart size={22} />
                </button>
              </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export { Cartpagecard };
