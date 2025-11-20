
import React, { useState } from 'react';
import LandingPage from './components/LandingPage';
import LoginForm from './components/LoginForm';
import SignupForm from './components/SignupForm';
import ProfilePage from './components/ProfilePage';
import HomePage from './components/HomePage';
import './styles/global.css';
import './styles/DemographicInfoStep.css';

const App = () => {
  const [currentView, setCurrentView] = useState('landing');
  const [formData, setFormData] = useState({
    // Personal Information
    firstName: '',
    lastName: '',
    dateOfBirth: '',
    nationality: '',
    languages: '',
    
    // Professional Information
    professionalSummary: '',
    careerObjective: '',
    yearsOfExperience: '',
    workPreference: '',
    industryPreference: '',
    
    // Demographic Information
    gender: '',
    race: '',
    veteranStatus: '',
    disabilityStatus: '',
    citizenshipStatus: '',
    
    // Other Information
    personalInterests: '',
    willingnessToRelocate: '',
    travelWillingness: '',
    availabilityDate: '',
    
    // Login credentials
    email: '',
    password: '',
    
    // Profile data
    profilePicture: null,
    headline: '',
    bio: '',
    location: ''
  });

  const [profileSections, setProfileSections] = useState({
    education: [],
    experience: [],
    skills: [],
    licenses: [],
    volunteering: [],
    patents: [],
    honors: []
  });

  const updateFormData = (field, value) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const addProfileSection = (section, data) => {
    setProfileSections(prev => ({
      ...prev,
      [section]: [...prev[section], { ...data, id: Date.now() }]
    }));
  };

  const renderCurrentView = () => {
    switch(currentView) {
      case 'landing': 
        return <LandingPage setCurrentView={setCurrentView} />;
      case 'login': 
        return <LoginForm 
          setCurrentView={setCurrentView} 
          formData={formData} 
          updateFormData={updateFormData} 
        />;
      case 'signup': 
        return <SignupForm 
          setCurrentView={setCurrentView} 
          formData={formData} 
          updateFormData={updateFormData} 
        />;
      case 'profile': 
        return <ProfilePage 
          setCurrentView={setCurrentView}
          formData={formData}
          updateFormData={updateFormData}
          profileSections={profileSections} 
          addProfileSection={addProfileSection} 
        />;
      case 'home':
        return <HomePage 
          setCurrentView={setCurrentView}
          formData={formData}
          updateFormData={updateFormData}
          profileSections={profileSections}
          addProfileSection={addProfileSection}
        />;
      default: 
        return <LandingPage setCurrentView={setCurrentView} />;
    }
  };

  return (
    <>
      <a href="#main-content" className="skip-link">Skip to main content</a>
      {renderCurrentView()}
    </>
  );
};

export default App;

