import { onAuthStateChanged } from 'firebase/auth';
import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { auth } from '../firebaseConfig';
import Loader from '../components/common/Loader';
import ProfileComponent from '../components/ProfileComponent';

export default function Profile({ currentUser }) {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    onAuthStateChanged(auth, (res) => {
        if(!res?.accessToken) {
            navigate('/');
        } else {
            setLoading(false);
        }
    });
  }, []);
  return loading ? <Loader /> : <ProfileComponent currentUser={currentUser} />
}
