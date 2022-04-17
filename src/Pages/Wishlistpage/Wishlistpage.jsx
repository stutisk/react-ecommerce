import React from "react";
import { Navbar } from "../../Components/Navbar/Navbar";
import { useCart } from "../../Context/CartContext";
import { Wishlistcard } from "../../Components/Cards/Wishlistcard";
import "../../styles/Wishlist.css"


const Wishlistpage = () => {
    const { state } = useCart();
  console.log(state.wishlist)
  return (
    <div>
      <Navbar />
      <div className="m-t5"> 
          <div className="checkout-header m-1t">
            MY Wishlist (<span>{state.wishlist.length}</span> items)
          </div>
          <div className="Wishlist-container m-t3">
          {state.wishlist.map((products) => {
                    return <Wishlistcard product={products} id={products.id} />;
                  })}
                  </div>
          </div>
    </div>
  );
};

export { Wishlistpage };
