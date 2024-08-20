import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './Home';
import LoginForm from './LoginForm';
import Register from './Register';
import UploadVideo from './UploadVideo';

import VideoList from './VideoList';
import AgeVerification from './AgeVerification'; 
import Header from './Header';
import Sidebar from './Sidebar';
import VideoCarousel from './VideoCarousel';

function App() {
  const [isVerified, setIsVerified] = useState(false);

  const handleVerification = () => {
    setIsVerified(true);
  };

  return (
    <Router>
      {!isVerified && <AgeVerification onVerified={handleVerification} />}
      {isVerified && (
        <>
          <Header />
          <div style={{ display: 'flex' }}>
            <Sidebar />
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/login" element={<LoginForm />} />
              <Route path="/register" element={<Register />} />
              <Route path="/upload" element={<UploadVideo />} />
              <Route path="/videos" element={<VideoList />} />
            </Routes>
          </div>
          <VideoCarousel />
        </>
      )}
    </Router>
  );
}

export default App;







