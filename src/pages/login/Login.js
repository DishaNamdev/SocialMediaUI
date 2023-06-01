import React from 'react';
import { Link } from "react-router-dom";
import "./login.css";

function Login() {
  return (
    <div className='login'> 
      <div className="loginWrapper">
            <div className="loginLeft">
                <h3 className="loginLogo">LamaSocial</h3>
                <span className="loginDesc">Connect with friends and the world around you on Lamasocial....</span>
            </div>
            <div className="loginRight">
                <div className="loginBox">
                    <input type="Email" className="loginInput" />
                    <input type="Password" className="loginInput" />
                   <Link to="/"><div className="loginButton">Log In</div></Link> 
                    <span className="loginForgot">Forgot Password?</span>
                    <div className="loginRegisterButton">Create New Account</div>
                </div>
            </div>
      </div>
    </div>
  )
}

export default Login
