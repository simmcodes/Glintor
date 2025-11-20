import React, { useState } from 'react';
import ProfileHeader from './profile/ProfileHeader';
import ProfileSidebar from './profile/ProfileSidebar';
import ProfileContent from './profile/ProfileContent';
import EditModal from './profile/EditModal';
import '../styles/ProfilePage.css';

const ProfilePage = ({ setCurrentView, formData, updateFormData, profileSections, addProfileSection }) => {
  const [editingSection, setEditingSection] = useState(null);

  const startEditing = (section) => {
    setEditingSection(section);
  };

  const handleSave = (section, data) => {
    addProfileSection(section, data);
    setEditingSection(null);
  };

  return (
    <div className="profile-page">
      <ProfileHeader setCurrentView={setCurrentView} formData={formData} />
      
      <main id="main-content" className="profile-container" role="main">
        <div className="profile-grid">
          <ProfileSidebar formData={formData} updateFormData={updateFormData} />
          
          <ProfileContent
            formData={formData}
            profileSections={profileSections}
            startEditing={startEditing}
          />
          
          <aside className="profile-right-sidebar" role="complementary" aria-label="Profile details">
            <div className="profile-details-card">
              <h2 className="details-title">Profile Details</h2>
              <dl className="details-list">
                <div className="detail-item">
                  <dt className="detail-label">Experience:</dt>
                  <dd className="detail-value">{formData.yearsOfExperience || 'Not specified'}</dd>
                </div>
                <div className="detail-item">
                  <dt className="detail-label">Work Preference:</dt>
                  <dd className="detail-value">{formData.workPreference || 'Not specified'}</dd>
                </div>
                <div className="detail-item">
                  <dt className="detail-label">Industry:</dt>
                  <dd className="detail-value">{formData.industryPreference || 'Not specified'}</dd>
                </div>
                <div className="detail-item">
                  <dt className="detail-label">Languages:</dt>
                  <dd className="detail-value">{formData.languages || 'Not specified'}</dd>
                </div>
                <div className="detail-item">
                  <dt className="detail-label">Available:</dt>
                  <dd className="detail-value">{formData.availabilityDate || 'Not specified'}</dd>
                </div>
                {formData.personalInterests && (
                  <div className="detail-item">
                    <dt className="detail-label">Interests:</dt>
                    <dd className="detail-value">{formData.personalInterests}</dd>
                  </div>
                )}
              </dl>
            </div>
          </aside>
        </div>
      </main>

      {editingSection && (
        <EditModal
          section={editingSection}
          onClose={() => setEditingSection(null)}
          onSave={(data) => handleSave(editingSection, data)}
        />
      )}
    </div>
  );
};

export default ProfilePage;