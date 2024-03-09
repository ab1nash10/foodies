const Shimmer = () => {
  return (
    <div className=" container mx-auto shimmermain grid grid-cols-4">
      {Array.from({ length: 12 }).map((ele, index) => {
        return (
          <div
            key={index}
            className="shimmer-card leading-relaxed px-4 py-5 overflow-hidden "
          >
            <div className="shimmer-img bg-gray-400"></div>
            <div className="py-4">
              <div className="res-name flex justify-between font-medium py-2">
                <p className="shimmer-name inline-block  bg-gray-400"></p>
                <p className="shimmer-rating inline-block px-1 text-white rounded-md bg-gray-400"></p>
              </div>
              <div className="res-cuisine  flex justify-between gap-3 py-2">
                <p className=" shimmertext truncate inline-block bg-gray-400"></p>
              </div>
              <div className="foodfor font-poppins opacity-60 py-2">
                <p className=" shimmertext1 text-lg lowercase bg-gray-400"></p>
              </div>
              <div className=" font-poppins opacity-70 capitalize text-lg py-2">
                <p className="shimmertext2 area bg-gray-400"></p>
              </div>
              <div className=" shimmertime capitalize font-poppins font-medium opacity-65 py-2 bg-gray-400 "></div>
            </div>
          </div>
        );
      })}
    </div>
  );
};
export default Shimmer;
