import React from "react";
import { useState, useEffect } from "react";
import { Footer } from "../../Components/Footer/Footer";
import { Checkout } from "./Checkout";
import { useCart } from "../../Context/CartContext";
import { Cartpagecard } from "../../Components/Cards/Cartpagecard";
import {
  AiFillCaretRight,
  FaBookmark,
  FaShoppingCart,
} from "../../Components/Icons";
import { Link } from "react-router-dom";

const Cartpage = () => {
  const { state } = useCart();
  console.log(state.cart);
  const [cartItemState, setItemState] = useState(false);
  useEffect(() => {
    if (state.cart.length > 0) {
      setItemState(true);
    } else {
      setItemState(false);
    }
  }, []);

  return (
    <div>
      <div className="homepage-container">
        <div className="container m-a ">
          <div className="cart-page">
            <div className="grid-container m-t5 m-l5">
              <div className="item1 ">
                <div className="checkout-header m-1t">MY CART (2 items)</div>
                {/* address- checkout */}
                <div className="checkout-coupon checkout-address m-1t input-padding">
                  <div>
                    <h4>DELIVER TO:Stuti SK,178009</h4> XYZ,CHD
                  </div>
                  <div>
                    <button className="log-in ">CHANGE</button>
                  </div>
                </div>
                {!cartItemState&&
                    <div>
                    <h1>Oops!</h1>
                    <h2>NO Items in the cart</h2>
                    <div className="checkout-coupon checkout-address m-1t input-padding">
                      <div>
                        {" "}
                        <div className="checkout-header m-1t">
                          {" "}
                          <FaBookmark className="icon-color " size={25} />
                          Add From WishList
                        </div>
                      </div>
                      <div>
                        <button className="move-btn">
                          <AiFillCaretRight className="icon-color " size={25} />
                        </button>
                      </div>
                    </div>
                    <div className="checkout-coupon checkout-address m-1t input-padding">
                      <div>
                        {" "}
                        <div className="checkout-header m-1t">
                          {" "}
                          <FaShoppingCart className="icon-color " size={25} />
                          Add From Cart
                        </div>
                      </div>
                      <div>
                       <Link to="/productpage">
                        <button className="move-btn">
                          <AiFillCaretRight className="icon-color " size={25} />
                        </button>
                        </Link>
                      </div>
                    </div>
                  </div> 
                }

                {cartItemState &&
                  state.cart.map((products) => {
                    return <Cartpagecard product={products} id={products.id} />;
                  })}
              </div>
              <div className="checkout-side ">
                <Checkout />
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* <Footer /> */}
    </div>
  );
};

export { Cartpage };
