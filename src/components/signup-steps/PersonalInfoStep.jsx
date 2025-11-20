import React from 'react';
import '../../styles/PersonalInfoStep.css';

const PersonalInfoStep = ({ formData, updateFormData }) => {
  return (
    <div className="personal-info-step">
      <div className="form-row">
        <div className="form-group">
          <label className="form-label">First Name *</label>
          <input
            type="text"
            value={formData.firstName}
            onChange={(e) => updateFormData('firstName', e.target.value)}
            className="form-input"
            placeholder="John"
          />
        </div>
        <div className="form-group">
          <label className="form-label">Last Name *</label>
          <input
            type="text"
            value={formData.lastName}
            onChange={(e) => updateFormData('lastName', e.target.value)}
            className="form-input"
            placeholder="Doe"
          />
        </div>
      </div>
      
      <div className="form-group">
        <label className="form-label">Date of Birth</label>
        <input
          type="date"
          value={formData.dateOfBirth}
          onChange={(e) => updateFormData('dateOfBirth', e.target.value)}
          className="form-input"
        />
      </div>
      
      <div className="form-group">
        <label className="form-label">Nationality</label>
        <input
          type="text"
          value={formData.nationality}
          onChange={(e) => updateFormData('nationality', e.target.value)}
          className="form-input"
          placeholder="American"
        />
      </div>
      
      <div className="form-group">
        <label className="form-label">Languages</label>
        <input
          type="text"
          value={formData.languages}
          onChange={(e) => updateFormData('languages', e.target.value)}
          className="form-input"
          placeholder="English, Spanish, French"
        />
      </div>
    </div>
  );
};

export default PersonalInfoStep;