const express = require('express');
const { fetchFromRapidAPI, fetchFromXNXX } = require('../services/apiService');
const router = express.Router();

// @route   GET /api/videos
// @desc    Fetch videos (example with XNXX) with filtering
// @access  Public
router.get('/', async (req, res) => {
  try {
    // Extract query parameters for filtering
    const search = req.query.search || '';
    const category = req.query.category || '';
    const page = req.query.page || 1;
    const length = req.query.length || '';  // Add length filter
    const rating = req.query.rating || '';  // Add rating filter
    const views = req.query.views || '';    // Add views filter

    // Pass these parameters to the API request
    const videos = await fetchFromXNXX('?data=xnxx.Videos.searchVideos', {
      search,
      category,
      page,
      length,  // Send length filter to the API
      rating,  // Send rating filter to the API
      views    // Send views filter to the API
    });

    res.json(videos);
  } catch (err) {
    console.error(err.message);
    res.status(500).json({ msg: 'Server Error' });
  }
});

// @route   GET /api/videos/:id
// @desc    Fetch video by ID (example with RapidAPI)
// @access  Public
router.get('/:id', async (req, res) => {
  try {
    const video = await fetchFromRapidAPI(`https://yourapi.com/videos/${req.params.id}`);
    res.json(video);
  } catch (err) {
    console.error(err.message);
    res.status(500).json({ msg: 'Server Error' });
  }
});

module.exports = router;














