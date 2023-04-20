import React, { useState } from "react";
import "./index.scss";
// api
import { editProfile } from '../../../api/FirestoreAPI'

export default function ProfileEdit({ currentUser, handleIsEdit }) {
  const [editInputs, setEditInputs] = useState({});
  const getInput = (e) => {
    let { name, value } = e.target;
    let input = { [name]: value };
    setEditInputs({ ...editInputs, ...input });
  };

  const updateProfileData = async () => {
    await editProfile(currentUser?.id, editInputs);
    await handleIsEdit()
  };

  return (
    <div className="profile-edit-card">
      <div className="edit-btn">
        <button onClick={handleIsEdit}>GO back</button>
      </div>
      <div className="profile-edit-inputs">
        {/* name */}
        <input
          onChange={getInput}
          className="common-input"
          type="text"
          placeholder="Name"
          name="name"
        />
        {/* headline */}
        <input
          onChange={getInput}
          className="common-input"
          type="text"
          placeholder="Headline"
          name="headline"
        />
        {/* location */}
        <input
          onChange={getInput}
          className="common-input"
          type="text"
          placeholder="Location"
          name="location"
        />
        {/* company */}
        <input
          onChange={getInput}
          className="common-input"
          type="text"
          placeholder="Company"
          name="company"
        />
        {/* college */}
        <input
          onChange={getInput}
          className="common-input"
          type="text"
          placeholder="College"
          name="college"
        />
      </div>
      <div className="save-btn-container">
        <button onClick={updateProfileData} className="save-btn">Save</button>
      </div>
    </div>
  );
}
