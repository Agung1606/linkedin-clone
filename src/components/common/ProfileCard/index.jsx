import React from 'react'
import './index.scss'

export default function ProfileCard({ currentUser, handleIsEdit }) {
  return (
    <div className="profile-card">
      <div className="edit-btn">
        <button onClick={handleIsEdit}>Edit</button>
      </div>
      <h3 className="username">{currentUser.name}</h3>
      <p className="userEmail">{currentUser.email}</p>
    </div>
  );
}
