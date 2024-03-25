import { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import useGetStatus from "../hooks/useGetStatus";
// import UserContext from "../utils/UserContext";
import { SWIGGY_MAIN_API } from "../utils/constant";
import { ResContainer, withPromotedLabel } from "./ResContainer";
import Shimmer from "./Shimmer";
export const Body = () => {
  const [resList, setresList] = useState([]);
  const [filresList, filSetresList] = useState([]);
  const effectRan = useRef(false);
  const RestaurantWithLabel = withPromotedLabel(ResContainer);
  // const { userNames, setUserName } = useContext(UserContext);
  useEffect(() => {
    if (effectRan.current === true) {
      const fetchData = async () => {
        const data = await fetch(SWIGGY_MAIN_API);
        const json = await data.json();
        console.log(json);

        setresList(
          json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle
            ?.restaurants
        );

        filSetresList(
          json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle
            ?.restaurants
        );
      };

      fetchData();
    }
    return () => {
      effectRan.current = true;
    };
  }, []);

  const [searchText, setSearchText] = useState("");

  const status = useGetStatus();
  if (status === false) {
    return <h1>Hey it seems like you are offline</h1>;
  }

  return resList.length === 0 ? (
    <Shimmer />
  ) : (
    <div className="container mx-auto">
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
        {/* <input
          type="text"
          value={userNames}
          onChange={(e) => setUserName(e.target.value)}
        /> */}
      </div>
      <div className="px-14 py-9 grid grid-cols-4 gap-12">
        {filresList.map((restaurant) => {
          return (
            <Link
              key={restaurant.info.id}
              to={"restaurant/" + restaurant.info.id}
            >
              {restaurant.info.isOpen ? (
                <RestaurantWithLabel resData={restaurant} />
              ) : (
                <ResContainer resData={restaurant} />
              )}
            </Link>
          );
        })}
      </div>
    </div>
  );
};
