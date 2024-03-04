import { useEffect, useState } from "react";
import { ResContainer } from "./ResContainer";
import Shimmer from "./Shimmer";
Shimmer;
export const Body = () => {
  const [resList, setresList] = useState([]);
  useEffect(() => {
    return () => fetchData(); //cleanup
  }, []);

  const fetchData = async () => {
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=28.7040592&lng=77.10249019999999&collection=83667"
    );
    const json = await data.json();
    // console.log(json);
    setresList(
      json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
    // console.log(
    //   json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    // );
  };

  return resList.length === 0 ? (
    <Shimmer />
  ) : (
    <div>
      <div className="filter-btn py-8 px-20">
        <button
          onClick={() => {
            const filteredList = resList.filter(
              (restaurant) => restaurant.info.avgRating >= 4.0
            );
            setresList(filteredList);
          }}
          className="FilterBtn bg-orange-300 text-black text-2xl px-4 py-2 rounded-xl outline-transparent hover:bg-[#F54748]"
        >
          Top Rated Restaurants
        </button>
      </div>
      <div className="px-14 py-9 grid grid-cols-4 gap-12">
        {resList.map((restaurant) => {
          return <ResContainer key={restaurant.info.id} resData={restaurant} />;
        })}
      </div>
    </div>
  );
};
