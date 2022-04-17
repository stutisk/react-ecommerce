const cartReducer = (state, action) => {
  switch (action.type) {
    case "ADD_TO_CART":
      return {
        ...state,cart:[...state.cart,{...action.payload,qnty:1}]
      };
    
    case "REMOVE_FROM_CART":
      return{
          ...state,cart:state.cart.filter((obj) => obj.id !== action.payload.id)
      };
    
      case "ADD_TO_WISHLIST":
      return{
        ...state,wishlist:[...state.wishlist,{...action.payload}]
      };
     

      case "INCRESE_QUANTITY":
        return{
          
        }
        console.log("KK")
    
    default:
      return state;
  }
};
export { cartReducer };
