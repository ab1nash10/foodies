import PropTypes from "prop-types";
// import { useState } from "react";
import MenuItems from "./MenuItems";
// import { CDN_LINK } from "../utils/constant";

// const RestaurantCategory = (props) => {
//     const { itemCards } = props;
//     RestaurantCategory.propTypes = {
//         itemCards: PropTypes.any
//     }
//     return ({itemCards.map((res) => {

//           })}
//     )
// }

const RestaurantCategory = ({
  data,
  showMenuItems,
  setShowIndex,
  // clicked,
  // setClicked,
}) => {
  // console.log("data", data);
  RestaurantCategory.propTypes = {
    data: PropTypes.any,
    showMenuItems: PropTypes.bool,
    setShowIndex: PropTypes.any,
    //   setClicked: PropTypes.any,
    //   clicked: PropTypes.any,
  };
  // const [showMenusItems, setShowMenusItems] = useState(true);
  const handleClick = () => {
    // setShowMenusItems(!showMenusItems);
    // console.log("clicked");
    // if (clicked) {
    setShowIndex();
    // setClicked();
    // }
  };
  return (
    <div className="menu-page">
      <div
        className="accordion-header flex items-center justify-between text-2xl font-jost font-semibold my-4 p-3 cursor-pointer rounded-md "
        onClick={handleClick}
      >
        <span>
          {data.title} ({data.itemCards.length})
        </span>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="1em"
          height="1em"
          viewBox="0 0 20 20"
        >
          <path
            fill="currentColor"
            d="m17.704 6.58l-6.972 8.086a.967.967 0 0 1-1.463 0L2.296 6.58C1.76 5.96 1.967 5 2.791 5h14.42c.821 0 1.029.96.493 1.58"
          />
        </svg>
      </div>
      {showMenuItems && <MenuItems itemCards={data.itemCards} />}
    </div>
  );
};

export default RestaurantCategory;
