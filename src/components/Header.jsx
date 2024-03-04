//*Header Component

import { useState } from "react";

export const Header = () => {
  // const auth = "login";
  const [authState, setAuthState] = useState("login");
  const changeAuth = () => {
    return authState == "logout"
      ? setAuthState("login")
      : setAuthState("logout");
    // return authState == "login" ? authState : setAuthState("logout");
  };
  return (
    <div className="heading">
      <div className="flex items-center text-lg py-9 px-6 justify-between text-slate-400">
        <div className="logo">
          <h2 className="text-3xl pl-10 font-poppins font-semibold px-4 text-[#FFFFFF] hover:text-[#F54748] cursor-pointer">{`Foodie's`}</h2>
        </div>
        <div className="nav-items flex gap-16 font-jost font-medium ">
          <a href="#" className="hover:text-[#FFFFFF]">
            Home
          </a>
          <a href="#" className="hover:text-[#FFFFFF]">
            Menu
          </a>
          <a href="#" className="hover:text-[#FFFFFF]">
            About Us
          </a>
          <a href="#" className="hover:text-[#FFFFFF]">
            Facility
          </a>
        </div>
        <div className="cart pr-0 flex items-center gap-8 cursor-pointer  text-[#f4f4f4] ">
          <button
            className=" text-xl hover:text-[#F54748] font-poppins font-bold capitalize"
            onClick={() => {
              changeAuth();
            }}
          >
            {authState}
          </button>
          <i className="fa-sharp fa-solid fa-cart-shopping text-2xl pr-16 hover:text-[#F54748]"></i>
        </div>
      </div>
      <div className="tag-line flex flex-col items-center justify-center pt-28 text-[#F54748] text-4xl font-poppins font-semibold pointer-events-none">
        <p>We Link. We Serve.</p>
        <p>Get it Delivered Right To Your Door</p>
      </div>
      <div className="searchBar flex justify-center items-center py-72 gap-2">
        <input
          type="text"
          name="searchBox"
          id="searchBox"
          className="rounded-lg text-2xl py-3 px-5 font-poppins"
          autoFocus
        />
        <button
          className="bg-[#F54748] rounded-xl text-4xl hover:bg-transparent"
          type="submit"
        >
          <i className=" fa-solid fa-magnifying-glass text-3xl px-2 py-2 "></i>
        </button>
      </div>
    </div>
  );
};
