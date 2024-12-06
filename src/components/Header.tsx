import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser } from "@fortawesome/free-solid-svg-icons";

const Header = () => {
  return (
    <header className="flex flex-row bg-gray-800 text-white w-[calc(100%-1.5rem)] max-h-32 p-2 m-3 outline outline-4 outline-[#00ffff] rounded-xl">
      <div
        className="p-4 mr-8 flex justify-center items-center size-16 bg-slate-700
    rounded-full"
      >
        <FontAwesomeIcon icon={faUser} className="size-10" />
      </div>
      <nav className="flex justify-between items-center p-1">
        <ul className="flex space-x-4">
          <li>
            <Link to="/" className="hover:underline">
              Tab1
            </Link>
          </li>
          <li>
            <Link to="/" className="hover:underline">
              Tab2
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
