import PropTypes from "prop-types";
import { CDN_LINK } from "../utils/constant";

export const ResContainer = (props) => {
  const { resData } = props;
  const {
    name,
    avgRating,
    cloudinaryImageId,
    cuisines,
    locality,
    areaName,
    costForTwo,
    sla,
  } = resData?.info || {};

  ResContainer.propTypes = {
    resData: PropTypes.any,
  };

  return (
    <div
      data-testid="resCard"
      className="res-card leading-relaxed px-4 py-5 font-jost"
    >
      <div className="res-img">
        <img
          src={CDN_LINK + cloudinaryImageId}
          onError={(e) => {
            e.currentTarget.src =
              "https://images.pexels.com/photos/941861/pexels-photo-941861.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1";
          }}
          alt="restaurant-Image"
          className="rounded-lg"
        />
      </div>
      <div className="res-info px-2 py-2 font-poppins  text-lg capitalize">
        <div className="res-name flex justify-between  font-medium ">
          <p className="rest-name inline-block text-lg font-light truncate">
            {name}
          </p>
          <span className="rest-rating inline-block bg-green-600 px-1 text-white rounded-md">
            {avgRating}&#9733;
          </span>
        </div>
        <div className="res-cuisine  flex justify-between gap-3">
          <p className=" cuisineName truncate inline-block">
            {cuisines.join(",")}
          </p>
        </div>
        <div className="foodfor font-poppins opacity-60 ">
          <p className="text-lg lowercase"> {costForTwo}</p>
        </div>
        <div className="res-area font-poppins opacity-70 capitalize text-lg">
          <p className="area">
            {locality} , {areaName}
          </p>
        </div>
        <div className="res-time text-[#F54748] capitalize font-poppins font-medium opacity-65">
          <span className=" text-black">
            Delivery In : {sla.deliveryTime} Mins
          </span>
        </div>
      </div>
    </div>
  );
};

export const withPromotedLabel = (ResContainer) => {
  return function Enhanced(props) {
    return (
      <div>
        <label className="absolute bg-orange-300 px-2 py-1 rounded-lg">
          Open
        </label>
        <ResContainer {...props} />
      </div>
    );
  };
};
