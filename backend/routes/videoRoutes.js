// routes/videoRoutes.js
const express = require('express');
const { downloadVideo, searchVideos, getModelVideos } = require('../services/videoService');

const router = express.Router();

// Route to download a video
router.get('/download', async (req, res) => {
  try {
    const videoUrl = req.query.url;
    await downloadVideo(videoUrl, "./downloads/video.mp4");
    res.status(200).json({ message: 'Video downloaded successfully' });
  } catch (error) {
    res.status(500).json({ error: 'Failed to download video' });
  }
});

// Route to search videos
router.get('/search', async (req, res) => {
  try {
    const query = req.query.q;
    const results = await searchVideos(query);
    res.status(200).json(results);
  } catch (error) {
    res.status(500).json({ error: 'Failed to search videos' });
  }
});

// Route to get videos by model/user
router.get('/model-videos', async (req, res) => {
  try {
    const userUrl = req.query.url;
    const results = await getModelVideos(userUrl);
    res.status(200).json(results);
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch model videos' });
  }
});

module.exports = router;
