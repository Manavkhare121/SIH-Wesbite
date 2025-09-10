import React from 'react';
import "./CounsellorPageDashboard.css";

const CounsellorPageDashboard = () => {
  return (
    <div className="counsellor-dashboard">
      <div className="dashboard-intro">
        <p>"All data is 100% anonymous and aggregated to protect student privacy."</p>
      </div>

      <div className="dashboard-session-container">
        <div className="dashboard-header">
          <h1>Session Status</h1>
        </div>

        <div className="dashboard-details">
          <div className="dashboard-details-left">
            <div className="dashboard-box">
              <h1>Session Name</h1>
            </div>
            <div className="dashboard-box">
              <h1>Session Status</h1>
            </div>
            <div className="dashboard-box">
              <h1>Session Date</h1>
            </div>
          </div>

          <div className="dashboard-details-right">
            <div className="dashboard-button">
              <p>Save</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CounsellorPageDashboard;
