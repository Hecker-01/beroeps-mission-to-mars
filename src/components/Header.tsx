import { Link, To } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser } from "@fortawesome/free-solid-svg-icons";

const Header = (tabs: {
  name1: string;
  link1: To;
  name2?: string;
  link2?: To;
}) => {
  return (
    <header className="flex flex-row bg-slate-800 text-white w-[calc(100%-1.5rem)] max-h-32 p-2 m-3 outline outline-4 outline-[#00ffff] rounded-xl pr-4">
      <div
        className="p-4 mr-8 flex justify-center items-center size-16 bg-slate-700
    rounded-full"
      >
        <FontAwesomeIcon icon={faUser} className="size-10" />
      </div>
      <nav className="flex items-center p-1 w-full">
        <Tabs tabs={tabs} />
      </nav>
    </header>
  );
};

export default Header;

function Tabs({
  tabs,
}: {
  tabs: { name1: string; link1: To; name2?: string; link2?: To };
}) {
  const renderTab = (name: string, link: To) => (
    <li className="tab-item w-full">
      <Link
        to={link}
        className="flex items-center justify-center text-center hover:underline w-full h-10"
        draggable="false"
      >
        <span className="text-lg font-semibold">{name}</span>
      </Link>
    </li>
  );

  return (
    <ul className="flex justify-between space-x-4 w-full">
      {tabs.name1 && tabs.link1 && renderTab(tabs.name1, tabs.link1)}
      {tabs.name2 && tabs.link2 && renderTab(tabs.name2, tabs.link2)}
    </ul>
  );
}
