import React, { useState } from "react";
import '../Sass/LoginComponents.scss'
import { LoginAPI, GoogleSignInAPI } from '../api/AuthAPI'
import LinkedinLogo from '../assets/linkedinLogo.png'
import GoogleButton from "react-google-button";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

export default function LoginComponent() {
  const navigate = useNavigate();
  const goToRegister = () => navigate('/register')

  const [credentials, setCredentials] = useState({});
  const login = async () => {
    try {
      let res = await LoginAPI(credentials.email, credentials.password);
      toast.success('Sign In to Linkedin');
    } catch (error) {
      console.log(error);
      toast.error('Please check your Credentials');
    }
  };

  const googleSignIn = async () => {
    let res = await GoogleSignInAPI();
    console.log(res);
  };

  return (
    <div className="login-wrapper">
      <img src={LinkedinLogo} className="linkedinLogo" />
      <div className="login-wrapper-inner">
        <h1 className="heading">Sign in</h1>
        <p className="sub-heading">Stay updated on your professional world</p>
        <div className="auth-inputs">
          <input
            onChange={(e) =>
              setCredentials({ ...credentials, email: e.target.value })
            }
            type="email"
            className="common-input"
            placeholder="Email or Phone"
          />
          <input
            onChange={(e) =>
              setCredentials({ ...credentials, password: e.target.value })
            }
            type="password"
            className="common-input"
            placeholder="Password"
          />
        </div>
        <button className="login-btn" onClick={login}>
          Sign in
        </button>
      </div>
      <hr className="hr-text" data-content="or" />
      <div className="google-btn-container">
        <GoogleButton
          label="Sign up with Google"
          onClick={googleSignIn}
        />
        <p className="go-to-signup">
          New to LinkedIn? <span className="join-now" onClick={goToRegister}>Join now</span>
        </p>
      </div>
    </div>
  );
}