import React from "react";
import ResCard from "./RestaurantCard";
import resList from "../utils/mockData";
import { useState } from "react";

const Body = () => {
  //local state variable
  const [listOfRestaurants, setListOfRestaurants] = useState(resList);

  return (
    <div className="body">
      <div className="filter">
        <button
          className="filter-btn"
          onClick={() => {
            const filteredList = listOfRestaurants.filter(
              (restaurant) => restaurant.info.avgRating > 4
            );
            //console.log(filteredList);
            setListOfRestaurants(filteredList);
          }}
        >
          Top Rated Restaurant
        </button>
      </div>

      <div className="res-container">
        {listOfRestaurants.map(function (restaurant) {
          //looping over the resList to iterate and returning each and every resCard
          //always give a key while using map
          return <ResCard resData={restaurant} key={restaurant.info.id} />;
        })}
      </div>
    </div>
  );
};

export default Body;
