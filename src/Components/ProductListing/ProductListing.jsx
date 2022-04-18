import "../../styles/ProductListing.css";
import React from "react";
import { Productcard } from "../Cards/Productcard";
import { AsideBar } from "../AsideBar/AsideBar";
import { useEffect, useState } from "react";
import axios from "axios";
import { useProducts } from "../../Context/ProductContext";
import { getFiltereddata } from "../../utils/getFiltereddata";
import "../../styles/ProductListing.css";

const ProductListing = () => {
  const [products, setProducts] = useState([]);
  const { state } = useProducts();

  // console.log(state.products)
  useEffect(() => {
    (async () => {
      try {
        const res = await axios.get("/api/products");
        setProducts(res.data.products);
      } catch (error) {
        console.log(error);
      }
    })();
  }, []);

  console.log(state);
  console.log(products);

  const FinalProductList = getFiltereddata(state, products);

  return (
    <div>
      <div class="products-page m-t3">
        
        <AsideBar data={products} />

        <div className="products-container m-2t m-l5">
          {FinalProductList.map((products) => (
            <Productcard products={products} />
          ))}
        </div>
      </div>
    </div>
  );
};
export { ProductListing };
