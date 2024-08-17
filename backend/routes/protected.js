// routes/protected.js
const express = require('express');
const authMiddleware = require('../middleware/authMiddleware');
const router = express.Router();

// @route   GET /api/protected/profile
// @desc    Get user profile (protected route)
// @access  Private
router.get('/profile', authMiddleware, (req, res) => {
  res.json({ msg: `Welcome, user with ID: ${req.user.id}` });
});

module.exports = router;


