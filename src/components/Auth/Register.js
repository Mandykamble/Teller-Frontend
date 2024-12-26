import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { register } from '../../services/api';
import './Auth.css';

const Register = () => {
  const [userDetails, setUserDetails] = useState({
    name: '',
    email: '',
    password: '',
    role: 'Maker', // Default role
  });
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setUserDetails({ ...userDetails, [name]: value });
  };

  const handleRegister = async (e) => {
    e.preventDefault();
    try {
      await register(userDetails);
      navigate('/login'); // Navigate to login page after successful registration
    } catch (err) {
      setError('Registration failed. Please try again.');
    }
  };

  return (
    <div className="auth-container">
      <h1>Register</h1>
      <form onSubmit={handleRegister} className="auth-form">
        <input
          type="text"
          name="name"
          placeholder="Name"
          value={userDetails.name}
          onChange={handleInputChange}
          required
        />
        <input
          type="email"
          name="email"
          placeholder="Email"
          value={userDetails.email}
          onChange={handleInputChange}
          required
        />
        <input
          type="password"
          name="password"
          placeholder="Password"
          value={userDetails.password}
          onChange={handleInputChange}
          required
        />
        <select
          name="role"
          value={userDetails.role}
          onChange={handleInputChange}
          required
        >
          <option value="Maker">Maker</option>
          <option value="Checker">Checker</option>
          <option value="Authorizer">Authorizer</option>
        </select>
        <button type="submit">Register</button>
        {error && <p className="error-message">{error}</p>}
      </form>
      <p className="auth-footer">
        Already registered? <Link to="/login">Login here</Link>
      </p>
    </div>
  );
};

export default Register;
