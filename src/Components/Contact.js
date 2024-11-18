import React from 'react';
import './Contact.css';

const Contact = () => {
  return (
    <div className="contact-container">
      {/* Header Section */}
      <div className="contact-header">
        <h1>Contact Us</h1>
        <p>We're here to assist you with your inquiries and provide the best service possible.</p>
      </div>

      <div className="contact-content">
        {/* Left Grid Section */}
        <div className="contact-grid">
          <div className="grid-item">
            <h2>Residential for Greenergy</h2>
            <p>Learn how Greenergy can power your home with clean and renewable energy solutions.</p>
          </div>
          <div className="grid-item">
            <h2>Greenergy for Business</h2>
            <p>Discover tailored solutions for businesses seeking sustainable energy systems.</p>
          </div>
          <div className="grid-item">
            <h2>Customer Care</h2>
            <p>Email: support@greenergysolar.ph</p>
            <p>Phone: +63 912 345 6789</p>
          </div>
          <div className="grid-item">
            <h2>Investors</h2>
            <p>Partner with us in creating a sustainable future.</p>
            <button className="partner-btn">Become Our Partner</button>
          </div>
        </div>

        {/* Right Map Section */}
        <div className="contact-map">
          <h2>Main Office Location</h2>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3875.895991737563!2d121.04434711531187!3d14.609620689802223!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3397b7cdaaa3f5f1%3A0x837c21d75b2f170c!2sOrtigas%20Center%2C%20Pasig%2C%20Metro%20Manila%2C%20Philippines!5e0!3m2!1sen!2sph!4v1699871542025!5m2!1sen!2sph"
            width="100%"
            height="300"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </div>
    </div>
  );
};

export default Contact;
