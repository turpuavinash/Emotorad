import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../styles/Register.css'; // Import your CSS file

const Register = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleRegister = (e) => {
    e.preventDefault();

    // Simple validation (optional)
    if (!name || !email || !password) {
      alert("Please fill in all fields");
      return;
    }

    // Mock registration process
    console.log("Registered with:", { name, email, password });

    // Redirect to the login page after registration
    navigate('/');
  };

  return (
    <div className="register-container">
      <form onSubmit={handleRegister} className="register-form">
        <label htmlFor="name">Name</label>
        <input
          type="text"
          id="name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />

        <label htmlFor="email">Email Address</label>
        <input
          type="email"
          id="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />

        <label htmlFor="password">Password</label>
        <input
          type="password"
          id="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />

        <button type="submit" className="register-button">Register</button>
      </form>
    </div>
  );
};

export default Register;
