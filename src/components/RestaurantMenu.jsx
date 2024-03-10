import { useEffect, useState } from "react";
import { CDN_LINK } from "../utils/constant";
import Shimmer from "./Shimmer";

const RestaurantMenu = () => {
  const [resMenu, setResMenu] = useState(null);

  useEffect(() => {
    fetchMenu();
  }, []);

  const fetchMenu = async () => {
    const data = await fetch(
      "https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=28.73826769999999&lng=77.0822151&restaurantId=241350&catalog_qa=undefined&submitAction=ENTER"
    );
    const json = await data.json();
    setResMenu(json.data);
    console.log(json.data);
  };

  if (resMenu === null) return <Shimmer />;

  const {
    name: restaurantName,
    avgRating,
    cuisines,
    areaName,
  } = resMenu?.cards[0]?.card?.card?.info || {};

  const { itemCards } =
    resMenu?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[3]?.card
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
            <div className="mt-8 menuCard flex items-center justify-between px-6 py-4">
              <div>
                <h1 className="text-5xl font-bold">{res.card.info.name}</h1>
                <p className="py-6">{res.card.info.description}</p>
                <p className="py-3">Rs.{res.card.info.price / 100}</p>
                <button className="btn btn-primary">Add</button>
              </div>
              <img src={CDN_LINK + res.card.info.imageId} className="" />
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default RestaurantMenu;
