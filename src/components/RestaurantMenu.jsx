import { useParams } from "react-router-dom";
import useRestaurantMenu from "../hooks/useRestaurantMenu";
import { CDN_LINK } from "../utils/constant";
import MenuShimmer from "./MenuShimmer";
const RestaurantMenu = () => {
  const { resId } = useParams();
  const resMenu = useRestaurantMenu(resId);
  if (resMenu === null) return <MenuShimmer />;
  const {
    name: restaurantName,
    avgRating,
    cuisines,
    areaName,
  } = resMenu?.cards[0]?.card?.card?.info || {};

  const { itemCards } =
    resMenu?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card
      ?.card || {};
  console.log(resMenu);
  console.log(itemCards);

  return (
    <div className="container RestaurantMain w-full py-12 mx-auto">
      <div className="ResNameAndInfo font-poppins">
        <div className="nameAndRating flex justify-between mb-4">
          <h1 className="font-bold text-2xl">{restaurantName}</h1>
          <span className="rest-rating  flex items-center px-2 bg-green-600  text-white rounded-md">
            {avgRating} &#9733;
          </span>
        </div>
        <p className="py-1">{[cuisines].join(" ,")}</p>
        <p>{areaName}</p>
        <hr className="border-dashed border-black mt-5" />
      </div>
      {itemCards.map((res) => {
        return (
          <div key={res.card.info.id} className="resMenuCard">
            <div className="mt-8  flex items-center justify-between px-6 py-4">
              <div>
                <h1 className="text-5xl font-bold shimmerName flex items-center gap-2 ">
                  {res.card.info.name}
                </h1>
                <p className="py-6">{res.card.info.description}</p>
                <p className="py-3">
                  ₹
                  {isNaN(res.card.info.price)
                    ? res.card.info.defaultPrice / 100
                    : res.card.info.price / 100}
                </p>
                <div className="flex gap-1 items-center">
                  <button className="bg-[#49393B] px-3 py-3 font-bold font-jost font-xl text-white rounded-md">
                    Add
                  </button>
                  {res.card.info.isVeg ? (
                    <p className="veg"></p>
                  ) : (
                    <p className="nonveg"></p>
                  )}
                </div>
              </div>
              <img
                src={
                  res.card.info.imageId
                    ? CDN_LINK + res.card.info.imageId
                    : "https://globalnews.ca/wp-content/uploads/2023/11/indian-food-delivery.jpg?w=2048"
                }
              />
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default RestaurantMenu;
