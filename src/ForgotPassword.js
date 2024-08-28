import React from 'react';
import './ForgotPassword.css';

const ForgotPassword = () => {
  return (
    <div>
      <div className="header2">
        <div className="logo-container">
          <img src='./logo.png' alt='logo' className="logo" />
          <a href='/' className="back-to-login">Back to Login</a>
        </div>
      </div>
      <div className='lowerheader'>
      </div>
      <div className='resetpassword-container'>
        <h1 className='resetpassword'>Reset Password</h1>
        <div className='form-container'>
          <label className='form-label' htmlFor='account-number'>Account Number</label>
          <input type='text' id='account-number' className='form-input' placeholder='Enter one of your account numbers' />

          <label className='form-label' htmlFor='access-code'>Access Code</label>
          <input type='text' id='access-code' className='form-input' placeholder='Access Code' />

          <button className='submit-button'>Submit</button>
        </div>
      </div>
    </div>
  );
};

export default ForgotPassword;
