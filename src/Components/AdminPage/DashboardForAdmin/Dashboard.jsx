import { useState } from "react";
import "./Dashboard.css";

const Dashboard = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  return (
    <div className="Dashboard">
      <div className="chart-part"></div>

      <div className="Data-privacy-text">
        <p>
          "All data is 100% anonymous and aggregated to protect student
          privacy."
        </p>
      </div>

      <div className="box-part">
        <div className="fact-card">
          <h2 className="fact-number">12,000+</h2>
          <p className="fact-title">Students Benefited</p>
          <small className="fact-subtitle">
            Direct student wellness support.
          </small>
        </div>

        <div className="fact-card">
          <h2 className="fact-number">100+</h2>
          <p className="fact-title">Counselors Connected</p>
          <small className="fact-subtitle">
            Bridging students with many experts.
          </small>
        </div>

        <div className="fact-card">
          <h2 className="fact-number">8+</h2>
          <p className="fact-title">Languages Supported</p>
          <small className="fact-subtitle">
            Multilingual accessibility across India.
          </small>
        </div>

        <div className="fact-card">
          <h2 className="fact-number">100%</h2>
          <p className="fact-title">Anonymous Insights</p>
          <small className="fact-subtitle">
            Secure, aggregated data for admins.
          </small>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;



