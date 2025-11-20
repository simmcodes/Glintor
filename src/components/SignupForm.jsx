import React, { useState } from 'react';
import PersonalInfoStep from './signup-steps/PersonalInfoStep';
import ProfessionalInfoStep from './signup-steps/ProfessionalInfoStep';
import DemographicInfoStep from './signup-steps/DemographicInfoStep';
import OtherInfoStep from './signup-steps/OtherInfoStep';
import '../styles/SignupForm.css';

const SignupForm = ({ setCurrentView, formData, updateFormData }) => {
  const [signupStep, setSignupStep] = useState(1);

  const stepTitles = [
    'Personal Information',
    'Professional Information', 
    'Demographic Information',
    'Additional Information'
  ];

  const handleSignupSubmit = () => {
    if (signupStep < 4) {
      setSignupStep(signupStep + 1);
    } else {
      setCurrentView('home');
    }
  };

  const isStepValid = () => {
    if (signupStep === 1) {
      return formData.firstName && formData.lastName;
    }
    if (signupStep === 2) {
      return formData.professionalSummary;
    }
    return true;
  };

  const renderCurrentStep = () => {
    const stepProps = { formData, updateFormData };
    
    switch(signupStep) {
      case 1: return <PersonalInfoStep {...stepProps} />;
      case 2: return <ProfessionalInfoStep {...stepProps} />;
      case 3: return <DemographicInfoStep {...stepProps} />;
      case 4: return <OtherInfoStep {...stepProps} />;
      default: return <PersonalInfoStep {...stepProps} />;
    }
  };

  return (
    <div className="signup-container">
      <div className="signup-form">
        <div className="signup-header">
          <div className="signup-logo">
            <span className="logo-letter">G</span>
          </div>
                      <h2 className="signup-title">Join Glintor</h2>
          <p className="signup-subtitle">
            Step {signupStep} of 4: {stepTitles[signupStep - 1]}
          </p>
        </div>

        <div className="progress-section">
          <div className="progress-labels">
            {stepTitles.map((title, index) => (
              <span 
                key={index} 
                className={`progress-label ${index + 1 <= signupStep ? 'active' : ''}`}
              >
                {index + 1}
              </span>
            ))}
          </div>
          <div className="progress-bar">
            <div 
              className="progress-fill"
              style={{ width: `${(signupStep / 4) * 100}%` }}
            ></div>
          </div>
        </div>

        <div className="step-content">
          {renderCurrentStep()}
        </div>

        <div className="signup-navigation">
          <button 
            onClick={() => signupStep > 1 ? setSignupStep(signupStep - 1) : setCurrentView('landing')}
            className="btn-secondary"
          >
            {signupStep > 1 ? 'Previous' : 'Back'}
          </button>
          <button 
            onClick={handleSignupSubmit}
            disabled={!isStepValid()}
            className="btn-primary"
          >
            {signupStep === 4 ? 'Create Profile' : 'Next'}
          </button>
        </div>
      </div>
    </div>
  );
};

export default SignupForm;
