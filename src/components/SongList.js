import React, { useState, useEffect } from 'react';
import '../styles/SongList.css';
import '../styles/Global.css';
import Search from './Search';

const SongList = ({ songs, onSongSelect }) => {
  const [filteredSongs, setFilteredSongs] = useState(songs);
  const [currentSong, setCurrentSong] = useState(null);


  useEffect(() => {
    // Update filteredSongs whenever the songs prop changes
    setFilteredSongs(songs);
  }, [songs]);

  const handleSearch = (searchTerm) => {
    const lowercasedTerm = searchTerm.toLowerCase();
    const filtered = songs.filter(
      (song) =>
        song.name.toLowerCase().includes(lowercasedTerm) ||
        song.artist.toLowerCase().includes(lowercasedTerm)
    );
    setFilteredSongs(filtered);
  };

  const handleSongClick = (song) => {
    onSongSelect(song);
    setCurrentSong(song);
    
  };
  

  return (
    <div className="song-list-container">
      <Search onSearch={handleSearch} />
      <ul className="song-list">
        {filteredSongs.map(song => (
          <li 
            key={song.id} 
            className={`song-item ${currentSong?.id === song.id ? 'active' : ''}`}
            onClick={() => handleSongClick(song)}
          >
            <img src={`https://cms.samespace.com/assets/${song.cover}`} alt={song.name} className="album-cover" />
            <div className="song-info">
              <h4 className="song-name">{song.name}</h4>
              <p className="song-artist">{song.artist}</p>
            </div>
            <p className="song-duration">{song.duration}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default SongList;