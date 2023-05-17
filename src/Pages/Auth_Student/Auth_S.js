import React from 'react';
import { useState } from "react";
import "./Auth_S.css" ;
import login from "../../Assets/Images/login.png";
import signup from "../../Assets/Images/signup.png";
import PersonIcon from '@mui/icons-material/Person';
import LockIcon from '@mui/icons-material/Lock';
import GoogleIcon from '@mui/icons-material/Google';
import EnhancedEncryptionIcon from '@mui/icons-material/EnhancedEncryption';
import EmailIcon from '@mui/icons-material/Email';

function Auth() {
  const [isSignUpMode, setIsSignUpMode] = useState(false);

  const handleSignUpClick = () => {
    setIsSignUpMode(true);
  };

  const handleSignInClick = () => {
    setIsSignUpMode(false);
  };

  return (
    <>
    <div className={`container ${isSignUpMode ? 'sign-up-mode' : ''}`}>
      <div className="forms-container">
        <div className="signin-signup">
          <form action="API/index.html" className="sign-in-form">
            <h2 className="title">Sign In</h2>
            <div className="input-field">
              <i style={{marginTop:"5px", color:"black"}}><PersonIcon/></i>
              <input type="text" placeholder="Username" style={{marginTop:"-5px"}}/>
            </div>
            <div className="input-field">
              <i style={{marginTop:"4px", color:"black"}}><LockIcon/></i>
              <input type="password" placeholder="Password" style={{marginTop:"-5px"}} />
            </div>
            <button type="submit" className="btn">
              Sign In
            </button>
            <p className="social-text">Or Sign In with social platforms</p>
            <div className="social-media">
              <a href=" " className="social-icon">
              <i style={{marginTop:"5px"}}><GoogleIcon/></i>
              </a>
            </div>
          </form>

          <form action="#" className="sign-up-form">
            <h2 className="title">Sign Up</h2>
            <div className="input-field">
            <i style={{marginTop:"5px", color:"black"}}><PersonIcon/></i>
              <input type="text" name="Username" placeholder="Username" style={{marginTop:"-5px"}}/>
            </div>
            <div className="input-field">
              <i style={{marginTop:"5px", color:"black"}}><EmailIcon /></i>
              <input type="text" placeholder="Email" style={{marginTop:"-5px"}}/>
            </div>
            <div className="input-field">
            <i style={{marginTop:"4px", color:"black"}}><LockIcon/></i>
              <input type="password" placeholder="Password" style={{marginTop:"-5px"}}/>
            </div>
            <div className="input-field">
              <i style={{marginTop:"4px", color:"black"}}><EnhancedEncryptionIcon /></i>
              <input type="password" placeholder="Confirm Password" style={{marginTop:"-5px"}}/>
            </div>
            <button type="submit" className="btn">
              Sign Up
            </button>

            <p className="social-text">Or Sign Up with social platforms</p>
            <div className="social-media">
              <a href=" " className="social-icon">
              <i style={{marginTop:"5px"}}><GoogleIcon/></i>
              </a>
            </div>
          </form>
        </div>
      </div>

      <div className="panels-container">
        <div className="panel left-panel">
          <div className="content">
            <h3>New here?</h3>
            <p>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Mollitia
              deserunt sequi soluta adipisci molestiae minima pariatur sapiente
              ipsum ab vitae!
            </p>
            <button className="btn transparent" id="sign-up-btn" onClick={handleSignUpClick}>
              Sign Up
            </button>
          </div>

          <img src={signup} alt="" className="image" />
        </div>

        <div className="panel right-panel">
          <div className="content">
            <h3>One of us?</h3>
            <p>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Mollitia
              deserunt sequi soluta adipisci molestiae minima pariatur sapiente
              ipsum ab vitae!
            </p>
            <button className="btn transparent" onClick={handleSignInClick}>
              Sign In
            </button>
          </div>

          <img src={login} alt="" className="image" />
        </div>
      </div>
      
    </div>
    </>
  );
  }
export default Auth;