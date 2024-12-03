// Header.tsx
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header className="bg-blue-600 text-white p-4 w-full">
      <nav className="flex justify-between items-center">
        <h1 className="text-2xl font-bold">My App</h1>
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