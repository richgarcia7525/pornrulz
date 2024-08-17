import React, { useEffect, useState } from 'react';
import axios from 'axios';
import '../styles/Home.css';

const Home = () => {
  const [featuredVideos, setFeaturedVideos] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchVideos = async () => {
      try {
        const response = await axios.get(`${process.env.REACT_APP_RAPIDAPI_HOST}/producers`, {
          headers: {
            'X-RapidAPI-Key': process.env.REACT_APP_RAPIDAPI_KEY,
          },
          params: {
            offset: 0,
            includePorn: true,
          },
        });
        console.log('API Response:', response.data);

        // Log each item's full details
        response.data.content.forEach((item, index) => {
          console.log(`Item ${index}:`, item);
          if (item.pornEntry) {
            console.log(`Video URL for Item ${index}:`, item.pornEntry.sourceUrl);
          } else {
            console.log(`No video entry for Item ${index}`);
          }
        });

        setFeaturedVideos(response.data.content || []);
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
    <div>
      <h1>Straight Videos</h1>

      <section>
        <h2>Featured Videos</h2>
        <div className="video-list">
          {featuredVideos.map((video, index) => (
            <div key={index} className="video-item">
              <h3>{video.name}</h3>
              {video.pornEntry && video.pornEntry.sourceUrl ? (
                <video width="300" controls>
                  <source src={video.pornEntry.sourceUrl} type="video/mp4" />
                  Your browser does not support the video tag.
                </video>
              ) : (
                <p>No video available</p>
              )}
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Home;







