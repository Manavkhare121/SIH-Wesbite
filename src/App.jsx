import { Routes, Route } from "react-router-dom";
import "./App.css";
import Navbar from "./Components/AdminPage/NavbarForAdmin/Navbar.jsx";
import CounsellorPage from "./Components/CounsellorPage/CounsellorPageNavbar/CounsellorPageNavbar.jsx";
import UserNavbar from "./Components/UserPage/UserNavbar/UserNavbar.jsx";
import LoginPage from "./Components/LoginPage/LoginPage.jsx";
import SignupPage from "./Components/SignUp/SignUp.jsx";
import Mainpage from './Components/Mainpage/Mainpage.jsx'
function App() {
  return (
    <Routes>
      <Route path='/main' element={<Mainpage/>}/>
      <Route path="/login" element={<LoginPage />} />
      <Route path="/Signup" element={<SignupPage/>}/>
      <Route path="/user/*" element={<UserNavbar />} />
      <Route path="/*" element={<Navbar />} />
      <Route path="/counsellor/*" element={<CounsellorPage />}/>
    </Routes>
  );
}


export default App;

