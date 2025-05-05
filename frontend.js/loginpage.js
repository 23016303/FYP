// frontend/src/pages/LoginPage.js
import React, { useState } from 'react';
import axios from 'axios';

function LoginPage() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = async () => {
    try {
      const res = await axios.post('http://localhost:5000/api/auth/login', { username, password });
      localStorage.setItem('token', res.data.token);
      window.location = '/dashboard';
    } catch (err) {
      alert('Login failed');
    }
  };

  return (
    <div className='min-h-screen flex flex-col items-center justify-center bg-gray-100'>
      <input type='text' placeholder='Username' value={username} onChange={(e) => setUsername(e.target.value)} className='mb-2 p-2 border rounded' />
      <input type='password' placeholder='Password' value={password} onChange={(e) => setPassword(e.target.value)} className='mb-2 p-2 border rounded' />
      <button onClick={handleLogin} className='bg-blue-500 text-white px-4 py-2 rounded'>Login</button>
    </div>
  );
}

export default LoginPage;