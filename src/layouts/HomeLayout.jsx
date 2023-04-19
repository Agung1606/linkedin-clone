import React, { useMemo, useState } from 'react'
import Topbar from '../components/common/Topbar'
import Home from '../Pages/Home'
// api
import { getCurrentUser } from '../api/FirestoreAPI'

export default function HomeLayout() {
  const [currentUser, setCurrentUser] = useState({});

  useMemo(() => {
    getCurrentUser(setCurrentUser)
  }, []);

  return (
    <div>
        <Topbar />
        <Home currentUser={currentUser} />
    </div>
  )
}
