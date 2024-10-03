import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from '../utils/firebase';
import '../styles/Login.css';

const LoginPage = () => {
  const [userEmail, setUserEmail] = useState('');
  const [userPassword, setUserPassword] = useState('');
  const navigateTo = useNavigate();

  const handleUserLogin = async (event) => {
    event.preventDefault();
    try {
      await signInWithEmailAndPassword(auth, userEmail, userPassword);
      navigateTo('/dashboard');
    } catch (error) {
      alert('Login failed: ' + error.message);
    }
  };

  return (
    <div className="login-wrapper">
      <form className="login-form" onSubmit={handleUserLogin}>
        <h2 className="login-title">Sign In</h2>
        <div className="input-group">
          <label>Email</label>
          <input type="email" value={userEmail} onChange={(e) => setUserEmail(e.target.value)} required />
        </div>
        <div className="input-group">
          <label>Password</label>
          <input type="password" value={userPassword} onChange={(e) => setUserPassword(e.target.value)} required />
        </div>
        <button className="login-btn" type="submit">Login</button>
        <div className="signup-redirect">
          <span onClick={() => navigateTo('/signup')}>SignUp</span>
        </div>
      </form>
    </div>
  );
};

export default LoginPage;
