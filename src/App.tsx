import {
  BrowserRouter as Router,
  Route,
  Routes,
  useLocation,
} from "react-router-dom";
import Header from "./components/Header";
import Sidebar from "./components/Sidebar";
import Home from "./pages/Home";
import Entertainment from "./pages/Entertainment";
import Health from "./pages/Health";
import TravelInfo from "./pages/TravelInfo";
import FoodDrink from "./pages/FoodDrink";
import Settings from "./pages/Settings";

const App = () => {
  return (
    <Router>
      <AppContent />
    </Router>
  );
};

const AppContent = () => {
  const location = useLocation();
  const tabs = getTabs(location.pathname);

  return (
    <div className="bg-black">
      <Header
        name1={tabs.name1}
        link1={tabs.link1}
        name2={tabs.name2}
        link2={tabs.link2}
      />
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
  );
};

export default App;

function getTabs(pathname: string) {
  switch (pathname) {
    case "/":
      return {
        name1: "Home",
        link1: "/",
        name2: "",
        link2: "",
      };
    case "/entertainment":
      return {
        name1: "Movies",
        link1: "/entertainment",
        name2: "Music",
        link2: "/entertainment",
      };
    case "/health":
      return {
        name1: "Health",
        link1: "/health",
        name2: "Health",
        link2: "/health",
      };
    case "/travel-info":
      return {
        name1: "Travel Info",
        link1: "/travel-info",
        name2: "Travel Info",
        link2: "/travel-info",
      };
    case "/food-drink":
      return {
        name1: "Food & Drink",
        link1: "/food-drink",
        name2: "Food & Drink",
        link2: "/food-drink",
      };
    case "/settings":
      return {
        name1: "Settings",
        link1: "/settings",
        name2: "Settings",
        link2: "/settings",
      };
    default:
      return {
        name1: "Home",
        link1: "/",
        name2: "Home",
        link2: "/",
      };
  }
}
