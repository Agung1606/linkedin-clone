import React from 'react'
import './index.scss'

export default function PostsCard({ post }) {
  return (
    <div className='posts-card'>
      <p className='name'>{post.userName}</p>
      <p className='timestamp'>{post.timeStamp}</p>
      <p className='status'>{post.status}</p>
    </div>
  )
}
