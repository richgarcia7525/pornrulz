import React, { useEffect, useState } from 'react';
import axios from 'axios';

const Home = () => {
  const [videos, setVideos] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    const fetchVideos = async () => {
      try {
        const res = await axios.get('/api/videos');
        setVideos(res.data);
      } catch (err) {
        console.error('Error fetching videos:', err);
      }
    };

    fetchVideos();
  }, []);

  const filteredVideos = videos.filter(video =>
    video.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div>
      <h1>Top Videos</h1>
      
      <label htmlFor="video-search" style={{ display: 'none' }}>Search videos</label>
      <input
        id="video-search"
        type="text"
        placeholder="Search videos..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        aria-label="Search videos"
      />
      
      <div className="video-list" style={{ display: 'flex', flexWrap: 'wrap', gap: '16px' }}>
        {filteredVideos.map(video => (
          <div key={video._id} className="video-item" style={{ width: '300px' }}>
            <h3>{video.title}</h3>
            <video width="300" controls>
              <source src={video.videoUrl} type="video/mp4" />
              Your browser does not support the video tag.
            </video>
            <p>{video.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Home;


