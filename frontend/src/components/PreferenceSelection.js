// src/components/PreferenceSelection.js
import React, { useState } from 'react';
import '../styles/PreferenceSelection.css';

const PreferenceSelection = ({ onComplete }) => {
  const [preference, setPreference] = useState('');
  const [tags, setTags] = useState([]);

  const handlePreferenceChange = (event) => {
    setPreference(event.target.value);
  };

  const handleTagChange = (tag) => {
    setTags((prevTags) =>
      prevTags.includes(tag) ? prevTags.filter((t) => t !== tag) : [...prevTags, tag]
    );
  };

  const handleComplete = () => {
    onComplete({ preference, tags });
  };

  return (
    <div className="preference-selection">
      <h2>Select Your Preference</h2>
      <div>
        <label>
          <input
            type="radio"
            name="preference"
            value="straight"
            onChange={handlePreferenceChange}
          />
          Straight
        </label>
        <label>
          <input
            type="radio"
            name="preference"
            value="gay"
            onChange={handlePreferenceChange}
          />
          Gay
        </label>
        <label>
          <input
            type="radio"
            name="preference"
            value="trans"
            onChange={handlePreferenceChange}
          />
          Trans
        </label>
      </div>

      <h3>Select Tags</h3>
      <div className="tags">
        {['Romance', 'Action', 'Comedy', 'Drama'].map((tag) => (
          <label key={tag}>
            <input
              type="checkbox"
              value={tag}
              onChange={() => handleTagChange(tag)}
            />
            {tag}
          </label>
        ))}
      </div>

      <button onClick={handleComplete}>Complete</button>
    </div>
  );
};

export default PreferenceSelection;
