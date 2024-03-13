import React from "react";
import ResCard from "./RestaurantCard";
import { useState, useEffect } from "react";
import Shimmer from "./Shimmer";

const Body = () => {
  //local state variable
  const [listOfRestaurants, setListOfRestaurants] = useState([]);

  //Its a copy of listofRestaurants, to do all types of filters
  const [filteredRestaurants, setFilteredRestaurants] = useState([]);

  const [searchText, setSearchText] = useState("");

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=22.572646&lng=88.36389500000001&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
    );
    const jsonData = await data.json();
    //console.log(jsonData);
    setListOfRestaurants(
      //optional chaining
      jsonData?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle
        ?.restaurants
    );
    setFilteredRestaurants(
      jsonData?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle
        ?.restaurants
    );
  };

  //conditional rendering
  // if (listOfRestaurants.length == 0) {
  //   return <Shimmer />;
  // }

  //using ternary operator
  return listOfRestaurants.length == 0 ? (
    <Shimmer />
  ) : (
    <div className="body">
      <div className="filter">
        <div className="search">
          <input
            type="text"
            className="search-box"
            value={searchText}
            onChange={function (e) {
              setSearchText(e.target.value);
            }}
          ></input>
          <button
            className="search-btn"
            onClick={() => {
              //fiter the restaurants according to the search text and update the UI
              //console.log(searchText);

              const searchFilter = listOfRestaurants.filter((restaurant) =>
                restaurant.info.name
                  .toLowerCase()
                  .includes(searchText.toLowerCase())
              );
              //console.log(searchFilter);
              setFilteredRestaurants(searchFilter);
              //console.log(listOfRestaurants);
            }}
          >
            Search
          </button>
        </div>
        <button
          className="filter-btn"
          onClick={() => {
            const filteredList = listOfRestaurants.filter(
              (restaurant) => restaurant.info.avgRating > 4.5
            );
            //console.log(filteredList);
            setFilteredRestaurants(filteredList);
          }}
        >
          Top Rated Restaurant
        </button>
      </div>

      <div className="res-container">
        {filteredRestaurants.map(function (restaurant) {
          //looping over the resList to iterate and returning each and every resCard
          //always give a key while using map
          return <ResCard resData={restaurant} key={restaurant.info.id} />;
        })}
      </div>
    </div>
  );
};

export default Body;
