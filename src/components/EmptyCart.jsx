import { Link } from "react-router-dom";

export const EmptyCart = () => {
  return (
    <div className="grid place-items-center">
      <div className="emptyCartImage">
        <img
          src={
            "https://cdn.dribbble.com/users/887568/screenshots/3172047/media/35159a4a9ba57200e5e17119ffd945e6.gif"
          }
          alt=""
        />
      </div>
      <div className="flex items-center flex-col m-4 capitalize">
        <p className="text-xl font-poppins my-2">Your cart is empty</p>
        <p className="font-poppins">
          You can go to home page to view restaurants
        </p>
      </div>
      <Link to={"/"}>
        <button className="bg-orange-400 text-xl px-3 py-2 rounded-xl font-poppins font-semibold">
          See Restaurants
        </button>
      </Link>
    </div>
  );
};
