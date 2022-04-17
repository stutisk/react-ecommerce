import "../../styles/Cartpage.css";

import {FaTags} from "../../Components/Icons";
import { useCart } from "../../Context/CartContext";


const Checkout= () => {
    const { state} = useCart();



    return(
    
   <>
 
        <div className="checkout-header m-1t">
            COUPONS
        </div>

        <div className="checkout-coupon m-1t input-padding">
            <div > <FaTags size={25} className="icon-color" />Apply Coupons</div>
            <div>
                <buttons className="log-in ">APPLY</buttons>
            </div>
        </div>

        <div className="checkout-item">
            <div className="checkout-header m-1t">
                Price Details <span>({state.cart.length} items)</span>
            </div>
            <div className="checkout-items m-1t">Total MRP <span>₹</span></div>
            <div className="checkout-items m-1t">Discount On MRP <span>₹</span></div>
            <div className="checkout-items m-1t"> Convenience Fee<span>₹100</span></div>
            {/* <hr> */}
            <div className="checkout-items m-1t card-btn-container"> TOTAL AMOUNT<span>₹</span></div>
            <button className=" btn-product primary btn-padding m-5">YAY! PLACE ORDER </button>

        </div>
 </>
   
    
    )
}
export {Checkout}