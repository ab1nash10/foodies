import { useEffect, useState } from "react";
import { Outlet } from "react-router-dom";
import "./App.css";
import Footer from "./components/Footer";
import { Header } from "./components/Header";
import UserContext from "./utils/UserContext";
function App() {
  const [userName, setUserName] = useState();
  useEffect(() => {
    const data = {
      userN: "Abinash Kumar",
    };
    setUserName(data.userN);
    return () => {};
  }, []);
  return (
    <>
      <UserContext.Provider value={{ userNames: userName, setUserName }}>
        <div className="main w-full h-screen ">
          <Header />
          <Outlet />
          <Footer />
        </div>
      </UserContext.Provider>
    </>
  );
}

export default App;
