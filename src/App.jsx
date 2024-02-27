import "./App.css";

function App() {
  const Header = () => (
    <div className="heading">
      <div className="flex items-center text-lg py-9 px-6 justify-between text-slate-400">
        <div className="logo">
          <h2 className="text-3xl pl-10 font-poppins font-semibold px-4 text-[#FFFFFF] hover:text-[#F54748]">{`Foodie's`}</h2>
        </div>
        <div className="nav-items flex gap-16 font-jost font-medium ">
          <a href="" className="hover:text-[#FFFFFF]">
            Home
          </a>
          <a href="" className="hover:text-[#FFFFFF]">
            Menu
          </a>
          <a href="" className="hover:text-[#FFFFFF]">
            About Us
          </a>
          <a href="" className="hover:text-[#FFFFFF]">
            Facility
          </a>
        </div>
        <div className="cart pr-0">
          <i className="fa-sharp fa-solid fa-cart-shopping text-2xl text-[#f4f4f4] hover:text-[#F54748] pr-16"></i>
        </div>
      </div>
      <div className="tag-line flex flex-col items-center justify-center pt-28 text-[#F54748] text-4xl font-poppins font-semibold">
        <p>We Link. We Serve.</p>
        <p>Get it Delivered Right To Your Door</p>
      </div>
      <div className="searchBar flex justify-center items-center py-64 gap-2">
        <input
          type="text"
          name="searchBox"
          id="searchBox"
          className="rounded-lg text-2xl py-3 px-5 font-poppins"
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

  const ResContainer = () => (
    <div className="res-card px-4 py-5 font-jost ">
      <div className="res-img">
        <img
          src="https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cmVzdGF1cmFudHxlbnwwfHwwfHx8MA%3D%3D"
          alt="restaurant-Image"
          className="rounded-lg"
        />
      </div>
      <div className="res-info px-2 py-2">
        <div className="res-name flex justify-between  font-medium">
          <p className="rest-name inline-block text-lg font-light">
            Molecules Air Bar
          </p>
          <p className="rest-rating inline-block bg-green-600 px-1 text-white rounded-md">
            4.6 &#9733;
          </p>
        </div>
        <div className="res-cuisine font-poppins opacity-60 capitalize flex justify-between gap-3">
          <p className="truncate inline-block">
            North Indian, Chinese, Continental
          </p>
        </div>
        <div className="res-area font-poppins opacity-45 capitalize ">
          <p className>Talganj, Agra</p>
        </div>
        <div className="res-time text-red-400 capitalize">Opens at 12:00pm</div>
      </div>
    </div>
  );
  const Body = () => (
    <div className="px-14 py-9 grid grid-cols-3 gap-12">
      <ResContainer />
      <ResContainer />
      <ResContainer />
    </div>
  );

  return (
    <>
      <div className="main w-full h-screen">
        <div className="header mx-auto h-3/4 w-full">
          <Header />
        </div>
        <div className="container mx-auto">
          <Body />
        </div>
      </div>
    </>
  );
}

export default App;
