import { Routes, Route } from "react-router-dom";
import "./App.css";
import Navbar from "./Components/AdminPage/NavbarForAdmin/Navbar.jsx";
import CounsellorPage from "./Components/CounsellorPage/CounsellorPageNavbar/CounsellorPageNavbar.jsx";
import UserNavbar from "./Components/UserPage/UserNavbar/UserNavbar.jsx";
import UserDashboard from "./Components/UserPage/UserDashboard/UserDashboard.jsx";

function App() {
  return (
    <Routes>
     
      <Route path="/*" element={<Navbar />} />
      <Route path="/counsellor/*" element={<CounsellorPage />}/>
      <Route path="/User" element={<UserNavbar />} />
      <Route path="/account" element={<UserDashboard/>}/>
    </Routes>
  );
}

export default App;

