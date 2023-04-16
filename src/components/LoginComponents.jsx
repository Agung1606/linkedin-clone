import React, { useState } from "react";
// style
import '../Sass/LoginComponents.scss'
// api
import { LoginAPI } from '../api/AuthAPI'
// logo
import LinkedinLogo from '../assets/linkedinLogo.png'

export default function LoginComponents() {
  const [credentials, setCredentials] = useState({});
  const login = async () => {
    try {
      let res = await LoginAPI(credentials.email, credentials.password);
      console.log(res);
    } catch (error) {
      console.log(error);
    }
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
        <button className="login-btn" onClick={login}>Sign in</button>
      </div>
      <hr className="hr-text" data-content="or" />
      <div className="google-btn-container">
          <p className="go-to-signup">
            New to LinkedIn?{" "}
            <span className="join-now">
              Join now
            </span>
          </p>
      </div> 
    </div>
  );
}