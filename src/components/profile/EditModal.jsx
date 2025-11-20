import React, { useState } from 'react';
import '../../styles/EditModal.css';

const EditModal = ({ section, onClose, onSave }) => {
  const [editForm, setEditForm] = useState({
    skills: [] // Initialize skills array
  });

  const updateEditForm = (field, value) => {
    setEditForm(prev => ({ ...prev, [field]: value }));
  };

  const addSkill = () => {
    if (editForm.skillInput && editForm.skillInput.trim()) {
      const newSkill = editForm.skillInput.trim();
      setEditForm(prev => ({
        ...prev,
        skills: [...(prev.skills || []), newSkill],
        skillInput: ''
      }));
    }
  };

  const removeSkill = (index) => {
    setEditForm(prev => ({
      ...prev,
      skills: prev.skills.filter((_, i) => i !== index)
    }));
  };

  const handleSave = () => {
    onSave(editForm);
  };

  const renderEducationForm = () => (
    <div className="modal-form">
      <div className="modal-row">
        <div className="form-field">
          <label className="field-label">Institution Name *</label>
          <input
            type="text"
            placeholder="Enter institution name"
            value={editForm.school || ''}
            onChange={(e) => updateEditForm('school', e.target.value)}
            className="modal-input"
          />
        </div>
        <div className="form-field">
          <label className="field-label">Degree *</label>
          <input
            type="text"
            placeholder="e.g., Bachelor of Science, Master of Arts"
            value={editForm.degree || ''}
            onChange={(e) => updateEditForm('degree', e.target.value)}
            className="modal-input"
          />
        </div>
      </div>

      <div className="form-field">
        <label className="field-label">Field of Specialization *</label>
        <input
          type="text"
          placeholder="e.g., Computer Science, Business Administration"
          value={editForm.field || ''}
          onChange={(e) => updateEditForm('field', e.target.value)}
          className="modal-input"
        />
      </div>
      
      <div className="modal-row">
        <div className="form-field">
          <label className="field-label">Start Month</label>
          <select
            value={editForm.startMonth || ''}
            onChange={(e) => updateEditForm('startMonth', e.target.value)}
            className="modal-select"
          >
            <option value="">Select month</option>
            <option value="January">January</option>
            <option value="February">February</option>
            <option value="March">March</option>
            <option value="April">April</option>
            <option value="May">May</option>
            <option value="June">June</option>
            <option value="July">July</option>
            <option value="August">August</option>
            <option value="September">September</option>
            <option value="October">October</option>
            <option value="November">November</option>
            <option value="December">December</option>
          </select>
        </div>
        <div className="form-field">
          <label className="field-label">Start Year</label>
          <select
            value={editForm.startYear || ''}
            onChange={(e) => updateEditForm('startYear', e.target.value)}
            className="modal-select"
          >
            <option value="">Select year</option>
            {Array.from({length: 50}, (_, i) => {
              const year = new Date().getFullYear() - i;
              return <option key={year} value={year}>{year}</option>
            })}
          </select>
        </div>
      </div>

      <div className="modal-row">
        <div className="form-field">
          <label className="field-label">End Month</label>
          <select
            value={editForm.endMonth || ''}
            onChange={(e) => updateEditForm('endMonth', e.target.value)}
            className="modal-select"
          >
            <option value="">Select month</option>
            <option value="January">January</option>
            <option value="February">February</option>
            <option value="March">March</option>
            <option value="April">April</option>
            <option value="May">May</option>
            <option value="June">June</option>
            <option value="July">July</option>
            <option value="August">August</option>
            <option value="September">September</option>
            <option value="October">October</option>
            <option value="November">November</option>
            <option value="December">December</option>
          </select>
        </div>
        <div className="form-field">
          <label className="field-label">End Year</label>
          <select
            value={editForm.endYear || ''}
            onChange={(e) => updateEditForm('endYear', e.target.value)}
            className="modal-select"
          >
            <option value="">Select year</option>
            {Array.from({length: 50}, (_, i) => {
              const year = new Date().getFullYear() - i;
              return <option key={year} value={year}>{year}</option>
            })}
          </select>
        </div>
      </div>

      <div className="form-field">
        <label className="field-label">GPA (Optional)</label>
        <input
          type="text"
          placeholder="e.g., 3.8/4.0 or 85%"
          value={editForm.gpa || ''}
          onChange={(e) => updateEditForm('gpa', e.target.value)}
          className="modal-input"
        />
      </div>

      <div className="form-field">
        <label className="field-label">Achievements/Honors (Optional)</label>
        <textarea
          placeholder="e.g., Magna Cum Laude, Dean's List, Scholarship recipient..."
          value={editForm.achievements || ''}
          onChange={(e) => updateEditForm('achievements', e.target.value)}
          className="modal-textarea"
        />
      </div>

      <div className="form-field">
        <label className="field-label">Media (Optional)</label>
        <input
          type="url"
          placeholder="Link to certificate, transcript, or related media"
          value={editForm.media || ''}
          onChange={(e) => updateEditForm('media', e.target.value)}
          className="modal-input"
        />
      </div>
    </div>
  );

  const renderExperienceForm = () => (
    <div className="modal-form">
      <div className="modal-row">
        <div className="form-field">
          <label className="field-label">Company Name *</label>
          <input
            type="text"
            placeholder="Enter company name"
            value={editForm.company || ''}
            onChange={(e) => updateEditForm('company', e.target.value)}
            className="modal-input"
          />
        </div>
        <div className="form-field">
          <label className="field-label">Position *</label>
          <input
            type="text"
            placeholder="Enter position title"
            value={editForm.title || ''}
            onChange={(e) => updateEditForm('title', e.target.value)}
            className="modal-input"
          />
        </div>
      </div>
      
      <div className="modal-row">
        <div className="form-field">
          <label className="field-label">Start Month</label>
          <select
            value={editForm.startMonth || ''}
            onChange={(e) => updateEditForm('startMonth', e.target.value)}
            className="modal-select"
          >
            <option value="">Select month</option>
            <option value="January">January</option>
            <option value="February">February</option>
            <option value="March">March</option>
            <option value="April">April</option>
            <option value="May">May</option>
            <option value="June">June</option>
            <option value="July">July</option>
            <option value="August">August</option>
            <option value="September">September</option>
            <option value="October">October</option>
            <option value="November">November</option>
            <option value="December">December</option>
          </select>
        </div>
        <div className="form-field">
          <label className="field-label">Start Year</label>
          <select
            value={editForm.startYear || ''}
            onChange={(e) => updateEditForm('startYear', e.target.value)}
            className="modal-select"
          >
            <option value="">Select year</option>
            {Array.from({length: 50}, (_, i) => {
              const year = new Date().getFullYear() - i;
              return <option key={year} value={year}>{year}</option>
            })}
          </select>
        </div>
      </div>

      <div className="checkbox-section">
        <label className="checkbox-label">
          <input
            type="checkbox"
            checked={editForm.isCurrentRole || false}
            onChange={(e) => updateEditForm('isCurrentRole', e.target.checked)}
            className="checkbox-input"
          />
          I am currently working in this role
        </label>
      </div>

      {!editForm.isCurrentRole && (
        <>
          <div className="modal-row">
            <div className="form-field">
              <label className="field-label">End Month</label>
              <select
                value={editForm.endMonth || ''}
                onChange={(e) => updateEditForm('endMonth', e.target.value)}
                className="modal-select"
              >
                <option value="">Select month</option>
                <option value="January">January</option>
                <option value="February">February</option>
                <option value="March">March</option>
                <option value="April">April</option>
                <option value="May">May</option>
                <option value="June">June</option>
                <option value="July">July</option>
                <option value="August">August</option>
                <option value="September">September</option>
                <option value="October">October</option>
                <option value="November">November</option>
                <option value="December">December</option>
              </select>
            </div>
            <div className="form-field">
              <label className="field-label">End Year</label>
              <select
                value={editForm.endYear || ''}
                onChange={(e) => updateEditForm('endYear', e.target.value)}
                className="modal-select"
              >
                <option value="">Select year</option>
                {Array.from({length: 50}, (_, i) => {
                  const year = new Date().getFullYear() - i;
                  return <option key={year} value={year}>{year}</option>
                })}
              </select>
            </div>
          </div>
        </>
      )}

      <div className="form-field">
        <label className="field-label">Location Type</label>
        <select
          value={editForm.locationType || ''}
          onChange={(e) => updateEditForm('locationType', e.target.value)}
          className="modal-select"
        >
          <option value="">Select location type</option>
          <option value="On-site">On-site</option>
          <option value="Remote">Remote</option>
          <option value="Hybrid">Hybrid</option>
        </select>
      </div>

      <div className="skills-section">
        <label className="field-label">Skills</label>
        <div className="skills-input-container">
          <input
            type="text"
            placeholder="Enter a skill and press Add"
            value={editForm.skillInput || ''}
            onChange={(e) => updateEditForm('skillInput', e.target.value)}
            className="skills-input"
            onKeyPress={(e) => {
              if (e.key === 'Enter') {
                e.preventDefault();
                addSkill();
              }
            }}
          />
          <button
            type="button"
            onClick={addSkill}
            className="add-skill-btn"
          >
            Add
          </button>
        </div>
        {editForm.skills && editForm.skills.length > 0 && (
          <div className="skills-list">
            {editForm.skills.map((skill, index) => (
              <span key={index} className="skill-tag">
                {skill}
                <button
                  type="button"
                  onClick={() => removeSkill(index)}
                  className="remove-skill-btn"
                >
                  ×
                </button>
              </span>
            ))}
          </div>
        )}
      </div>

      <div className="form-field">
        <label className="field-label">Job Description</label>
        <textarea
          placeholder="Describe your role, responsibilities, and achievements..."
          value={editForm.description || ''}
          onChange={(e) => updateEditForm('description', e.target.value)}
          className="modal-textarea large"
        />
      </div>
    </div>
  );

  const renderSkillsForm = () => (
    <div className="modal-form">
      <input
        type="text"
        placeholder="Skill Name"
        value={editForm.name || ''}
        onChange={(e) => updateEditForm('name', e.target.value)}
        className="modal-input"
      />
      <select
        value={editForm.level || ''}
        onChange={(e) => updateEditForm('level', e.target.value)}
        className="modal-select"
      >
        <option value="">Select proficiency level</option>
        <option value="beginner">Beginner</option>
        <option value="intermediate">Intermediate</option>
        <option value="advanced">Advanced</option>
        <option value="expert">Expert</option>
      </select>
    </div>
  );

  const renderLicenseForm = () => (
    <div className="modal-form">
      <div className="form-field">
        <label className="field-label">Name *</label>
        <input
          type="text"
          placeholder="e.g., AWS Certified Solutions Architect"
          value={editForm.name || ''}
          onChange={(e) => updateEditForm('name', e.target.value)}
          className="modal-input"
        />
      </div>

      <div className="form-field">
        <label className="field-label">Issuing Organization *</label>
        <input
          type="text"
          placeholder="e.g., Amazon Web Services, Microsoft"
          value={editForm.issuer || ''}
          onChange={(e) => updateEditForm('issuer', e.target.value)}
          className="modal-input"
        />
      </div>

      <div className="modal-row">
        <div className="form-field">
          <label className="field-label">Issue Month</label>
          <select
            value={editForm.issueMonth || ''}
            onChange={(e) => updateEditForm('issueMonth', e.target.value)}
            className="modal-select"
          >
            <option value="">Select month</option>
            <option value="January">January</option>
            <option value="February">February</option>
            <option value="March">March</option>
            <option value="April">April</option>
            <option value="May">May</option>
            <option value="June">June</option>
            <option value="July">July</option>
            <option value="August">August</option>
            <option value="September">September</option>
            <option value="October">October</option>
            <option value="November">November</option>
            <option value="December">December</option>
          </select>
        </div>
        <div className="form-field">
          <label className="field-label">Issue Year</label>
          <select
            value={editForm.issueYear || ''}
            onChange={(e) => updateEditForm('issueYear', e.target.value)}
            className="modal-select"
          >
            <option value="">Select year</option>
            {Array.from({length: 30}, (_, i) => {
              const year = new Date().getFullYear() - i;
              return <option key={year} value={year}>{year}</option>
            })}
          </select>
        </div>
      </div>

      <div className="modal-row">
        <div className="form-field">
          <label className="field-label">End Month</label>
          <select
            value={editForm.endMonth || ''}
            onChange={(e) => updateEditForm('endMonth', e.target.value)}
            className="modal-select"
          >
            <option value="">Select month</option>
            <option value="January">January</option>
            <option value="February">February</option>
            <option value="March">March</option>
            <option value="April">April</option>
            <option value="May">May</option>
            <option value="June">June</option>
            <option value="July">July</option>
            <option value="August">August</option>
            <option value="September">September</option>
            <option value="October">October</option>
            <option value="November">November</option>
            <option value="December">December</option>
          </select>
        </div>
        <div className="form-field">
          <label className="field-label">End Year</label>
          <select
            value={editForm.endYear || ''}
            onChange={(e) => updateEditForm('endYear', e.target.value)}
            className="modal-select"
          >
            <option value="">Select year</option>
            {Array.from({length: 30}, (_, i) => {
              const year = new Date().getFullYear() - i;
              return <option key={year} value={year}>{year}</option>
            })}
          </select>
        </div>
      </div>

      <div className="form-field">
        <label className="field-label">Credentials ID</label>
        <input
          type="text"
          placeholder="Enter credential ID"
          value={editForm.credentialId || ''}
          onChange={(e) => updateEditForm('credentialId', e.target.value)}
          className="modal-input"
        />
      </div>

      <div className="form-field">
        <label className="field-label">Credentials URL</label>
        <input
          type="url"
          placeholder="Link to credential verification"
          value={editForm.credentialUrl || ''}
          onChange={(e) => updateEditForm('credentialUrl', e.target.value)}
          className="modal-input"
        />
      </div>
    </div>
  );

  const renderVolunteeringForm = () => (
    <div className="modal-form">
      <div className="form-field">
        <label className="field-label">Organization *</label>
        <input
          type="text"
          placeholder="Enter organization name"
          value={editForm.organization || ''}
          onChange={(e) => updateEditForm('organization', e.target.value)}
          className="modal-input"
        />
      </div>

      <div className="form-field">
        <label className="field-label">Role *</label>
        <input
          type="text"
          placeholder="Enter your role"
          value={editForm.role || ''}
          onChange={(e) => updateEditForm('role', e.target.value)}
          className="modal-input"
        />
      </div>

      <div className="form-field">
        <label className="field-label">Cause *</label>
        <select
          value={editForm.cause || ''}
          onChange={(e) => updateEditForm('cause', e.target.value)}
          className="modal-select"
        >
          <option value="">Select cause</option>
          <option value="Animal Welfare">Animal Welfare</option>
          <option value="Arts and Culture">Arts and Culture</option>
          <option value="Children">Children</option>
          <option value="Civil Rights and Social Action">Civil Rights and Social Action</option>
          <option value="Disaster and Humanitarian Relief">Disaster and Humanitarian Relief</option>
          <option value="Economic Empowerment">Economic Empowerment</option>
          <option value="Education">Education</option>
          <option value="Environment">Environment</option>
          <option value="Health">Health</option>
          <option value="Human Rights">Human Rights</option>
          <option value="Politics">Politics</option>
          <option value="Poverty Alleviation">Poverty Alleviation</option>
          <option value="Science and Technology">Science and Technology</option>
          <option value="Social Services">Social Services</option>
          <option value="Sports and Recreation">Sports and Recreation</option>
          <option value="Veterans">Veterans</option>
        </select>
      </div>

      <div className="modal-row">
        <div className="form-field">
          <label className="field-label">Start Month</label>
          <select
            value={editForm.startMonth || ''}
            onChange={(e) => updateEditForm('startMonth', e.target.value)}
            className="modal-select"
          >
            <option value="">Select month</option>
            <option value="January">January</option>
            <option value="February">February</option>
            <option value="March">March</option>
            <option value="April">April</option>
            <option value="May">May</option>
            <option value="June">June</option>
            <option value="July">July</option>
            <option value="August">August</option>
            <option value="September">September</option>
            <option value="October">October</option>
            <option value="November">November</option>
            <option value="December">December</option>
          </select>
        </div>
        <div className="form-field">
          <label className="field-label">Start Year</label>
          <select
            value={editForm.startYear || ''}
            onChange={(e) => updateEditForm('startYear', e.target.value)}
            className="modal-select"
          >
            <option value="">Select year</option>
            {Array.from({length: 30}, (_, i) => {
              const year = new Date().getFullYear() - i;
              return <option key={year} value={year}>{year}</option>
            })}
          </select>
        </div>
      </div>

      <div className="checkbox-section">
        <label className="checkbox-label">
          <input
            type="checkbox"
            checked={editForm.isCurrentVolunteering || false}
            onChange={(e) => updateEditForm('isCurrentVolunteering', e.target.checked)}
            className="checkbox-input"
          />
          I am currently volunteering in this role
        </label>
      </div>

      {!editForm.isCurrentVolunteering && (
        <div className="modal-row">
          <div className="form-field">
            <label className="field-label">End Month</label>
            <select
              value={editForm.endMonth || ''}
              onChange={(e) => updateEditForm('endMonth', e.target.value)}
              className="modal-select"
            >
              <option value="">Select month</option>
              <option value="January">January</option>
              <option value="February">February</option>
              <option value="March">March</option>
              <option value="April">April</option>
              <option value="May">May</option>
              <option value="June">June</option>
              <option value="July">July</option>
              <option value="August">August</option>
              <option value="September">September</option>
              <option value="October">October</option>
              <option value="November">November</option>
              <option value="December">December</option>
            </select>
          </div>
          <div className="form-field">
            <label className="field-label">End Year</label>
            <select
              value={editForm.endYear || ''}
              onChange={(e) => updateEditForm('endYear', e.target.value)}
              className="modal-select"
            >
              <option value="">Select year</option>
              {Array.from({length: 30}, (_, i) => {
                const year = new Date().getFullYear() - i;
                return <option key={year} value={year}>{year}</option>
              })}
            </select>
          </div>
        </div>
      )}

      <div className="form-field">
        <label className="field-label">Description</label>
        <textarea
          placeholder="Describe your volunteering work and achievements..."
          value={editForm.description || ''}
          onChange={(e) => updateEditForm('description', e.target.value)}
          className="modal-textarea large"
        />
      </div>

      <div className="form-field">
        <label className="field-label">Media (Optional)</label>
        <input
          type="url"
          placeholder="Link to photos, certificates, or related media"
          value={editForm.media || ''}
          onChange={(e) => updateEditForm('media', e.target.value)}
          className="modal-input"
        />
      </div>
    </div>
  );

  const renderPatentForm = () => (
    <div className="modal-form">
      <div className="form-field">
        <label className="field-label">Patent Title *</label>
        <input
          type="text"
          placeholder="Enter patent title"
          value={editForm.title || ''}
          onChange={(e) => updateEditForm('title', e.target.value)}
          className="modal-input"
        />
      </div>

      <div className="form-field">
        <label className="field-label">Patent or Application Number *</label>
        <input
          type="text"
          placeholder="e.g., US10,123,456 or US Application 17/987,654"
          value={editForm.number || ''}
          onChange={(e) => updateEditForm('number', e.target.value)}
          className="modal-input"
        />
      </div>

      <div className="form-field">
        <label className="field-label">Inventor(s) *</label>
        <input
          type="text"
          placeholder="Enter inventor name(s), separated by commas"
          value={editForm.inventors || ''}
          onChange={(e) => updateEditForm('inventors', e.target.value)}
          className="modal-input"
        />
      </div>

      <div className="form-field">
        <label className="field-label">Status *</label>
        <div className="radio-group">
          <label className="radio-label">
            <input
              type="radio"
              name="patentStatus"
              value="Patent Issued"
              checked={editForm.status === 'Patent Issued'}
              onChange={(e) => updateEditForm('status', e.target.value)}
              className="radio-input"
            />
            Patent Issued
          </label>
          <label className="radio-label">
            <input
              type="radio"
              name="patentStatus"
              value="Patent Pending"
              checked={editForm.status === 'Patent Pending'}
              onChange={(e) => updateEditForm('status', e.target.value)}
              className="radio-input"
            />
            Patent Pending
          </label>
        </div>
      </div>

      <div className="form-field">
        <label className="field-label">Description</label>
        <textarea
          placeholder="Describe the patent and its innovation..."
          value={editForm.description || ''}
          onChange={(e) => updateEditForm('description', e.target.value)}
          className="modal-textarea large"
        />
      </div>
    </div>
  );

  const renderHonorForm = () => (
    <div className="modal-form">
      <div className="form-field">
        <label className="field-label">Title *</label>
        <input
          type="text"
          placeholder="e.g., Employee of the Year, Dean's List"
          value={editForm.title || ''}
          onChange={(e) => updateEditForm('title', e.target.value)}
          className="modal-input"
        />
      </div>

      <div className="form-field">
        <label className="field-label">Associated With *</label>
        <select
          value={editForm.associatedWith || ''}
          onChange={(e) => updateEditForm('associatedWith', e.target.value)}
          className="modal-select"
        >
          <option value="">Select organization</option>
          <option value="Current Company">Current Company</option>
          <option value="Previous Company">Previous Company</option>
          <option value="University">University</option>
          <option value="Professional Organization">Professional Organization</option>
          <option value="Government Agency">Government Agency</option>
          <option value="Non-Profit Organization">Non-Profit Organization</option>
          <option value="Other">Other</option>
        </select>
      </div>

      <div className="form-field">
        <label className="field-label">Issuer *</label>
        <input
          type="text"
          placeholder="Who issued this honor/award?"
          value={editForm.issuer || ''}
          onChange={(e) => updateEditForm('issuer', e.target.value)}
          className="modal-input"
        />
      </div>

      <div className="modal-row">
        <div className="form-field">
          <label className="field-label">Issue Month</label>
          <select
            value={editForm.issueMonth || ''}
            onChange={(e) => updateEditForm('issueMonth', e.target.value)}
            className="modal-select"
          >
            <option value="">Select month</option>
            <option value="January">January</option>
            <option value="February">February</option>
            <option value="March">March</option>
            <option value="April">April</option>
            <option value="May">May</option>
            <option value="June">June</option>
            <option value="July">July</option>
            <option value="August">August</option>
            <option value="September">September</option>
            <option value="October">October</option>
            <option value="November">November</option>
            <option value="December">December</option>
          </select>
        </div>
        <div className="form-field">
          <label className="field-label">Issue Year</label>
          <select
            value={editForm.issueYear || ''}
            onChange={(e) => updateEditForm('issueYear', e.target.value)}
            className="modal-select"
          >
            <option value="">Select year</option>
            {Array.from({length: 30}, (_, i) => {
              const year = new Date().getFullYear() - i;
              return <option key={year} value={year}>{year}</option>
            })}
          </select>
        </div>
      </div>

      <div className="form-field">
        <label className="field-label">Description</label>
        <textarea
          placeholder="Describe the achievement and its significance..."
          value={editForm.description || ''}
          onChange={(e) => updateEditForm('description', e.target.value)}
          className="modal-textarea large"
        />
      </div>

      <div className="form-field">
        <label className="field-label">Media (Optional)</label>
        <input
          type="url"
          placeholder="Link to certificate, photo, or related media"
          value={editForm.media || ''}
          onChange={(e) => updateEditForm('media', e.target.value)}
          className="modal-input"
        />
      </div>
    </div>
  );

  const renderForm = () => {
    switch(section) {
      case 'education': return renderEducationForm();
      case 'experience': return renderExperienceForm();
      case 'skills': return renderSkillsForm();
      case 'licenses': return renderLicenseForm();
      case 'volunteering': return renderVolunteeringForm();
      case 'patents': return renderPatentForm();
      case 'honors': return renderHonorForm();
      default: return <div>Form not found</div>;
    }
  };

  return (
    <div className="modal-overlay">
      <div className="modal-container">
        <h3 className="modal-title">Add {section}</h3>
        {renderForm()}
        <div className="modal-actions">
          <button 
            onClick={onClose}
            className="btn-cancel"
          >
            Cancel
          </button>
          <button 
            onClick={handleSave}
            className="btn-save"
          >
            Save
          </button>
        </div>
      </div>
    </div>
  );
};

export default EditModal;