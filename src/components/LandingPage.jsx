import React from 'react';
import { Users } from 'lucide-react';
import Header from './Header';
import '../styles/LandingPage.css';

const LandingPage = ({ setCurrentView }) => {
  return (
    <div className="landing-page">
      <Header setCurrentView={setCurrentView} />
      
      <div className="hero-section">
        <div className="hero-content">
          <div className="hero-text">
            <h1 className="hero-title">
              Welcome to your professional community
            </h1>
            <div className="hero-buttons">
              <button 
                onClick={() => setCurrentView('signup')}
                className="btn-primary-large"
              >
                Join Glintor
              </button>
              <button 
                onClick={() => setCurrentView('login')}
                className="btn-secondary-large"
              >
                Sign in
              </button>
            </div>
          </div>
          <div className="hero-image">
            <div className="hero-placeholder">
              <Users className="hero-icon" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LandingPage;