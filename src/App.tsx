import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './Header';
import Sidebar from './Sidebar'; // Import Sidebar
import NewPage from './NewPage';
import Home from './Home';

const App = () => {
  return (
    <Router>
      <div className="bg-black">
        <Header />
        <div className="flex flex-row flex-grow">
          <Sidebar />
          <main className="flex-grow flex items-center justify-center w-full">
            <div className="bg-gray-800 text-white h-[calc(100vh-64px-2rem)] w-[calc(100%-0.75rem)] p-3 m-3 ml-1 mt-1 outline outline-4 outline-[#00ffff] rounded-lg">
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/new-page" element={<NewPage />} />
              </Routes>
            </div>
          </main>
        </div>
      </div>
    </Router>
  );
};

export default App;