/**
 * Res Name             Rating
 * Cuisines             Review
 * Address
 *
 * Del Time | Cost For Two
 */

import React from "react";
import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";
import useRestaurantMenu from "../utils/useRestaurantMenu";

const RestaurantMenu = () => {
  const { resId } = useParams();

  //custom hook that is fetching the restaurant menu
  const resInfo = useRestaurantMenu(resId);

  if (resInfo == null) return <Shimmer />;

  const {
    name,
    cuisines,
    city,
    areaName,
    avgRating,
    totalRatingsString,
    costForTwoMessage,
  } = resInfo?.cards[0]?.card?.card?.info;

  const { slaString } = resInfo?.cards[0]?.card?.card?.info?.sla;

  const { cards } = resInfo?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR;
  //console.log(cards);

  return (
    <div className="res-info">
      <div className="res-menu-header">
        <div>
          <h1>{name}</h1>
          <div className="res-menu-cuisine-add">
            <p>{cuisines.join(", ")}</p>
            <p>
              {areaName} , {city}
            </p>
          </div>
        </div>
        <div>
          <ul className="box">
            <li className="res-menu-header-list-1">{avgRating}</li>
            <li className="res-menu-header-list-line">---------</li>
            <li className="res-menu-header-list">{totalRatingsString}</li>
          </ul>
        </div>
      </div>
      <li className="res-menu-list-line">
        -----------------------------------------------------------------------------------------------------------------------------------------
      </li>
      <div className="res-info-sub-header">
        <li>⏱️ {slaString}</li>
        <li>💰 {costForTwoMessage}</li>
      </div>
      <div className="menu">
        {cards.slice(1, -2).map((e, index) => (
          <div key={index}>
            <h3 className="menu-title">
              {e?.card?.card?.title} (
              {e?.card?.card?.itemCards && e.card.card.itemCards.length})
            </h3>
            <div className="menu-card">
              <div className="menu-card-des-price">
                {e?.card?.card?.itemCards &&
                  e?.card?.card?.itemCards.map((item) => (
                    <li key={item.card.info.id}>
                      {item.card.info.name}
                      <h5>
                        ₹{" "}
                        {item.card.info.price / 100 ||
                          item.card.info.defaultPrice / 100}
                      </h5>
                      <p>{item.card.info.description}</p>
                    </li>
                  ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default RestaurantMenu;
