import React, { useState, useRef } from 'react';
import { MapPin, Edit3 } from 'lucide-react';
import '../../styles/ProfileSidebar.css';

const ProfileSidebar = ({ formData, updateFormData }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [tempData, setTempData] = useState({
    headline: formData.headline || '',
    bio: formData.bio || formData.professionalSummary || '',
    location: formData.location || formData.nationality || ''
  });
  const fileInputRef = useRef(null);

  const handleProfilePictureChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        updateFormData('profilePicture', reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleSave = () => {
    updateFormData('headline', tempData.headline);
    updateFormData('bio', tempData.bio);
    updateFormData('location', tempData.location);
    setIsEditing(false);
  };

  const handleCancel = () => {
    setTempData({
      headline: formData.headline || '',
      bio: formData.bio || formData.professionalSummary || '',
      location: formData.location || formData.nationality || ''
    });
    setIsEditing(false);
  };

  return (
    <aside className="profile-sidebar" role="complementary" aria-label="Profile summary">
      <div className="profile-card">
        <div className="profile-cover" role="img" aria-label="Profile cover image"></div>
        <div className="profile-info">
          {/* Edit Button */}
          {!isEditing && (
            <button
              className="edit-card-btn"
              onClick={() => setIsEditing(true)}
              aria-label="Edit profile information"
              title="Edit profile"
            >
              <Edit3 className="edit-icon" aria-hidden="true" />
            </button>
          )}

          {/* Profile Picture */}
          <div className="profile-avatar-container">
            <div 
              className="profile-avatar-large"
              role="img"
              aria-label={`Profile picture of ${formData.firstName} ${formData.lastName}`}
              style={{
                backgroundImage: formData.profilePicture ? `url(${formData.profilePicture})` : 'none',
                backgroundSize: 'cover',
                backgroundPosition: 'center'
              }}
            >
              {!formData.profilePicture && (
                <span className="avatar-initials" aria-hidden="true">
                  {formData.firstName?.[0]}{formData.lastName?.[0]}
                </span>
              )}
            </div>
            <input
              ref={fileInputRef}
              type="file"
              accept="image/*"
              onChange={handleProfilePictureChange}
              className="file-input-hidden"
              aria-label="Profile picture file input"
            />
          </div>
          
          <div className="profile-details">
            <h1 className="profile-name">
              {formData.firstName} {formData.lastName}
            </h1>
            
            {!isEditing ? (
              <>
                <p className="profile-headline">
                  {formData.headline || 'Add a professional headline'}
                </p>
                <p className="profile-summary">
                  {formData.bio || formData.professionalSummary || 'Add a bio to tell people about yourself'}
                </p>
                <div className="profile-location">
                  <MapPin className="location-icon" aria-hidden="true" />
                  <span>{formData.location || formData.nationality || 'Add location'}</span>
                </div>
              </>
            ) : (
              <div className="edit-form">
                <div className="form-field">
                  <label className="field-label">Headline</label>
                  <input
                    type="text"
                    value={tempData.headline}
                    onChange={(e) => setTempData(prev => ({ ...prev, headline: e.target.value }))}
                    className="inline-edit-input"
                    placeholder="e.g., Software Engineer at Tech Corp"
                  />
                </div>
                <div className="form-field">
                  <label className="field-label">About</label>
                  <textarea
                    value={tempData.bio}
                    onChange={(e) => setTempData(prev => ({ ...prev, bio: e.target.value }))}
                    className="inline-edit-textarea"
                    placeholder="Write about yourself..."
                    rows="4"
                  />
                </div>
                <div className="form-field">
                  <label className="field-label">Location</label>
                  <input
                    type="text"
                    value={tempData.location}
                    onChange={(e) => setTempData(prev => ({ ...prev, location: e.target.value }))}
                    className="inline-edit-input"
                    placeholder="e.g., San Francisco, CA"
                  />
                </div>
                <div className="form-field">
                  <label className="field-label">Profile Picture</label>
                  <button
                    onClick={() => fileInputRef.current?.click()}
                    className="upload-pic-btn"
                  >
                    Upload New Picture
                  </button>
                </div>
                <div className="inline-edit-actions">
                  <button
                    onClick={handleSave}
                    className="btn-save-inline"
                  >
                    Save
                  </button>
                  <button
                    onClick={handleCancel}
                    className="btn-cancel-inline"
                  >
                    Cancel
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </aside>
  );
};

export default ProfileSidebar;