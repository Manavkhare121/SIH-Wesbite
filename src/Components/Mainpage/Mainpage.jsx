import { Link } from "react-router-dom";
import './Mainpage.css';

import logo from '../../assets/ThinkFitimage.png'

import mainimage from "../../assets/First_page_image.png"

const Mainpage = () => {
  return (
    <>
      
      <section className="intro-section">
        <div className="intro-header">
          <img src={logo} alt="ThinkFit Logo" className="logo" />
          <span className="brand-name">thinkfit</span>
        </div>
        <div className="intro-content">
          <div className="intro-image-container">
            <img src={mainimage} alt="Wellness Platform" />
          </div>
          <div className="intro-text-container">
            <p>We're building an <em>Integrated Campus Wellness Platform</em>—not just an app.</p>
            <p><strong>For students</strong>, it's a hub with an AI Chatbot, confidential counselor booking, and mental health resources.</p>
            <p><strong>For administration</strong>, it provides an <em>anonymous data dashboard</em> to track and improve campus well-being.</p>
          </div>
        </div>
      </section>

      {/* Aapka purana code yahan se shuru hota hai */}
      <div className="landing-page">
        {/* Hero Section */}
        <section className="hero-section">
          <div className="hero-content">
            <div className="hero-text">
              <div className="tagline">
                <span role="img" aria-label="heart" className="icon">❤️</span>
                Professional Mental Health Support
              </div>
              <h1 className="hero-title">
                Your Mental Health
                <span className="highlight"> Journey</span>
                <br />
                Starts Here
              </h1>
              <p className="hero-description">
                Connect with licensed mental health professionals through our
                secure platform. Get the support you need, when you need it.
              </p>
              {/* Role Selection Cards */}
              <div className="role-cards">
                {/* User Card */}
                <div className="role-card user-card">
                  <div className="card-header">
                    <div className="icon-circle primary">
                      <span role="img" aria-label="users" className="icon-lg">👥</span>
                    </div>
                    <h3 className="card-title">I need support</h3>
                    <p className="card-description">
                      Book sessions with licensed counselors and access AI-powered
                      support
                    </p>
                  </div>
                  <div className="card-content">
                    <div className="card-points">
                      <div className="point">
                        <span role="img" aria-label="calendar" className="icon-sm primary">📅</span>
                        <span>Book counseling sessions</span>
                      </div>
                      <div className="point">
                        <span role="img" aria-label="chat bubble" className="icon-sm primary">💬</span>
                        <span>24/7 AI chat support</span>
                      </div>
                      <div className="point">
                        <span role="img" aria-label="shield" className="icon-sm primary">🛡️</span>
                        <span>Secure & confidential</span>
                      </div>
                    </div>
                    <Link to="/user/login">
                      <button className="cta-btn">Continue as User</button>
                    </Link>
                  </div>
                </div>
                {/* Counselor Card */}
                <div className="role-card counselor-card">
                  <div className="card-header">
                    <div className="icon-circle secondary">
                      <span role="img" aria-label="brain" className="icon-lg">🧠</span>
                    </div>
                    <h3 className="card-title">I'm a counselor</h3>
                    <p className="card-description">
                      Manage your practice and provide professional mental health
                      support
                    </p>
                  </div>
                  <div className="card-content">
                    <div className="card-points">
                      <div className="point">
                        <span role="img" aria-label="users" className="icon-sm secondary">👥</span>
                        <span>Manage patient sessions</span>
                      </div>
                      <div className="point">
                        <span role="img" aria-label="chat bubble" className="icon-sm secondary">💬</span>
                        <span>Real-time chat system</span>
                      </div>
                      <div className="point">
                        <span role="img" aria-label="calendar" className="icon-sm secondary">📅</span>
                        <span>Session scheduling</span>
                      </div>
                    </div>
                    <Link to="/counselor/login">
                      <button className="cta-btn secondary-btn">
                        Continue as Counselor
                      </button>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* Features Section */}
        <section className="features-section">
          <div className="features-container">
            <div className="features-header">
              <h2>Why Choose Our Platform?</h2>
              <p>
                Professional, secure, and accessible mental health support designed
                for modern needs
              </p>
            </div>
            <div className="features-grid">
              <div className="feature">
                <div className="feature-icon primary">
                  <span role="img" aria-label="shield" className="icon-sm">🛡️</span>
                </div>
                <h3>Secure & Private</h3>
                <p>
                  End-to-end encryption ensures your conversations remain completely
                  confidential
                </p>
              </div>
              <div className="feature">
                <div className="feature-icon secondary">
                  <span role="img" aria-label="heart" className="icon-sm">❤️</span>
                </div>
                <h3>Licensed Professionals</h3>
                <p>
                  Connect with certified mental health counselors and therapists
                </p>
              </div>
              <div className="feature">
                <div className="feature-icon primary">
                  <span role="img" aria-label="chat bubble" className="icon-sm">💬</span>
                </div>
                <h3>24/7 Support</h3>
                <p>
                  AI-powered chat support available anytime you need immediate
                  assistance
                </p>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default Mainpage;
