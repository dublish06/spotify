import axios from 'axios';


const API_URL = 'https://spotify-music-downloader.p.rapidapi.com/'; // Example
const API_KEY = 'e4ffe98539msh6ea6fcc22f7fdf4p18df44jsn9d3e7796b6cb';

export const fetchSongDetails = async (spotifyUrl) => {
  const options = {
    method: 'GET',
    url: API_URL,
    params: { url: spotifyUrl },
    headers: {
      'X-RapidAPI-Key': e4ffe98539msh6ea6fcc22f7fdf4p18df44jsn9d3e7796b6cb,
      'X-RapidAPI-Host': 'spotify-downloader9.p.rapidapi.com',
    },
  };
  try {
    const response = await axios.request(options);
    return response.data;
  } catch (error) {
    console.error('Error fetching song details:', error);
    throw error;
  }
};
