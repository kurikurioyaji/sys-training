import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Login.css';

function Login() {
  const [userId, setUserId] = useState('');
  const [userName, setUserName] = useState('');
  const navigate = useNavigate();

  const handleLogin = () => {
    localStorage.setItem('userId', userId);
    localStorage.setItem('userName', userName);
    navigate('/menu');
  };

  return (
    <div className="container">
      <div className="card">
        <h1>Login</h1>
        <input
          type="text"
          placeholder="User ID"
          value={userId}
          onChange={(e) => setUserId(e.target.value)}
        />
        <input
          type="text"
          placeholder="User Name"
          value={userName}
          onChange={(e) => setUserName(e.target.value)}
        />
        <button onClick={handleLogin}>Login</button>
      </div>
    </div>
  );
}

export default Login;
