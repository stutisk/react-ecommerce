import {cartReducer} from "../Reducers/cartReducer.jsx"
import {createContext,useReducer,useContext } from "react";


const Cartcontext=createContext();

const useCart = () => useContext(Cartcontext);

const CartProvider = ({children}) => {
 const [state,dispatch] = useReducer(cartReducer,{cart:[],wishlist:[]});
  return (
    <Cartcontext.Provider value={{state,dispatch}}>
      {children}
    </Cartcontext.Provider>
  );
};

export  {CartProvider,useCart};
