import React, { useState } from "react";
import "./index.scss";
// api
import { editProfile } from '../../../api/FirestoreAPI'
// icons
import { AiOutlineClose } from "react-icons/ai";

export default function ProfileEdit({ currentUser, handleIsEdit }) {
  const [editInputs, setEditInputs] = useState(currentUser);
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
        <AiOutlineClose onClick={handleIsEdit} size={20} />
      </div>
      <div className="profile-edit-inputs">
        {/* name */}
        <label htmlFor="name">Name</label>
        <input
          onChange={getInput}
          className="common-input"
          type="text"
          placeholder="Name"
          name="name"
          id="name"
          value={editInputs.name}
        />
        {/* headline */}
        <label htmlFor="headline">Headline</label>
        <input
          onChange={getInput}
          className="common-input"
          type="text"
          placeholder="Headline"
          name="headline"
          id="headline"
          value={editInputs.headline}
        />
        {/* country */}
        <label htmlFor="country">Country</label>
        <input
          onChange={getInput}
          className="common-input"
          type="text"
          placeholder="Country"
          name="country"
          id="country"
          value={editInputs.country}
        />
        {/* city */}
        <label htmlFor="city">City</label>
        <input
          onChange={getInput}
          className="common-input"
          type="text"
          placeholder="City"
          name="city"
          id="city"
          value={editInputs.city}
        />
        {/* company */}
        <label htmlFor="company">Company</label>
        <input
          onChange={getInput}
          className="common-input"
          type="text"
          placeholder="Company"
          name="company"
          id="company"
          value={editInputs.company}
        />
        {/* industry */}
        <label htmlFor="industry">Industry</label>
        <input
          onChange={getInput}
          className="common-input"
          type="text"
          placeholder="Industry"
          name="industry"
          id="industry"
          value={editInputs.industry}
        />
        {/* college */}
        <label htmlFor="college">College</label>
        <input
          onChange={getInput}
          className="common-input"
          type="text"
          placeholder="College"
          name="college"
          id="college"
          value={editInputs.college}
        />
        {/* website */}
        <label htmlFor="website">Website</label>
        <input
          onChange={getInput}
          className="common-input"
          type="text"
          placeholder="Website"
          name="website"
          id="website"
          value={editInputs.website}
        />
        {/* about*/}
        <label htmlFor="about">About</label>
        <textarea
          className="common-textarea"
          placeholder="About"
          name="about"
          id="about"
          cols="30"
          rows="5"
          value={editInputs.about}
          onChange={getInput}
        />
        {/* skills */}
        <label htmlFor="skills">Skills</label>
        <input
          onChange={getInput}
          className="common-input"
          type="text"
          placeholder="Skills"
          name="skills"
          id="skills"
          value={editInputs.skills}
        />
      </div>
      <div className="save-btn-container">
        <button onClick={updateProfileData} className="save-btn">
          Save
        </button>
      </div>
    </div>
  );
}
