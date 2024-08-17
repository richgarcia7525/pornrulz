const { fetchFromRapidAPI } = require('./apiService');

// Example: Function to search videos using RapidAPI
async function searchVideos(query, params = {}) {
  try {
    const searchParams = { ...params, q: query };
    const results = await fetchFromRapidAPI('producers', searchParams);
    return results.content; // Assuming 'content' holds the list of videos
  } catch (error) {
    console.error('Error searching videos:', error);
    throw new Error('Failed to search videos');
  }
}

module.exports = {
  searchVideos,
};


