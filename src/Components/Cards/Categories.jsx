
import "../../styles/Homepage.css";
import React, { useState, useEffect } from "react";
import axios from "axios";

const Categories = () => {

    const [categories, setCategories] = useState([]);

      async  function getCategories  () {
      try {
        const res = await axios.get("/api/categories");
        console.log(res.data)
        setCategories(res.data.categories);
      } catch (error) {
        console.log(error);
      }
    }
  
    useEffect(() => {
        getCategories();
    }, []);


    return (
<section className="card-categories m-1t ">
   {categories.map((category)=>{
       return(
        <div className="cards">
        <img src={category.image} alt={category.categoryName} className="card-image"/>
        <h3 className="card-heading">{category.categoryName.toUpperCase()}</h3>
    </div>
    
       )
   })}
</section>
  );
};

export {Categories};