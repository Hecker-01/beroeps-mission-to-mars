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
  return (
    <div className="bg-gray-800 text-white h-[calc(100vh-64px-3.5rem)] p-2 m-3 mt-1 max-w-32 outline outline-4 outline-[#00ffff] rounded-xl">
      <nav>
        <ul className="flex flex-col space-y-4 h-[calc(100vh-64px-4.5rem)] overflow-hidden">
          <li>
            <Link to="/" className="sidebar-icon group" draggable="false">
              <FontAwesomeIcon icon={faHouse} size="xl" />
              <span className="sidebar-tooltip group-hover:scale-100">
                Home
              </span>
            </Link>
          </li>
          <li>
            <Link
              to="/entertainment"
              className="sidebar-icon group"
              draggable="false"
            >
              <FontAwesomeIcon icon={faFilm} size="xl" />{" "}
              <span className="sidebar-tooltip group-hover:scale-100">
                Entertainment
              </span>
            </Link>
          </li>
          <li>
            <Link to="/health" className="sidebar-icon group" draggable="false">
              <FontAwesomeIcon icon={faHeart} size="xl" />{" "}
              <span className="sidebar-tooltip group-hover:scale-100">
                Health
              </span>
            </Link>
          </li>
          <li>
            <Link
              to="/travel-info"
              className="sidebar-icon group"
              draggable="false"
            >
              <FontAwesomeIcon icon={faCompass} size="xl" />{" "}
              <span className="sidebar-tooltip group-hover:scale-100">
                Travel info
              </span>
            </Link>
          </li>
          <li>
            <Link
              to="/food-drink"
              className="sidebar-icon group"
              draggable="false"
            >
              <FontAwesomeIcon icon={faBurger} size="xl" />{" "}
              <span className="sidebar-tooltip group-hover:scale-100">
                Food & Drink
              </span>
            </Link>
          </li>
          <li>
            <Link
              to="/settings"
              className="sidebar-icon group"
              draggable="false"
            >
              <FontAwesomeIcon icon={faSliders} size="xl" />{" "}
              <span className="sidebar-tooltip group-hover:scale-100">
                Settings
              </span>
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default Sidebar;
