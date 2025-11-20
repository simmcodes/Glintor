import React from 'react';
import '../styles/LoginForm.css';

const LoginForm = ({ setCurrentView, formData, updateFormData }) => {
  const handleLogin = () => {
    setCurrentView('home');
  };

  return (
    <div className="login-container">
      <div className="login-form">
        <div className="login-header">
          <div className="login-logo">
            <span className="logo-letter">G</span>
          </div>
          <h2 className="login-title">Sign in to Glintor</h2>
        </div>
        
        <div className="login-fields">
          <div className="field-group">
            <input
              type="email"
              placeholder="Email"
              value={formData.email}
              onChange={(e) => updateFormData('email', e.target.value)}
              className="input-field"
            />
          </div>
          <div className="field-group">
            <input
              type="password"
              placeholder="Password"
              value={formData.password}
              onChange={(e) => updateFormData('password', e.target.value)}
              className="input-field"
            />
          </div>
          <button 
            onClick={handleLogin}
            className="btn-primary-full"
          >
            Sign in
          </button>
        </div>
        
        <div className="login-footer">
          <span className="footer-text">New to Glintor? </span>
          <button 
            onClick={() => setCurrentView('signup')}
            className="link-button"
          >
            Join now
          </button>
        </div>
      </div>
    </div>
  );
};

export default LoginForm;