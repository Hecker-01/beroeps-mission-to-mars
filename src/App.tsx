import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import Sidebar from "./components/Sidebar"; // Import Sidebar
import Home from "./pages/Home";
import Entertainment from "./pages/Entertainment";
import Health from "./pages/Health";
import TravelInfo from "./pages/TravelInfo";
import FoodDrink from "./pages/FoodDrink";
import Settings from "./pages/Settings";

const App = () => {
  return (
    <Router>
      <div className="bg-black">
        <Header />
        <div className="flex flex-row flex-grow">
          <Sidebar />
          <main className="flex-grow flex items-center justify-center w-full">
            <div className="bg-gray-800 text-white h-[calc(100vh-64px-3.5rem)] w-[calc(100%-0.75rem)] p-3 m-3 ml-1 mt-1 outline outline-4 outline-[#00ffff] rounded-xl">
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/entertainment" element={<Entertainment />} />
                <Route path="/health" element={<Health />} />
                <Route path="/travel-info" element={<TravelInfo />} />
                <Route path="/food-drink" element={<FoodDrink />} />
                <Route path="/settings" element={<Settings />} />
              </Routes>
            </div>
          </main>
        </div>
      </div>
    </Router>
  );
};

export default App;
