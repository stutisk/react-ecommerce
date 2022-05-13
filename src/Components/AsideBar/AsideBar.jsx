import React from "react";
import "../../styles/ProductListing.css";
import { useState } from "react";
import { useProducts } from "../../Context/ProductContext";

const AsideBar = () => {
  const { dispatch, InitialState } = useProducts();
  const [slider, setSlider] = useState(14300);

  const sliderHandler = (e) => {
    setSlider(parseInt(e.target.value, 10));
    dispatch({ type: "PRICE_RANGE", payload: slider });
  };

  const categoryRatingsHandler = (e) => {
    if (e.target.checked) {
      dispatch({ type: e.target.name, payload: e.target.value });
    } else {
      dispatch({ type: "REMOVE-CATEGORY", payload: e.target.value });
    }
  };

  return (
    <>
      <div classNameName="drawer-container product-drawer-container">
        <div className="drawer ">
          <aside className="aside filter-aside">
            <div className="drawer-header ">
              <div className="filter-topic m-2t">
                <div className=" filter-btn">FILTERS</div>
                <button onClick={()=> dispatch({type:"CLEAR",payload:InitialState})} className="filter-btn"> CLEAR</button> 
              </div>
            </div>


            <div className="drawer-color m-1t">Categories</div>
            <hr />
            <nav className="drawer-navigation filters-size">
              <form className="checklist">
                <label for="men">
                  <input type="checkbox" name="CATEGORY" value="men" onChange={(e)=>categoryRatingsHandler(e)}/>
                  Men
                </label>
                <label for="women">
                  <input type="checkbox" name="CATEGORY" value="women" onChange={(e)=>categoryRatingsHandler(e)} />
                  Women
                </label>
                <label for="children">
                  <input type="checkbox" name="CATEGORY" value="children" onChange={(e)=>categoryRatingsHandler(e)} />
                  children
                </label>
                <label for="brands">
                  <input type="checkbox" name="CATEGORY" value="brands" onChange={(e)=>categoryRatingsHandler(e)} />
                  Brands
                </label>
                <label for="Sets">
                  <input type="checkbox" name="CATEGORY" value="sets" onChange={(e)=>categoryRatingsHandler(e)} />
                  Sets
                </label>
              </form>
            </nav>

            <div className=" drawer-color">Price Range</div>
            <hr />
            <nav className="drawer-navigation filters-size">
              <input
                type="range"
                min="99"
                max="1599"
                // step={1}
                value={slider}
                class="slider"
                onChange={(e) => sliderHandler(e)}
                onClick={(e) => sliderHandler(e)}
              />
              <span>{slider}</span>
            </nav>

            <div className=" drawer-color">Ratings</div>
            <hr />
            <nav className="drawer-navigation filters-size">
              <form className="checklist">
                <label for="four">
                  <input type="radio" name="RATINGS" value={4} onChange={(e)=>categoryRatingsHandler(e)}/>4 Stars & above
                </label>
                <label for="three">
                  <input type="radio" name="RATINGS" id="three" value={3} onChange={(e)=>categoryRatingsHandler(e)} />3 Stars & above
                </label>
                <label for="two">
                  <input type="radio" name="RATINGS" id="two" value={2} onChange={(e)=>categoryRatingsHandler(e)} />2 Stars & above
                </label>
                <label for="one">
                  <input type="radio" name="RATINGS" id="one" value={1} onChange={(e)=>categoryRatingsHandler(e)} />1 Stars & above
                </label>
              </form>
            </nav>

            <div className=" drawer-color">Sort</div>
            <hr />
            <nav className="drawer-navigation filters-size">
              <form className="checklist">
                <label for="low">
                  <input
               
                    type="radio"
                    name="sort"
                    id="low"
                    onClick={() =>
                      dispatch({ type: "LOW_TO_HIGH", payload: "ascending" })
                    }
                  />
                  Price - Low To High
                </label>
                <label for="high To LOw">
                  <input
                    type="radio"
                    name="sort"
                    id="high"
                    onChange={() =>
                      dispatch({ type: "HIGH_TO_LOW", payload: "descending" })
                    }
                  />
                  Price - High To Low
                </label>
              </form>
            </nav>
          </aside>
        </div>
      </div>
    </>
  );
};

export { AsideBar };
