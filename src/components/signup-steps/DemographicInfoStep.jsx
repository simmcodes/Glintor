import React from 'react';
import '../../styles/DemographicInfoStep.css';

const DemographicInfoStep = ({ formData, updateFormData }) => {
  return (
    <div className="demographic-info-step">
      <div className="form-group">
        <label className="form-label">Gender</label>
        <select
          value={formData.gender}
          onChange={(e) => updateFormData('gender', e.target.value)}
          className="form-select"
        >
          <option value="">Select gender</option>
          <option value="male">Male</option>
          <option value="female">Female</option>
          <option value="non-binary">Non-binary</option>
          <option value="prefer-not-to-say">Prefer not to say</option>
        </select>
      </div>
      
      <div className="form-group">
        <label className="form-label">Race/Ethnicity</label>
        <select
          value={formData.race}
          onChange={(e) => updateFormData('race', e.target.value)}
          className="form-select"
        >
          <option value="">Select race/ethnicity</option>
          <option value="american-indian">American Indian or Alaska Native</option>
          <option value="asian">Asian</option>
          <option value="black">Black or African American</option>
          <option value="hispanic">Hispanic or Latino</option>
          <option value="pacific-islander">Native Hawaiian or Other Pacific Islander</option>
          <option value="white">White</option>
          <option value="two-or-more">Two or More Races</option>
          <option value="prefer-not-to-say">Prefer not to say</option>
        </select>
      </div>
      
      <div className="form-group">
        <label className="form-label">Veteran Status</label>
        <select
          value={formData.veteranStatus}
          onChange={(e) => updateFormData('veteranStatus', e.target.value)}
          className="form-select"
        >
          <option value="">Select veteran status</option>
          <option value="veteran">Veteran</option>
          <option value="not-veteran">Not a veteran</option>
          <option value="prefer-not-to-say">Prefer not to say</option>
        </select>
      </div>
      
      <div className="form-group">
        <label className="form-label">Disability Status</label>
        <select
          value={formData.disabilityStatus}
          onChange={(e) => updateFormData('disabilityStatus', e.target.value)}
          className="form-select"
        >
          <option value="">Select disability status</option>
          <option value="yes">Yes, I have a disability</option>
          <option value="no">No, I do not have a disability</option>
          <option value="prefer-not-to-say">Prefer not to say</option>
        </select>
      </div>
      
      <div className="form-group">
        <label className="form-label">Citizenship Status</label>
        <select
          value={formData.citizenshipStatus}
          onChange={(e) => updateFormData('citizenshipStatus', e.target.value)}
          className="form-select"
        >
          <option value="">Select citizenship status</option>
          <option value="citizen">U.S. Citizen</option>
          <option value="permanent-resident">Permanent Resident</option>
          <option value="work-visa">Work Visa Holder</option>
          <option value="other">Other</option>
        </select>
      </div>
    </div>
  );
};

export default DemographicInfoStep;