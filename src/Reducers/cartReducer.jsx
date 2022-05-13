const cartReducer = (state, action) => {
  switch (action.type) {
    case "ADD_TO_CART":
      return {
        ...state,
        cart: [...state.cart, { ...action.payload, qnty: 1 }],
      };
     

    case "REMOVE_FROM_CART":
      return {
        ...state,
        cart: state.cart.filter((obj) => obj.id !== action.payload.id),
      };

    case "REMOVE_FROM_WISHLIST":
      return {
        ...state,
        wishlist: state.wishlist.filter((obj) => obj.id !== action.payload.id),
      };
    case "ADD_TO_WISHLIST":
      return {
        ...state,
        wishlist: [...state.wishlist, { ...action.payload }],
      };
    case "INCREASE_QUANTITY":
      return {...state,
        cart: 
         state.cart.map((obj) => obj.id === action.payload.id ? 
             {...obj, qnty: obj.qnty + 1} : obj)
         };
      
    case "DECREASE_QUANTITY":
      return {...state,
        cart: 
         state.cart.map((obj) => obj.id === action.payload.id ? 
             {...obj, qnty: obj.qnty > 1 ? obj.qnty - 1: obj.qnty} : obj)
         };
     
    default:
      return state;
  }
};
export { cartReducer };
