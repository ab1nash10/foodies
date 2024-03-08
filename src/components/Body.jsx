import { useEffect, useState } from "react";
import { ResContainer } from "./ResContainer";
import Shimmer from "./Shimmer";
Shimmer;
export const Body = () => {
  const [resList, setresList] = useState([]);
  const [filresList, filSetresList] = useState([]);

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
    filSetresList(
      json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
    console.log(
      json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
  };

  const [searchText, setSearchText] = useState("");

  return resList.length === 0 ? (
    <Shimmer />
  ) : (
    <div>
      <div className=" search-filter py-8 px-20">
        <div className="searchBar flex items-center py-4 gap-2">
          <input
            type="text"
            name="searchBox"
            id="searchBox"
            placeholder="What foodie is in your mind? We'll help you find it!"
            className="rounded-xl text-2xl py-3 px-5 font-poppins border"
            autoFocus
            value={searchText}
            onChange={(rest) => {
              setSearchText(rest.target.value);
            }}
          />
          <button
            className="bg-[#F54748] rounded-xl text-4xl hover:bg-transparent"
            type="submit"
            onClick={() => {
              const filteredsList = resList.filter((res) =>
                res.info.name.toLowerCase().includes(searchText.toLowerCase())
              );
              filSetresList(filteredsList);
            }}
          >
            <i className=" fa-solid fa-magnifying-glass text-3xl px-2 py-2 "></i>
          </button>
        </div>
        <button
          onClick={() => {
            const filteredList = filresList.filter(
              (restaurant) => restaurant.info.avgRating >= 4.0
            );
            filSetresList(filteredList);
          }}
          className="FilterBtn bg-orange-300 text-black text-2xl px-4 py-2 rounded-xl outline-transparent hover:bg-[#F54748]"
        >
          Top Rated Restaurants
        </button>
      </div>
      <div className="px-14 py-9 grid grid-cols-4 gap-12">
        {filresList.map((restaurant) => {
          return <ResContainer key={restaurant.info.id} resData={restaurant} />;
        })}
      </div>
    </div>
  );
};
