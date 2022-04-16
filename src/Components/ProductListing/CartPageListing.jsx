import "../../styles/ProductListing.css";
import React from "react";
import {Cartitemcard} from "../Cards/Cartitemcard";
import {useEffect ,useState} from "react";
import axios from "axios";
;

const ProductListing = () => {
  const [products, setProducts] = useState([]);
  async function getItems() {
    try {
      const res = await axios.get("/api/products");
      console.log(res.data);
      setProducts(res.data.products);
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    getItems();
  }, []);

  return (
    <div className="products-container m-2t m-l5">
      {
      products.map((products) => <Cartitemcard products={products}/>)
      }
    </div>
  );
};
export { ProductListing };
