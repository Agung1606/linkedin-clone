import React, { useState } from 'react'
import LinkedinLogo from '../assets/linkedinLogo.png'
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import '../Sass/LoginComponent.scss';
import { RegisterAPI } from '../api/AuthAPI';

export default function RegisterComponent() {
    const navigate = useNavigate();
    const goToLogin = () => navigate('/')
    const goToHome = () => navigate('/home');

    const [loading, setLoading] = useState(false)
    const [ credentials, setCredentials ] = useState({});
    const register = async () => {
        setLoading(true)
        try {
            let res = await RegisterAPI(credentials.email, credentials.password);
            toast.success('Account Created!');
            goToHome()
        } catch (error) {
            console.log(error);
            toast.error(error.message.replace("Firebase: Error", ""));
          }
        setLoading(false)
    };

    return (
      <div className="login-wrapper">
        <img src={LinkedinLogo} className="linkedinLogo" />
        <div className="login-wrapper-inner">
          <h1 className="heading">Make the most of your professional life</h1>
          <div className="auth-inputs">
            <input
              onChange={(e) =>
                setCredentials({ ...credentials, name: e.target.value })
              }
              type="text"
              className="common-input"
              placeholder="Your Name"
            />
            <input
              onChange={(e) =>
                setCredentials({ ...credentials, email: e.target.value })
              }
              type="email"
              className="common-input"
              placeholder="Email or phone number"
            />
            <input
              onChange={(e) =>
                setCredentials({ ...credentials, password: e.target.value })
              }
              type="password"
              className="common-input"
              placeholder="Password (6 or more characters)"
            />
          </div>
          <button onClick={register} className='login-btn'>
            {loading ? "loading..." : "Agree & Join"}
          </button>
        </div>
        <hr className='hr-text' data-content='or' />
        <div className='google-btn-container'>
            <p className='go-to-signup'>
                Already on LinkedIn?{" "}
                <span className='join-now' onClick={goToLogin}>
                    Sign in
                </span>
            </p>
        </div>
      </div>
    );
}
