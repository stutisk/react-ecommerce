import { FaShoppingCart, FaHeart } from "../Icons";
import "../../styles/Cartpage.css";
import "../../styles/ProductListing.css";
import React from "react";
import { useCart } from "../../Context/CartContext";
import { HiMinusCircle, HiPlusCircle, FaBookmark } from "../Icons";
import {Link}  from "react-router-dom";
const Cartpagecard = ({ product }) => {
  const { state, dispatch } = useCart();
  console.log(state.wishlist);
  console.log(state.cart);
  return (
    <div>
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
              <button
                onClick={() =>
                  dispatch({ type: "INCRESE_QUANTITY", payload: product })
                }
                className="btn-value"
              >
                <HiMinusCircle className="icon-color" size={30} />
              </button>
              <p className="count m-1t">8</p>
              <button className="btn-value">
                <HiPlusCircle className="icon-color" size={30} />
              </button>
            </div>
          </div>

          <div>
            <div>

              {state.wishlist.some((p) => p.id === product.id) ? (
                <Link to="/Wishlist">
                  <button className=" btn-product primary btn-padding remove-from-cart-btn">
                    Go To Wishlist
                    <FaBookmark  size={22} />
                  </button>
                  </Link>
               
              ) : (
                <button
                onClick={() =>
                  dispatch({ type: "ADD_TO_WISHLIST", payload: product })
                }
                className=" btn-product primary btn-padding  m-1t "
              >
                Move To Wishlist
                <FaBookmark  size={22} />
              </button>
              )}
            </div>
            <div>
              <button
                onClick={() =>
                  dispatch({ type: "REMOVE_FROM_CART", payload: product })
                }
                className=" btn-product primary btn-padding remove-from-cart-btn m-1t "
              >
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
