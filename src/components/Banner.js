import React from 'react';
import { Box, Typography } from '@mui/material';

const Banner = () => {
  return (
    <Box
      sx={{
        textAlign: 'center',
        padding: '20px',
        backgroundColor: '#4caf50',
        color: '#fff',
      }}
    >
      <Typography variant="h3" fontWeight="bold">
        Spotify Song Downloader
      </Typography>
      <Typography variant="h6">
        Fetch and Download Your Favorite Spotify Songs with Ease
      </Typography>
      <img
        src="https://undraw.co/api/illustrations/download/undraw_music.svg"
        alt="Music Illustration"
        style={{
          marginTop: '20px',
          width: '40%',
          borderRadius: '10px',
        }}
      />
    </Box>
  );
};

export default Banner;
