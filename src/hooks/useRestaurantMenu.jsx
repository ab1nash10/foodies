import { useEffect, useRef, useState } from "react";
import { MENU_API } from "../utils/constant";

const useRestaurantMenu = (resId) => {
  const effectRan = useRef(false);
  const [resMenu, setResMenu] = useState(null);

  useEffect(() => {
    if (effectRan.current === true) {
      const fetchMenu = async () => {
        const data = await fetch(MENU_API + resId);
        const json = await data.json();
        setResMenu(json.data);
      };
      fetchMenu();
    }
    return () => {
      effectRan.current = true;
    };
  }, [resId]);

  return resMenu;
};

export default useRestaurantMenu;
