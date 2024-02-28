import { resList } from "../utils/mockApi";
import { ResContainer } from "./ResContainer";

export const Body = () => (
  <div className="px-14 py-9 grid grid-cols-4 gap-12">
    {resList.map((restaurant) => {
      return <ResContainer key={restaurant.data.id} resData={restaurant} />;
    })}
  </div>
);
