// src/Components/GetQuote.js
import React, { useState } from 'react';
import './GetQuote.css';

const GetQuote = () => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    location: '',
    inquiry: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Your quote request has been submitted!');
    // Add the code to handle form submission (e.g., send data to API or backend)
  };

  return (
    <div className="quote-container">
      <h1>Get a Custom Quote</h1>
      <p>Provide the details of your project, and we’ll send you a personalized quote.</p>

      <form onSubmit={handleSubmit} className="quote-form">
        <div className="form-group">
          <label htmlFor="name">Your Name</label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="Enter your full name"
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="phone">Your Phone Number</label>
          <input
            type="tel"
            id="phone"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            placeholder="Enter your phone number"
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="email">Your Email</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="Enter your email address"
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="location">Your Location</label>
          <input
            type="text"
            id="location"
            name="location"
            value={formData.location}
            onChange={handleChange}
            placeholder="Enter your location"
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="inquiry">Your Inquiry</label>
          <textarea
            id="inquiry"
            name="inquiry"
            value={formData.inquiry}
            onChange={handleChange}
            placeholder="Describe your inquiry"
            required
          ></textarea>
        </div>

        <button type="submit" className="submit-btn">Get Quote</button>
      </form>
    </div>
  );
};

export default GetQuote;
