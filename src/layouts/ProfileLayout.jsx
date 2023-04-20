import React, { useMemo, useState } from 'react'
import Topbar from '../components/common/Topbar'
import Profile from '../Pages/Profile'
// api
import { getCurrentUser } from '../api/FirestoreAPI'

export default function ProfileLayout() {
  const [currentUser, setCurrentUser] = useState({});

  useMemo(() => {
    getCurrentUser(setCurrentUser)
  }, []);
  return (
    <div>
        <Topbar />
        <Profile currentUser={currentUser} />
    </div>
  )
}
