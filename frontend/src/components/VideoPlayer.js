import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';

const VideoPlayer = () => {
  const { id } = useParams();
  const [video, setVideo] = useState(null);
  const [error, setError] = useState('');

  useEffect(() => {
    const fetchVideo = async () => {
      try {
        const res = await axios.get(`/api/videos/${id}`);
        setVideo(res.data);
        setError('');
      } catch (err) {
        console.error('Error fetching video:', err);
        setError('Error fetching video. Please try again later.');
      }
    };

    fetchVideo();
  }, [id]);

  return (
    <div>
      {error && <p style={{ color: 'red' }}>{error}</p>}
      {video ? (
        <div>
          <h2>{video.title}</h2>
          <video width="600" controls>
            <source src={video.videoUrl} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
          <p>{video.description}</p>
        </div>
      ) : (
        <p>Loading video...</p>
      )}
    </div>
  );
};

export default VideoPlayer;


