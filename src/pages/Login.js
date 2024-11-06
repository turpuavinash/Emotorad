import React from 'react';
import { GoogleLogin } from 'react-google-login';
import { useNavigate } from 'react-router-dom';
import '../styles/Login.css'; // Import your CSS file
import axios from 'axios'; // Import axios to make API calls
import { FaInstagram, FaFacebook, FaGithub, FaLinkedin } from 'react-icons/fa';


const Login = () => {
  const navigate = useNavigate();

  const handleGoogleSuccess = async (response) => {
    const tokenId = response.tokenId;
    try {
      const res = await axios.post('http://127.0.0.1:5000/auth/google-login', { token: tokenId });
      if (res.status === 200) {
        navigate('/dashboard'); // Redirect to the dashboard
      }
    } catch (error) {
      console.error('Error during Google login:', error);
    }
  };
  

  const handleGoogleFailure = (response) => {
    console.error("Google Login failed", response);
  };

  // Function to navigate to the Register page
  const goToRegister = () => {
    navigate('/register');
  };

  return (
    <div className="login-container">
      <div className="hero-section">
        <h1>Welcome to Emotorad</h1>
      </div>

      <div className="login-form-container">
        <div className="login-form">
          <header className="login-header">
            <div className="logo">Emotorad</div>
            <h2>Sign In</h2>
          </header>

          <form className="login-form">
            <label htmlFor="email">Email Address</label>
            <input type="email" id="email" required />

            <label htmlFor="password">Password</label>
            <input type="password" id="password" required />

            <button type="submit" className="sign-in-button">Sign In</button>
            <p><a href="/forgot-password">Forgot password?</a></p>
            <p>Don't have an account? <span onClick={goToRegister} className="register-link">Register here</span></p>
          </form>

          <div className="social-login">
            <GoogleLogin
              clientId="246592884210-7m0hsqf7hptc915lgbvur925id00vvu2.apps.googleusercontent.com"
              buttonText="Login with Google"
              onSuccess={handleGoogleSuccess}
              onFailure={handleGoogleFailure}
              cookiePolicy={'single_host_origin'}
            />
          </div>

          
<footer className="login-footer">
  <p>Follow us on:</p>
  <div className="social-media-icons">
    <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">
      <FaInstagram className="icon" />
    </a>
    <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">
      <FaFacebook className="icon" />
    </a>
    <a href="https://www.github.com" target="_blank" rel="noopener noreferrer">
      <FaGithub className="icon" />
    </a>
    <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer">
      <FaLinkedin className="icon" />
    </a>
  </div>
</footer>
        </div>
      </div>
    </div>
  );
};

export default Login;
