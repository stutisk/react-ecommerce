import { createContext, useContext } from "react";
import { useReducer } from "react";
import { FilterReducer } from "../Reducers/FilterReducer";

const ProductContext = createContext();

const useProducts = () => useContext(ProductContext);
const InitialState = {
  products: [],
  category: [],
  rating: 0,
  price: 11750,
  sort: " ",
};
const ProductProvider = ({ children }) => {
  const [state, dispatch] = useReducer(FilterReducer, InitialState);
  return (
    <ProductContext.Provider value={{ state, dispatch, InitialState }}>
      {children}
    </ProductContext.Provider>
  );
};

export { useProducts, ProductProvider };
