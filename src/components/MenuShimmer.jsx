const MenuShimmer = () => {
  return (
    <div className=" container mx-auto menuShimmermain grid">
      {Array.from({ length: 10 }).map((el, index) => {
        return (
          <div key={index} className="shimmerBG">
            <div className="mt-8 menuCard flex items-center justify-between px-6 py-4">
              <div className="shimmerContent w-2/3 ">
                <h1 className=" shimmerName text-5xl font-bold bg-gray-400 py-11 my-3 "></h1>
                <p className="shimmerDesc py-6 bg-gray-300 my-4 w-1/2"></p>
                <p className="shimmerPrice py-6 bg-gray-300 my-4 w-40"></p>
                <button className="shimmer-btn bg-gray-300 my-2"></button>
              </div>
              <div className="imgShimmer"></div>
            </div>
          </div>
        );
      })}
    </div>
  );
};
export default MenuShimmer;
