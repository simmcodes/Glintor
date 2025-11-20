import React from 'react';
import '../../styles/ProfessionalInfoStep.css';

const ProfessionalInfoStep = ({ formData, updateFormData }) => {
  return (
    <div className="professional-info-step">
      <div className="form-group">
        <label className="form-label">Professional Summary *</label>
        <textarea
          value={formData.professionalSummary}
          onChange={(e) => updateFormData('professionalSummary', e.target.value)}
          className="form-textarea large"
          placeholder="Brief summary of your professional background..."
        />
      </div>
      
      <div className="form-group">
        <label className="form-label">Career Objective</label>
        <textarea
          value={formData.careerObjective}
          onChange={(e) => updateFormData('careerObjective', e.target.value)}
          className="form-textarea"
          placeholder="Your career goals and aspirations..."
        />
      </div>
      
      <div className="form-group">
        <label className="form-label">Years of Experience</label>
        <select
          value={formData.yearsOfExperience}
          onChange={(e) => updateFormData('yearsOfExperience', e.target.value)}
          className="form-select"
        >
          <option value="">Select experience level</option>
          <option value="0-1">0-1 years</option>
          <option value="2-5">2-5 years</option>
          <option value="6-10">6-10 years</option>
          <option value="11-15">11-15 years</option>
          <option value="15+">15+ years</option>
        </select>
      </div>
      
      <div className="form-group">
        <label className="form-label">Work Preference</label>
        <select
          value={formData.workPreference}
          onChange={(e) => updateFormData('workPreference', e.target.value)}
          className="form-select"
        >
          <option value="">Select work preference</option>
          <option value="remote">Remote</option>
          <option value="on-site">On-site</option>
          <option value="hybrid">Hybrid</option>
          <option value="flexible">Flexible</option>
        </select>
      </div>
      
      <div className="form-group">
        <label className="form-label">Industry Preference</label>
        <input
          type="text"
          value={formData.industryPreference}
          onChange={(e) => updateFormData('industryPreference', e.target.value)}
          className="form-input"
          placeholder="Technology, Healthcare, Finance, etc."
        />
      </div>
    </div>
  );
};

export default ProfessionalInfoStep;
