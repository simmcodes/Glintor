import React from 'react';
import '../../styles/OtherInfoStep.css';

const OtherInfoStep = ({ formData, updateFormData }) => {
  return (
    <div className="other-info-step">
      <div className="form-group">
        <label className="form-label">Personal Interests</label>
        <textarea
          value={formData.personalInterests}
          onChange={(e) => updateFormData('personalInterests', e.target.value)}
          className="form-textarea"
          placeholder="Photography, hiking, reading, cooking..."
        />
      </div>
      
      <div className="form-group">
        <label className="form-label">Willingness to Relocate</label>
        <select
          value={formData.willingnessToRelocate}
          onChange={(e) => updateFormData('willingnessToRelocate', e.target.value)}
          className="form-select"
        >
          <option value="">Select relocation preference</option>
          <option value="yes">Yes, willing to relocate</option>
          <option value="no">No, not willing to relocate</option>
          <option value="depends">Depends on opportunity</option>
        </select>
      </div>
      
      <div className="form-group">
        <label className="form-label">Travel Willingness</label>
        <select
          value={formData.travelWillingness}
          onChange={(e) => updateFormData('travelWillingness', e.target.value)}
          className="form-select"
        >
          <option value="">Select travel preference</option>
          <option value="0-25">0-25%</option>
          <option value="25-50">25-50%</option>
          <option value="50-75">50-75%</option>
          <option value="75-100">75-100%</option>
        </select>
      </div>
      
      <div className="form-group">
        <label className="form-label">Availability Date</label>
        <input
          type="date"
          value={formData.availabilityDate}
          onChange={(e) => updateFormData('availabilityDate', e.target.value)}
          className="form-input"
        />
      </div>
    </div>
  );
};

export default OtherInfoStep;