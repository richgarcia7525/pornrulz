import React, { useEffect, useState } from 'react';
import axios from 'axios';

const VideoList = () => {
  const [videos, setVideos] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchVideos = async () => {
      try {
        const response = await axios.get(
          `https://${process.env.REACT_APP_RAPIDAPI_HOST}/search`, 
          {
            params: { q: 'blowjob gay', advanced: 'true' },
            headers: {
              'x-rapidapi-host': process.env.REACT_APP_RAPIDAPI_HOST,
              'x-rapidapi-key': process.env.REACT_APP_RAPIDAPI_KEY,
            }
          }
        );
        setVideos(response.data.content); // Adjust based on API response structure
      } catch (err) {
        console.error("Error fetching videos:", err);
        setError("Failed to load videos.");
      }
    };

    fetchVideos();
  }, []);

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <div>
      <h1>Video List</h1>
      <ul>
        {videos.map((video, index) => (
          <li key={index}>{video.name}</li> // Adjust to match the actual data structure
        ))}
      </ul>
    </div>
  );
};

export default VideoList;

