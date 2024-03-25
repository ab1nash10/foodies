import { useContext } from "react";
import UserContext from "../utils/UserContext";
const Contactus = () => {
  const { userNames } = useContext(UserContext);
  return <div>Contact us via {userNames}</div>;
};

export default Contactus;
