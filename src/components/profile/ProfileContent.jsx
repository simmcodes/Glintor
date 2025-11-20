import React from 'react';
import { Plus } from 'lucide-react';
import '../../styles/ProfileContent.css';

const ProfileContent = ({ formData, profileSections, startEditing }) => {
  const ProfileSection = ({ title, sectionKey, children, emptyMessage }) => (
    <div className="profile-section">
      <div className="section-header">
        <h3 className="section-title">{title}</h3>
        <button 
          onClick={() => startEditing(sectionKey)}
          className="add-button"
        >
          <Plus className="add-icon" />
          Add
        </button>
      </div>
      <div className="section-content">
        {children || <p className="empty-message">{emptyMessage}</p>}
      </div>
    </div>
  );

  return (
    <div className="profile-content">
      {/* About Section */}
      <div className="profile-section">
        <h3 className="section-title">About</h3>
        <div className="section-content">
          <p className="about-text">
            {formData.professionalSummary || 'No professional summary added yet.'}
          </p>
          {formData.careerObjective && (
            <div className="career-objective">
              <h4 className="objective-title">Career Objective</h4>
              <p className="objective-text">{formData.careerObjective}</p>
            </div>
          )}
        </div>
      </div>

      {/* Experience Section */}
      <ProfileSection
        title="Experience"
        sectionKey="experience"
        emptyMessage="No experience added yet."
      >
        {profileSections.experience.length > 0 && (
          <div className="items-list">
            {profileSections.experience.map((exp) => (
              <div key={exp.id} className="experience-item">
                <h4 className="item-title">{exp.title}</h4>
                <p className="item-company">{exp.company}</p>
                <p className="item-date">
                  {exp.startMonth} {exp.startYear} - {
                    exp.isCurrentRole 
                      ? 'Present' 
                      : `${exp.endMonth || ''} ${exp.endYear || ''}`.trim() || 'Present'
                  }
                </p>
                <p className="item-location">{exp.locationType}</p>
                {exp.description && <p className="item-description">{exp.description}</p>}
                {exp.skills && exp.skills.length > 0 && (
                  <div className="experience-skills">
                    <span className="skills-label">Skills: </span>
                    {exp.skills.map((skill, index) => (
                      <span key={index} className="skill-tag-small">
                        {skill}
                        {index < exp.skills.length - 1 ? ', ' : ''}
                      </span>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>
        )}
      </ProfileSection>

      {/* Education Section */}
      <ProfileSection
        title="Education"
        sectionKey="education"
        emptyMessage="No education added yet."
      >
        {profileSections.education.length > 0 && (
          <div className="items-list">
            {profileSections.education.map((edu) => (
              <div key={edu.id} className="education-item">
                <h4 className="item-title">{edu.school}</h4>
                <p className="item-degree">{edu.degree}</p>
                <p className="item-field">{edu.field}</p>
                <p className="item-date">
                  {edu.startMonth} {edu.startYear} - {edu.endMonth} {edu.endYear}
                </p>
                {edu.gpa && (
                  <p className="item-gpa">GPA: {edu.gpa}</p>
                )}
                {edu.achievements && (
                  <p className="item-achievements">{edu.achievements}</p>
                )}
                {edu.media && (
                  <p className="item-media">
                    <a href={edu.media} target="_blank" rel="noopener noreferrer" className="media-link">
                      View Related Media
                    </a>
                  </p>
                )}
              </div>
            ))}
          </div>
        )}
      </ProfileSection>

      {/* Skills Section */}
      <ProfileSection
        title="Skills"
        sectionKey="skills"
        emptyMessage="No skills added yet."
      >
        {profileSections.skills.length > 0 && (
          <div className="skills-grid">
            {profileSections.skills.map((skill) => (
              <span key={skill.id} className="skill-tag">
                {skill.name} • {skill.level}
              </span>
            ))}
          </div>
        )}
      </ProfileSection>

      {/* Licenses & Certifications Section */}
      <ProfileSection
        title="Licenses & Certifications"
        sectionKey="licenses"
        emptyMessage="No licenses or certifications added yet."
      >
        {profileSections.licenses.length > 0 && (
          <div className="items-list">
            {profileSections.licenses.map((license) => (
              <div key={license.id} className="license-item">
                <h4 className="item-title">{license.name}</h4>
                <p className="item-company">{license.issuer}</p>
                <p className="item-date">
                  Issued {license.issueMonth} {license.issueYear}
                  {(license.endMonth && license.endYear) && 
                    ` • Expires ${license.endMonth} ${license.endYear}`}
                </p>
                {license.credentialId && (
                  <p className="item-credential">Credential ID: {license.credentialId}</p>
                )}
                {license.credentialUrl && (
                  <p className="item-media">
                    <a href={license.credentialUrl} target="_blank" rel="noopener noreferrer" className="media-link">
                      View Credential
                    </a>
                  </p>
                )}
              </div>
            ))}
          </div>
        )}
      </ProfileSection>

      {/* Volunteering Section */}
      <ProfileSection
        title="Volunteering Experience"
        sectionKey="volunteering"
        emptyMessage="No volunteering experience added yet."
      >
        {profileSections.volunteering.length > 0 && (
          <div className="items-list">
            {profileSections.volunteering.map((vol) => (
              <div key={vol.id} className="volunteering-item">
                <h4 className="item-title">{vol.role}</h4>
                <p className="item-company">{vol.organization}</p>
                <p className="item-cause">{vol.cause}</p>
                <p className="item-date">
                  {vol.startMonth} {vol.startYear} - {
                    vol.isCurrentVolunteering 
                      ? 'Present' 
                      : `${vol.endMonth || ''} ${vol.endYear || ''}`.trim() || 'Present'
                  }
                </p>
                {vol.description && <p className="item-description">{vol.description}</p>}
                {vol.media && (
                  <p className="item-media">
                    <a href={vol.media} target="_blank" rel="noopener noreferrer" className="media-link">
                      View Media
                    </a>
                  </p>
                )}
              </div>
            ))}
          </div>
        )}
      </ProfileSection>

      {/* Patents Section */}
      <ProfileSection
        title="Patents"
        sectionKey="patents"
        emptyMessage="No patents added yet."
      >
        {profileSections.patents.length > 0 && (
          <div className="items-list">
            {profileSections.patents.map((patent) => (
              <div key={patent.id} className="patent-item">
                <h4 className="item-title">{patent.title}</h4>
                <p className="item-number">Patent #{patent.number}</p>
                <p className="item-inventors">Inventors: {patent.inventors}</p>
                <p className="item-status">Status: {patent.status}</p>
                {patent.description && <p className="item-description">{patent.description}</p>}
              </div>
            ))}
          </div>
        )}
      </ProfileSection>

      {/* Honors & Awards Section */}
      <ProfileSection
        title="Honors & Awards"
        sectionKey="honors"
        emptyMessage="No honors or awards added yet."
      >
        {profileSections.honors.length > 0 && (
          <div className="items-list">
            {profileSections.honors.map((honor) => (
              <div key={honor.id} className="honor-item">
                <h4 className="item-title">{honor.title}</h4>
                <p className="item-company">{honor.issuer}</p>
                <p className="item-associated">Associated with: {honor.associatedWith}</p>
                <p className="item-date">{honor.issueMonth} {honor.issueYear}</p>
                {honor.description && <p className="item-description">{honor.description}</p>}
                {honor.media && (
                  <p className="item-media">
                    <a href={honor.media} target="_blank" rel="noopener noreferrer" className="media-link">
                      View Certificate
                    </a>
                  </p>
                )}
              </div>
            ))}
          </div>
        )}
      </ProfileSection>
    </div>
  );
};

export default ProfileContent;