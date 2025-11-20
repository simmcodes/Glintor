import React from 'react';
import { User, Briefcase, Users, MessageSquare, Bell, Search } from 'lucide-react';
import '../../styles/ProfileHeader.css';

const ProfileHeader = ({ setCurrentView, formData }) => {
  return (
    <header className="profile-header">
      <div className="profile-header-container">
        <div className="header-left">
          <div className="header-logo" onClick={() => setCurrentView('home')} style={{ cursor: 'pointer' }}>
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
          <button 
            className="nav-icon-btn" 
            onClick={() => setCurrentView('home')}
            aria-label="Home" 
            title="Home"
          >
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
  );
};

export default ProfileHeader;