import React from "react";

const ContactUs = () => {
  const containerStyle = {
    padding: '40px 20px',
    maxWidth: '600px',
    margin: '0 auto',
    fontFamily: 'Arial, sans-serif'
  };

  const titleStyle = {
    fontSize: '2rem',
    color: '#333',
    marginBottom: '20px',
    textAlign: 'center'
  };

  const contactInfoStyle = {
    marginBottom: '30px'
  };

  const contactItemStyle = {
    margin: '15px 0',
    padding: '15px',
    background: '#f5f5f5',
    borderRadius: '8px',
    fontSize: '1rem'
  };

  const formStyle = {
    display: 'flex',
    flexDirection: 'column',
    gap: '15px'
  };

  const inputStyle = {
    padding: '12px',
    border: '1px solid #ddd',
    borderRadius: '5px',
    fontSize: '1rem'
  };

  const buttonStyle = {
    padding: '12px 20px',
    background: '#007bff',
    color: 'white',
    border: 'none',
    borderRadius: '5px',
    fontSize: '1rem',
    cursor: 'pointer'
  };

  return (
    <div style={containerStyle}>
      <h1 style={titleStyle}>Contact Us</h1>
      
      <div style={contactInfoStyle}>
        <div style={contactItemStyle}>
          <strong>Email:</strong> suryabhan283808@email.com
        </div>
        
        <div style={contactItemStyle}>
          <strong>Phone:</strong> +91 7987292878
        </div>
      </div>

      <form style={formStyle}>
        <input 
          type="text" 
          placeholder="Your Name" 
          style={inputStyle}
        />
        <input 
          type="email" 
          placeholder="Your Email" 
          style={inputStyle}
        />
        <textarea 
          placeholder="Your Message" 
          rows="4" 
          style={inputStyle}
        />
        <button 
          type="submit" 
          style={buttonStyle}
        >
          Send Message
        </button>
      </form>
    </div>
  );
};

export default ContactUs;
