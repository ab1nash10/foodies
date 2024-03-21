import { useParams } from "react-router-dom";
import useRestaurantMenu from "../hooks/useRestaurantMenu";
// import { CDN_LINK } from "../utils/constant";
import MenuShimmer from "./MenuShimmer";
import RestaurantCategory from "./RestaurantCategory";
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

  // const { itemCards } =
  //   resMenu?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card
  //     ?.card || {};
  // console.log(resMenu);
  // console.log(itemCards);
  // console.log(resMenu?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards);
  const category =
    resMenu?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter(
      (item) =>
        item?.card?.card?.["@type"] ==
        "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
    );

  console.log("category", category);
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
      {category.map((category) => (
        <RestaurantCategory
          key={category?.card?.card?.title}
          data={category?.card?.card}
        />
      ))}
    </div>
  );
};

export default RestaurantMenu;
