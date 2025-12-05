import { Routes, Route } from "react-router-dom";
import "./App.css";
import Navbar from "./Components/AdminPage/NavbarForAdmin/Navbar.jsx";
import CounsellorPage from "./Components/CounsellorPage/CounsellorPageNavbar/CounsellorPageNavbar.jsx";
import UserNavbar from "./Components/UserPage/UserNavbar/UserNavbar.jsx";
import LoginPage from "./Components/LoginPage/LoginPage.jsx";
import SignupPage from "./Components/SignUp/SignUp.jsx";
import Mainpage from './Components/Mainpage/Mainpage.jsx'
import CounsellorPageDashboard from "./Components/CounsellorPage/CounsellorPageDashboard/CounsellorPageDashboard.jsx";
import Appointment from "./Components/UserPage/BookingAppointment/BookingAppointment.jsx"
import Dashboard from "./Components/AdminPage/DashboardForAdmin/Dashboard.jsx";
function App() {
  return (
    <Routes>
      <Route path="/login" element={<LoginPage />} />
      <Route path="/Signup" element={<SignupPage/>}/>
      <Route path="/user/*" element={<UserNavbar />}>
    <Route path="appointment" element={<Appointment />} />
    <Route path="UserDashboard" element={<Dashboard />} />
</Route>
      <Route path="/" element={<Mainpage/>} />
      <Route path="/counsellor/*" element={<CounsellorPage />} />
      {/* <Route path="/counsellorPage" element={<CounsellorPageDashboard />}/> */}
    </Routes>
  );
}


export default App;

