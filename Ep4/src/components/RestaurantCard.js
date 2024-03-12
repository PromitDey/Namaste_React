import { CDN_URL } from "../utils/constants";

const ResCard = (props) => {
  const { resData } = props; //destructuring
  const { cloudinaryImageId, avgRating, cuisines, locality } = resData?.info; //chaining
  const { deliveryTime } = resData?.info.sla;

  return (
    <div className="res-card">
      <img
        className="res-img"
        alt="res-img"
        src={
          CDN_URL +
          cloudinaryImageId
        }
      />
      <ul>
        <li>{resData.info.name}</li>
      </ul>
      <div className="cuisine-add">
        <ul>
          <li className="resRating">⭐ {avgRating}/5</li>
          <li>{cuisines.join(", ")}</li>
          <li>{locality}</li>
        </ul>
      </div>
      <h8 className="del-time">Delivery Time: {deliveryTime + "mins"}</h8>
      {/* <button id="res-card-btn">Open Menu</button> */}
    </div>
  );
};


export default ResCard;
