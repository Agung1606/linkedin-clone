import React, { useMemo, useState } from 'react'
import './index.scss'
import { useNavigate } from 'react-router-dom'
import LikeButton from '../LikeButton';
import { getCurrentUser } from '../../../api/FirestoreAPI'

export default function PostsCard({ post }) {
  const navigate = useNavigate();
  const goToProfile = () => {
    navigate('/profile', { state: {
      id: post?.userID,
      email: post.userEmail
    }})
  }

  const [currentUser, setCurrentUser] = useState({});
  useMemo(() => {
    getCurrentUser(setCurrentUser)
  }, []);

  return (
    <div className='posts-card'>
      <p onClick={goToProfile} className='name'>{post.userName}</p>
      <p className='timestamp'>{post.timeStamp}</p>
      <p className='status'>{post.status}</p>

      <LikeButton userID={currentUser?.id} postID={post.id} currentUser={currentUser} />
    </div>
  )
}
