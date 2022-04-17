import { FaShoppingCart } from "../Icons";
import "../../styles/Cartpage.css";
import "../../styles/ProductListing.css";
import React from "react";
import { useCart } from "../../Context/CartContext";

const Wishlistcard = ({ product }) => {
  const { dispatch } = useCart();
  //   console.log(state.wishlist);
  //   console.log(state.cart);
  return (
    <div>
      <div className=" m-2t ">
        <div>
          <img
            src={product.image}
            alt={product.category}
            className="image-product"
          />
        </div>
        <div>
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
          <div>
            <div>
              <button
                onClick={() =>
                  dispatch({ type: "REMOVE_FROM_WISHLIST", payload: product })
                }
                className=" btn-product primary btn-padding remove-from-cart-btn m-1t "
              >
                Remove From Wishlist
                <FaShoppingCart size={22} />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export { Wishlistcard };
