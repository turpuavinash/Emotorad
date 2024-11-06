// src/components/AddProfile.js
import React, { useState } from 'react';
import Modal from './Modal'; // Import the Modal component

const AddProfile = () => {
  const [showModal, setShowModal] = useState(false);
  const [activeTab, setActiveTab] = useState('basic'); // Track the active tab

  const toggleModal = () => setShowModal(!showModal);

  return (
    <>
      <button className="add-profile-btn" onClick={toggleModal}>Add Profile</button>
      <Modal showModal={showModal} closeModal={toggleModal}>
        <div className="tabs">
          <button
            className={`tab ${activeTab === 'basic' ? 'active' : ''}`}
            onClick={() => setActiveTab('basic')}
          >
            Basic
          </button>
          <button
            className={`tab ${activeTab === 'social' ? 'active' : ''}`}
            onClick={() => setActiveTab('social')}
          >
            Social
          </button>
        </div>
        
        {/* Basic Form Fields */}
        {activeTab === 'basic' && (
          <div className="basic-inputs">
            <input type="text" placeholder="Eg.John Doe" />
            <input type="email" placeholder="Eg.John@gmail.com" />
            <input type="tel" placeholder="Eg.9187617160" />
            <button className="btn next">Next</button>
          </div>
        )}

        {/* Social Input Fields */}
        {activeTab === 'social' && (
          <div className="social-inputs">
            <input type="text" placeholder="Instagram Link" />
            <input type="text" placeholder="YouTube Link" />
          </div>
        )}
      </Modal>
    </>
  );
};

export default AddProfile;
