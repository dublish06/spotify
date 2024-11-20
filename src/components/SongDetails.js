import React from 'react';
import { Card, CardContent, Typography, Button } from '@mui/material';

const SongDetails = ({ song, onDownload }) => {
  return (
    <Card
      sx={{
        width: '50%',
        margin: 'auto',
        mt: 4,
        backgroundColor: '#ff9800',
        color: '#ffffff',
        '&:hover': {
          boxShadow: '0 6px 12px rgba(0, 0, 0, 0.2)',
        },
      }}
    >
      <CardContent>
        <Typography variant="h5" fontWeight="bold">
          {song.title}
        </Typography>
        <Typography variant="subtitle1">Artist: {song.artist}</Typography>
        <Button
          variant="contained"
          sx={{
            mt: 2,
            backgroundColor: '#ffffff',
            color: '#ff9800',
            '&:hover': {
              backgroundColor: '#ffcc80',
            },
          }}
          onClick={onDownload}
        >
          Download Song
        </Button>
      </CardContent>
    </Card>
  );
};

export default SongDetails;
