import React from 'react';
import './VideoCarousel.css';

const VideoCarousel = () => {
  const dummyVideos = [
    { title: 'Featured Video 1', url: 'https://dummyvideo.com/1' },
    { title: 'Featured Video 2', url: 'https://dummyvideo.com/2' },
    { title: 'Featured Video 3', url: 'https://dummyvideo.com/3' }
  ];

  return (
    <div className="video-carousel">
      {dummyVideos.map((video, index) => (
        <div key={index} className="video-item">
          <video controls src={video.url}></video>
          <p>{video.title}</p>
        </div>
      ))}
      <div className="view-more">
        <a href="/">View More</a>
      </div>
    </div>
  );
};

export default VideoCarousel;
