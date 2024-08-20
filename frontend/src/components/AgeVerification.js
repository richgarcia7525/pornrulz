import React, { useState } from 'react';
import './AgeVerification.css';


const AgeVerification = ({ onVerified }) => {
  const [isVisible, setIsVisible] = useState(true);

  const handleVerify = () => {
    setIsVisible(false);
    onVerified();
  };

  return (
    isVisible && (
      <div className="age-verification-overlay">
        <div className="age-verification-content">
          <h1>ATTENTION! This site contains adult content!</h1>
          <p>
            By entering this website, I acknowledge that I am 18 years old or older and agree to the Terms of Service, which are available 
            <a href="/terms" target="_blank">HERE</a>.
          </p>
          <div className="age-options">
            <button onClick={handleVerify}>Straight ♀ : ENTER</button>
            <button onClick={handleVerify}>Gay 🌈 : ENTER</button>
            <button onClick={handleVerify}>Trans ⚧ : ENTER</button>
          </div>
          <p>If you have children, use parental controls. <a href="/parental-controls" target="_blank">Read here</a>.</p>
        </div>
      </div>
    )
  );
};

export default AgeVerification;





