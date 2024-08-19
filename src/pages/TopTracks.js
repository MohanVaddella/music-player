import React, { useState, useEffect } from 'react';
import SongList from '../components/SongList';
import Player from '../components/Player';

const TopTracks = () => {
  const [songs, setSongs] = useState([]);
  const [currentSong, setCurrentSong] = useState(null);
  const [currentSongIndex, setCurrentSongIndex] = useState(0);

  useEffect(() => {
    fetch('https://cms.samespace.com/items/songs')
      .then(response => response.json())
      .then(async (data) => {
        // Filter to get only top tracks
        const topTracks = data.data.filter(song => song.top_track);

        // Fetch duration for each song
        const songsWithDuration = await Promise.all(topTracks.map(async song => {
          const duration = await getSongDuration(song.url);
          return { ...song, duration };
        }));

        setSongs(songsWithDuration);

        if (songsWithDuration.length > 0) {
          setCurrentSong(songsWithDuration[currentSongIndex]);  // Set the initial current song
        }
      })
      .catch(error => console.error('Error fetching songs:', error));
  }, [currentSongIndex]);

  const getSongDuration = (url) => {
    return new Promise((resolve) => {
      const audio = new Audio(url);
      audio.addEventListener('loadedmetadata', () => {
        const minutes = Math.floor(audio.duration / 60);
        const seconds = Math.floor(audio.duration % 60);
        resolve(`${minutes}:${seconds < 10 ? '0' : ''}${seconds}`);
      });
    });
  };

  return (
    <div className="player-songlist-container">
      <SongList songs={songs} onSongSelect={setCurrentSong} />
      <Player songs={songs} currentSong={currentSong} currentSongIndex={currentSongIndex} setCurrentSongIndex={setCurrentSongIndex}  />
    </div>
  );
};

export default TopTracks;
