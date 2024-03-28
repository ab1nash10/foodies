//*Header Component

import { useContext, useState } from "react";
import { useSelector } from "react-redux";
import { Link, NavLink } from "react-router-dom";
import { Toaster, toast } from "sonner";
import useGetStatus from "../hooks/useGetStatus";
import UserContext from "../utils/UserContext";
export const Header = () => {
  const cartItems = useSelector((store) => store.cart.items);
  const [authState, setAuthState] = useState("login");
  const changeAuth = () => {
    return authState == "logout"
      ? setAuthState("login")
      : setAuthState("logout");
  };
  const getStatus = useGetStatus();
  const handleStatus = () => {
    toast.info("You are Online");
  };
  const { userNames } = useContext(UserContext);
  console.log(userNames);
  console.log(cartItems);
  return (
    <div className="parent">
      <div className="heading">
        <div className="flex items-center text-lg py-9 px-6 justify-between">
          <div className="logo hover:scale-125 transition-all">
            <Link
              to=""
              className="text-3xl pl-10 font-poppins font-semibold px-4 text-[#FFFFFF] hover:text-[#F54748] cursor-pointer "
            >
              {`Foodie's`}
            </Link>
          </div>
          <div className="nav-items flex gap-16 font-jost font-bold text-lg text-[#F4f4f4]">
            <NavLink
              to=""
              className={({ isActive }) => [
                isActive ? "text-[#F54748]" : "text-white",
              ]}
            >
              Home
            </NavLink>{" "}
            <NavLink
              to="grocery"
              className={({ isActive }) => [
                isActive ? "text-[#F54748]" : "text-white",
              ]}
            >
              Grocery
            </NavLink>{" "}
            <NavLink
              to="aboutus"
              className={({ isActive }) => [
                isActive ? "text-[#F54748]" : "text-white",
              ]}
            >
              About Us
            </NavLink>
            <NavLink
              to="contactus"
              className={({ isActive }) => [
                isActive ? "text-[#F54748]" : "text-white",
              ]}
            >
              Contact Us
            </NavLink>
          </div>
          <div className="cart flex items-center gap-4 cursor-pointer text-[#f4f4f4] justify-center">
            <button
              className=" text-xl hover:text-[#F54748] font-poppins font-bold capitalize "
              onClick={() => {
                changeAuth();
              }}
            >
              {authState}
            </button>
            <Link to={"cart"}>
              <i className="fa-sharp fa-solid fa-cart-shopping text-2xl pr-4 hover:text-[#F54748] hover:scale-125 transition-all">
                <sup className="cartItemNo font-jost bg-orange-400 rounded-full px-2 text-black">
                  {cartItems.length}
                </sup>
              </i>
            </Link>
            <div className="status text-3xl" onMouseOver={handleStatus}>
              <Toaster richColors />
              {getStatus ? "🍏" : "🍎"}
            </div>
          </div>
        </div>
        <div className="tag-line flex flex-col items-center justify-center pt-28 text-[#F54748] text-4xl font-poppins font-semibold pointer-events-none">
          <p>We Link. We Serve.</p>
          <p>Get it Delivered Right To Your Door</p>
          {/* <p>{userNames}</p> */}
        </div>
      </div>
    </div>
  );
};
