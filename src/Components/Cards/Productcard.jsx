import { FaShoppingCart, FaHeart ,AiTwotoneStar} from "../Icons";
import "../../styles/ProductListing.css";

import React from "react";
import { useCart } from "../../Context/CartContext";
import { Link} from "react-router-dom";

const Productcard = ({ products }) => {
  const {
    state: { cart,wishlist },
    dispatch,
  } = useCart();
  // console.log(cart);

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
        <div className="delivery-details m-5">{products.brand}</div>
      </div>
      <div className="product-title m-5">{products.title}</div>
      <div className="text-secondary rating-color m-5">{products.rating} <span className="rating-color"><AiTwotoneStar/></span></div>
      <div className="price-container m-5">
        <div className="price">{products.price}</div>
      </div>
      <div className="delivery details">
        <div className="delivery-details m-5">{products.deliverydetails}</div>
      </div>
      <div className=" card-btn-container m-5">
        {cart.some((p) => p.id === products.id) ? (
          <Link to="/Cartpage">
            <button className=" btn-product primary btn-padding remove-from-cart-btn">
              Go To Cart
              <FaShoppingCart size={22} />
            </button>
          </Link>
        ) : (
          <button
            onClick={() => dispatch({ type: "ADD_TO_CART", payload: products })}
            className=" btn-product primary btn-padding"
          >
            Add to Cart
            <FaShoppingCart size={22} />
          </button>
        )}
        <button
          onClick={() =>
            dispatch({ type: "ADD_TO_WISHLIST", payload: products })
          }
          className="wishlist-badge input-padding "
        >
          <FaHeart size={25} />
        </button>
      </div>
    </div>
  );
};
export { Productcard };
