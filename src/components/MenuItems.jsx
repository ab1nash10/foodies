import PropTypes from "prop-types";
import { useDispatch } from "react-redux";
import { Toaster, toast } from "sonner";
import { addItem } from "../state/slice";
import { CDN_LINK } from "../utils/constant";

const MenuItems = ({ itemCards }) => {
  //   console.log(itemCards);
  //   console.log(itemCards.card.info.name);
  //   const { card } = itemCards;
  MenuItems.propTypes = {
    itemCards: PropTypes.any,
  };
  const dispatch = useDispatch();
  const handleAddItem = (item) => {
    dispatch(addItem(item));
    toast.success("Item has been added to the cart successfully");
  };

  return (
    <div>
      {itemCards.map((item) => (
        <div key={item.card.info.id} className="itemMenuCard">
          <div className="mt-8  flex items-center justify-between px-6 py-4">
            <div>
              <h1 className="text-5xl font-bold shimmerName flex items-center gap-2 ">
                {item.card.info.name}
              </h1>
              <p className="py-6">
                {item.card.info.description ||
                  "The taste of this is so ridiculously delicious, it should be illegal."}
              </p>
              <p className="py-3">
                ₹
                {isNaN(item.card.info.price)
                  ? item.card.info.defaultPrice / 100
                  : item.card.info.price / 100}
              </p>
              <div className="flex gap-1 items-center">
                <Toaster position="bottom-right" expand={true} richColors />
                <button
                  className="bg-[#49393B] px-3 py-3 font-bold font-jost font-xl text-white rounded-md"
                  onClick={() => handleAddItem(item)}
                >
                  Add
                </button>
                {item.card.info.isVeg ? (
                  <p className="veg"></p>
                ) : (
                  <p className="nonveg"></p>
                )}
              </div>
            </div>
            <img
              src={CDN_LINK + item.card.info.imageId}
              alt="dish-image"
              onError={(e) => {
                e.currentTarget.src =
                  "https://globalnews.ca/wp-content/uploads/2023/11/indian-food-delivery.jpg?w=2048";
              }}
            />
          </div>
        </div>
      ))}
    </div>
  );
};

export default MenuItems;
