import React, { useState } from 'react';
import { TextField, Button, Box, Typography } from '@mui/material';

const InputForm = ({ onSubmit }) => {
  const [spotifyUrl, setSpotifyUrl] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(spotifyUrl);
  };

  return (
    <Box
      component="form"
      onSubmit={handleSubmit}
      sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        gap: 2,
        width: '50%',
        margin: 'auto',
        mt: 6,
        padding: 4,
        backgroundColor: '#ffffff',
        boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
        borderRadius: 2,
      }}
    >
      <Typography variant="h5" color="primary">
        Enter Spotify Song URL
      </Typography>
      <TextField
        fullWidth
        label="Spotify URL"
        variant="outlined"
        value={spotifyUrl}
        onChange={(e) => setSpotifyUrl(e.target.value)}
        required
      />
      <Button
        type="submit"
        variant="contained"
        sx={{
          backgroundColor: '#4caf50',
          color: '#fff',
          '&:hover': {
            backgroundColor: '#388e3c',
          },
        }}
      >
        Fetch Song
      </Button>
    </Box>
  );
};

export default InputForm;
