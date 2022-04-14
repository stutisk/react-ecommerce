
import React from "react";
import "../../styles/ProductListing.css";
const AsideBar = () => {
    return (
    <>
      <div class="drawer-container product-drawer-container">
                <div class="drawer ">
                    <aside class="aside filter-aside">
                        <div class="drawer-header ">
                            <div class="filter-topic m-2t">
                                <div class=" filter-btn">FILTERS</div>
                                <button class="filter-btn"> CLEAR</button>
                            </div>

                        </div>
                        <div class="drawer-color m-1t">Categories</div>
                        <hr />
                        <nav class="drawer-navigation filters-size">
                            <form class="checklist">
                                <label for="a"><input type="checkbox" id="a"/>Men</label>
                                <label for="a"><input type="checkbox" id="a"/>Women</label>
                                <label for="a"><input type="checkbox" id="a"/>Kids</label>
                                <label for="a"><input type="checkbox" id="a"/>Brands</label>
                                <label for="a"><input type="checkbox" id="a"/>Sets</label>
                            </form>
                        </nav>
                        <div class=" drawer-color">Price Range</div>
                        <hr />
                        <nav class="drawer-navigation filters-size">
                            <input type="range" list="tickmarks"/>
                            <datalist id="tickmarks">
                                <option value="0" label="0%"></option>
                                <option value="10"></option>
                                <option value="20"></option>
                                <option value="30"></option>
                                <option value="40"></option>
                                <option value="50" label="50%"></option>
                                <option value="60"></option>
                                <option value="70"></option>
                                <option value="80"></option>
                                <option value="90"></option>
                                <option value="100" label="100%"></option>
                            </datalist>
                        </nav>
                        <div class=" drawer-color">Ratings</div>
                        <hr />
                        <nav class="drawer-navigation filters-size">
                            <form class="checklist">
                                <label for="a"><input name="A" type="radio" id="a"/>4 Stars & above</label>
                                <label for="a"><input name="A" type="radio" id="a"/>2 Stars & above</label>
                                <label for="a"><input name="A" type="radio" id="a"/>3 Stars & above</label>
                                <label for="a"><input name="A" type="radio" id="a"/>2 Stars & above</label>
                            </form>
                        </nav>

                        <div class=" drawer-color">Sort</div>
                        <hr />
                        <nav class="drawer-navigation filters-size">
                            <form class="checklist">
                                <label for="a"><input name="A" type="radio" id="a"/>Price - Low To High</label>
                                <label for="a"><input name="A" type="radio" id="a"/>Price - High To Low</label>
                            </form>
                        </nav>
                    </aside>
                </div>
            </div>
    </>
    )
  };
  
  export {AsideBar};