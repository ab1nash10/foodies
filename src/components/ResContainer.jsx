import { CDN_LINK } from "../utils/constant";
export const ResContainer = ({ resData }) => {
  const {
    name,
    avgRating,
    cloudinaryImageId,
    cuisines,
    locality,
    slugs,
    costForTwoString,
    deliveryTime,
  } = resData?.data || {};

  return (
    <div className="res-card leading-relaxed px-4 py-5 font-jost">
      <div className="res-img">
        <img
          src={CDN_LINK + cloudinaryImageId}
          alt="restaurant-Image"
          className="rounded-lg"
        />
      </div>
      <div className="res-info px-2 py-2 font-poppins  text-lg capitalize">
        <div className="res-name flex justify-between  font-medium">
          <p className="rest-name inline-block text-lg font-light">{name}</p>
          <p className="rest-rating inline-block bg-green-600 px-1 text-white rounded-md">
            {avgRating} &#9733;
          </p>
        </div>
        <div className="res-cuisine  flex justify-between gap-3">
          <p className=" cuisineName truncate inline-block">
            {cuisines.join(",")}
          </p>
        </div>
        <div className="foodfor font-poppins opacity-60 ">
          <p className="text-lg lowercase"> {costForTwoString}</p>
        </div>
        <div className="res-area font-poppins opacity-70 capitalize text-lg">
          <p className="area">
            {locality}, {slugs.city}
          </p>
        </div>
        <div className="res-time text-[#F54748] capitalize font-poppins font-medium opacity-65">
          <span className=" text-black">Delivery In : </span>
          {deliveryTime} Mins
        </div>
      </div>
    </div>
  );
};
