import { Link } from 'react-router-dom';

function Sidebar() {
    return (
        <div className="bg-gray-800 text-white h-[calc(100vh-64px-2rem)] p-3 m-3 mt-1 outline outline-4 outline-[#00ffff] rounded-lg">
            <h2 className="text-2xl font-bold mb-4">Nav</h2>
            <nav>
                <ul className="space-y-2">
                    <li>
                        <Link to="/" className="block py-2 px-4 rounded hover:bg-gray-700"></Link>
                    </li>
                    <li>
                        <Link to="/" className="block py-2 px-4 rounded hover:bg-gray-700"></Link>
                    </li>
                    <li>
                        <Link to="/" className="block py-2 px-4 rounded hover:bg-gray-700"></Link>
                    </li>
                    <li>
                        <Link to="/" className="block py-2 px-4 rounded hover:bg-gray-700"></Link>
                    </li>
                    <li>
                        <Link to="/" className="block py-2 px-4 rounded hover:bg-gray-700"></Link>
                    </li>
                </ul>
            </nav>
        </div>
    );
}

export default Sidebar;