const axios = require('axios');
require('dotenv').config();

const RAPIDAPI_KEY = process.env.RAPIDAPI_KEY;
const RAPIDAPI_HOST = process.env.RAPIDAPI_HOST;

// Function to fetch data from RapidAPI
async function fetchFromRapidAPI(endpoint, params = {}) {
  try {
    const response = await axios.get(`${RAPIDAPI_HOST}/${endpoint}`, {
      headers: {
        'x-rapidapi-key': RAPIDAPI_KEY,
        'x-rapidapi-host': RAPIDAPI_HOST,
      },
      params,
    });
    return response.data;
  } catch (error) {
    console.error('Error fetching data from RapidAPI:', error);
    throw new Error('Failed to fetch data from RapidAPI');
  }
}

module.exports = {
  fetchFromRapidAPI,
};

