import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import LoginForm from './components/LoginForm';
import Register from './components/Register';
import UploadVideo from './components/UploadVideo';
import VideoList from './components/VideoList';
import AgeVerification from './components/AgeVerification'; // Import the AgeVerification component

function App() {
  const [isVerified, setIsVerified] = useState(false); // State to track age verification

  const handleVerification = () => {
    setIsVerified(true);
  };

  return (
    <Router>
      {!isVerified && <AgeVerification onVerified={handleVerification} />}
      {isVerified && (
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<LoginForm />} />
          <Route path="/register" element={<Register />} />
          <Route path="/upload" element={<UploadVideo />} />
          <Route path="/videos" element={<VideoList />} />
        </Routes>
      )}
    </Router>
  );
}

export default App;




