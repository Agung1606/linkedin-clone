import React from 'react'
import PostUpdate from './common/PostUpdate'

export default function HomeComponent({ currentUser }) {
  return (
    <div>
      <PostUpdate currentUser={currentUser} />
    </div>
  );
}
