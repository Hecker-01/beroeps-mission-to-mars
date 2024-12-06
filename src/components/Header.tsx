import { Link, To } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser } from "@fortawesome/free-solid-svg-icons";

const Header = (tabs: {
  name1: String;
  link1: To;
  name2: String;
  link2: To;
}) => {
  return (
    <header className="flex flex-row bg-gray-800 text-white w-[calc(100%-1.5rem)] max-h-32 p-2 m-3 outline outline-4 outline-[#00ffff] rounded-xl pr-4">
      <div
        className="p-4 mr-8 flex justify-center items-center size-16 bg-slate-700
    rounded-full"
      >
        <FontAwesomeIcon icon={faUser} className="size-10" />
      </div>
      <nav className="flex items-center p-1 w-full">
        <Tabs
          name1={tabs.name1}
          link1={tabs.link1}
          name2={tabs.name2}
          link2={tabs.link2}
        />
      </nav>
    </header>
  );
};

export default Header;

function Tabs(tabInfo: { name1: String; link1: To; name2: String; link2: To }) {
  if (!tabInfo.name2 || !tabInfo.link2) {
    return (
      <ul className="flex justify-between space-x-4 w-full">
        <li className="tab-item w-full">
          <Link
            to={tabInfo.link1}
            className="flex items-center justify-center text-center hover:underline w-full h-10"
          >
            <span className="text-lg font-semibold">{tabInfo.name1}</span>
          </Link>
        </li>
      </ul>
    );
  } else {
    return (
      <ul className="flex justify-between space-x-4 w-full">
        <li className="tab-item w-[49%]">
          <Link
            to={tabInfo.link1}
            className="flex items-center justify-center text-center hover:underline w-full h-10"
          >
            <span className="text-lg font-semibold">{tabInfo.name1}</span>
          </Link>
        </li>
        <li className="tab-item w-[49%]">
          <Link
            to={tabInfo.link2}
            className="flex items-center justify-center text-center hover:underline w-full h-10"
          >
            <span className="text-lg font-semibold">{tabInfo.name2}</span>
          </Link>
        </li>
      </ul>
    );
  }
}
