import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './Home.css';

const Home = () => {
  const [videos, setVideos] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchVideos = async () => {
      try {
        const response = await axios.get(`https://${process.env.REACT_APP_RAPIDAPI_HOST}/search`, {
          headers: {
            'X-RapidAPI-Key': process.env.REACT_APP_RAPIDAPI_KEY,
            'X-RapidAPI-Host': process.env.REACT_APP_RAPIDAPI_HOST,
          },
          params: {
            q: 'blowjob gay',
            advanced: true,
          },
        });
        setVideos(response.data.content || []);
      } catch (err) {
        console.error('Error fetching videos:', err);
        setError('Failed to load videos.');
      }
    };

    fetchVideos();
  }, []);

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <div className="home-container">
      <div className="parallax-section">
        {['pic1.jpg', 'pic2.jpg', 'pic3.jpg'].map((image, index) => (
          <div
            className="parallax-item"
            key={index}
            style={{ backgroundImage: `url('${process.env.PUBLIC_URL}/images/${image}')` }}
          >
            <div className="overlay-text">Featured {index + 1}</div>
          </div>
        ))}
      </div>

      <div className="video-list">
        {videos.map((video, index) => (
          <div key={index} className="glassmorphic-card video-item">
            <h2>{video.name}</h2>
            <a href={video.sourceUrl} target="_blank" rel="noopener noreferrer">Watch Video</a>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Home;





