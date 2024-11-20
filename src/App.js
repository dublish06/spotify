import React, { useState } from 'react';
import Banner from './components/Banner';
import InputForm from './components/InputForm';
import SongDetails from './components/SongDetails';
import Loader from './components/Loader';

const App = () => {
  const [loading, setLoading] = useState(false);
  const [song, setSong] = useState(null);

  const fetchSong = async (spotifyUrl) => {
    setLoading(true);
    // Replace with your API integration logic
    setTimeout(() => {
      setSong({ title: 'Song Title', artist: 'Artist Name' });
      setLoading(false);
    }, 2000);
  };

  const downloadSong = () => {
    alert('Downloading Song...');
  };

  return (
    <div>
      <Banner />
      {loading ? (
        <Loader />
      ) : song ? (
        <SongDetails song={song} onDownload={downloadSong} />
      ) : (
        <InputForm onSubmit={fetchSong} />
      )}
    </div>
  );
};

export default App;
