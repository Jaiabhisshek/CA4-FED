import React, { useState } from 'react';
import './Form.css'

const Form = ({ onRegister }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    repeatPassword: '',
  });

  const [formErrors, setFormErrors] = useState({
    name: '',
    email: '',
    password: '',
    repeatPassword: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });


    setFormErrors({
      ...formErrors,
      [name]: '',
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    const validationErrors = validateForm();
    if (validationErrors) {
      
      setFormErrors(validationErrors);
    } else {
      
      onRegister(formData);
      alert('Registration Successful');
    }
  };

  const validateForm = () => {
 
    const errors = {};

    if (formData.name.length < 3 || formData.name.length > 30) {
      errors.name = 'The name should not be greater than 3 characters and less than 30 characters.';
    }

    if (!formData.email.includes('@')) {
      errors.email = 'Invalid email address';
    }

    if (formData.password.length < 10 || !formData.password.includes('@')) {
      errors.password = 'Password must be at least 10 characters and contain @';
    }

    if (formData.password !== formData.repeatPassword) {
      errors.repeatPassword = 'Passwords do not match';
    }


    return Object.keys(errors).length > 0 ? errors : null;
  };

  return (
    <div className='form-card'>
      <h2>Register</h2>
      <form onSubmit={handleSubmit}>
        <div className='name'>
          <label>Name:</label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            className='i1'
          />
          {formErrors.name && <div className='error-message'>{formErrors.name}</div>}
        </div>
        <div className='name'>
          <label>Email:</label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            className='i2'
          />
          {formErrors.email && <div className='error-message'>{formErrors.email}</div>}
        </div>
        <div className='name'>
          <label>Password:</label>
          <input
            type="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            className='i3'
          />
          {formErrors.password && <div className='error-message'>{formErrors.password}</div>}
        </div>
        <div className='name'>
          <label className='l4'>Repeat Password:</label>
          <input
            type="password"
            name="repeatPassword"
            value={formData.repeatPassword}
            onChange={handleChange}
          />
          {formErrors.repeatPassword && <div className='error-message'>{formErrors.repeatPassword}</div>}
        </div>
        <div>
          <button type="submit" >
            Sign up
          </button>
        </div>
      </form>
    </div>
  );
};

export default Form;