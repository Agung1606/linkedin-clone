import React, { useState, useMemo } from 'react'
import './index.scss'
import PostsCard from '../PostsCard';
import { useLocation } from 'react-router-dom';
// api
import { getSinglePostStatus, getSingleUser } from '../../../api/FirestoreAPI';
import { uploadImg } from '../../../api/ImageUpload';
// icons
import { HiOutlinePencil } from 'react-icons/hi'

export default function ProfileCard({ currentUser, handleIsEdit }) {
  const location = useLocation();
  // hooks
  const [allPostStatus, setAllPostStatus] = useState([]);
  const [currentProfile, setCurrentProfile] = useState({});
  const [currentImg, setCurrentImg] = useState({});

  // function
  const getImage = (e) => {
    setCurrentImg(e.target.files[0]);
  };

  const uploadImage = () => {
    uploadImg(currentImg)
  };
  useMemo(() => {
    if(location?.state?.id) getSinglePostStatus(setAllPostStatus, location?.state?.id)
    if(location?.state?.email) getSingleUser(setCurrentProfile, location?.state?.email)
  })

  return (
    <>
      <div className="profile-card">
        <input type="file" onChange={getImage} />
        <button onClick={uploadImage}>Upload</button>
        {currentUser.id === location?.state?.id && (
          <div className="edit-btn">
            <HiOutlinePencil
              className="edit-icon"
              onClick={handleIsEdit}
              size={20}
            />
          </div>
        )}
        <div className="profile-info">
          <div>
            <h3 className="username">
              {Object.values(currentProfile).length === 0
                ? currentUser.name
                : currentProfile?.name}
            </h3>
            <p className="headline">
              {Object.values(currentProfile).length === 0
                ? currentUser.headline
                : currentProfile?.headline}
            </p>
            <p className="location">
              {Object.values(currentProfile).length === 0
                ? `${currentUser?.city}, ${currentUser?.country}`
                : `${currentProfile?.city}, ${currentProfile?.country}`}
            </p>
            <a
              className="website"
              target="_blank"
              href={
                Object.values(currentProfile).length === 0
                  ? currentUser.website
                  : currentProfile?.website
              }
            >
              {Object.values(currentProfile).length === 0
                ? currentUser.website
                : currentProfile?.website}
            </a>
          </div>

          <div className="right-info">
            <p className="college">
              {Object.values(currentProfile).length === 0
                ? currentUser.college
                : currentProfile?.college}
            </p>
            <p className="company">
              {Object.values(currentProfile).length === 0
                ? currentUser.company
                : currentProfile?.company}
            </p>
          </div>
        </div>
        {/* about */}
        <p className="about-me">
          {Object.values(currentProfile).length === 0
            ? currentUser?.about
            : currentProfile?.about}
        </p>
        {/* skill */}
        <p className="skills">
          {(currentUser?.skills || currentProfile?.skills) && (
            <span className="skill-label">Skills: </span>
          )}
          {Object.values(currentProfile).length === 0
            ? currentUser.skills
            : currentProfile?.skills}
        </p>
      </div>
      {/* user posts */}
      <div className="post-status-main">
        {allPostStatus
          .filter(
            (item) => item.userEmail === localStorage.getItem("userEmail")
          )
          .map((post) => (
            <PostsCard key={post.id} post={post} />
          ))}
      </div>
    </>
  );
}
