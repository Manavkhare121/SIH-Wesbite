import React, { useState } from 'react';
import './UserNavbar.css';
import userimage from '../../../assets/Student image.webp';
import UserSidebar from "../../UserPage/UserSidebar/UserSidebar";
import { Outlet, useNavigate, useLocation } from 'react-router-dom';
import Banner from "../../../assets/Dashbord-banner.png";

const UserNavbar = () => {
  const [expanded, setExpanded] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  // Show Dashboard ONLY when URL is exactly /user
  const showDashboard = location.pathname === "/user";

  return (
    <>
      <div className="user-layout">

        {/* Sidebar */}
        <UserSidebar expanded={expanded} setExpanded={setExpanded} />

        {/* Main Content */}
        <div
          className={`user-main-content ${
            expanded ? "user-sidebar-expanded" : "user-sidebar-collapsed"
          }`}
        >
          {/* Top Navbar */}
          <div className="user-navbar">
            <div className="user-navbar-icon">
              <img src={userimage} alt="logo" />
            </div>

            <div className="user-navbar-text">
              <p>About Us</p>
              <p>Guide</p>

              <p onClick={() => navigate("/login")}>Login</p>

              <div className="user-signup">
                <p onClick={() => navigate("/Signup")}>SignUp</p>
              </div>
            </div>
          </div>

          {/* Nested Pages + Dashboard */}
          <div className="UserDashboardpages">

            {/* Outlet → Appointment, Chatbot, Settings etc. */}
            <Outlet />

            {/* Dashboard ONLY when URL is /user */}
            {showDashboard && (
              <div className="user-dashboard">
                <img src={Banner} alt="Classroom" className="user-banner" />

                <p className="user-quote">
                  "All data is 100% anonymous and aggregated to protect student privacy."
                </p>

                <div className="user-cards">
                  <div className="user-card">
                    <h2 className="user-card-number user-blue">12,000+</h2>
                    <p className="user-card-title">Students Benefited</p>
                    <small className="user-card-subtext">Direct student wellness support.</small>
                  </div>

                  <div className="user-card">
                    <h2 className="user-card-number user-green">100+</h2>
                    <p className="user-card-title">Counselors Connected</p>
                    <small className="user-card-subtext">Bridging students with experts.</small>
                  </div>

                  <div className="user-card">
                    <h2 className="user-card-number user-purple">8+</h2>
                    <p className="user-card-title">Languages Supported</p>
                    <small className="user-card-subtext">Multilingual accessibility across India.</small>
                  </div>

                  <div className="user-card">
                    <h2 className="user-card-number user-red">100%</h2>
                    <p className="user-card-title">Anonymous Insights</p>
                    <small className="user-card-subtext">Secure, aggregated data for admins.</small>
                  </div>
                </div>
              </div>
            )}

          </div>
        </div>
      </div>
    </>
  );
};

export default UserNavbar;
