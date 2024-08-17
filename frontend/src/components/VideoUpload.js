import React, { useState } from 'react';

const VideoUpload = () => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [videoFile, setVideoFile] = useState(null);
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');

  const handleFileChange = (event) => {
    setVideoFile(event.target.files[0]);
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    if (!videoFile) {
      setError('Please select a video file to upload.');
      return;
    }

    const token = localStorage.getItem('authToken');

    const formData = new FormData();
    formData.append('video', videoFile);
    formData.append('title', title);
    formData.append('description', description);

    fetch('/api/videos', {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${token}`
      },
      body: formData
    })
    .then(response => {
      if (response.ok) {
        return response.json();
      }
      throw new Error('Failed to upload video');
    })
    .then(data => {
      console.log('Video uploaded successfully:', data);
      setSuccess('Video uploaded successfully!');
      setError('');
      // Optionally reset the form
      setTitle('');
      setDescription('');
      setVideoFile(null);
    })
    .catch(error => {
      console.error('Error:', error);
      setError('There was an issue uploading the video. Please try again.');
    });
  };

  return (
    <div>
      <h2>Upload Video</h2>
      {error && <p style={{ color: 'red' }}>{error}</p>}
      {success && <p style={{ color: 'green' }}>{success}</p>}
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="title">Title:</label>
          <input
            type="text"
            id="title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            required
            placeholder="Enter video title"
          />
        </div>
        <div>
          <label htmlFor="description">Description:</label>
          <input
            type="text"
            id="description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            required
            placeholder="Enter video description"
          />
        </div>
        <div>
          <label htmlFor="video">Video:</label>
          <input
            type="file"
            id="video"
            accept="video/*"
            onChange={handleFileChange}
            required
          />
        </div>
        <button type="submit">Upload Video</button>
      </form>
    </div>
  );
};

export default VideoUpload;





