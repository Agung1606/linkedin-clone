import React, { useState, useMemo } from 'react'
import './index.scss'
import PostsCard from '../PostsCard';
import { useLocation } from 'react-router-dom';
// api
import { getSinglePostStatus, getSingleUser } from '../../../api/FirestoreAPI';
// icons
import { HiOutlinePencil } from 'react-icons/hi'

export default function ProfileCard({ currentUser, handleIsEdit }) {
  const location = useLocation();
  // all post status
  const [allPostStatus, setAllPostStatus] = useState([]);
  // current profile
  const [currentProfile, setCurrentProfile] = useState({});

  useMemo(() => {
    if(location?.state?.id) getSinglePostStatus(setAllPostStatus, location?.state?.id)
    if(location?.state?.email) getSingleUser(setCurrentProfile, location?.state?.email)
  })

  return (
    <>
      <div className="profile-card">
        <div className="edit-btn">
          <HiOutlinePencil onClick={handleIsEdit} size={20} />
        </div>
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
            <p>{currentUser.location}</p>
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
