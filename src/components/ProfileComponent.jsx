import React, { useState } from 'react'
import ProfileCard from './common/ProfileCard'
import ProfileEdit from './common/ProfileEdit'

export default function ProfileComponent({ currentUser }) {
  const [isEdit, setIsEdit] = useState(false)
  const handleIsEdit = () => setIsEdit(!isEdit)

  return (
    <div>
      {isEdit ? (
        <ProfileEdit currentUser={currentUser} handleIsEdit={handleIsEdit} />
      ) : (
        <ProfileCard currentUser={currentUser} handleIsEdit={handleIsEdit} />
      )}
    </div>
  );
}
