import React, { useState } from 'react';
import axios from 'axios';
import '../style/Signup.css'; 
import { useNavigate } from 'react-router-dom';


function Signup() {
  const navigate = useNavigate();
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleFullNameChange = (event) => {
    setFullName(event.target.value);
  };

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    const passwordRegex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[!@#$%^&*])(?!.*\s).{8,}$/;

    if (!password.match(passwordRegex)) {
      alert(
        'Password must be at least 8 characters long and include at least one lowercase letter, one uppercase letter, one digit, and one special character (!@#$%^&*)'
      );
      return; 
    }

    try {
      
      const existingUserResponse = await axios.get(`http://localhost:3000/users?email=${email}`);

      if (existingUserResponse.data.length > 0) {
        alert('This email is already registered. Please use a different email.');
        return; 
      }

      const response = await axios.post('http://localhost:3000/users', {
        fullName,
        email,
        password
      });

      console.log('User signed up:', response.data);
      alert('Sign-up successful! Please log in.');
      navigate('../login');
    } catch (error) {
      console.error('Sign-up error:', error);
      if (error.response) {
        console.error('Response data:', error.response.data);
      }
    }
  };

  return (
    <div className="signup-container">
      <div className="signup-background"></div>
      <form className="signup-form" onSubmit={handleSubmit}>
        <h2>Sign Up</h2>
        <div className="form-group">
          <label>Full Name</label>
          <input
            type="text"
            value={fullName}
            onChange={handleFullNameChange}
            required
          />
        </div>
        <div className="form-group">
          <label>Email</label>
          <input
            type="email"
            value={email}
            onChange={handleEmailChange}
            required
          />
        </div>
        <div className="form-group">
          <label>Password</label>
          <input
            type="password"
            value={password}
            onChange={handlePasswordChange}
            required
          />
        </div>
        <button type="submit" className="submit-button">
  <span></span>
  <span></span>
  <span></span>
  <span></span>
  Sign Up
</button>
      </form>
    </div>
  );
}

export default Signup;