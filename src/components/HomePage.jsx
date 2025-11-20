import React from 'react';
import { User, Briefcase, Users, MessageSquare, Bell, Search } from 'lucide-react';
import '../styles/HomePage.css';

const HomePage = ({ setCurrentView, formData, updateFormData, profileSections, addProfileSection }) => {
  return (
    <div className="home-page">
      {/* Navigation Header */}
      <header className="home-header" role="banner">
        <div className="home-header-container">
          <div className="header-left">
            <div className="header-logo">
              <div className="logo-icon-square">
                <span className="logo-letter">G</span>
              </div>
              <span className="logo-brand">Glintor</span>
            </div>
            <div className="search-container">
              <Search className="search-icon" aria-hidden="true" />
              <input
                type="text"
                placeholder="Search"
                className="search-input"
                aria-label="Search Glintor"
              />
            </div>
          </div>
          
          <nav className="header-nav-icons" role="navigation" aria-label="Main navigation">
            <button className="nav-icon-btn" aria-label="Home" title="Home">
              <User className="nav-icon" aria-hidden="true" />
              <span className="nav-label">Home</span>
            </button>
            <button className="nav-icon-btn" aria-label="My Network" title="My Network">
              <Users className="nav-icon" aria-hidden="true" />
              <span className="nav-label">My Network</span>
            </button>
            <button className="nav-icon-btn" aria-label="Jobs" title="Jobs">
              <Briefcase className="nav-icon" aria-hidden="true" />
              <span className="nav-label">Jobs</span>
            </button>
            <button className="nav-icon-btn" aria-label="Messaging" title="Messaging">
              <MessageSquare className="nav-icon" aria-hidden="true" />
              <span className="nav-label">Messaging</span>
            </button>
            <button className="nav-icon-btn" aria-label="Notifications" title="Notifications">
              <Bell className="nav-icon" aria-hidden="true" />
              <span className="nav-label">Notifications</span>
            </button>
            <button 
              className="nav-icon-btn profile-btn" 
              onClick={() => setCurrentView('profile')}
              aria-label="View my profile"
              title="Me"
            >
              <div className="profile-avatar-small" style={{
                backgroundImage: formData.profilePicture ? `url(${formData.profilePicture})` : 'none',
                backgroundSize: 'cover',
                backgroundPosition: 'center'
              }}>
                {!formData.profilePicture && (
                  <span className="avatar-initials-small">
                    {formData.firstName?.[0]}{formData.lastName?.[0]}
                  </span>
                )}
              </div>
              <span className="nav-label">Me</span>
            </button>
          </nav>
        </div>
      </header>

      {/* Main Content */}
      <main id="main-content" className="home-main" role="main">
        <div className="home-container">
          <div className="home-content">
            <div className="welcome-card">
              <h1 className="welcome-title">Welcome back, {formData.firstName}!</h1>
              <p className="welcome-subtitle">Stay connected with your professional network</p>
            </div>

            <div className="feed-section">
              <h2 className="section-title">Your Feed</h2>
              <div className="feed-placeholder">
                <p>Your personalized feed will appear here</p>
                <p className="feed-subtitle">Connect with professionals and engage with content</p>
              </div>
            </div>
          </div>

          <aside className="home-sidebar" role="complementary" aria-label="News and suggestions">
            <div className="sidebar-card">
              <h3 className="sidebar-title">Glintor News</h3>
              <ul className="news-list">
                <li className="news-item">
                  <span className="news-bullet">•</span>
                  <div>
                    <p className="news-text">Top companies hiring this month</p>
                    <span className="news-time">2 hours ago</span>
                  </div>
                </li>
                <li className="news-item">
                  <span className="news-bullet">•</span>
                  <div>
                    <p className="news-text">Skills that are trending now</p>
                    <span className="news-time">5 hours ago</span>
                  </div>
                </li>
                <li className="news-item">
                  <span className="news-bullet">•</span>
                  <div>
                    <p className="news-text">Industry insights for professionals</p>
                    <span className="news-time">1 day ago</span>
                  </div>
                </li>
              </ul>
            </div>
          </aside>
        </div>
      </main>
    </div>
  );
};

export default HomePage;