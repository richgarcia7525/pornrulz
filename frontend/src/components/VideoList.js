import React, { useEffect, useState } from 'react';
import axios from 'axios';

const VideoList = () => {
  const [videos, setVideos] = useState([]);

  useEffect(() => {
    const fetchVideos = async () => {
      try {
        const response = await axios.get(`${process.env.REACT_APP_RAPIDAPI_HOST}/producers`, {
          headers: {
            'X-RapidAPI-Key': process.env.REACT_APP_RAPIDAPI_KEY,
            'X-RapidAPI-Host': process.env.REACT_APP_RAPIDAPI_HOST,
          },
          params: {
            count: 10,
            offset: 0,
            sort: 'date',
            includePorn: true,
          },
        });

        setVideos(response.data.content);
      } catch (error) {
        console.error('Error fetching videos:', error);
      }
    };

    fetchVideos();
  }, []);

  return (
    <div>
      <h1>Video List</h1>
      <div className="video-list">
        {videos.map((producer, index) => (
          <div key={index} className="video-item">
            <h3>{producer.pornEntry.name}</h3>
            <p>Produced by: {producer.name}</p>
            <a href={producer.pornEntry.sourceUrl} target="_blank" rel="noopener noreferrer">Watch Video</a>
          </div>
        ))}
      </div>
    </div>
  );
};

export default VideoList;

