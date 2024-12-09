import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBurger,
  faCompass,
  faFilm,
  faHeart,
  faHouse,
  faSliders,
} from "@fortawesome/free-solid-svg-icons";

function Sidebar() {
  const renderSidebarItem = (name: string, link: string, icon: any) => (
    <li>
      <Link to={link} draggable="false" className="sidebar-icon group">
        <FontAwesomeIcon icon={icon} size="xl" />
        <span className="sidebar-tooltip group-hover:scale-100">{name}</span>
      </Link>
    </li>
  );

  return (
    <div className="bg-slate-800 text-white h-[calc(100vh-64px-3.5rem)] p-2 m-3 mt-1 max-w-32 outline outline-4 outline-[#00ffff] rounded-xl">
      <nav>
        <ul className="flex flex-col space-y-4 h-[calc(100vh-64px-4.5rem)] overflow-hidden">
          {renderSidebarItem("Home", "/", faHouse)}
          {renderSidebarItem("Entertainment", "/entertainment", faFilm)}
          {renderSidebarItem("Health", "/health", faHeart)}
          {renderSidebarItem("Travel info", "/travel-info", faCompass)}
          {renderSidebarItem("Food & Drink", "/food-drink", faBurger)}
          {renderSidebarItem("Settings", "/settings", faSliders)}
        </ul>
      </nav>
    </div>
  );
}

export default Sidebar;
