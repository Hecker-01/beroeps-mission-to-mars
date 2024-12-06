// Header.tsx
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header className="bg-gray-800 text-white w-[calc(100%-1.5rem)] max-h-16 p-3 m-3 outline outline-4 outline-[#00ffff] rounded-xl">
      <nav className="flex justify-between items-center">
        <h1 className="text-2xl font-bold">Mission to Mars</h1>
        <ul className="flex space-x-4">
          <li>
            <Link to="/" className="hover:underline">Home</Link>
          </li>
          <li>
            <Link to="/new-page" className="hover:underline">New Page</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;