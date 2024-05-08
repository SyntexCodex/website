import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate, Link } from 'react-router-dom';

function Login() {
  const navigate = useNavigate();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  async function submit(e) {
    e.preventDefault();

    try {
      const response = await axios.post('http://localhost:8000/', {
        email,
        password,
      });

      if (response.data === 'exist') {
        navigate('/home', { state: { id: email } });
      } else if (response.data === 'notexist') {
        alert('User has not signed up');
      }
    } catch (error) {
      console.error('Error:', error);
      alert('Wrong details');
    }
  }

  return (
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', minHeight: '100vh', backgroundColor: '#2980b9', color: '#fff', padding: '20px' }}>
      <h1 style={{ marginBottom: '20px' }}>Society Connect Administration</h1>
      <div style={{ backgroundColor: '#fff', padding: '20px', borderRadius: '10px', boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)' }}>
        <h2>Login</h2>
        <form onSubmit={submit} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Email"
            style={{ marginBottom: '10px', padding: '5px', width: '300px' }}
          />
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Password"
            style={{ marginBottom: '10px', padding: '5px', width: '300px' }}
          />
          <input type="submit" value="Submit" style={{ padding: '5px 10px', cursor: 'pointer' }} />
        </form>
        <br />
        <p>OR</p>
        <br />
        <Link to="/signup" style={{ color: '#000' }}>Signup Page</Link>
      </div>
    </div>
  );
}

export default Login;
