import "./App.css";
import { Routes, Route, Link } from "react-router-dom";
import TechnicalPage from "./components/Technical_Training_Page/TecnicalPage";
import MainEDev from "./components/Developer_Section_Page/MainDev";




function App() {
  return (
    <>
      {/* Navigation bar */}
      <nav className="flex gap-6 p-4 bg-gray-200 shadow-md">
        <Link to="/" className="hover:text-blue-600 font-medium">
          Technical_Training_Page
        </Link>
        <Link to="/DevelopersPage" className="hover:text-blue-600 font-medium">
          Developers_Corner_Page
        </Link>
      </nav>



      {/* Route setup */}
      <Routes>
        <Route path="/" element={<TechnicalPage />} />
        <Route path="/DevelopersPage" element={<MainEDev/>} />
      </Routes>
    </>
  );
}

export default App;
 