import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './Header';
import NewPage from './NewPage';

const App = () => {
  return (
    <Router>
      <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
        <Header />
        <main className="flex-grow flex items-center justify-center w-full">
          <Routes>
            <Route path="/" element={<h1 className="text-4xl font-bold text-blue-500">Hello, Tailwind CSS!</h1>} />
            <Route path="/new-page" element={<NewPage />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
};

export default App;