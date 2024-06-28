// SignInForm.jsx
import React, { useState } from 'react';

const SignInForm = () => {
  const [formData, setFormData] = useState({
    username: '',
    password: '',
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add authentication logic here
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Username/Email"
        name="username"
        value={formData.username}
        onChange={handleInputChange}
      />
      <input
        type="password"
        placeholder="Password"
        name="password"
        value={formData.password}
        onChange={handleInputChange}
      />
      <button type="submit">Sign In</button>
    </form>
  );
};

export default SignInForm;