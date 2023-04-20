import React, { useMemo, useState } from 'react'
import './index.scss'
import { LogoutAPI } from '../../../api/AuthAPI'
import { getCurrentUser } from '../../../api/FirestoreAPI'
import { useNavigate } from 'react-router-dom'
import Button from '../Button'

export default function ProfilePopup() {
  const [currentUser, setCurrentUser] = useState({});
  useMemo(() => {
    getCurrentUser(setCurrentUser)
  }, []);

  const navigate = useNavigate();
  const goToProfile = () => {
    navigate("/profile", {
      state: {
        id: currentUser?.id,
      },
    });
  };

  return (
    <div className='popup-card'>
      <p className='name'>{currentUser?.name}</p>
      <p className='headline'>{currentUser?.headline}</p>
      <Button 
        title="View Profile"
        onClick={goToProfile}
      />
      <Button title="Log out" onClick={LogoutAPI} />
    </div>
  )
}
