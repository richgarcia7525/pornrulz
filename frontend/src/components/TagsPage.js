import React, { useEffect, useState } from 'react';
import axios from 'axios';

const TagsPage = () => {
  const [tags, setTags] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchTags = async () => {
      try {
        const res = await axios.get(`${process.env.REACT_APP_RAPIDAPI_HOST}/producers/tags`, {
          headers: {
            'X-RapidAPI-Key': process.env.REACT_APP_RAPIDAPI_KEY,
            'X-RapidAPI-Host': process.env.REACT_APP_RAPIDAPI_HOST,
          },
        });

        const sortedTags = (res.data.tags || []).sort((a, b) => a.localeCompare(b));
        setTags(sortedTags);
      } catch (err) {
        console.error('Error fetching tags:', err);
        setError('Failed to load tags.');
      }
    };

    fetchTags();
  }, []);

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <div>
      <h1>Tags</h1>
      <ul>
        {tags.map((tag, index) => (
          <li key={index}>{tag}</li>
        ))}
      </ul>
    </div>
  );
};

export default TagsPage;

