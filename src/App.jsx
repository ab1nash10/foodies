import "./App.css";
import { Body } from "./components/Body";
import { Header } from "./components/Header";

function App() {
  return (
    <>
      <div className="main w-full h-screen ">
        <div className="header w-full">
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
