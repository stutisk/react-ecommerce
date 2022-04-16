import "../../styles/Cartpage.css";
// import "../../styles/ProductListing.css";
import {FaTags} from "../../Components/Icons";


const Checkout= () => {
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
                Price Details (2 items)
            </div>
            <div className="checkout-items m-1t">Total MRP <span>₹3398</span></div>
            <div className="checkout-items m-1t">Discount On MRP <span>₹-999</span></div>
            <div className="checkout-items m-1t"> Convenience Fee<span>₹100</span></div>
            {/* <hr> */}
            <div className="checkout-items m-1t card-btn-container"> TOTAL AMOUNT<span>₹2499</span></div>
            <button className=" btn-product primary btn-padding m-5">YAY! PLACE ORDER </button>

        </div>
 </>
   
    
    )
}
export {Checkout}