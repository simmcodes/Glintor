import React from 'react';
import '../styles/Header.css';

const Header = ({ setCurrentView }) => {
  return (
    <header className="header">
      <div className="header-container">
        <div className="header-logo">
          <div className="logo-icon-square">
            <span className="logo-letter">G</span>
          </div>
              <span className="logo-brand">Glintor</span>
        </div>
        
        <nav className="header-nav" role="navigation" aria-label="Main navigation">
          <button 
            onClick={() => setCurrentView('login')}
            className="nav-link"
            aria-label="Sign in to your account"
          >
            Sign in
          </button>
          <button 
            onClick={() => setCurrentView('signup')}
            className="btn-primary"
            aria-label="Create new account"
          >
            Join now
          </button>
        </nav>
        </div>
      
    </header>
  );
};

export default Header;