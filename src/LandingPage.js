import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom'; 
import './LandingPage.css';

const imageUrls = [
  './GhanaCardInternetBanking.jpg',
  './slide-1.jpg',
  './slide-2.jpg',
  './slide-3.jpg',
  './slide-4.jpg',
  './slide-5.jpg',
  './slide-6.jpg',
];

const LandingPage = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [loginType, setLoginType] = useState('access-code');
  const [isNextClicked, setIsNextClicked] = useState(false); 

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % imageUrls.length);
    }, 6000);

    return () => clearInterval(interval);
  }, []);

  const handleDashClick = (index) => {
    setCurrentImageIndex(index);
  };

  const handleNextClick = (e) => {
    e.preventDefault();
    setIsNextClicked(true);
  };

  const handleGoBackClick = (e) => {
    e.preventDefault();
    setIsNextClicked(false); 
    setLoginType('access-code'); 
  };

  return (
    <div>
      <div className='header'>
        <img src='./logo.png' alt='logo' />
      </div>
      <div className='body'>
        <div className='middle section'>
          <div className='slideshow'>
            <div className='image-container'>
              <img
                src={imageUrls[currentImageIndex]}
                alt='slide'
                className='pictures'
              />
              <div className='dashes'>
                {imageUrls.map((_, index) => (
                  <span
                    key={index}
                    className={`dash ${currentImageIndex === index ? 'active' : ''}`}
                    onClick={() => handleDashClick(index)}
                  ></span>
                ))}
              </div>
            </div>
            <div>
              <div className='right-section'>
                <div className='right-section-text'>
                  {!isNextClicked ? (
                    <p>
                      Choose your login type and provide the details to proceed
                    </p>
                  ) : (
                    <span className="pin-instructions"><p >
                      {loginType === 'pin-token'
                        ? 'Enter your pin and hardware token. After, click on the login button to complete the login process.'
                        : ''}
                    </p></span>
                  )}
                </div>
                <form>
                  {!isNextClicked ? (
                    <>
                      <select
                        id='login-type'
                        name='login-type'
                        onChange={(e) => setLoginType(e.target.value)}
                        value={loginType} 
                      >
                        <option value='access-code'>Login with Access Code</option>
                        <option value='pin-token'>Login with Pin + Token</option>
                      </select>

                      {loginType === 'access-code' ? (
                        <input type='text' placeholder='Access Code' />
                      ) : (
                        <input type='text' placeholder='Account Number' />
                      )}

                      <button type='submit' onClick={handleNextClick}>
                        Next
                      </button>
                    </>
                  ) : (
                    <>
                      {loginType === 'pin-token' ? (
                        <>
                          <input type='text' placeholder='Pin and Token' />
                        </>
                      ) : (
                        <>
                          <input type='text' placeholder='Username' />
                          <input type='password' placeholder='Password' />
                        </>
                      )}
                      <button type='submit' className='blue-button'>
                        Log In
                      </button>
                      <div className='forgetpassword'>
                        <a href='/go-back' onClick={handleGoBackClick}>
                          Go back
                        </a>
                      </div>
                    </>
                  )}
                </form>

                {!isNextClicked && loginType === 'access-code' && (
        <div className='forgetpassword'>
          <Link to='/forgot-password'>Forgot Password</Link>
        </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className='whitespace'>
        <div className='whitespace-text'>
          <p>
            Access your balances and carry out account transactions on a real-time basis
            anywhere in the world.
          </p>
          <p>
            Enjoy the convenience of an efficient and secure 24 hour internet banking
            experience.
          </p>
        </div>
      </div>
      <div className='whitespace-links'>
        <div className='corporatelink'>
          <a href='/corporate-internet-banking'>Corporate Internet Banking</a>
        </div>
        <div>
          <a href='/scam-alert'>Scam Alert</a> |{' '}
          <a href='https://www.zenithbank.com.gh/tools-resources/privacy-policy'>Privacy Policy</a>
        </div>
      </div>
    </div>
  );
};

export default LandingPage;
