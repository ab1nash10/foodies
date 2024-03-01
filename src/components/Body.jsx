import { useState } from "react";
import { resValue } from "../utils/mockApi";
import { ResContainer } from "./ResContainer";
export const Body = () => {
  const [resList, setresList] = useState(resValue);
  return (
    <div>
      <div className="filter-btn py-8 px-20">
        <button
          onClick={() => {
            const filteredList = resList.filter(
              (restaurant) => restaurant.data.avgRating >= 4.0
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
          return <ResContainer key={restaurant.data.id} resData={restaurant} />;
        })}
      </div>
    </div>
  );
};
