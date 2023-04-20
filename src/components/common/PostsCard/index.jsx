import React from 'react'
import './index.scss'
import { useNavigate } from 'react-router-dom'

export default function PostsCard({ post }) {
  const navigate = useNavigate();
  const goToProfile = () => {
    navigate('/profile', { state: {
      id: post?.userID,
      email: post.userEmail
    }})
  }

  return (
    <div className='posts-card'>
      <p onClick={goToProfile} className='name'>{post.userName}</p>
      <p className='timestamp'>{post.timeStamp}</p>
      <p className='status'>{post.status}</p>
    </div>
  )
}
